/*
 * Switchboard per-club demo.
 *
 * Each club folder has a club.js that sets window.CLUB; this file renders the
 * club's site, a chat assistant answering from the club's own facts, and the
 * "behind the scenes" panel showing what Switchboard does with a lead.
 *
 * Everything runs in the browser. Nothing is sent anywhere: the form and chat
 * never leave the page, and the panel is a walkthrough, not live data.
 */
(function () {
  "use strict";
  var C = window.CLUB;
  if (!C) { document.body.textContent = "Missing club.js"; return; }

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function cap(s) { s = String(s || ""); return s.charAt(0).toUpperCase() + s.slice(1); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }
  function fill(tpl, lead) {
    return String(tpl || "")
      .replace(/\{first\}/g, lead.first)
      .replace(/\{name\}/g, lead.name)
      .replace(/\{topic\}/g, lead.topic)
      .replace(/\{asked\}/g, lead.question
        ? "You asked: “" + cap(lead.question.replace(/[\s?.!]+$/, "")) + "?” " + cap(C.contactPerson) + " will get back to you with an answer personally."
        : "You asked about " + String(lead.topic).toLowerCase() + ".")
      .replace(/\{club\}/g, C.name)
      .replace(/\{contact\}/g, C.contactPerson);
  }
  var ARROW = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m-4-5 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- theme ----------
  var root = document.documentElement.style;
  var col = C.colors || {};
  Object.keys(col).forEach(function (k) { root.setProperty("--" + k, col[k]); });
  var f = C.fonts || {};
  if (f.heading) root.setProperty("--heading", '"' + f.heading + '", Georgia, serif');
  if (f.body) root.setProperty("--body", '"' + f.body + '", -apple-system, "Helvetica Neue", Arial, sans-serif');
  if (f.headingWeight) root.setProperty("--heading-weight", f.headingWeight);
  if (f.headingTrack) root.setProperty("--heading-track", f.headingTrack);
  if (f.headingCase) root.setProperty("--heading-case", f.headingCase);
  if (C.hero && C.hero.position) root.setProperty("--hero-pos", C.hero.position);

  var fam = ["Inter:wght@400;500;600;700", "JetBrains+Mono:wght@500;600"];
  [f.heading, f.body].forEach(function (name) {
    if (name && name !== "Inter") fam.push(name.replace(/ /g, "+") + ":wght@400;500;600;700;800");
  });
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?" + fam.map(function (x) { return "family=" + x; }).join("&") + "&display=swap";
  document.head.appendChild(link);

  // ---------- site ----------
  var ct = C.contact || {};
  var app = document.getElementById("app");
  var parts = [];

  parts.push(
    '<div class="ribbon" role="region" aria-label="Switchboard demo"><div class="wrap">' +
      '<div class="ribbon__mark" aria-hidden="true">S</div>' +
      '<div class="ribbon__text"><b>Switchboard demo for ' + esc(C.name) + '.</b> ' +
      '<span class="long">Ask the chat a question or plan a visit below, then see what ' + esc(C.contactPerson) + ' would see.</span></div>' +
      '<button class="ribbon__btn" type="button" data-bts>Behind the scenes ' + ARROW + '</button>' +
    '</div></div>'
  );

  var logo = C.logo
    ? (C.logoName
      ? '<a class="nav__logo nav__logo--named" href="#top"><img src="' + esc(C.logo) + '" alt=""><span>' + esc(C.name) + '</span></a>'
      : '<a class="nav__logo" href="#top"><img src="' + esc(C.logo) + '" alt="' + esc(C.name) + '"></a>')
    : '<a class="wordmark" href="#top"><i>' + esc(C.monogram || C.name.slice(0, 2)) + '</i><span>' + esc(C.name) + '</span></a>';
  var navLinks = (C.nav || []).map(function (n) { return '<a href="' + esc(n[1]) + '">' + esc(n[0]) + '</a>'; }).join("");
  parts.push(
    '<header class="nav" id="top"><div class="wrap">' + logo +
      '<nav class="nav__links" aria-label="Main">' + navLinks +
      '<a class="btn" href="#book">' + esc(C.hero.cta) + '</a></nav>' +
    '</div></header>'
  );

  var H = C.hero;
  parts.push(
    '<section class="hero"><div class="hero__img"><img src="' + esc(H.image) + '" alt="' + esc(H.alt || "") + '"></div>' +
      '<div class="wrap"><div class="hero__copy">' +
        '<div class="eyebrow">' + esc(H.eyebrow) + '</div>' +
        '<h1>' + esc(H.title) + '</h1>' +
        '<p>' + esc(H.sub) + '</p>' +
        '<div class="hero__actions"><a class="btn" href="#book">' + esc(H.cta) + ' ' + ARROW + '</a>' +
          (H.secondary ? '<a class="btn btn--ghost" href="' + esc(H.secondary[1]) + '">' + esc(H.secondary[0]) + '</a>' : '') +
        '</div>' +
        (H.meta ? '<div class="hero__meta">' + esc(H.meta) + '</div>' : '') +
      '</div></div></section>'
  );

  if (C.offer) {
    parts.push(
      '<div class="offer"><div class="wrap"><div>' +
        '<div class="offer__label">' + esc(C.offer.label) + '</div>' +
        '<div class="offer__title">' + esc(C.offer.title) + '</div>' +
        '<div class="offer__sub">' + esc(C.offer.sub) + '</div>' +
      '</div><a class="btn" href="#book">' + esc(C.offer.cta || H.cta) + '</a></div></div>'
    );
  }

  function head(b) {
    return '<div class="block__head rv"><div class="eyebrow">' + esc(b.eyebrow) + '</div><h2>' + esc(b.title) + '</h2>' +
      (b.sub ? '<p>' + esc(b.sub) + '</p>' : '') + '</div>';
  }

  if (C.services) {
    parts.push(
      '<section class="block" id="services"><div class="wrap">' + head(C.services) +
        '<div class="services">' + C.services.items.map(function (s) {
          return '<div class="service rv"><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p>' +
            (s.meta ? '<div class="service__k">' + esc(s.meta) + '</div>' : '') + '</div>';
        }).join("") + '</div>' +
        (C.services.gallery ? '<div class="gallery rv">' + C.services.gallery.map(function (g) {
          return '<figure><img src="' + esc(g[0]) + '" alt="' + esc(g[1]) + '" loading="lazy"></figure>';
        }).join("") + '</div>' : '') +
      '</div></section>'
    );
  }

  var DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (C.schedule) {
    var today = DAYS[new Date().getDay()];
    parts.push(
      '<section class="block pricing" id="schedule"><div class="wrap">' + head(C.schedule) +
        '<div class="sched">' + C.schedule.days.map(function (d) {
          return '<div class="day rv' + (d.day === today ? " today" : "") + '"><h3>' + esc(d.day) + (d.day === today ? " · today" : "") + '</h3><ul>' +
            d.classes.map(function (c) {
              return '<li><b>' + esc(c[1]) + '</b><span>' + esc(c[0]) + (c[2] ? " · " + esc(c[2]) : "") + '</span></li>';
            }).join("") + '</ul></div>';
        }).join("") + '</div>' +
      '</div></section>'
    );
  }

  if (C.about) {
    var A = C.about;
    parts.push(
      '<section class="block" id="about"><div class="wrap split">' +
        '<div class="split__img rv"><img src="' + esc(A.image) + '" alt="' + esc(A.alt || "") + '" loading="lazy"></div>' +
        '<div class="rv"><div class="eyebrow">' + esc(A.eyebrow) + '</div><h2 style="font-size:clamp(30px,3.8vw,44px);margin-top:10px">' + esc(A.title) + '</h2>' +
          '<div class="about__text">' + A.paragraphs.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("") + '</div>' +
          (A.chips ? '<ul class="creds">' + A.chips.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join("") + '</ul>' : '') +
        '</div></div></section>'
    );
  }

  if (C.pricing) {
    parts.push(
      '<section class="block pricing" id="pricing"><div class="wrap">' + head(C.pricing) +
        '<div class="price-groups">' + C.pricing.groups.map(function (g) {
          return '<div class="price-group rv"><h3>' + esc(g.name) + '</h3>' + (g.note ? '<div class="note">' + esc(g.note) + '</div>' : '') +
            '<ul class="price-rows">' + g.rows.map(function (r) {
              return '<li><span>' + esc(r[0]) + '</span><b>' + esc(r[1]) + '</b></li>';
            }).join("") + '</ul></div>';
        }).join("") + '</div>' +
        (C.pricing.fine ? '<p class="rv" style="color:var(--ink-3);font-size:14px;margin:18px 0 0">' + esc(C.pricing.fine) + '</p>' : '') +
      '</div></section>'
    );
  }

  if (C.amenities) {
    parts.push(
      '<section class="block" id="amenities"><div class="wrap">' + head(C.amenities) +
        '<ul class="amen rv">' + C.amenities.items.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join("") + '</ul>' +
      '</div></section>'
    );
  }

  if (C.quotes && C.quotes.items.length) {
    parts.push(
      '<section class="block" id="reviews"><div class="wrap">' + head(C.quotes) +
        '<div class="quotes">' + C.quotes.items.map(function (q) {
          return '<figure class="quote rv"><blockquote>' + esc(q[0]) + '</blockquote><figcaption>' + esc(q[1]) + '</figcaption></figure>';
        }).join("") + '</div></div></section>'
    );
  }

  var B = C.book;
  parts.push(
    '<section class="block book" id="book"><div class="wrap book__grid">' +
      '<div>' + head(B) +
        '<ul class="contact-list rv">' +
          (ct.address ? '<li><span>Visit</span>' + esc(ct.address) + '</li>' : '') +
          (ct.hours ? '<li><span>Hours</span>' + ct.hours.map(esc).join("<br>") + '</li>' : '') +
          (ct.phone ? '<li><span>Call</span>' + esc(ct.phone) + '</li>' : '') +
          (ct.email ? '<li><span>Email</span>' + esc(ct.email) + '</li>' : '') +
        '</ul></div>' +
      '<form class="form rv" id="leadform" novalidate>' +
        '<h3>' + esc(B.formTitle) + '</h3>' +
        '<div class="row"><label class="field">First name<input name="first" autocomplete="given-name" required></label>' +
        '<label class="field">Last name<input name="last" autocomplete="family-name"></label></div>' +
        '<label class="field">Email<input name="email" type="email" autocomplete="email" required></label>' +
        '<label class="field">Phone<input name="phone" type="tel" autocomplete="tel"></label>' +
        '<label class="field">I\'m interested in<select name="topic">' + B.interests.map(function (i) { return '<option>' + esc(i) + '</option>'; }).join("") + '</select></label>' +
        '<button class="btn" type="submit">' + esc(B.submit) + '</button>' +
        '<p class="form__fine">Demo form. Nothing is sent, and no one will contact you.</p>' +
      '</form>' +
    '</div></section>'
  );

  parts.push(
    '<footer class="foot"><div class="wrap"><span>© ' + new Date().getFullYear() + ' ' + esc(C.name) + (ct.address ? ' · ' + esc(ct.address) : '') + '</span>' +
    '<span>Demo site concept by The Switchboard Company</span></div></footer>'
  );

  app.innerHTML = parts.join("");

  // reveal on scroll
  var rv = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    rv.forEach(function (n) { io.observe(n); });
  } else {
    rv.forEach(function (n) { n.classList.add("in"); });
  }

  // ---------- chat ----------
  var ch = C.chat;
  var BUBBLE = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A2.5 2.5 0 0 1 3 13.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var SEND = '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 10 17 3l-4 14-3-6-7-1Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>';
  // A wide wordmark logo is unreadable at avatar size, so those clubs set logoWide and get the monogram.
  var avatar = C.logo && !C.logoWide ? '<img src="' + esc(C.logo) + '" alt="">' : '<b style="color:var(--accent);font-size:11px;letter-spacing:.02em">' + esc(C.monogram || "") + '</b>';

  document.body.appendChild(el('<button class="chat-launch" type="button" aria-label="Chat with ' + esc(C.name) + '">' + BUBBLE + '</button>'));
  document.body.appendChild(el('<div class="chat-tip" role="status"><span>' + esc(ch.tip) + '</span><button type="button" aria-label="Dismiss">×</button></div>'));
  document.body.appendChild(el(
    '<div class="chat" role="dialog" aria-label="Chat with ' + esc(C.name) + '">' +
      '<div class="chat__head"><div class="chat__avatar">' + avatar + '</div>' +
        '<div class="chat__who"><b>' + esc(C.name) + '</b><span>Replies instantly, day or night</span></div>' +
        '<button class="chat__x" type="button" aria-label="Close chat">×</button></div>' +
      '<div class="chat__log" aria-live="polite"></div>' +
      '<form class="chat__form"><input placeholder="Ask anything…" aria-label="Your message" autocomplete="off"><button type="submit" aria-label="Send">' + SEND + '</button></form>' +
      '<div class="chat__foot">Demo · answers come from ' + esc(C.name) + '\'s own website · <b>Switchboard</b></div>' +
    '</div>'
  ));

  var chatBox = $(".chat"), log = $(".chat__log"), launch = $(".chat-launch"), tip = $(".chat-tip");
  var chatForm = $(".chat__form"), chatInput = $(".chat__form input");
  var started = false, capture = null, lastTopic = null, lastQuestion = null;

  function scrollLog() { log.scrollTop = log.scrollHeight; }
  function say(text, who) {
    var m = el('<div class="msg msg--' + (who || "bot") + '"></div>');
    m.textContent = text;
    log.appendChild(m); scrollLog();
  }
  function chips(list) {
    var old = log.querySelector(".chips"); if (old) old.remove();
    if (!list || !list.length) return;
    var wrap = el('<div class="chips"></div>');
    list.forEach(function (t) {
      var b = el('<button type="button" class="chip"></button>');
      b.textContent = t;
      b.addEventListener("click", function () { wrap.remove(); handle(t); });
      wrap.appendChild(b);
    });
    log.appendChild(wrap); scrollLog();
  }
  function botSay(text, then) {
    var t = el('<div class="msg msg--bot msg--typing"><i></i><i></i><i></i></div>');
    log.appendChild(t); scrollLog();
    var wait = reduced ? 150 : Math.min(1500, 500 + text.length * 9);
    setTimeout(function () { t.remove(); say(text, "bot"); if (then) then(); }, wait);
  }

  // Answers: the club's FAQs, plus one per schedule day so "what's on Saturday?" works.
  var faqs = (ch.faqs || []).slice();
  if (C.schedule) {
    C.schedule.days.forEach(function (d) {
      faqs.push({
        topic: d.day + " classes",
        keys: [d.day.toLowerCase()],
        weight: 2,
        a: d.day + " at " + C.shortName + ":\n" + d.classes.map(function (c) { return "• " + c[0] + "  " + c[1]; }).join("\n") +
          "\n\nEvery class is included with a membership, punch card or day pass."
      });
    });
  }
  function match(text) {
    var t = " " + text.toLowerCase().replace(/[^a-z0-9$ ]/g, " ") + " ";
    var best = null, bestScore = 0;
    faqs.forEach(function (q) {
      var s = 0;
      q.keys.forEach(function (k) { if (t.indexOf(k) !== -1) s += (q.weight || 1) * (k.length > 4 ? 2 : 1); });
      if (s > bestScore) { bestScore = s; best = q; }
    });
    return best;
  }

  function handle(text) {
    say(text, "me");
    if (capture) return captureStep(text);
    if (/\b(yes|yeah|yep|sure|ok|okay|please|contact me|reach out|call me|sign me up)\b/i.test(text) && lastTopic) {
      return startCapture(lastTopic);
    }
    var q = match(text);
    if (q) {
      lastTopic = q.topic;
      lastQuestion = null;
      botSay(q.a, function () { chips(q.follow ? [q.follow, "Have someone contact me"] : ["Have someone contact me"]); });
    } else {
      lastTopic = "Question: “" + text.slice(0, 60) + "”";
      lastQuestion = text.slice(0, 120);
      botSay(fill(ch.fallback, { first: "", name: "", topic: "" }), function () { startCapture(lastTopic, true); });
    }
  }
  function startCapture(topic, skipIntro) {
    capture = { step: "name", topic: topic };
    if (skipIntro) botSay("What's your name?");
    else botSay("Happy to. What's your name?");
  }
  function looksLikeQuestion(text) {
    return /\?\s*$/.test(text) || text.trim().split(/\s+/).length > 4 ||
      /^(do|does|is|are|can|what|when|where|how|who|why|which)\b/i.test(text.trim());
  }
  function captureStep(text) {
    // Someone asking another question mid-capture shouldn't become their own name.
    if (capture.step === "name" && looksLikeQuestion(text)) {
      var q = match(text);
      var ask = "And what's your name, so " + C.contactPerson + " can follow up?";
      if (q) botSay(q.a, function () { botSay(ask); });
      else { lastQuestion = text.slice(0, 120); capture.topic = "Question: “" + text.slice(0, 60) + "”"; botSay("I'll pass that one along too. " + ask); }
      return;
    }
    if (capture.step === "name" && /\S+@\S+\.\S+/.test(text)) {
      // They gave their email first: keep it and still ask for a name.
      capture.earlyEmail = (text.match(/\S+@\S+\.\S+/) || [text])[0];
      botSay("Got your email, thanks! And what's your name?");
      return;
    }
    if (capture.step === "name" && capture.earlyEmail) {
      capture.name = text.trim().replace(/\s+/g, " ").slice(0, 60);
      capture.step = "email";
      return captureStep(capture.earlyEmail);
    }
    if (capture.step === "name") {
      capture.name = text.trim().replace(/\s+/g, " ").slice(0, 60);
      capture.step = "email";
      botSay("Thanks, " + capture.name.split(" ")[0] + "! What's the best email to reach you?");
    } else if (capture.step === "email") {
      if (!/\S+@\S+\.\S+/.test(text)) { botSay("Hmm, that doesn't look like an email. Mind trying again?"); return; }
      capture.email = text.trim();
      var lead = mkLead(capture.name, capture.email, capture.topic, "Website chat");
      lead.question = lastQuestion;
      capture = null;
      botSay(fill(ch.done, lead), function () {
        setTimeout(function () { openBTS(lead); }, reduced ? 0 : 900);
      });
    }
  }

  function openChat() {
    tip.classList.remove("on");
    chatBox.classList.add("on");
    if (!started) {
      started = true;
      botSay(ch.greeting, function () { chips(ch.suggestions); });
    }
    setTimeout(function () { if (window.innerWidth > 560) chatInput.focus(); }, 300);
  }
  function closeChat() { chatBox.classList.remove("on"); }
  launch.addEventListener("click", function () { chatBox.classList.contains("on") ? closeChat() : openChat(); });
  $(".chat__x").addEventListener("click", closeChat);
  tip.querySelector("span").addEventListener("click", openChat);
  tip.querySelector("button").addEventListener("click", function () { tip.classList.remove("on"); });
  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = chatInput.value.trim();
    if (!v) return;
    chatInput.value = "";
    var c = log.querySelector(".chips"); if (c) c.remove();
    handle(v);
  });
  setTimeout(function () { if (!started) tip.classList.add("on"); }, 2200);

  // ---------- booking form ----------
  var form = document.getElementById("leadform");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var first = String(d.get("first") || "").trim(), email = String(d.get("email") || "").trim();
    if (!first || !/\S+@\S+\.\S+/.test(email)) {
      form.querySelectorAll("input[required]").forEach(function (i) {
        i.style.borderColor = (!i.value.trim() || (i.type === "email" && !/\S+@\S+\.\S+/.test(i.value))) ? "#d64545" : "";
      });
      return;
    }
    var lead = mkLead((first + " " + String(d.get("last") || "")).trim(), email, String(d.get("topic")), "Website form");
    form.innerHTML = '<div class="form__done"><div class="eyebrow">Got it</div><h3>Thanks, ' + esc(lead.first) + '!</h3>' +
      '<p>On the real site, you\'d have a reply in your inbox right now. Here\'s everything that just happened behind the scenes.</p>' +
      '<button class="btn" type="button" data-bts>See behind the scenes ' + ARROW + '</button></div>';
    setTimeout(function () { openBTS(lead); }, reduced ? 0 : 700);
  });

  // ---------- behind the scenes ----------
  function mkLead(name, email, topic, source) {
    var n = (name || "").trim() || "Sarah Mitchell";
    return { name: n, first: n.split(" ")[0], email: email, topic: topic || "Membership", source: source, real: true };
  }
  var SAMPLE = { name: "Sarah Mitchell", first: "Sarah", email: "sarah.m@example.com", topic: (C.bts.sampleTopic || "Day pass"), source: "Website chat", real: false };
  var currentLead = null;

  document.body.appendChild(el('<div class="bts-scrim"></div>'));
  document.body.appendChild(el('<aside class="bts" role="dialog" aria-label="Behind the scenes" aria-hidden="true"><div class="bts__head"></div><div class="bts__body"></div></aside>'));
  var bts = $(".bts"), scrim = $(".bts-scrim");

  function initials(n) { return n.split(" ").filter(Boolean).slice(0, 2).map(function (p) { return p[0]; }).join("").toUpperCase(); }

  function renderBTS(lead) {
    var X = C.bts, who = C.contactPerson;
    $(".bts__head", bts).innerHTML =
      '<div><div class="k">Behind the scenes · Switchboard</div>' +
      '<h2>' + (lead.real ? "You just became a lead. Here's what happened next." : "What happens when someone reaches out") + '</h2>' +
      '<p>' + (lead.real ? "Everything below happened automatically, with nobody at the front desk lifting a finger."
        : "Try the chat or the form yourself, and this fills in with your name.") + '</p></div>' +
      '<button class="bts__x" type="button" aria-label="Close">×</button>';

    var older = (X.recentLeads || []).map(function (r) {
      return '<div class="card lead" style="opacity:.55"><div class="lead__av">' + esc(initials(r[0])) + '</div>' +
        '<div class="lead__main"><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></div><span class="pill">' + esc(r[2]) + '</span></div>';
    }).join("");

    var steps = [
      {
        t: "Lands in your dashboard", time: "0:00",
        p: "Every chat, form and enquiry from your website, in one list. Nothing lives in someone's inbox or on a sticky note.",
        h: '<div class="card lead" style="border-color:var(--sb-orange);box-shadow:0 0 0 1px var(--sb-orange)"><div class="lead__av">' + esc(initials(lead.name)) + '</div>' +
          '<div class="lead__main"><b>' + esc(lead.name) + '</b><span>' + esc(lead.source) + ' · ' + esc(lead.topic) + '</span></div><span class="pill pill--new">New · just now</span></div>' + older
      },
      {
        t: "They get an instant reply", time: "0:00",
        p: "Answered in seconds, at 9pm or on a Sunday, in " + C.shortName + "'s voice. This is when most people are deciding where to go.",
        h: '<div class="card"><div class="mail__meta"><b>' + esc(C.name) + '</b> → ' + esc(lead.email || "you") +
          '<br>Subject: ' + esc(fill(X.reply.subject, lead)) + '</div><div class="mail__body">' + esc(fill(X.reply.body, lead)) + '</div></div>'
      },
      {
        t: cap(who) + (C.contactPlural ? " get" : " gets") + " an alert", time: "0:01",
        p: "The moment it lands, with what they asked about, so a call back takes ten seconds.",
        h: '<div class="phone"><div class="notif"><div class="notif__ic">S</div><div><b>New lead: ' + esc(lead.name) + '</b>' +
          '<span>' + esc(lead.topic) + ' · via ' + esc(lead.source.toLowerCase()) + '</span></div><small>now</small></div></div>'
      },
      {
        t: "Follow-ups until they come in", time: "Days 1–7",
        p: "If they haven't booked or replied, Switchboard follows up for you. Texts go out too, for people who opt in.",
        h: '<div class="card seq">' + X.followups.map(function (s) {
          return '<div class="seq__item"><span>' + esc(s[0]) + '</span><div>' + esc(fill(s[1], lead)) + '</div></div>';
        }).join("") + '<div class="stop">✓ Stops the moment they reply, book or join</div></div>'
      },
      {
        t: "Your month, in one email", time: "1st of month",
        p: "Who reached out, who came in, who joined, and what it was worth.",
        h: '<div class="card"><div class="report">' + X.report.map(function (r, i) {
          return '<div' + (i === X.report.length - 1 ? ' class="wide"' : '') + '><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></div>';
        }).join("") + '</div><div class="fine">Example numbers for a club like ' + esc(C.shortName) + '.</div></div>'
      }
    ];

    $(".bts__body", bts).innerHTML = steps.map(function (s, i) {
      return '<div class="step"><div class="step__n">' + (i + 1) + '</div><div class="step__t"><h3>' + esc(s.t) + '</h3><time>' + esc(s.time) + '</time></div>' +
        '<p>' + esc(s.p) + '</p>' + s.h + '</div>';
    }).join("") +
      '<div class="bts__cta step"><h3>' + esc(X.cta.title) + '</h3><p>' + esc(X.cta.text) + '</p>' +
      '<a href="' + esc(X.cta.url) + '" target="_blank" rel="noopener">' + esc(X.cta.button) + ' ' + ARROW + '</a>' +
      '<small>' + esc(X.cta.fine) + '</small></div>';

    $(".bts__x", bts).addEventListener("click", closeBTS);
  }

  function openBTS(lead) {
    currentLead = lead || currentLead || SAMPLE;
    renderBTS(currentLead);
    closeChat();
    bts.setAttribute("aria-hidden", "false");
    scrim.classList.add("on");
    bts.classList.add("on");
    document.body.style.overflow = "hidden";
    $(".bts__body", bts).scrollTop = 0;
    var st = bts.querySelectorAll(".step");
    st.forEach(function (s, i) { setTimeout(function () { s.classList.add("in"); }, reduced ? 0 : 250 + i * 420); });
  }
  function closeBTS() {
    bts.classList.remove("on");
    scrim.classList.remove("on");
    bts.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  scrim.addEventListener("click", closeBTS);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { if (bts.classList.contains("on")) closeBTS(); else closeChat(); }
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest("[data-bts]")) openBTS();
  });
})();
