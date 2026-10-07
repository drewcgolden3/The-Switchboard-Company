/* =============================================================================
   THE SWITCHBOARD COMPANY — branded AI chat widget

   Talks to the Switchboard OS backend (/api/chat for the receptionist,
   /api/track for page views) as client "switchboard-company" — the same AI
   receptionist we sell, running on our own site. Styled to match: ink header,
   brand orange, Bricolage Grotesque + Inter, the S mark. Adapted from the
   Bayshore widget.

   The knowledge base and instructions live in Switchboard OS (Supabase
   clients.knowledge_base / receptionist_instructions), not in this file.
   ============================================================================ */
(function () {
  "use strict";

  var CONFIG = {
    clientSlug: "switchboard-company",                // Switchboard OS client
    apiBase:    "https://switchboard-os.vercel.app",  // Switchboard backend
    title:      "The Switchboard Company",            // chat header
    subtitle:   "Ask anything · we reply instantly",
    greeting:   "Hi! Questions about the free month or Switchboard OS?",
    opener:     "Ask me what's included, how the build works, or what Switchboard OS does for a club.",
  };

  var slug = CONFIG.clientSlug, apiBase = CONFIG.apiBase;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Site palette — kept in sync with the pages' :root tokens by hand. */
  var DARK = "#131417", INK = "#131417", CREAM = "#FAF8F4", CARD = "#FFFFFF";
  var BRONZE = "#C9551C", BRONZE_LT = "#EB6D2D";
  var LINE = "rgba(19,20,23,0.12)";
  var GRAD = "linear-gradient(135deg,#F07B3F,#EB6D2D)";
  var FONT = "'Inter', system-ui, -apple-system, sans-serif";
  var DISPLAY = "'Bricolage Grotesque', 'Inter', sans-serif";

  var CHAT_SVG = function (stroke) {
    return '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="' + stroke +
      '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.6A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"/></svg>';
  };
  /* The Switchboard S, as a single-weight trace so it holds up at 20px. */
  var MARK_SVG =
    '<svg width="22" height="22" viewBox="0 0 362 333" fill="none" stroke="' + BRONZE_LT + '" stroke-width="34" stroke-linecap="round" aria-hidden="true">' +
    '<path d="M298 40H118a85 85 0 0 0 0 170h122"/><path d="M120 125h130a84 84 0 0 1 0 168H65"/></svg>';

  function css(el, s) { for (var k in s) el.style[k] = s[k]; }
  function isNarrow() { return window.matchMedia("(max-width: 760px)").matches; }
  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  /* ---- page-view tracking — fire-and-forget, never blocks the page ----
     sessionId lets the dashboard count visits instead of page loads. Kept in
     sessionStorage on purpose: one tab, no cookie, no cross-site value, and
     gone the moment the tab closes, so it can't follow anyone between visits.
     Browsers that block storage just send nothing. */
  function sessionId() {
    try {
      var key = "sb_sid", id = sessionStorage.getItem(key);
      if (!id) {
        id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID()
           : String(Date.now()) + Math.random().toString(36).slice(2);
        sessionStorage.setItem(key, id);
      }
      return id;
    } catch (e) { return null; }
  }

  try {
    fetch(apiBase + "/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign(
        { clientSlug: slug, path: location.pathname, referrer: document.referrer || null,
          sessionId: sessionId() },
        {}
      )),
      keepalive: true,
    }).catch(function () {});
  } catch (e) {}

  var messages = [];
  var open = false;

  /* ---- launcher ---- */
  var ring = document.createElement("span");
  css(ring, { position: "fixed", right: "22px", bottom: "22px", width: "60px", height: "60px",
    borderRadius: "50%", background: BRONZE_LT, opacity: ".5", zIndex: "2147482999", pointerEvents: "none" });
  if (!reduce && ring.animate) {
    ring.animate([{ transform: "scale(1)", opacity: .45 }, { transform: "scale(1.8)", opacity: 0 }],
      { duration: 2200, iterations: Infinity, easing: "ease-out" });
  } else { ring.style.display = "none"; }

  var launcher = document.createElement("button");
  launcher.type = "button";
  launcher.setAttribute("aria-label", "Chat with The Switchboard Company");
  launcher.setAttribute("aria-expanded", "false");
  launcher.innerHTML = CHAT_SVG("#FFFFFF");
  css(launcher, { position: "fixed", right: "22px", bottom: "22px", width: "60px", height: "60px",
    borderRadius: "50%", border: "none", cursor: "pointer", background: GRAD,
    boxShadow: "0 12px 28px -8px rgba(26,29,33,.55)", zIndex: "2147483000",
    display: "grid", placeItems: "center", transition: "transform .2s ease" });
  launcher.onmouseenter = function () { launcher.style.transform = "scale(1.06)"; };
  launcher.onmouseleave = function () { launcher.style.transform = "scale(1)"; };

  /* ---- proactive greeting bubble ---- */
  var promo = document.createElement("div");
  promo.setAttribute("role", "status");
  css(promo, { position: "fixed", right: "22px", bottom: "94px", maxWidth: "258px",
    background: CARD, color: INK, fontFamily: FONT, fontSize: "15px", fontWeight: "500",
    lineHeight: "1.45", padding: "14px 16px", borderRadius: "16px 16px 4px 16px",
    boxShadow: "0 18px 44px -12px rgba(26,29,33,.42)", border: "1px solid " + LINE,
    zIndex: "2147483000", cursor: "pointer", opacity: "0", transform: "translateY(10px)",
    transition: "opacity .35s ease, transform .35s ease", display: "none" });
  var promoText = document.createElement("span");
  promoText.textContent = CONFIG.greeting;
  var promoX = document.createElement("button");
  promoX.type = "button"; promoX.setAttribute("aria-label", "Dismiss"); promoX.innerHTML = "&times;";
  css(promoX, { position: "absolute", top: "5px", right: "8px", border: "none", background: "transparent",
    color: "#797e86", fontSize: "18px", lineHeight: "1", cursor: "pointer", padding: "2px 4px" });
  promo.appendChild(promoX); promo.appendChild(promoText);
  if (isNarrow()) css(promo, { maxWidth: "216px", fontSize: "14px", padding: "12px 14px", bottom: "88px" });

  /* ---- panel ---- */
  var panel = document.createElement("div");
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Chat with The Switchboard Company");
  css(panel, { position: "fixed", right: "22px", bottom: "94px", width: "372px",
    maxWidth: "calc(100vw - 32px)", height: "524px", maxHeight: "calc(100vh - 130px)",
    background: CREAM, borderRadius: "16px", boxShadow: "0 26px 60px -16px rgba(26,29,33,.5)",
    display: "none", flexDirection: "column", overflow: "hidden", fontFamily: FONT,
    zIndex: "2147483001", border: "1px solid " + LINE });

  var head = document.createElement("div");
  css(head, { background: DARK, color: CREAM, padding: "15px 18px", display: "flex",
    alignItems: "center", gap: "12px" });
  head.innerHTML =
    '<span style="width:38px;height:38px;border-radius:50%;background:rgba(235,109,45,.16);display:grid;place-items:center;flex:none">' +
      MARK_SVG +
    '</span>' +
    '<span style="flex:1;min-width:0">' +
      '<span style="display:block;font-family:' + DISPLAY + ';font-weight:600;font-size:17px;letter-spacing:-.01em;line-height:1.15">' + esc(CONFIG.title) + '</span>' +
      '<span style="display:block;font-size:12px;color:rgba(244,241,237,.62);margin-top:2px">' + esc(CONFIG.subtitle) + '</span>' +
    '</span>' +
    '<button class="sbc-close" type="button" aria-label="Close chat" style="border:none;background:transparent;color:' + CREAM + ';font-size:22px;line-height:1;cursor:pointer;padding:2px 6px">&times;</button>';

  var bodyEl = document.createElement("div");
  css(bodyEl, { flex: "1", overflowY: "auto", padding: "16px", display: "flex",
    flexDirection: "column", gap: "10px", background: CREAM });

  var row = document.createElement("div");
  css(row, { display: "flex", gap: "8px", padding: "12px", borderTop: "1px solid " + LINE,
    background: CARD, alignItems: "center" });
  var input = document.createElement("input");
  input.type = "text"; input.placeholder = "Type your message…"; input.setAttribute("aria-label", "Message");
  css(input, { flex: "1", border: "1.5px solid " + LINE, borderRadius: "999px", padding: "10px 14px",
    fontSize: "14px", fontFamily: FONT, outline: "none", color: INK, background: CARD });
  input.onfocus = function () { input.style.borderColor = BRONZE; };
  input.onblur = function () { input.style.borderColor = LINE; };
  var send = document.createElement("button");
  send.type = "button"; send.setAttribute("aria-label", "Send message");
  send.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
  css(send, { border: "none", background: GRAD, borderRadius: "50%", width: "42px", height: "42px",
    flex: "none", cursor: "pointer", display: "grid", placeItems: "center" });

  row.appendChild(input); row.appendChild(send);
  panel.appendChild(head); panel.appendChild(bodyEl); panel.appendChild(row);

  function addMsg(role, text) {
    var b = document.createElement("div");
    b.textContent = text;
    css(b, { maxWidth: "84%", padding: "10px 13px", fontSize: "14px", lineHeight: "1.5",
      whiteSpace: "pre-wrap", borderRadius: "14px", fontFamily: FONT });
    if (role === "user") {
      css(b, { alignSelf: "flex-end", background: DARK, color: "#FFFFFF", borderBottomRightRadius: "4px" });
    } else {
      css(b, { alignSelf: "flex-start", background: CARD, color: INK,
        border: "1px solid " + LINE, borderBottomLeftRadius: "4px" });
    }
    bodyEl.appendChild(b); bodyEl.scrollTop = bodyEl.scrollHeight;
    return b;
  }

  /* Buttons the receptionist offers — start the free month, book a call, see
     pricing — whatever is set up in Switchboard. Each href is a signed tracking link that
     records the click and then forwards to the real sign-up page, so we can tell
     which option a visitor actually chose. The lead id rides along when we know
     who they are; without it the click still counts, just anonymously. */
  function addOptions(options) {
    var wrap = document.createElement("div");
    css(wrap, { display: "flex", flexDirection: "column", gap: "6px", maxWidth: "84%",
      alignSelf: "flex-start", margin: "2px 0 4px" });

    var lead = null;
    try { lead = localStorage.getItem("sb_lead_" + slug); } catch (e) {}

    function optionLink(o, small) {
      var a = document.createElement("a");
      a.href = o.url + (lead ? "?lead=" + encodeURIComponent(lead) : "");
      a.target = "_blank"; a.rel = "noopener";
      css(a, { display: "block", padding: small ? "8px 11px" : "10px 13px", borderRadius: "12px",
        border: "1.5px solid " + (small ? LINE : BRONZE), background: CARD, color: INK, fontFamily: FONT,
        fontSize: small ? "13px" : "14px", textDecoration: "none", lineHeight: "1.35",
        transition: reduce ? "none" : "background .15s ease, transform .15s ease" });
      a.onmouseenter = function () { a.style.background = "rgba(235,109,45,0.08)"; };
      a.onmouseleave = function () { a.style.background = CARD; };

      var name = document.createElement("span");
      css(name, { fontWeight: "600", fontFamily: DISPLAY });
      name.textContent = o.label;
      a.appendChild(name);

      if (o.priceNote) {
        var price = document.createElement("span");
        css(price, { color: BRONZE, fontWeight: "600", marginLeft: "6px" });
        price.textContent = o.priceNote;
        a.appendChild(price);
      }
      if (o.description) {
        var desc = document.createElement("span");
        css(desc, { display: "block", fontSize: "12px", opacity: ".72", marginTop: "2px" });
        desc.textContent = o.description;
        a.appendChild(desc);
      }
      return a;
    }

    options.forEach(function (o) {
      wrap.appendChild(optionLink(o, false));

      /* Alternative rates on the same option. A <details> rather than a custom
         toggle: it opens on click and on Enter, screen readers announce it as
         expandable, and it survives this script erroring after render.
         Collapsed so the main options stay readable, but the summary is a
         full-width line of text — nobody has to guess it's there. */
      if (o.variants && o.variants.length) {
        var det = document.createElement("details");
        css(det, { margin: "-2px 0 2px", fontFamily: FONT });

        var sum = document.createElement("summary");
        sum.textContent = "More options";
        css(sum, { cursor: "pointer", fontSize: "12.5px", color: BRONZE, fontWeight: "600",
          padding: "5px 4px", listStyle: "revert" });

        var inner = document.createElement("div");
        css(inner, { display: "flex", flexDirection: "column", gap: "5px",
          padding: "4px 0 2px 10px", borderLeft: "2px solid " + LINE, marginLeft: "3px" });
        o.variants.forEach(function (v) { inner.appendChild(optionLink(v, true)); });

        det.appendChild(sum); det.appendChild(inner);
        wrap.appendChild(det);
      }
    });

    bodyEl.appendChild(wrap); bodyEl.scrollTop = bodyEl.scrollHeight;
  }

  addMsg("assistant", CONFIG.greeting + "\n" + CONFIG.opener);

  /* ---- open / close ---- */
  function openPanel() {
    open = true; panel.style.display = "flex"; hidePromo(true);
    launcher.setAttribute("aria-expanded", "true");
    setTimeout(function () { input.focus(); }, 60);
  }
  function closePanel() {
    open = false; panel.style.display = "none";
    launcher.setAttribute("aria-expanded", "false");
  }
  launcher.addEventListener("click", function () { open ? closePanel() : openPanel(); });
  head.querySelector(".sbc-close").addEventListener("click", closePanel);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && open) closePanel(); });

  /* ---- send ---- */
  function doSend() {
    var t = input.value.trim(); if (!t) return;
    input.value = "";
    messages.push({ role: "user", content: t });
    addMsg("user", t);
    var typing = addMsg("assistant", "…");
    fetch(apiBase + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientSlug: slug, messages: messages }),
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        // The receptionist saved this visitor as a lead. Hold on to the id so a
        // later click through to signup is attributed to them — same key
        // any future form on this site can use.
        try {
          if (d.leadId) localStorage.setItem("sb_lead_" + slug, d.leadId);
        } catch (e) {}

        var reply = d.reply || d.error || "Sorry, something went wrong.";
        typing.textContent = reply;
        messages.push({ role: "assistant", content: reply });
        if (d.options && d.options.length) addOptions(d.options);
        bodyEl.scrollTop = bodyEl.scrollHeight;
      })
      .catch(function () {
        typing.textContent = "Sorry, I couldn't connect just now — please try again in a minute, or use the form on the contact page.";
      });
  }
  send.addEventListener("click", doSend);
  input.addEventListener("keydown", function (e) { if (e.key === "Enter") doSend(); });

  /* ---- proactive greeting ---- */
  function showPromo() {
    try { if (sessionStorage.getItem("sbc_chat_seen")) return; } catch (e) {}
    if (open) return;
    promo.style.display = "block";
    requestAnimationFrame(function () {
      promo.style.opacity = "1"; promo.style.transform = "translateY(0)";
    });
    // On a phone the bubble lands over the hero CTA, so it retires on its own
    // rather than camping on the button until dismissed by hand.
    if (isNarrow()) setTimeout(function () { if (!open) hidePromo(false); }, 6000);
  }
  function hidePromo(remember) {
    promo.style.opacity = "0"; promo.style.transform = "translateY(10px)";
    setTimeout(function () { promo.style.display = "none"; }, 350);
    if (remember) { try { sessionStorage.setItem("sbc_chat_seen", "1"); } catch (e) {} }
  }
  promoX.addEventListener("click", function (e) { e.stopPropagation(); hidePromo(true); });
  promo.addEventListener("click", openPanel);

  /* ---- mount ---- */
  document.body.appendChild(ring);
  document.body.appendChild(launcher);
  document.body.appendChild(promo);
  document.body.appendChild(panel);

  /* ---- phones: stay out of the hero ----
     The hero CTAs run nearly the full width of a small screen, so a launcher
     pinned bottom-right lands on top of them. Hold it back until the visitor
     has scrolled past the first screen, then bring it in for good. */
  if (isNarrow()) {
    var revealed = false;
    css(launcher, { opacity: "0", pointerEvents: "none", transition: "opacity .3s ease, transform .2s ease" });
    ring.style.display = "none";
    var revealLauncher = function () {
      if (revealed || window.scrollY < window.innerHeight * 0.75) return;
      revealed = true;
      css(launcher, { opacity: "1", pointerEvents: "auto" });
      if (!reduce) ring.style.display = "";
      window.removeEventListener("scroll", revealLauncher);
      setTimeout(showPromo, 600);
    };
    window.addEventListener("scroll", revealLauncher, { passive: true });
    revealLauncher();
  } else {
    setTimeout(showPromo, 1400);
  }
})();
