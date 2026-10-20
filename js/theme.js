(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function current() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setIcon(mode) {
    btn.textContent = mode === "dark" ? "☀" : "☾";
    btn.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
    btn.setAttribute("aria-label", mode === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  setIcon(current());

  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    setIcon(next);
  });
})();
