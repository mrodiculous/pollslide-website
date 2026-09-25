/* PollSlide marketing site — the interactive layer.
 *
 * Purely decorative: nothing on the site depends on it, every effect checks that the
 * element it enhances exists, and anyone who asks their device for reduced motion gets
 * the plain, still page. Text it adds is plain text nodes, so i18n.js translates it;
 * numbers live in their own spans so a changing number never breaks a translation.
 *
 *   1. Votable hero  — the home page's poll mockup takes real taps and live "votes"
 *   2. Spotlight     — cards glow where the pointer is
 *   3. Tilt          — showcase mockups lean gently toward the pointer
 *   4. Scroll meter  — a thin progress line under the nav
 */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;

  function addCss(txt) { var s = document.createElement('style'); s.textContent = txt; document.head.appendChild(s); }

  /* 1 ── Votable hero ─────────────────────────────────────────────────────────── */
  function votableHero() {
    var hv = document.querySelector('.hero-visual');
    if (!hv) return;
    var choices = hv.querySelectorAll('.hv-choice');
    var opts = hv.querySelectorAll('.hv-opt');
    if (choices.length < 2 || choices.length !== opts.length) return;
    var fills = [], pcts = [];
    for (var i = 0; i < opts.length; i++) {
      fills.push(opts[i].querySelector('.hv-fill'));
      pcts.push(opts[i].querySelector('.pct'));
      if (!fills[i] || !pcts[i]) return;
    }
    // Start from the percentages already on the page, as vote counts.
    var counts = pcts.map(function (p) { return parseInt(p.textContent, 10) || 1; });
    var mine = -1;

    addCss('.hero-visual .hv-choice{cursor:pointer;transition:border-color .2s,background .2s,transform .12s;}' +
      '.hero-visual .hv-choice:hover{border-color:var(--accent,#6c63ff);}' +
      '.hero-visual .hv-choice:active{transform:scale(.97);}' +
      '.hero-visual .hv-fill{transition:width .8s cubic-bezier(.2,.8,.2,1);}' +
      '.hero-visual .ps-wow-hint{display:inline-block;margin-top:8px;font-size:11.5px;font-weight:700;color:var(--accent3,#43e97b);}' +
      '.hero-visual .ps-wow-pop{position:absolute;pointer-events:none;font-weight:800;font-size:13px;color:var(--accent3,#43e97b);animation:psWowPop 1s ease-out forwards;}' +
      '@keyframes psWowPop{to{transform:translateY(-26px);opacity:0;}}');

    function render() {
      var total = counts.reduce(function (a, b) { return a + b; }, 0);
      var best = counts.indexOf(Math.max.apply(null, counts));
      for (var i = 0; i < counts.length; i++) {
        var pc = Math.round(counts[i] * 100 / total);
        fills[i].style.width = pc + '%';
        fills[i].classList.toggle('win', i === best);
        pcts[i].textContent = pc + '%';
      }
    }
    function select(i) {
      for (var k = 0; k < choices.length; k++) {
        choices[k].classList.toggle('sel', k === i);
        choices[k].setAttribute('aria-pressed', k === i ? 'true' : 'false');
      }
    }
    function pop(target) {
      if (reduce) return;
      var r = target.getBoundingClientRect(), h = hv.getBoundingClientRect();
      var p = document.createElement('span'); p.className = 'ps-wow-pop'; p.textContent = '+1';
      if (getComputedStyle(hv).position === 'static') hv.style.position = 'relative';
      p.style.left = (r.right - h.left - 30) + 'px'; p.style.top = (r.top - h.top) + 'px';
      hv.appendChild(p); setTimeout(function () { p.remove(); }, 1100);
    }
    for (var c = 0; c < choices.length; c++) (function (i) {
      var el = choices[i];
      el.setAttribute('role', 'button'); el.setAttribute('tabindex', '0');
      el.onclick = function () {
        if (mine === i) return;
        if (mine >= 0) counts[mine] = Math.max(1, counts[mine] - 1);
        mine = i; counts[i] += 1; select(i); render(); pop(opts[i]);
        if (hint) hint.textContent = 'Your vote is in — that’s how fast it feels.';
      };
      el.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.onclick(); } };
    })(c);
    // Nobody has voted yet on this visit: clear the pre-selected answer so the tap is theirs.
    select(-1);

    var phone = hv.querySelector('.hv-phone');
    var hint = null;
    if (phone) { hint = document.createElement('div'); hint.className = 'ps-wow-hint'; hint.textContent = 'Tap an answer to vote 👆'; phone.appendChild(hint); }

    // The rest of the "room" keeps voting while the hero is on screen.
    if (!reduce) {
      var visible = true;
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe(hv);
      setInterval(function () {
        if (!visible || document.hidden) return;
        // Weighted toward the current leader so the race looks like a real room.
        var total = counts.reduce(function (a, b) { return a + b; }, 0), r = Math.random() * total, i = 0;
        while (r > counts[i]) { r -= counts[i]; i++; }
        if (Math.random() < .35) i = Math.floor(Math.random() * counts.length);
        counts[i] += 1; render();
      }, 1400);
    }
    render();
  }

  /* 2 ── Spotlight cards ──────────────────────────────────────────────────────── */
  function spotlight() {
    if (!finePointer || reduce) return;
    addCss('.ps-glow{background-image:radial-gradient(420px circle at var(--ps-mx,-999px) var(--ps-my,-999px),rgba(108,99,255,.13),transparent 42%)!important;}');
    var els = document.querySelectorAll('.card,.pcard,.step-card');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      // Only cards with a flat background — never paint over a card's own gradient or image.
      if (getComputedStyle(el).backgroundImage !== 'none') continue;
      el.classList.add('ps-glow');
      el.addEventListener('pointermove', function (e) {
        var r = this.getBoundingClientRect();
        this.style.setProperty('--ps-mx', (e.clientX - r.left) + 'px');
        this.style.setProperty('--ps-my', (e.clientY - r.top) + 'px');
      });
      el.addEventListener('pointerleave', function () { this.style.setProperty('--ps-mx', '-999px'); });
    }
  }

  /* 3 ── Tilt showcase mockups ────────────────────────────────────────────────── */
  function tilt() {
    if (!finePointer || reduce) return;
    var els = document.querySelectorAll('.hero-visual,.ps-stage,.stage .tv');
    for (var i = 0; i < els.length; i++) (function (el) {
      el.style.transition = (el.style.transition ? el.style.transition + ',' : '') + 'transform .4s ease';
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = 'perspective(1400px) rotateX(' + (-y * 4).toFixed(2) + 'deg) rotateY(' + (x * 5).toFixed(2) + 'deg)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    })(els[i]);
  }

  /* 4 ── Scroll meter ─────────────────────────────────────────────────────────── */
  function meter() {
    if (reduce) return;
    var bar = document.createElement('div');
    bar.setAttribute('aria-hidden', 'true');
    bar.style.cssText = 'position:fixed;left:0;top:0;height:3px;width:100%;z-index:1000;pointer-events:none;transform-origin:left;transform:scaleX(0);background:linear-gradient(90deg,#6c63ff,#ff6584,#f7b731);';
    document.body.appendChild(bar);
    var ticking = false;
    function update() {
      ticking = false;
      var h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
    }
    addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  function init() {
    [votableHero, spotlight, tilt, meter].forEach(function (f) { try { f(); } catch (e) { /* decorative only */ } });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
