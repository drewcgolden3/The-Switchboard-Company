/* Renders the page from config.js and wires up the booking buttons. */
(function () {
  var c = window.SITE_CONFIG || {};
  var $ = function (id) { return document.getElementById(id); };
  var set = function (id, val) { var el = $(id); if (el) el.textContent = val; };

  /* --- Text --- */
  set("brand", c.brandName || c.name || "");
  var logo = document.getElementById("brandLogo");
  if (logo) {
    if (c.logo) { logo.src = c.logo; logo.alt = (c.brandName || "") + " logo"; }
    else { logo.style.display = "none"; }
  }
  set("footerBrand", "© " + new Date().getFullYear() + " " + (c.brandName || c.name || ""));
  set("eyebrow", c.eyebrow || "");
  set("headline", c.headline || "");
  set("subhead", c.subhead || "");
  set("ctaMain", c.ctaText || "Book my free call");
  set("ctaSubtext", c.ctaSubtext || "");

  var fe = $("footerEmail");
  if (fe && c.email) { fe.textContent = c.email; fe.href = "mailto:" + c.email; }

  /* --- Trust points --- */
  if (Array.isArray(c.trustPoints)) {
    $("trust").innerHTML = c.trustPoints.map(function (t) {
      return "<li>" + t + "</li>";
    }).join("");
  }

  /* --- Benefit cards --- */
  if (Array.isArray(c.benefits)) {
    $("benefits").innerHTML = c.benefits.map(function (b) {
      return '<div class="card">' +
        (b.code ? '<div class="card__code">' + b.code + "</div>" : "") +
        '<h3 class="card__title">' + b.title + "</h3>" +
        '<p class="card__text">' + b.text + "</p></div>";
    }).join("");
  }

  /* --- Steps --- */
  if (Array.isArray(c.steps)) {
    $("steps").innerHTML = c.steps.map(function (s) {
      return '<div class="step">' +
        '<div class="step__n">' + s.n + "</div>" +
        '<h3 class="step__title">' + s.title + "</h3>" +
        '<p class="step__text">' + s.text + "</p></div>";
    }).join("");
  }

  /* --- FAQ (accordion) --- */
  if (Array.isArray(c.faqs)) {
    $("faq").innerHTML = c.faqs.map(function (f) {
      return '<div class="faq__item">' +
        '<button class="faq__q">' + f.q + '<span class="plus">+</span></button>' +
        '<div class="faq__a"><p>' + f.a + "</p></div></div>";
    }).join("");
    Array.prototype.forEach.call(document.querySelectorAll(".faq__q"), function (btn) {
      btn.addEventListener("click", function () {
        btn.parentElement.classList.toggle("open");
      });
    });
  }

  /* --- Booking buttons --- */
  var url = c.bookingUrl || "";
  var isPlaceholder = !url || url.indexOf("PASTE_YOUR") === 0;

  Array.prototype.forEach.call(document.querySelectorAll(".js-book"), function (btn) {
    btn.addEventListener("click", function () {
      if (isPlaceholder) {
        alert(
          "Booking link not set yet.\n\n" +
          "Open config.js and paste your Google Calendar Appointment " +
          "Schedule link into bookingUrl. (Steps are in README.md.)"
        );
        return;
      }
      window.open(url, "_blank", "noopener");
    });
  });
})();
