# Switchboard chat proxy

A single-file Cloudflare Worker that sits between the site's AI chat widget
(`assets/chat-widget.js`) and the Claude API. The Anthropic API key lives only
here, as a Worker secret — it is never exposed to the browser.

This is the one piece of backend the site needs. Ten-minute deploy:

## Deploy (Wrangler CLI)

```sh
cd server
npx wrangler login
npx wrangler secret put ANTHROPIC_API_KEY   # paste your key from console.anthropic.com
npx wrangler deploy
```

Wrangler prints the worker URL, e.g. `https://switchboard-chat.<account>.workers.dev`.

## Deploy (dashboard, no CLI)

1. Cloudflare dashboard → Workers & Pages → Create Worker.
2. Paste the contents of `chat-worker.js`, deploy.
3. Worker → Settings → Variables → add secret `ANTHROPIC_API_KEY`.

## Connect the widget

Open `assets/chat-widget.js` and set:

```js
var CHAT_ENDPOINT = "https://switchboard-chat.<account>.workers.dev";
```

Commit and push — done. Until the endpoint is set, the widget still renders but
answers with a "text Drew" fallback instead of AI replies (it never fakes one).

## Notes

- **Model** is set in `chat-worker.js` (`MODEL`). Default is `claude-opus-4-8`;
  switch to `claude-haiku-4-5` if you want the cheapest possible demo.
- **Allowed origins** are pinned to switchboardcompany.com (+ localhost:8777 for
  the local preview server). Add client domains here when the widget goes on
  client sites.
- The system prompt (business info, pricing, tone) lives server-side in
  `chat-worker.js` — update it there, not in the widget.
- The system prompt is sent with a prompt-cache breakpoint, so repeat chats
  reuse the cached prefix and cost less.
- Input is capped (12 messages, 600 chars each) to bound cost per conversation.
  If traffic ever warrants it, add Cloudflare rate limiting on the worker route.
- Multi-tenant later: this same worker can serve every client site — key the
  system prompt off the request origin and add each client's business info.
