(function () {
  document.documentElement.classList.add("js");

  var studies = window.CASE_STUDIES || [];
  var list = document.getElementById("case-list");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (list) {
    list.innerHTML = studies.map(function (s, i) {
      return (
        '<li class="card card--' + esc(s.color || "peach") + ' reveal" style="transition-delay:' + (i * 0.08) + 's">' +
        '<span class="meta">' + esc([s.type, s.timeline].filter(Boolean).join(" · ")) + "</span>" +
        '<h3><a href="case-study.html?slug=' + encodeURIComponent(s.slug) + '">' + esc(s.title) + "</a></h3>" +
        "<p>" + esc(s.summary) + "</p>" +
        '<ul class="tags">' + (s.tags || []).map(function (t) { return '<li class="tag">' + esc(t) + "</li>"; }).join("") + "</ul>" +
        '<span class="more" aria-hidden="true">Read case study →</span>' +
        "</li>"
      );
    }).join("");
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();
