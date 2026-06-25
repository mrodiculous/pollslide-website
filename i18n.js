/* PollSlide marketing-site i18n.
   - Auto-detects the visitor's language from their browser (navigator.language) — this reflects
     the language THEIR device is set to (a better signal than geo-IP: a German speaker travelling
     in the US still gets German, VPNs don't break it, and no IP/location is read).
   - A dropdown (mounts into #langSelWrap) lets them override; the choice persists in localStorage.
   - Tag elements with data-i18n="key" (textContent), data-i18n-html="key" (innerHTML),
     or data-i18n-ph="key" (placeholder). English originals stay in the markup as the fallback.
*/
(function () {
  const NAMES = { en: 'English', es: 'Español', de: 'Deutsch', fr: 'Français', pt: 'Português', it: 'Italiano' };
  const SUP = Object.keys(NAMES);

  const I18N = {
    en: {
      'nav.products': 'Products', 'nav.how': 'How it works', 'nav.integrations': 'Integrations',
      'nav.pricing': 'Pricing', 'nav.faq': 'FAQ', 'nav.login': 'Log in', 'nav.try': 'Try Free',
      'hero.badge': 'One engine · four products · powered by Polly AI',
      'hero.h1': 'Make Every Slide<br><span class="grad">Come Alive</span>',
      'hero.sub': 'Live <b>polls</b>, async <b>surveys</b>, graded <b>quizzes</b> and <b>study sets</b> — running right over your Keynote, PowerPoint or Google Slides. <b>Polly AI</b> drafts them in seconds; your audience just scans a QR and watches results appear live.',
      'hero.cta1': 'Start for Free →', 'hero.cta2': 'See how it works',
      'hero.note': '<strong>No credit card.</strong> No app downloads for your audience. Free to try.',
    },
    es: {
      'nav.products': 'Productos', 'nav.how': 'Cómo funciona', 'nav.integrations': 'Integraciones',
      'nav.pricing': 'Precios', 'nav.faq': 'Preguntas', 'nav.login': 'Iniciar sesión', 'nav.try': 'Probar gratis',
      'hero.badge': 'Un motor · cuatro productos · con Polly AI',
      'hero.h1': 'Haz que cada diapositiva<br><span class="grad">cobre vida</span>',
      'hero.sub': '<b>Encuestas</b> en vivo, <b>sondeos</b> asíncronos, <b>cuestionarios</b> calificados y <b>sets de estudio</b> — sobre tu Keynote, PowerPoint o Google Slides. <b>Polly AI</b> los crea en segundos; tu público solo escanea un QR y ve los resultados en vivo.',
      'hero.cta1': 'Empieza gratis →', 'hero.cta2': 'Ver cómo funciona',
      'hero.note': '<strong>Sin tarjeta de crédito.</strong> Tu público no instala nada. Gratis para probar.',
    },
    de: {
      'nav.products': 'Produkte', 'nav.how': 'So funktioniert’s', 'nav.integrations': 'Integrationen',
      'nav.pricing': 'Preise', 'nav.faq': 'FAQ', 'nav.login': 'Anmelden', 'nav.try': 'Kostenlos testen',
      'hero.badge': 'Eine Engine · vier Produkte · mit Polly AI',
      'hero.h1': 'Erwecke jede Folie<br><span class="grad">zum Leben</span>',
      'hero.sub': 'Live-<b>Umfragen</b>, asynchrone <b>Befragungen</b>, benotete <b>Quizze</b> und <b>Lernsets</b> — direkt über deinem Keynote, PowerPoint oder Google Slides. <b>Polly AI</b> erstellt sie in Sekunden; dein Publikum scannt einfach einen QR-Code und sieht die Ergebnisse live.',
      'hero.cta1': 'Kostenlos starten →', 'hero.cta2': 'So funktioniert’s',
      'hero.note': '<strong>Keine Kreditkarte.</strong> Keine App-Downloads für dein Publikum. Kostenlos testen.',
    },
    fr: {
      'nav.products': 'Produits', 'nav.how': 'Comment ça marche', 'nav.integrations': 'Intégrations',
      'nav.pricing': 'Tarifs', 'nav.faq': 'FAQ', 'nav.login': 'Connexion', 'nav.try': 'Essai gratuit',
      'hero.badge': 'Un moteur · quatre produits · propulsé par Polly AI',
      'hero.h1': 'Donnez vie à<br><span class="grad">chaque diapo</span>',
      'hero.sub': '<b>Sondages</b> en direct, <b>enquêtes</b> asynchrones, <b>quiz</b> notés et <b>jeux de révision</b> — directement sur votre Keynote, PowerPoint ou Google Slides. <b>Polly AI</b> les rédige en quelques secondes ; votre public scanne un QR et voit les résultats en direct.',
      'hero.cta1': 'Commencer gratuitement →', 'hero.cta2': 'Voir comment ça marche',
      'hero.note': '<strong>Sans carte bancaire.</strong> Aucune appli à installer pour votre public. Essai gratuit.',
    },
    pt: {
      'nav.products': 'Produtos', 'nav.how': 'Como funciona', 'nav.integrations': 'Integrações',
      'nav.pricing': 'Preços', 'nav.faq': 'Perguntas', 'nav.login': 'Entrar', 'nav.try': 'Testar grátis',
      'hero.badge': 'Um motor · quatro produtos · com Polly AI',
      'hero.h1': 'Faça cada slide<br><span class="grad">ganhar vida</span>',
      'hero.sub': '<b>Enquetes</b> ao vivo, <b>pesquisas</b> assíncronas, <b>quizzes</b> avaliados e <b>conjuntos de estudo</b> — direto sobre seu Keynote, PowerPoint ou Google Slides. A <b>Polly AI</b> cria tudo em segundos; seu público só escaneia um QR e vê os resultados ao vivo.',
      'hero.cta1': 'Começar grátis →', 'hero.cta2': 'Ver como funciona',
      'hero.note': '<strong>Sem cartão de crédito.</strong> Seu público não instala nada. Grátis para testar.',
    },
    it: {
      'nav.products': 'Prodotti', 'nav.how': 'Come funziona', 'nav.integrations': 'Integrazioni',
      'nav.pricing': 'Prezzi', 'nav.faq': 'FAQ', 'nav.login': 'Accedi', 'nav.try': 'Prova gratis',
      'hero.badge': 'Un motore · quattro prodotti · con Polly AI',
      'hero.h1': 'Dai vita a<br><span class="grad">ogni slide</span>',
      'hero.sub': '<b>Sondaggi</b> live, <b>survey</b> asincroni, <b>quiz</b> con voto e <b>set di studio</b> — direttamente sopra Keynote, PowerPoint o Google Slides. <b>Polly AI</b> li crea in secondi; il tuo pubblico scansiona un QR e vede i risultati in diretta.',
      'hero.cta1': 'Inizia gratis →', 'hero.cta2': 'Scopri come funziona',
      'hero.note': '<strong>Nessuna carta di credito.</strong> Il tuo pubblico non installa nulla. Gratis da provare.',
    },
  };

  function detect() {
    const saved = localStorage.getItem('ps_lang');
    if (saved && SUP.includes(saved)) return saved;
    const nav = (navigator.language || navigator.userLanguage || 'en').slice(0, 2).toLowerCase();
    return SUP.includes(nav) ? nav : 'en';
  }

  let lang = detect();

  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    const dict = I18N[l] || {}, en = I18N.en;
    const get = k => (dict[k] != null ? dict[k] : en[k]);
    document.querySelectorAll('[data-i18n]').forEach(el => { const v = get(el.getAttribute('data-i18n')); if (v != null) el.textContent = v; });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { const v = get(el.getAttribute('data-i18n-html')); if (v != null) el.innerHTML = v; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { const v = get(el.getAttribute('data-i18n-ph')); if (v != null) el.setAttribute('placeholder', v); });
    const sel = document.getElementById('langSel'); if (sel) sel.value = l;
  }

  function setLang(l) { localStorage.setItem('ps_lang', l); apply(l); }
  window.psSetLang = setLang;

  function mount() {
    const host = document.getElementById('langSelWrap');
    if (host && !document.getElementById('langSel')) {
      const sel = document.createElement('select');
      sel.id = 'langSel';
      sel.setAttribute('aria-label', 'Language');
      sel.style.cssText = 'background:var(--surface2);color:var(--text);border:1px solid var(--border2);border-radius:9px;padding:7px 8px;font-size:13px;font-family:inherit;cursor:pointer;';
      SUP.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = '🌐 ' + NAMES[c]; sel.appendChild(o); });
      sel.addEventListener('change', () => setLang(sel.value));
      host.appendChild(sel);
    }
    apply(lang);
  }

  if (document.readyState !== 'loading') mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
