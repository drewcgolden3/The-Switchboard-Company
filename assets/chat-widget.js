/* ============================================================
   THE SWITCHBOARD COMPANY — AI chat widget
   Self-contained: injects its own styles + DOM. No dependencies.

   Setup: deploy the worker in /server (see server/README.md),
   then set CHAT_ENDPOINT below to the worker URL.
   If the endpoint is unset or unreachable, the widget degrades
   gracefully to a "text Drew" message — it never fakes an answer.
   ============================================================ */
(function () {
  "use strict";

  // Set this to the deployed Cloudflare Worker URL, e.g.
  // "https://switchboard-chat.<account>.workers.dev/chat"
  var CHAT_ENDPOINT = "";

  var PHONE_DISPLAY = "(781) 201-1759";
  var PHONE_HREF = "tel:+17812011759";
  var GREETING =
    "Hi! I'm the Switchboard assistant — the same AI chat we can put on your website. " +
    "Ask me anything about our services, pricing, or how we work.";
  var OFFLINE_MSG =
    "I can't connect right now — but a real person can. Call or text Drew at " +
    PHONE_DISPLAY + " and you'll hear back fast, usually the same day.";

  var MAX_TURNS = 12; // messages kept in the conversation sent to the server

  var css = [
    ".sbc-launch{position:fixed;right:20px;bottom:20px;z-index:990;width:58px;height:58px;border-radius:50%;border:0;",
    "background:#EB6D2D;color:#fff;box-shadow:0 10px 30px -8px rgba(235,109,45,.6);cursor:pointer;",
    "display:flex;align-items:center;justify-content:center;transition:transform .18s ease,background .18s ease}",
    ".sbc-launch:hover{background:#C9551C;transform:translateY(-2px)}",
    ".sbc-launch svg{width:26px;height:26px}",
    ".sbc-panel{position:fixed;right:20px;bottom:90px;z-index:991;width:min(370px,calc(100vw - 32px));",
    "max-height:min(560px,calc(100vh - 120px));display:none;flex-direction:column;overflow:hidden;",
    "background:#FCFBF9;border:1px solid #E6E2DA;border-radius:18px;box-shadow:0 30px 70px -25px rgba(22,23,28,.45);",
    "font-family:'Inter',system-ui,sans-serif}",
    ".sbc-panel.open{display:flex}",
    ".sbc-head{background:#16171C;color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px}",
    ".sbc-head .dot{width:9px;height:9px;border-radius:50%;background:#EB6D2D;box-shadow:0 0 0 3px rgba(235,109,45,.25);flex:none}",
    ".sbc-head b{font-family:'Space Grotesk',system-ui,sans-serif;font-weight:600;font-size:.95rem}",
    ".sbc-head span{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.62rem;color:#8C8E98;letter-spacing:.08em;text-transform:uppercase;display:block;margin-top:1px}",
    ".sbc-close{margin-left:auto;background:none;border:0;color:#8C8E98;cursor:pointer;font-size:20px;line-height:1;padding:4px}",
    ".sbc-close:hover{color:#fff}",
    ".sbc-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;min-height:200px}",
    ".sbc-msg{max-width:86%;padding:.65em .9em;border-radius:14px;font-size:.9rem;line-height:1.5;white-space:pre-wrap;word-wrap:break-word}",
    ".sbc-msg a{color:#EB6D2D;text-decoration:underline}",
    ".sbc-msg--bot{background:#F2F0EB;color:#16171C;border-bottom-left-radius:4px;align-self:flex-start}",
    ".sbc-msg--user{background:#EB6D2D;color:#fff;border-bottom-right-radius:4px;align-self:flex-end}",
    ".sbc-typing{align-self:flex-start;padding:.7em .9em;background:#F2F0EB;border-radius:14px;border-bottom-left-radius:4px;display:flex;gap:4px}",
    ".sbc-typing i{width:6px;height:6px;border-radius:50%;background:#6B6C74;animation:sbcB 1.2s infinite}",
    ".sbc-typing i:nth-child(2){animation-delay:.15s}.sbc-typing i:nth-child(3){animation-delay:.3s}",
    "@keyframes sbcB{0%,60%,100%{opacity:.35;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}",
    ".sbc-form{display:flex;gap:8px;padding:12px;border-top:1px solid #E6E2DA;background:#fff}",
    ".sbc-form input{flex:1;border:1px solid #E6E2DA;border-radius:999px;padding:.6em 1em;font:inherit;font-size:.9rem;color:#16171C;outline:none}",
    ".sbc-form input:focus{border-color:#EB6D2D;box-shadow:0 0 0 3px #FBEADE}",
    ".sbc-send{border:0;border-radius:50%;width:40px;height:40px;flex:none;background:#EB6D2D;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}",
    ".sbc-send:hover{background:#C9551C}",
    ".sbc-send:disabled{opacity:.5;cursor:default}",
    ".sbc-send svg{width:18px;height:18px}",
    ".sbc-fine{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.6rem;color:#6B6C74;text-align:center;padding:0 12px 10px;background:#fff;letter-spacing:.02em}",
    "@media(prefers-reduced-motion:reduce){.sbc-launch{transition:none}.sbc-typing i{animation:none}}",
  ].join("");

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // ---------- DOM ----------
  var launch = document.createElement("button");
  launch.className = "sbc-launch";
  launch.setAttribute("aria-label", "Open chat with the Switchboard assistant");
  launch.setAttribute("aria-expanded", "false");
  launch.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';

  var panel = document.createElement("div");
  panel.className = "sbc-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Switchboard assistant chat");
  panel.innerHTML =
    '<div class="sbc-head"><span class="dot"></span><div><b>Switchboard assistant</b><span>AI · answers in seconds</span></div>' +
    '<button class="sbc-close" aria-label="Close chat">&times;</button></div>' +
    '<div class="sbc-msgs" aria-live="polite"></div>' +
    '<form class="sbc-form"><input type="text" placeholder="Ask about pricing, services…" aria-label="Your message" maxlength="600" />' +
    '<button type="submit" class="sbc-send" aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></form>' +
    '<div class="sbc-fine">// live demo of the AI assistant we build into client sites</div>';

  var msgsEl, formEl, inputEl, sendEl;
  var history = []; // {role, content}
  var busy = false;

  function mount() {
    document.body.appendChild(panel);
    document.body.appendChild(launch);
    msgsEl = panel.querySelector(".sbc-msgs");
    formEl = panel.querySelector(".sbc-form");
    inputEl = formEl.querySelector("input");
    sendEl = formEl.querySelector(".sbc-send");

    addMsg("bot", GREETING);

    launch.addEventListener("click", toggle);
    panel.querySelector(".sbc-close").addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("open")) close();
    });
    formEl.addEventListener("submit", onSubmit);

    // any element with data-open-chat opens the widget
    document.querySelectorAll("[data-open-chat]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        open();
      });
    });
  }

  function open() {
    panel.classList.add("open");
    launch.setAttribute("aria-expanded", "true");
    inputEl.focus();
  }
  function close() {
    panel.classList.remove("open");
    launch.setAttribute("aria-expanded", "false");
  }
  function toggle() {
    panel.classList.contains("open") ? close() : open();
  }

  function addMsg(who, text) {
    var el = document.createElement("div");
    el.className = "sbc-msg sbc-msg--" + (who === "user" ? "user" : "bot");
    el.textContent = text;
    // linkify the phone number in bot messages
    if (who !== "user" && text.indexOf(PHONE_DISPLAY) !== -1) {
      el.innerHTML = el.innerHTML.replace(
        PHONE_DISPLAY,
        '<a href="' + PHONE_HREF + '">' + PHONE_DISPLAY + "</a>"
      );
    }
    msgsEl.appendChild(el);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return el;
  }

  function showTyping() {
    var el = document.createElement("div");
    el.className = "sbc-typing";
    el.innerHTML = "<i></i><i></i><i></i>";
    msgsEl.appendChild(el);
    msgsEl.scrollTop = msgsEl.scrollHeight;
    return el;
  }

  function onSubmit(e) {
    e.preventDefault();
    var text = inputEl.value.trim();
    if (!text || busy) return;
    inputEl.value = "";
    addMsg("user", text);
    history.push({ role: "user", content: text });
    if (history.length > MAX_TURNS) history = history.slice(-MAX_TURNS);

    if (!CHAT_ENDPOINT) {
      addMsg("bot", OFFLINE_MSG);
      return;
    }

    busy = true;
    sendEl.disabled = true;
    var typing = showTyping();

    fetch(CHAT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history }),
    })
      .then(function (r) {
        if (!r.ok) throw new Error("bad status " + r.status);
        return r.json();
      })
      .then(function (d) {
        typing.remove();
        var reply = d && d.reply ? String(d.reply) : OFFLINE_MSG;
        addMsg("bot", reply);
        history.push({ role: "assistant", content: reply });
      })
      .catch(function () {
        typing.remove();
        addMsg("bot", OFFLINE_MSG);
      })
      .finally(function () {
        busy = false;
        sendEl.disabled = false;
        inputEl.focus();
      });
  }

  window.SwitchboardChat = { open: open, close: close, toggle: toggle };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
