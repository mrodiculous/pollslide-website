/* PollSlide — applies hand-authored legal-body translations by content hash.
 *
 * The legal bodies carry data-i18n-skip so i18n.js's text-node walker leaves them
 * alone (legal prose is dense with inline markup and would fragment badly). Instead
 * this replaces whole LEAF BLOCKS, preserving <strong>/<a href> exactly.
 *
 * Keys are a djb2/base36 hash of the block's normalised English innerHTML — the same
 * function used by the build script, so translations map without touching the HTML.
 * A block with no translation simply stays English.
 *
 * Load AFTER legal-body-translations.js and BEFORE i18n.js.
 */
(function () {
  var BLOCK = 'p,li,h2,h3,h4,td,th,div';   // leaf divs too (e.g. .highlight-box)

  function djb2(s) {                       // must match scripts' Python djb2 exactly
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
    return h.toString(36);
  }
  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function leafBlocks(root) {
    var out = [];
    root.querySelectorAll(BLOCK).forEach(function (el) {
      if (el.querySelector(BLOCK)) return;              // leaf only — never translate twice
      if (el.hasAttribute('data-i18n-skip')) return;    // the English-authoritative note
      out.push(el);
    });
    return out;
  }

  window.psApplyLegal = function (lang) {
    var body = document.querySelector('.legal-body');
    if (!body) return;
    var dict = (window.PS_LEGAL && window.PS_LEGAL[lang]) || null;
    leafBlocks(body).forEach(function (el) {
      // capture the pristine English ONCE, before any replacement
      if (el._psLegalEN === undefined) {
        el._psLegalEN = el.innerHTML;
        el._psLegalKey = djb2(norm(el.innerHTML));
      }
      var tr = dict && dict[el._psLegalKey];
      el.innerHTML = tr != null ? tr : el._psLegalEN;   // no translation → stay English
    });
  };

  // Apply on load for the language i18n.js has already chosen (it also calls us on change).
  function boot() {
    var l = document.documentElement.lang || localStorage.getItem('ps_lang') || 'en';
    window.psApplyLegal(l);
  }
  if (document.readyState !== 'loading') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
