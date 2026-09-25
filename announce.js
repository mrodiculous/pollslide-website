/* PollSlide marketing site — "new product" announcement card.
 *
 * Shown once per visitor (remembered in localStorage), never on the page it advertises,
 * and never on top of the cookie banner: it waits until that banner has been answered.
 * It is a non-blocking card, not a modal — the page stays usable behind it.
 * All text is plain text nodes, so i18n.js translates it like the rest of the page.
 *
 * To announce something new later: change ANNOUNCE_ID, the copy and the link below. */
(function () {
  var ANNOUNCE_ID = 'ps_announce_loopslide_v1';
  var TARGET = '/loopslide';

  try {
    if (/^\/loopslide(\.html)?\/?$/.test(location.pathname)) { localStorage.setItem(ANNOUNCE_ID, 'seen'); return; }
    if (localStorage.getItem(ANNOUNCE_ID)) return;
  } catch (e) { return; }   // no storage = we could never remember "seen", so don't nag

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function css() {
    if (document.getElementById('ps-ann-css')) return;
    var s = document.createElement('style'); s.id = 'ps-ann-css';
    s.textContent =
      '#ps-ann{position:fixed;right:20px;bottom:20px;z-index:9990;width:360px;max-width:calc(100vw - 32px);background:#11111d;color:#f4f4fc;border:1px solid rgba(255,255,255,.12);border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,.5),0 0 0 1px rgba(108,99,255,.25);font-family:"DM Sans",system-ui,sans-serif;overflow:hidden;transform:translateY(24px);opacity:0;transition:transform .45s cubic-bezier(.2,.8,.2,1.15),opacity .35s;}' +
      '#ps-ann.in{transform:none;opacity:1;}' +
      '#ps-ann .scr{position:relative;height:120px;background:radial-gradient(circle at 20% 20%,rgba(108,99,255,.55),transparent 60%),radial-gradient(circle at 85% 70%,rgba(255,101,132,.45),transparent 55%),#07070f;display:flex;align-items:center;justify-content:center;gap:14px;}' +
      '#ps-ann .tv{width:150px;height:86px;border:5px solid #262638;border-radius:9px;background:#0b0b15;padding:8px;display:flex;flex-direction:column;gap:5px;}' +
      '#ps-ann .tv i{display:block;height:9px;border-radius:5px;background:#1d1d33;overflow:hidden;position:relative;}' +
      '#ps-ann .tv i b{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#6c63ff,#ff6584);border-radius:5px;animation:psAnnBar 2.4s ease-in-out infinite alternate;}' +
      '#ps-ann .tv i:nth-child(2) b{animation-delay:-.8s;background:linear-gradient(90deg,#43e97b,#6c63ff);}#ps-ann .tv i:nth-child(3) b{animation-delay:-1.6s;background:linear-gradient(90deg,#f7b731,#ff6584);}' +
      '@keyframes psAnnBar{from{width:18%}to{width:92%}}' +
      '#ps-ann .ph{width:34px;height:62px;border:4px solid #262638;border-radius:9px;background:#0b0b15;display:flex;align-items:center;justify-content:center;font-size:16px;animation:psAnnTap 1.6s ease-in-out infinite;}' +
      '@keyframes psAnnTap{50%{transform:translateY(-5px) rotate(-4deg)}}' +
      '#ps-ann .x{position:absolute;top:8px;right:8px;width:30px;height:30px;border-radius:50%;border:none;background:rgba(0,0,0,.45);color:#fff;font-size:17px;line-height:30px;cursor:pointer;}' +
      '#ps-ann .x:hover{background:rgba(0,0,0,.7);}' +
      '#ps-ann .bd{padding:16px 18px 18px;}' +
      '#ps-ann .kick{display:inline-block;background:#ff6584;color:#fff;font-weight:700;font-size:11px;letter-spacing:.08em;border-radius:6px;padding:2px 8px;margin-bottom:8px;}' +
      '#ps-ann h2{font-family:Syne,"DM Sans",sans-serif;font-size:20px;line-height:1.2;margin:0 0 6px;}' +
      '#ps-ann p{color:#b4b4d4;font-size:14px;line-height:1.5;margin:0 0 10px;}' +
      '#ps-ann ul{list-style:none;margin:0 0 14px;padding:0;display:grid;gap:5px;font-size:13.5px;}' +
      '#ps-ann li{display:flex;gap:8px;}' +
      '#ps-ann .row{display:flex;gap:8px;}' +
      '#ps-ann .go{flex:1;text-align:center;background:#6c63ff;color:#fff;font-weight:700;font-size:14px;border-radius:11px;padding:11px 12px;text-decoration:none;}' +
      '#ps-ann .go:hover{background:#8b84ff;}' +
      '#ps-ann .later{background:transparent;color:#b4b4d4;border:1px solid rgba(255,255,255,.16);border-radius:11px;padding:11px 14px;font:600 14px "DM Sans",system-ui,sans-serif;cursor:pointer;}' +
      '#ps-ann .later:hover{color:#fff;}' +
      '#ps-ann :focus-visible{outline:3px solid #8b84ff;outline-offset:2px;}' +
      'body.light #ps-ann{background:#fff;color:#15152a;border-color:rgba(0,0,0,.1);box-shadow:0 24px 70px rgba(20,20,60,.22);}' +
      'body.light #ps-ann p{color:#5a5a78;}body.light #ps-ann .later{color:#5a5a78;border-color:rgba(0,0,0,.15);}' +
      '@media(max-width:560px){#ps-ann{right:16px;left:16px;bottom:16px;width:auto;}#ps-ann .scr{height:96px;}}' +
      '@media(prefers-reduced-motion:reduce){#ps-ann,#ps-ann *{animation:none!important;transition:none!important;}}';
    document.head.appendChild(s);
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function show() {
    if (document.getElementById('ps-ann')) return;
    css();
    var box = el('div'); box.id = 'ps-ann';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-labelledby', 'ps-ann-title');

    var scr = el('div', 'scr'); scr.setAttribute('aria-hidden', 'true');
    var tv = el('div', 'tv');
    for (var k = 0; k < 3; k++) { var i = el('i'); i.appendChild(el('b')); tv.appendChild(i); }
    scr.appendChild(tv); scr.appendChild(el('div', 'ph', '👆'));
    var x = el('button', 'x', '×'); x.type = 'button'; x.setAttribute('aria-label', 'Close');
    scr.appendChild(x);
    box.appendChild(scr);

    var bd = el('div', 'bd');
    bd.appendChild(el('span', 'kick', 'NEW'));
    var h = el('h2', null, 'Meet LoopSlide'); h.id = 'ps-ann-title'; bd.appendChild(h);
    bd.appendChild(el('p', null, 'Turn any TV into a game the room plays from their phones — for bars, events, lobbies and stores.'));
    var ul = el('ul');
    [['🔁', 'Your questions loop on screen, all day, on their own'],
     ['🏆', 'Live leaderboards, speed points and streaks'],
     ['📣', 'Your offers and media cards between rounds'],
     ['⇄', 'Import any PollSlide deck in one click']].forEach(function (r) {
      var li = el('li'); li.appendChild(el('span', null, r[0])); li.appendChild(el('span', null, r[1])); ul.appendChild(li);
    });
    bd.appendChild(ul);
    var row = el('div', 'row');
    var go = el('a', 'go', 'See LoopSlide'); go.href = TARGET;
    var later = el('button', 'later', 'Not now'); later.type = 'button';
    row.appendChild(go); row.appendChild(later); bd.appendChild(row);
    box.appendChild(bd);

    function close() {
      try { localStorage.setItem(ANNOUNCE_ID, 'dismissed'); } catch (e) {}
      box.classList.remove('in');
      document.removeEventListener('keydown', onKey);
      setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, reduce ? 0 : 400);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    x.onclick = close; later.onclick = close;
    go.onclick = function () { try { localStorage.setItem(ANNOUNCE_ID, 'clicked'); } catch (e) {} };
    document.addEventListener('keydown', onKey);

    document.body.appendChild(box);
    requestAnimationFrame(function () { requestAnimationFrame(function () { box.classList.add('in'); }); });
  }

  // Wait for the cookie banner to be answered, then give the visitor a moment with the page.
  function bannerOpen() {
    var b = document.getElementById('ps-consent-banner');
    if (!b) return false;
    var cs = getComputedStyle(b);
    return cs.display !== 'none' && cs.visibility !== 'hidden' && b.offsetHeight > 0;
  }
  var waited = 0;
  function tick() {
    if (bannerOpen()) { waited = 0; setTimeout(tick, 800); return; }
    if ((waited += 800) < 3200) { setTimeout(tick, 800); return; }
    show();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(tick, 800); });
  else setTimeout(tick, 800);
})();
