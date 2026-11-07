/* =====================================================================
   PRIME HEALTH CARE CENTER – shared site script
   ---------------------------------------------------------------------
   1) Edit the CLINIC object below to change phone numbers, WhatsApp,
      email, address, hours, registration numbers and social links.
      Everything on every page (header, footer, buttons, forms) reads
      from here.
   2) The header and footer are written ONCE in this file and injected
      into <div id="site-header"></div> / <div id="site-footer"></div>.
   ===================================================================== */

var CLINIC = {
  name:        "Prime Health Care Center Pvt. Ltd.",
  shortName:   "Prime Health Care",
  nepaliName:  "प्राइम हेल्थ केयर सेन्टर प्रा. लि.",
  about:       "A trusted neighbourhood diagnostic & health care centre in Dhumbarahi, Kathmandu – accurate lab tests, digital imaging and caring doctors under one roof.",

  address:      "Kathmandu Metropolitan City, Ward No. 4, Dhumbarahi, Sukedhara (near Himal Dental Mod), Kathmandu, Nepal",
  addressShort: "Dhumbarahi, Sukedhara, Kathmandu",
  mapsLink:     "https://www.google.com/maps/search/?api=1&query=Prime+Health+Care+Center+Dhumbarahi+Kathmandu",

  landline:    "01-4560883",
  landlineTel: "+97714560883",
  mobile:      "9851117197",
  mobileTel:   "+9779851117197",
  whatsapp:    "9779851117197",          // country code + number, digits only
  email:       "primehealthcare068@gmail.com",

  hours:       "Daily 7:00 AM – 7:00 PM",   // TO CONFIRM
  hoursShort:  "7 AM – 7 PM, every day",    // TO CONFIRM
  doctorHours: "OPD: 8:00 AM – 6:00 PM",    // TO CONFIRM

  regNo: "76116/067/068",
  pan:   "304529591",

  // Paste full profile URLs. Empty = icon is hidden automatically.
  social: {
    facebook:  "",
    instagram: "",
    tiktok:    "",
    youtube:   ""
  },

  siteBy: { name: "Prime Web Pvt. Ltd.", url: "https://www.primeweb.com.np" }
};

/* Services used in the footer links (keys must match services.html ids
   and the <option> values of the appointment form). */
var SERVICES = [
  { key: "opd",      name: "General OPD Consultation" },
  { key: "lab",      name: "Pathology Laboratory" },
  { key: "xray",     name: "Digital X-Ray" },
  { key: "usg",      name: "Ultrasound (USG)" },
  { key: "ecg",      name: "ECG" },
  { key: "medical",  name: "Pre-Employment Medical" }
];

