/* ============================================================
   THE SWITCHBOARD COMPANY — chat proxy (Cloudflare Worker)

   Sits between the site's chat widget and the Claude API so the
   API key never ships to the browser. Deploy with Wrangler or by
   pasting into the Cloudflare dashboard — see server/README.md.

   Required secret:  ANTHROPIC_API_KEY
   Uses raw fetch (no SDK) so the worker stays a single
   dependency-free file that deploys from the dashboard.
   ============================================================ */

const ALLOWED_ORIGINS = [
  "https://switchboardcompany.com",
  "https://www.switchboardcompany.com",
  "http://localhost:8777", // local preview
];

const MODEL = "claude-opus-4-8"; // swap to "claude-haiku-4-5" to cut cost
const MAX_TOKENS = 512;
const MAX_MESSAGES = 12;
const MAX_CHARS_PER_MESSAGE = 600;

const SYSTEM_PROMPT = `You are the AI assistant on switchboardcompany.com, the site of The Switchboard Company — and you are also a live demo of the AI chat bubble the company builds into client websites.

About The Switchboard Company:
- Founder: Drew Golden, a Division I student-athlete. Call or text: (781) 201-1759. Replies usually same day.
- What we do: build modern, custom websites for local small businesses that work as lead-generating machines, powered by three services:
  1. Automated lead capture — instant text-back for missed calls, instant lead notifications, one centralized inbox.
  2. Reputation management — every customer gets the same friendly review request with a one-tap Google review link right after their visit, plus a private "how did we do?" feedback channel available to everyone so owners catch issues early. We never screen or filter who gets asked.
  3. Search visibility — on-page SEO, high-intent local keyword targeting, and fast hand-coded sites so businesses show up naturally when customers search.
- Website pricing (one-time): Starter $700–$1,000 (1–3 pages), Growth $1,000–$1,500 (4–6 pages, lead capture, basic SEO — most popular), Complete $2,000+ (full site, Stripe/Vagaro/booking integrations). Monthly maintenance: $125/mo (hosting, updates, edits, backups).
- Process: discovery call → custom design & build with a live preview → launch, usually about two weeks first-call-to-live.
- The lead-generation services are rolling out to a small first group of local businesses now (early access).
- Live work: whitneygordons.com (fine jewelry), outsideincohasset.com (outdoor boutique).

How to behave:
- Be warm, plain-spoken, and brief — two to four sentences for most answers. You're talking to busy small-business owners.
- Answer only from the information above. If asked something you don't know (specific availability, custom quotes, technical edge cases), say so and point them to Drew at (781) 201-1759 or the contact page.
- Never invent prices, discounts, or commitments. Never disparage competitors.
- If someone seems ready to start, encourage them to call/text Drew or use the "Start a project" form.
- Respond only with your final answer — no reasoning or meta-commentary.`;

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== "POST") {
      return json({ error: "method not allowed" }, 405, origin);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "invalid JSON" }, 400, origin);
    }

    const raw = Array.isArray(payload && payload.messages) ? payload.messages : null;
    if (!raw || raw.length === 0) {
      return json({ error: "messages required" }, 400, origin);
    }

    // Sanitize: only role/content strings, capped count and length.
    const messages = raw
      .slice(-MAX_MESSAGES)
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim().length > 0
      )
      .map((m) => ({
        role: m.role,
        content: m.content.slice(0, MAX_CHARS_PER_MESSAGE),
      }));

    if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
      return json({ error: "last message must be from the user" }, 400, origin);
    }

    const apiResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages,
      }),
    });

    if (!apiResponse.ok) {
      return json({ error: "upstream error" }, 502, origin);
    }

    const data = await apiResponse.json();

    if (data.stop_reason === "refusal") {
      return json(
        { reply: "I can't help with that one — but for anything about our services, ask away!" },
        200,
        origin
      );
    }

    const reply = (data.content || [])
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    if (!reply) {
      return json({ error: "empty reply" }, 502, origin);
    }

    return json({ reply }, 200, origin);
  },
};
