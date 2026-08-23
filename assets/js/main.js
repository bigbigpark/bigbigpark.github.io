/* 한국어 / 영어 전환.
   실제 텍스트 교체는 CSS 가 한다 (html[data-lang] + .t-ko/.t-en).
   여기서는 상태만 바꾸므로, 자바스크립트가 꺼져 있어도 한국어 문구는 그대로 보인다. */
(function () {
  "use strict";

  var STORAGE_KEY = "tennismap.lang";
  var SUPPORTED = ["ko", "en"];
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-set-lang]");

  function pickInitialLang() {
    var saved;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    if (SUPPORTED.indexOf(saved) !== -1) return saved;

    var nav = (navigator.language || "ko").toLowerCase();
    return nav.indexOf("ko") === 0 ? "ko" : "en";
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "ko";

    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);

    for (var i = 0; i < buttons.length; i++) {
      var isActive = buttons[i].getAttribute("data-set-lang") === lang;
      buttons[i].setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* 사파리 비공개 모드 등 */ }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      applyLang(event.currentTarget.getAttribute("data-set-lang"));
    });
  }

  applyLang(pickInitialLang());
})();