(function () {
  "use strict";

  var C = CLINIC;
  var body = document.body;
  var page = body.getAttribute("data-page") || "";
  var isHome = page === "home";
  var LOGO = "assets/images/logo/logo.png";

  function $(s, ctx) { return (ctx || document).querySelector(s); }
  function $$(s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); }
  function H(hash) { return (isHome ? "" : "index.html") + hash; }
  function waLink(text) { return "https://wa.me/" + C.whatsapp + (text ? "?text=" + encodeURIComponent(text) : ""); }
  var WA_HELLO = "Hello " + C.shortName + ", I would like to know more about your services.";
  var BOOK = H("#appointment");

  /* ------------------------------------------------------------------
     Social icons
  ------------------------------------------------------------------ */
  var SOCIAL_ICONS = { facebook: "fa-facebook-f", instagram: "fa-instagram", tiktok: "fa-tiktok", youtube: "fa-youtube" };
  function socialHTML(cls) {
    var out = "";
    Object.keys(C.social).forEach(function (k) {
      if (C.social[k]) {
        out += '<a href="' + C.social[k] + '" target="_blank" rel="noopener" aria-label="' + k + '"><i class="fa-brands ' + SOCIAL_ICONS[k] + '"></i></a>';
      }
    });
    // Shown only when a social link is filled in CLINIC.social (none by default)
    return out ? '<div class="' + cls + '">' + out + "</div>" : "";
  }

  /* ------------------------------------------------------------------
     HEADER
  ------------------------------------------------------------------ */
  var NAV = [
    { id: "home",         label: "Home",         href: isHome ? "#home" : "index.html" },
    { id: "about",        label: "About",        href: H("#about") },
    { id: "services",     label: "Services",     href: "services.html" },
    { id: "testimonials", label: "Testimonials", href: H("#testimonials") },
    { id: "contact",      label: "Contact",      href: "contact.html" }
  ];

  var logoImg = '<img src="' + LOGO + '" alt="' + C.name + ' logo" onerror="logoFb(this)">' +
                '<span class="brand-name">' + C.name + '</span>';

  var headerHTML =
    '<div class="topbar"><div class="container">' +
      '<ul class="topbar-list">' +
        '<li><i class="fa-regular fa-clock"></i>' + C.hours + '</li>' +
        '<li><a href="tel:' + C.landlineTel + '"><i class="fa-solid fa-phone"></i>' + C.landline + '</a></li>' +
        '<li><a href="tel:' + C.mobileTel + '"><i class="fa-solid fa-mobile-screen"></i>' + C.mobile + '</a></li>' +
        '<li class="hide-lg"><a href="mailto:' + C.email + '"><i class="fa-regular fa-envelope"></i>' + C.email + '</a></li>' +
      '</ul>' +
      '<div class="topbar-right"><span class="np" lang="ne">' + C.nepaliName + '</span>' + socialHTML("topbar-social") + '</div>' +
    '</div></div>' +
    '<header class="site-header" id="siteHeader">' +
      '<div class="container nav-bar">' +
        '<a class="brand" href="' + (isHome ? "#home" : "index.html") + '" aria-label="' + C.name + ' – Home">' + logoImg + '</a>' +
        '<div class="nav-drawer">' +
        '<nav class="main-nav" id="mainNav" aria-label="Main navigation">' +
          '<div class="nav-panel-head">' +
            '<a class="brand brand-sm" href="' + (isHome ? "#home" : "index.html") + '">' + logoImg + '</a>' +
            '<button type="button" class="nav-close" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>' +
          '</div>' +
          '<ul class="nav-list">' +
            NAV.map(function (n) {
              return '<li><a href="' + n.href + '" data-nav="' + n.id + '">' + n.label + '<i class="fa-solid fa-arrow-right"></i></a></li>';
            }).join("") +
          '</ul>' +
          '<div class="nav-panel-foot">' +
            '<a class="btn btn-accent btn-block" href="' + BOOK + '"><i class="fa-regular fa-calendar-check"></i>Book Appointment</a>' +
            '<a class="btn btn-outline btn-block" href="tel:' + C.mobileTel + '"><i class="fa-solid fa-phone"></i>Call ' + C.mobile + '</a>' +
            '<a class="btn btn-wa btn-block" href="' + waLink(WA_HELLO) + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>WhatsApp Us</a>' +
            '<p class="nav-hours"><i class="fa-regular fa-clock"></i>' + C.hours + '</p>' +
          '</div>' +
        '</nav>' +
        '</div>' +
        '<div class="nav-actions">' +
          '<a class="nav-call" href="tel:' + C.mobileTel + '"><span class="nav-call-icon"><i class="fa-solid fa-phone-volume"></i></span><span><small>Call us</small>' + C.mobile + '</span></a>' +
          '<a class="btn btn-accent btn-sm nav-cta" href="' + BOOK + '"><i class="fa-regular fa-calendar-check"></i><span>Book Appointment</span></a>' +
          '<button type="button" class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mainNav"><i class="fa-solid fa-bars-staggered"></i></button>' +
        '</div>' +
      '</div>' +
    '</header>' +
    '<div class="nav-overlay" id="navOverlay"></div>';

  /* ------------------------------------------------------------------
     FOOTER
  ------------------------------------------------------------------ */
  var year = new Date().getFullYear();
  var footerHTML =
    '<footer class="site-footer">' +
      '<div class="container footer-grid">' +
        '<div class="footer-col footer-about">' +
          '<a class="footer-logo" href="' + (isHome ? "#home" : "index.html") + '" aria-label="' + C.name + '">' + logoImg + '</a>' +
          '<p>' + C.about + '</p>' +
          '<p class="footer-np" lang="ne">' + C.nepaliName + '</p>' +
          socialHTML("socials") +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Quick Links</h4>' +
          '<ul class="footer-links">' +
            NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.label + '</a></li>'; }).join("") +
            '<li><a href="' + H("#packages") + '">Health Packages</a></li>' +
            '<li><a href="' + BOOK + '">Book Appointment</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Our Services</h4>' +
          '<ul class="footer-links">' +
            SERVICES.map(function (s) { return '<li><a href="services.html#' + s.key + '">' + s.name + '</a></li>'; }).join("") +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Contact Us</h4>' +
          '<ul class="footer-contact">' +
            '<li><i class="fa-solid fa-location-dot"></i><a href="' + C.mapsLink + '" target="_blank" rel="noopener">' + C.address + '</a></li>' +
            '<li><i class="fa-solid fa-phone"></i><span>Landline: <a href="tel:' + C.landlineTel + '">' + C.landline + '</a></span></li>' +
            '<li><i class="fa-solid fa-mobile-screen"></i><span>Mobile: <a href="tel:' + C.mobileTel + '">' + C.mobile + '</a></span></li>' +
            '<li><i class="fa-brands fa-whatsapp"></i><span>WhatsApp: <a href="' + waLink(WA_HELLO) + '" target="_blank" rel="noopener">' + C.mobile + '</a></span></li>' +
            '<li><i class="fa-regular fa-envelope"></i><a href="mailto:' + C.email + '">' + C.email + '</a></li>' +
            '<li><i class="fa-regular fa-clock"></i><span>' + C.hours + '</span></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom"><div class="container">' +
        '<span>© ' + year + ' ' + C.name + ' All rights reserved.</span>' +
        '<span class="sep">|</span><span>Govt. Regd. No. ' + C.regNo + '</span>' +
        '<span class="sep">|</span><span>PAN: ' + C.pan + '</span>' +
        '<span class="sep">|</span><span>Site by: <a href="' + C.siteBy.url + '" target="_blank" rel="noopener">' + C.siteBy.name + '</a></span>' +
      '</div></div>' +
    '</footer>' +
    '<a class="wa-float" href="' + waLink(WA_HELLO) + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="fa-brands fa-whatsapp"></i><span class="wa-tip">Chat with us</span></a>' +
    '<button type="button" class="to-top" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>';

  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }
  inject("site-header", headerHTML);
  inject("site-footer", footerHTML);

  /* ------------------------------------------------------------------
     Bind config values into page content
     <span data-cfg="hours"></span>  ->  text from CLINIC.hours
     <a data-href="call|landline|whatsapp|email|maps">
  ------------------------------------------------------------------ */
  var LINKS = {
    call: "tel:" + C.mobileTel,
    landline: "tel:" + C.landlineTel,
    whatsapp: waLink(WA_HELLO),
    email: "mailto:" + C.email,
    maps: C.mapsLink
  };
  $$("[data-cfg]").forEach(function (el) {
    var v = C[el.getAttribute("data-cfg")];
    if (v) el.textContent = v;
  });
  $$("[data-href]").forEach(function (el) {
    var t = el.getAttribute("data-href");
    if (!LINKS[t]) return;
    el.setAttribute("href", LINKS[t]);
    if (t === "whatsapp" || t === "maps") { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
  });

  /* ------------------------------------------------------------------
     Mobile off-canvas menu
  ------------------------------------------------------------------ */
  var header = $("#siteHeader");
  var toggle = $(".nav-toggle");
  var closeBtn = $(".nav-close");
  var overlay = $("#navOverlay");
  var mainNav = $("#mainNav");

  function openNav() {
    body.classList.add("nav-open", "no-scroll");
    toggle.setAttribute("aria-expanded", "true");
    setTimeout(function () { try { closeBtn.focus({ preventScroll: true }); } catch (e) {} }, 50);
  }
  function closeNav() {
    if (!body.classList.contains("nav-open")) return;
    body.classList.remove("nav-open", "no-scroll");
    toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", openNav);
    closeBtn.addEventListener("click", closeNav);
    overlay.addEventListener("click", closeNav);
    $$("a", mainNav).forEach(function (a) { a.addEventListener("click", closeNav); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeNav(); closeModal(); closeLightbox(); } });
    window.addEventListener("resize", function () { if (window.innerWidth >= 1024) closeNav(); });
  }

  /* ------------------------------------------------------------------
     Active menu item + scroll spy (home page)
  ------------------------------------------------------------------ */
  function setActive(id) {
    $$("[data-nav]").forEach(function (a) {
      var on = a.getAttribute("data-nav") === id;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }
  setActive(isHome ? "home" : page);

  var spyEls = isHome ? $$("[data-spy]") : [];
  var toTop = $(".to-top");
  var ticking = false;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 10);
    if (toTop) toTop.classList.toggle("show", y > 600);
    if (spyEls.length) {
      var line = y + (header ? header.offsetHeight : 80) + 60;
      var cur = "home";
      spyEls.forEach(function (s) {
        if (s.getBoundingClientRect().top + y <= line) cur = s.getAttribute("data-spy");
      });
      setActive(cur);
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ------------------------------------------------------------------
     Scroll reveal + counters
  ------------------------------------------------------------------ */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion) { el.textContent = target.toLocaleString("en-US") + suffix; return; }
    var start = null, dur = 1800;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var v = Math.round(target * (1 - Math.pow(1 - p, 3)));
      el.textContent = v.toLocaleString("en-US") + suffix;
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  // Content already on screen at load is shown immediately (no movement on page change);
  // only content further down fades in while scrolling.
  var vh = window.innerHeight || document.documentElement.clientHeight;
  $$(".reveal").forEach(function (el) {
    if (el.getBoundingClientRect().top < vh) el.classList.add("in");
  });
  document.documentElement.classList.add("reveal-on");

  // Smooth scrolling only for in-page clicks, not for the first jump to #hash on page load
  window.addEventListener("load", function () {
    setTimeout(function () { document.documentElement.classList.add("smooth"); }, 300);
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });

    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { countUp(en.target); co.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    $$("[data-count]").forEach(function (el) { co.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
    $$("[data-count]").forEach(countUp);
  }

  /* ------------------------------------------------------------------
     Testimonials slider
  ------------------------------------------------------------------ */
  var slider = $(".t-slider");
  if (slider) {
    var track = $(".t-track", slider);
    var slides = $$(".t-slide", slider);
    var dotsWrap = $(".t-dots", slider);
    var idx = 0, timer = null;

    slides.forEach(function (s, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Show review " + (i + 1));
      b.addEventListener("click", function () { go(i); restart(); });
      dotsWrap.appendChild(b);
    });
    var dots = $$("button", dotsWrap);

    function go(n) {
      idx = (n + slides.length) % slides.length;
      track.style.transform = "translateX(-" + idx * 100 + "%)";
      dots.forEach(function (d, i) { d.classList.toggle("active", i === idx); });
      slides.forEach(function (s, i) { s.setAttribute("aria-hidden", i === idx ? "false" : "true"); });
    }
    function restart() {
      clearInterval(timer);
      if (!reduceMotion) timer = setInterval(function () { go(idx + 1); }, 6500);
    }
    $(".t-prev", slider).addEventListener("click", function () { go(idx - 1); restart(); });
    $(".t-next", slider).addEventListener("click", function () { go(idx + 1); restart(); });
    slider.addEventListener("mouseenter", function () { clearInterval(timer); });
    slider.addEventListener("mouseleave", restart);

    var sx = 0, sy = 0;
    slider.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    slider.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { go(idx + (dx < 0 ? 1 : -1)); restart(); }
    }, { passive: true });

    go(0); restart();
  }

  /* ------------------------------------------------------------------
     Gallery lightbox
  ------------------------------------------------------------------ */
  var lb = null, lbItems = [], lbIdx = 0;
  function lbShow(i) {
    lbIdx = (i + lbItems.length) % lbItems.length;
    var img = $("img", lbItems[lbIdx]);
    var cap = $("figcaption", lbItems[lbIdx]);
    $(".lb-img", lb).src = img.currentSrc || img.src;
    $(".lb-img", lb).alt = img.alt;
    $(".lb-cap", lb).textContent = cap ? cap.textContent : "";
  }
  function closeLightbox() {
    if (lb && lb.classList.contains("open")) { lb.classList.remove("open"); body.classList.remove("no-scroll"); }
  }
  var gItems = $$(".g-item");
  if (gItems.length) {
    lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.innerHTML =
      '<button type="button" class="lb-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>' +
      '<button type="button" class="lb-nav lb-prev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>' +
      '<figure><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
      '<button type="button" class="lb-nav lb-next" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>';
    body.appendChild(lb);
    $(".lb-close", lb).addEventListener("click", closeLightbox);
    $(".lb-prev", lb).addEventListener("click", function () { lbShow(lbIdx - 1); });
    $(".lb-next", lb).addEventListener("click", function () { lbShow(lbIdx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });

    gItems.forEach(function (g) {
      function open() {
        lbItems = gItems.filter(function (x) { var im = $("img", x); return im && im.style.display !== "none"; });
        var i = lbItems.indexOf(g);
        if (i < 0) return;           // image failed – nothing to show
        lbShow(i);
        lb.classList.add("open");
        body.classList.add("no-scroll");
      }
      g.addEventListener("click", open);
      g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
  }

  /* ------------------------------------------------------------------
     Confirmation modal
  ------------------------------------------------------------------ */
  var modal = null;
  function showModal(title, html, waUrl) {
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "modal";
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      modal.innerHTML =
        '<div class="modal-box">' +
          '<button type="button" class="modal-x" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>' +
          '<div class="modal-icon"><i class="fa-brands fa-whatsapp"></i></div>' +
          '<h3 class="modal-title"></h3><div class="modal-text"></div>' +
          '<div class="modal-actions">' +
            '<a class="btn btn-wa modal-wa" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>Open WhatsApp again</a>' +
            '<button type="button" class="btn btn-outline modal-close">Done</button>' +
          '</div>' +
        '</div>';
      body.appendChild(modal);
      $(".modal-close", modal).addEventListener("click", closeModal);
      $(".modal-x", modal).addEventListener("click", closeModal);
      modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
    }
    $(".modal-title", modal).textContent = title;
    $(".modal-text", modal).innerHTML = html;
    $(".modal-wa", modal).setAttribute("href", waUrl);
    modal.classList.add("open");
    body.classList.add("no-scroll");
    setTimeout(function () { try { $(".modal-close", modal).focus({ preventScroll: true }); } catch (e) {} }, 60);
  }
  function closeModal() {
    if (modal && modal.classList.contains("open")) { modal.classList.remove("open"); body.classList.remove("no-scroll"); }
  }

  /* ------------------------------------------------------------------
     Form helpers
  ------------------------------------------------------------------ */
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function todayISO() { var d = new Date(); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function phoneOK(v) {
    var d = String(v).replace(/\D/g, "");
    if (d.indexOf("977") === 0 && d.length > 10) d = d.slice(3);
    return /^9[678]\d{8}$/.test(d) || /^0?[1-9]\d{6,7}$/.test(d);
  }
  function emailOK(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }
  function val(form, name) {
    var el = form.elements[name];
    if (!el) return "";
    return String(el.value || "").trim();
  }
  function setErr(form, name, bad) {
    var el = form.elements[name];
    if (!el) return;
    var node = el.length && !el.tagName ? el[0] : el;
    var f = node.closest(".field");
    if (f) f.classList.toggle("invalid", !!bad);
  }
  function openWA(text) {
    var url = waLink(text);
    var w = window.open(url, "_blank");
    if (w) { try { w.opener = null; } catch (e) {} } else { window.location.href = url; }
    return url;
  }
  function fmtDate(iso) {
    var p = iso.split("-");
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    try { return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" }); }
    catch (e) { return iso; }
  }
  function focusFirstError(form) {
    var f = $(".field.invalid", form);
    if (!f) return;
    var input = $("input, select, textarea", f);
    f.scrollIntoView({ behavior: "smooth", block: "center" });
    if (input) setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (e) {} }, 400);
  }
  function liveClear(form) {
    $$("input, select, textarea", form).forEach(function (el) {
      el.addEventListener("input", function () { var f = el.closest(".field"); if (f) f.classList.remove("invalid"); });
      el.addEventListener("change", function () { var f = el.closest(".field"); if (f) f.classList.remove("invalid"); });
    });
  }
  var LINE = "------------------------------";

  /* ------------------------------------------------------------------
     BOOK APPOINTMENT form (index.html#appointment)
  ------------------------------------------------------------------ */
  var apptForm = $("#appointmentForm");
  var apptSelect = $("#a-service");

  function preselect(key) {
    if (!apptSelect || !key) return false;
    for (var i = 0; i < apptSelect.options.length; i++) {
      if (apptSelect.options[i].value === key) {
        apptSelect.value = key;
        var f = apptSelect.closest(".field");
        if (f) {
          f.classList.remove("invalid");
          f.classList.remove("flash"); void f.offsetWidth; f.classList.add("flash");
        }
        return true;
      }
    }
    return false;
  }

  // "Book" buttons: <a href="index.html?service=xray#appointment" data-service="xray">
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("[data-service]") : null;
    if (!a || !isHome || !apptForm) return;
    e.preventDefault();
    var key = a.getAttribute("data-service");
    preselect(key);
    var target = $("#appointment");
    if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    try { history.replaceState(null, "", "?service=" + encodeURIComponent(key) + "#appointment"); } catch (err) {}
  });

  if (apptForm) {
    var dateInput = apptForm.elements["date"];
    dateInput.setAttribute("min", todayISO());
    liveClear(apptForm);

    // Pre-select from URL (?service=xray)
    var qs = window.location.search.match(/[?&]service=([^&#]+)/);
    if (qs) preselect(decodeURIComponent(qs[1]));

    apptForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var F = apptForm;
      var name = val(F, "name"), phone = val(F, "phone"), age = val(F, "age");
      var gender = (F.querySelector('input[name="gender"]:checked') || {}).value || "";
      var service = val(F, "service"), date = val(F, "date"), slot = val(F, "slot");
      var discount = val(F, "discount"), note = val(F, "note");
      var ageN = parseInt(age, 10);

      setErr(F, "name", name.length < 2);
      setErr(F, "phone", !phoneOK(phone));
      setErr(F, "age", !(ageN >= 0 && ageN <= 120) || age === "");
      setErr(F, "gender", !gender);
      setErr(F, "service", !service);
      setErr(F, "date", !date || date < todayISO());
      setErr(F, "slot", !slot);
      if ($(".field.invalid", F)) { focusFirstError(F); return; }

      var serviceLabel = apptSelect.options[apptSelect.selectedIndex].text;
      var msg =
        "*NEW APPOINTMENT REQUEST*\n" +
        C.name + "\n" + LINE + "\n" +
        "*Patient Name:* " + name + "\n" +
        "*Phone:* " + phone + "\n" +
        "*Age / Gender:* " + ageN + " yrs / " + gender + "\n" +
        "*Service:* " + serviceLabel + "\n" +
        "*Preferred Date:* " + fmtDate(date) + "\n" +
        "*Time Slot:* " + slot + "\n" +
        "*Discount:* " + (discount || "None") + "\n" +
        (note ? "*Note:* " + note + "\n" : "") +
        LINE + "\nSent from the website booking form. Please confirm my appointment.";

      var url = openWA(msg);
      showModal(
        "Almost done – press Send!",
        "<p>WhatsApp has opened with your appointment details for <strong>" + fmtDate(date) + " (" + slot + ")</strong>.</p>" +
        "<p class=\"modal-hl\"><i class=\"fa-solid fa-paper-plane\"></i> Press <strong>Send</strong> in WhatsApp to submit your request.</p>" +
        "<p class=\"modal-small\">Our team will reply to confirm your time. Didn't open? Use the button below or call <a href=\"tel:" + C.mobileTel + "\">" + C.mobile + "</a>.</p>",
        url
      );
      F.reset();
      dateInput.setAttribute("min", todayISO());
    });
  }

  /* ------------------------------------------------------------------
     CONTACT form (contact.html)
  ------------------------------------------------------------------ */
  var contactForm = $("#contactForm");
  if (contactForm) {
    liveClear(contactForm);
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var F = contactForm;
      var name = val(F, "name"), phone = val(F, "phone"), email = val(F, "email");
      var subject = val(F, "subject"), message = val(F, "message");

      setErr(F, "name", name.length < 2);
      setErr(F, "phone", !phoneOK(phone));
      setErr(F, "email", email !== "" && !emailOK(email));
      setErr(F, "subject", !subject);
      setErr(F, "message", message.length < 5);
      if ($(".field.invalid", F)) { focusFirstError(F); return; }

      var msg =
        "*NEW ENQUIRY – WEBSITE*\n" +
        C.name + "\n" + LINE + "\n" +
        "*Name:* " + name + "\n" +
        "*Phone:* " + phone + "\n" +
        (email ? "*Email:* " + email + "\n" : "") +
        "*Subject:* " + subject + "\n" +
        "*Message:*\n" + message + "\n" + LINE;

      var url = openWA(msg);
      showModal(
        "Message ready – press Send!",
        "<p>WhatsApp has opened with your message.</p>" +
        "<p class=\"modal-hl\"><i class=\"fa-solid fa-paper-plane\"></i> Press <strong>Send</strong> in WhatsApp so we receive it.</p>" +
        "<p class=\"modal-small\">We usually reply within working hours (" + C.hours + ").</p>",
        url
      );
      F.reset();
    });
  }
})();
