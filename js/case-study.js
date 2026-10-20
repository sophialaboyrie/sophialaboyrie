(function () {
  var studies = window.CASE_STUDIES || [];
  var slug = new URLSearchParams(location.search).get("slug");
  var idx = studies.findIndex(function (s) { return s.slug === slug; });
  var root = document.getElementById("case-root");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (idx === -1) {
    document.title = "Case study not found · Sophia Laboyrie";
    root.innerHTML =
      '<div class="wrap cs-hero"><h1>Case study not found</h1>' +
      '<p class="lede">That link doesn\'t match a case study.</p>' +
      '<a class="btn" href="index.html#work">Back to selected work</a></div>';
    return;
  }

  var s = studies[idx];
  var next = studies[(idx + 1) % studies.length];
  document.title = s.title + " · Sophia Laboyrie";

  var sections = (s.sections || []).map(function (sec) {
    var paras = [].concat(sec.body || []).map(function (p) { return "<p>" + p + "</p>"; }).join("");
    return "<section><h2>" + esc(sec.heading) + "</h2>" + paras + "</section>";
  }).join("");

  root.innerHTML =
    '<div class="wrap cs-hero">' +
    '<a class="back" href="index.html#work">← Selected work</a>' +
    '<p class="eyebrow">' + (s.tags || []).map(esc).join(" / ") + "</p>" +
    "<h1>" + esc(s.title) + "</h1>" +
    '<p class="lede">' + esc(s.summary) + "</p>" +
    '<dl class="facts">' +
    "<div><dt>Year</dt><dd>" + esc(s.year) + "</dd></div>" +
    "<div><dt>Role</dt><dd>" + esc(s.role) + "</dd></div>" +
    "<div><dt>Duration</dt><dd>" + esc(s.duration) + "</dd></div>" +
    "</dl>" +
    (s.image ? '<img class="cs-hero-img" src="' + esc(s.image) + '" alt="' + esc(s.imageAlt || "") + '">' : "") +
    "</div>" +
    '<div class="wrap cs-body">' + sections + "</div>" +
    (studies.length > 1
      ? '<div class="wrap next"><p class="eyebrow">Next case study</p>' +
        '<a class="big-link" href="case-study.html?slug=' + encodeURIComponent(next.slug) + '">' + esc(next.title) + " →</a></div>"
      : "");
})();
