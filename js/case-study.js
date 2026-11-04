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

  // Facts row — only show the ones that exist. Supports new fields
  // (type, context, format, timeline) and old ones (role, year, duration).
  var timeline = s.timeline || [s.duration, s.year].filter(Boolean).join(" · ");
  var facts = [
    ["Type", s.type || s.role],
    ["Context", s.context],
    ["Format", s.format],
    ["Timeline", timeline]
  ].filter(function (f) { return f[1]; });

  var factsHtml = facts.map(function (f) {
    return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>";
  }).join("");

  // Numbered sections, Karissa-style: eyebrow "01 — Label", bold headline, body.
  var sections = (s.sections || []).map(function (sec, i) {
    var n = ("0" + (i + 1)).slice(-2);
    var eyebrow = '<p class="cs-sec-num">' + n + (sec.label ? " / " + esc(sec.label) : "") + "</p>";
    var head = sec.heading ? "<h2>" + esc(sec.heading) + "</h2>" : "";
    var paras = [].concat(sec.body || []).map(function (p) { return "<p>" + p + "</p>"; }).join("");
    return '<section class="cs-sec">' + eyebrow + head + paras + "</section>";
  }).join("");

  root.innerHTML =
    '<div class="wrap cs-hero">' +
    '<a class="back" href="index.html#work">← All work</a>' +
    '<p class="eyebrow cs-tags">' + (s.tags || []).map(esc).join(" · ") + "</p>" +
    "<h1>" + esc(s.title) + "</h1>" +
    '<p class="lede">' + esc(s.summary) + "</p>" +
    (factsHtml ? '<dl class="facts">' + factsHtml + "</dl>" : "") +
    (s.image ? '<img class="cs-hero-img" src="' + esc(s.image) + '" alt="' + esc(s.imageAlt || "") + '">' : "") +
    "</div>" +
    '<div class="wrap cs-body">' + sections + "</div>" +
    (studies.length > 1
      ? '<div class="wrap next"><p class="eyebrow cs-tags">Next case study</p>' +
        '<a class="big-link" href="case-study.html?slug=' + encodeURIComponent(next.slug) + '">' + esc(next.title) + " →</a></div>"
      : "");
})();
