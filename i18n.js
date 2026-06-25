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
      'nav.setup': 'Setup guide', 'nav.features': 'Features', 'cta.ready': 'Ready to try it?', 'cta.open': 'Open PollSlide →', 'cta.openShort': 'Open PollSlide', 'faq.common': 'Common questions', 'faq.freq': 'Frequently asked questions',
      'dl.h1': 'PollSlide Companion<br>for Mac', 'dl.lead': 'Live poll results that float over your Keynote slides — and appear automatically when your QR is on screen.', 'dl.status': 'Awaiting Apple App Store review', 'dl.h2steps': 'Up and running in three steps', 'dl.h2feat': "What's in the app", 'dl.h2sys': 'System requirements',
      'set.h1': 'Up and running in <span class="accent">six steps</span>', 'set.lead': 'Build a <strong>poll, survey, quiz or study set</strong> — by hand or with <strong>✨ Polly AI</strong> — drop a QR on your slide (or share a link / email it), and watch answers roll in live.', 'set.h2_1': 'Create your first project', 'set.h2_2': 'Put the QR code on your slide', 'set.h2_3': 'Present from Keynote — normally', 'set.h2_4': 'Install the Mac companion app', 'set.h2_5': "Go live — it's automatic", 'set.h2_6': 'See results, export & keep your data',
      'price.h1': 'One price, the whole suite', 'price.lead': 'Polls, surveys, quizzes and study sets — all in one plan. Start free; upgrade when you need more participants, Polly AI, or team features.',
      'int.h1': 'PollSlide in <span class="accent">your slides</span>', 'int.lead': 'Keynote works today via the Mac companion. The PowerPoint and Google Slides add-ins are built and <strong>in review with each platform</strong> — here\'s the status, how to set each one up, and a walkthrough video.', 'int.mac': 'Mac Companion (Keynote)', 'int.macSub': "A floating window that shows live results over your Keynote slides and auto-detects your poll's QR.", 'int.macStatus': 'Awaiting Apple App Store review', 'int.ppt': 'PowerPoint Add-in', 'int.pptSub': 'Works in PowerPoint on Windows, Mac and the web — insert live polls and results right onto your slides.', 'int.pptStatus': 'Awaiting Microsoft AppSource approval', 'int.gs': 'Google Slides Add-in', 'int.gsSub': 'Bring live polls into Google Slides from the Extensions menu — no app to install for your audience.', 'int.gsStatus': 'Awaiting Google Workspace Marketplace approval', 'int.howto': 'How to set it up', 'int.video': 'Walkthrough video — coming soon', 'int.ctah': "Don't want to wait?",
    },
    es: {
      'nav.products': 'Productos', 'nav.how': 'Cómo funciona', 'nav.integrations': 'Integraciones',
      'nav.pricing': 'Precios', 'nav.faq': 'Preguntas', 'nav.login': 'Iniciar sesión', 'nav.try': 'Probar gratis',
      'hero.badge': 'Un motor · cuatro productos · con Polly AI',
      'hero.h1': 'Haz que cada diapositiva<br><span class="grad">cobre vida</span>',
      'hero.sub': '<b>Encuestas</b> en vivo, <b>sondeos</b> asíncronos, <b>cuestionarios</b> calificados y <b>sets de estudio</b> — sobre tu Keynote, PowerPoint o Google Slides. <b>Polly AI</b> los crea en segundos; tu público solo escanea un QR y ve los resultados en vivo.',
      'hero.cta1': 'Empieza gratis →', 'hero.cta2': 'Ver cómo funciona',
      'hero.note': '<strong>Sin tarjeta de crédito.</strong> Tu público no instala nada. Gratis para probar.',
      'nav.setup': 'Guía de configuración', 'nav.features': 'Funciones', 'cta.ready': '¿Listo para probarlo?', 'cta.open': 'Abrir PollSlide →', 'cta.openShort': 'Abrir PollSlide', 'faq.common': 'Preguntas frecuentes', 'faq.freq': 'Preguntas frecuentes',
      'dl.h1': 'PollSlide Companion<br>para Mac', 'dl.lead': 'Resultados de encuestas en vivo que flotan sobre tus diapositivas de Keynote — y aparecen automáticamente cuando tu QR está en pantalla.', 'dl.status': 'En revisión por la App Store de Apple', 'dl.h2steps': 'Listo en tres pasos', 'dl.h2feat': 'Qué incluye la app', 'dl.h2sys': 'Requisitos del sistema',
      'set.h1': 'Listo en <span class="accent">seis pasos</span>', 'set.lead': 'Crea una <strong>encuesta, sondeo, cuestionario o set de estudio</strong> — a mano o con <strong>✨ Polly AI</strong> — pon un QR en tu diapositiva (o comparte un enlace / envíalo por correo) y observa las respuestas en vivo.', 'set.h2_1': 'Crea tu primer proyecto', 'set.h2_2': 'Pon el código QR en tu diapositiva', 'set.h2_3': 'Presenta desde Keynote — con normalidad', 'set.h2_4': 'Instala la app companion para Mac', 'set.h2_5': 'Ponlo en marcha — es automático', 'set.h2_6': 'Ve resultados, exporta y conserva tus datos',
      'price.h1': 'Un precio, toda la suite', 'price.lead': 'Encuestas, sondeos, cuestionarios y sets de estudio — todo en un plan. Empieza gratis; mejora cuando necesites más participantes, Polly AI o funciones de equipo.',
      'int.h1': 'PollSlide en <span class="accent">tus diapositivas</span>', 'int.lead': 'Keynote ya funciona con la app companion para Mac. Los complementos de PowerPoint y Google Slides están listos y <strong>en revisión por cada plataforma</strong> — aquí tienes el estado, cómo configurar cada uno y un video guía.', 'int.mac': 'Companion para Mac (Keynote)', 'int.macSub': 'Una ventana flotante que muestra resultados en vivo sobre tus diapositivas de Keynote y detecta el QR de tu encuesta automáticamente.', 'int.macStatus': 'En revisión por la App Store de Apple', 'int.ppt': 'Complemento para PowerPoint', 'int.pptSub': 'Funciona en PowerPoint en Windows, Mac y la web — inserta encuestas y resultados en vivo en tus diapositivas.', 'int.pptStatus': 'En revisión por Microsoft AppSource', 'int.gs': 'Complemento para Google Slides', 'int.gsSub': 'Lleva encuestas en vivo a Google Slides desde el menú Extensiones — tu público no instala nada.', 'int.gsStatus': 'En revisión por Google Workspace Marketplace', 'int.howto': 'Cómo configurarlo', 'int.video': 'Video guía — próximamente', 'int.ctah': '¿No quieres esperar?',
    },
    de: {
      'nav.products': 'Produkte', 'nav.how': 'So funktioniert’s', 'nav.integrations': 'Integrationen',
      'nav.pricing': 'Preise', 'nav.faq': 'FAQ', 'nav.login': 'Anmelden', 'nav.try': 'Kostenlos testen',
      'hero.badge': 'Eine Engine · vier Produkte · mit Polly AI',
      'hero.h1': 'Erwecke jede Folie<br><span class="grad">zum Leben</span>',
      'hero.sub': 'Live-<b>Umfragen</b>, asynchrone <b>Befragungen</b>, benotete <b>Quizze</b> und <b>Lernsets</b> — direkt über deinem Keynote, PowerPoint oder Google Slides. <b>Polly AI</b> erstellt sie in Sekunden; dein Publikum scannt einfach einen QR-Code und sieht die Ergebnisse live.',
      'hero.cta1': 'Kostenlos starten →', 'hero.cta2': 'So funktioniert’s',
      'hero.note': '<strong>Keine Kreditkarte.</strong> Keine App-Downloads für dein Publikum. Kostenlos testen.',
      'nav.setup': 'Einrichtung', 'nav.features': 'Funktionen', 'cta.ready': 'Bereit, es auszuprobieren?', 'cta.open': 'PollSlide öffnen →', 'cta.openShort': 'PollSlide öffnen', 'faq.common': 'Häufige Fragen', 'faq.freq': 'Häufig gestellte Fragen',
      'dl.h1': 'PollSlide Companion<br>für Mac', 'dl.lead': 'Live-Umfrageergebnisse, die über deinen Keynote-Folien schweben — und automatisch erscheinen, sobald dein QR-Code auf dem Bildschirm ist.', 'dl.status': 'In Prüfung durch den Apple App Store', 'dl.h2steps': 'In drei Schritten startklar', 'dl.h2feat': 'Was die App kann', 'dl.h2sys': 'Systemvoraussetzungen',
      'set.h1': 'In <span class="accent">sechs Schritten</span> startklar', 'set.lead': 'Erstelle eine <strong>Umfrage, Befragung, ein Quiz oder Lernset</strong> — von Hand oder mit <strong>✨ Polly AI</strong> — platziere einen QR-Code auf deiner Folie (oder teile einen Link / per E-Mail) und sieh die Antworten live eintreffen.', 'set.h2_1': 'Erstelle dein erstes Projekt', 'set.h2_2': 'Platziere den QR-Code auf deiner Folie', 'set.h2_3': 'Präsentiere aus Keynote — ganz normal', 'set.h2_4': 'Installiere die Mac-Companion-App', 'set.h2_5': 'Geh live — automatisch', 'set.h2_6': 'Ergebnisse sehen, exportieren & Daten behalten',
      'price.h1': 'Ein Preis, die ganze Suite', 'price.lead': 'Umfragen, Befragungen, Quizze und Lernsets — alles in einem Plan. Kostenlos starten; upgraden, wenn du mehr Teilnehmer, Polly AI oder Team-Funktionen brauchst.',
      'int.h1': 'PollSlide in <span class="accent">deinen Folien</span>', 'int.lead': 'Keynote funktioniert heute über die Mac-Companion-App. Die Add-ins für PowerPoint und Google Slides sind fertig und <strong>bei jeder Plattform in Prüfung</strong> — hier sind der Status, die Einrichtung und ein Walkthrough-Video.', 'int.mac': 'Mac Companion (Keynote)', 'int.macSub': 'Ein schwebendes Fenster, das Live-Ergebnisse über deinen Keynote-Folien zeigt und den QR-Code deiner Umfrage automatisch erkennt.', 'int.macStatus': 'In Prüfung durch den Apple App Store', 'int.ppt': 'PowerPoint-Add-in', 'int.pptSub': 'Funktioniert in PowerPoint unter Windows, Mac und im Web — füge Live-Umfragen und Ergebnisse direkt in deine Folien ein.', 'int.pptStatus': 'In Prüfung durch Microsoft AppSource', 'int.gs': 'Google-Slides-Add-in', 'int.gsSub': 'Bring Live-Umfragen über das Menü „Erweiterungen“ in Google Slides — dein Publikum installiert nichts.', 'int.gsStatus': 'In Prüfung durch den Google Workspace Marketplace', 'int.howto': 'So richtest du es ein', 'int.video': 'Walkthrough-Video — folgt in Kürze', 'int.ctah': 'Nicht warten wollen?',
    },
    fr: {
      'nav.products': 'Produits', 'nav.how': 'Comment ça marche', 'nav.integrations': 'Intégrations',
      'nav.pricing': 'Tarifs', 'nav.faq': 'FAQ', 'nav.login': 'Connexion', 'nav.try': 'Essai gratuit',
      'hero.badge': 'Un moteur · quatre produits · propulsé par Polly AI',
      'hero.h1': 'Donnez vie à<br><span class="grad">chaque diapo</span>',
      'hero.sub': '<b>Sondages</b> en direct, <b>enquêtes</b> asynchrones, <b>quiz</b> notés et <b>jeux de révision</b> — directement sur votre Keynote, PowerPoint ou Google Slides. <b>Polly AI</b> les rédige en quelques secondes ; votre public scanne un QR et voit les résultats en direct.',
      'hero.cta1': 'Commencer gratuitement →', 'hero.cta2': 'Voir comment ça marche',
      'hero.note': '<strong>Sans carte bancaire.</strong> Aucune appli à installer pour votre public. Essai gratuit.',
      'nav.setup': 'Guide de configuration', 'nav.features': 'Fonctionnalités', 'cta.ready': 'Prêt à l\'essayer ?', 'cta.open': 'Ouvrir PollSlide →', 'cta.openShort': 'Ouvrir PollSlide', 'faq.common': 'Questions courantes', 'faq.freq': 'Questions fréquentes',
      'dl.h1': 'PollSlide Companion<br>pour Mac', 'dl.lead': 'Des résultats de sondage en direct qui flottent au-dessus de vos diapos Keynote — et apparaissent automatiquement dès que votre QR est à l\'écran.', 'dl.status': 'En cours d\'examen par l\'App Store d\'Apple', 'dl.h2steps': 'Opérationnel en trois étapes', 'dl.h2feat': 'Ce que contient l\'app', 'dl.h2sys': 'Configuration requise',
      'set.h1': 'Opérationnel en <span class="accent">six étapes</span>', 'set.lead': 'Créez un <strong>sondage, une enquête, un quiz ou un jeu de révision</strong> — à la main ou avec <strong>✨ Polly AI</strong> — placez un QR sur votre diapo (ou partagez un lien / par e-mail) et regardez les réponses arriver en direct.', 'set.h2_1': 'Créez votre premier projet', 'set.h2_2': 'Placez le QR code sur votre diapo', 'set.h2_3': 'Présentez depuis Keynote — normalement', 'set.h2_4': 'Installez l\'app companion pour Mac', 'set.h2_5': 'Passez en direct — c\'est automatique', 'set.h2_6': 'Voyez les résultats, exportez et conservez vos données',
      'price.h1': 'Un prix, toute la suite', 'price.lead': 'Sondages, enquêtes, quiz et jeux de révision — le tout dans un seul forfait. Commencez gratuitement ; passez à l\'offre supérieure quand vous avez besoin de plus de participants, de Polly AI ou de fonctions d\'équipe.',
      'int.h1': 'PollSlide dans <span class="accent">vos diapos</span>', 'int.lead': 'Keynote fonctionne déjà via l\'app companion pour Mac. Les add-ins PowerPoint et Google Slides sont prêts et <strong>en cours d\'examen par chaque plateforme</strong> — voici le statut, comment configurer chacun et une vidéo de démonstration.', 'int.mac': 'Companion Mac (Keynote)', 'int.macSub': 'Une fenêtre flottante qui affiche les résultats en direct au-dessus de vos diapos Keynote et détecte automatiquement le QR de votre sondage.', 'int.macStatus': 'En cours d\'examen par l\'App Store d\'Apple', 'int.ppt': 'Add-in PowerPoint', 'int.pptSub': 'Fonctionne dans PowerPoint sur Windows, Mac et le web — insérez des sondages et des résultats en direct dans vos diapos.', 'int.pptStatus': 'En cours d\'examen par Microsoft AppSource', 'int.gs': 'Add-in Google Slides', 'int.gsSub': 'Ajoutez des sondages en direct dans Google Slides depuis le menu Extensions — votre public n\'installe rien.', 'int.gsStatus': 'En cours d\'examen par Google Workspace Marketplace', 'int.howto': 'Comment le configurer', 'int.video': 'Vidéo de démonstration — bientôt disponible', 'int.ctah': 'Vous ne voulez pas attendre ?',
    },
    pt: {
      'nav.products': 'Produtos', 'nav.how': 'Como funciona', 'nav.integrations': 'Integrações',
      'nav.pricing': 'Preços', 'nav.faq': 'Perguntas', 'nav.login': 'Entrar', 'nav.try': 'Testar grátis',
      'hero.badge': 'Um motor · quatro produtos · com Polly AI',
      'hero.h1': 'Faça cada slide<br><span class="grad">ganhar vida</span>',
      'hero.sub': '<b>Enquetes</b> ao vivo, <b>pesquisas</b> assíncronas, <b>quizzes</b> avaliados e <b>conjuntos de estudo</b> — direto sobre seu Keynote, PowerPoint ou Google Slides. A <b>Polly AI</b> cria tudo em segundos; seu público só escaneia um QR e vê os resultados ao vivo.',
      'hero.cta1': 'Começar grátis →', 'hero.cta2': 'Ver como funciona',
      'hero.note': '<strong>Sem cartão de crédito.</strong> Seu público não instala nada. Grátis para testar.',
      'nav.setup': 'Guia de configuração', 'nav.features': 'Recursos', 'cta.ready': 'Pronto para experimentar?', 'cta.open': 'Abrir PollSlide →', 'cta.openShort': 'Abrir PollSlide', 'faq.common': 'Perguntas comuns', 'faq.freq': 'Perguntas frequentes',
      'dl.h1': 'PollSlide Companion<br>para Mac', 'dl.lead': 'Resultados de enquetes ao vivo que flutuam sobre seus slides do Keynote — e aparecem automaticamente quando seu QR está na tela.', 'dl.status': 'Em análise pela App Store da Apple', 'dl.h2steps': 'Pronto em três passos', 'dl.h2feat': 'O que tem no app', 'dl.h2sys': 'Requisitos do sistema',
      'set.h1': 'Pronto em <span class="accent">seis passos</span>', 'set.lead': 'Crie uma <strong>enquete, pesquisa, quiz ou conjunto de estudo</strong> — manualmente ou com a <strong>✨ Polly AI</strong> — coloque um QR no seu slide (ou compartilhe um link / por e-mail) e veja as respostas chegarem ao vivo.', 'set.h2_1': 'Crie seu primeiro projeto', 'set.h2_2': 'Coloque o QR code no seu slide', 'set.h2_3': 'Apresente pelo Keynote — normalmente', 'set.h2_4': 'Instale o app companion para Mac', 'set.h2_5': 'Entre ao vivo — é automático', 'set.h2_6': 'Veja resultados, exporte e guarde seus dados',
      'price.h1': 'Um preço, a suíte completa', 'price.lead': 'Enquetes, pesquisas, quizzes e conjuntos de estudo — tudo em um plano. Comece grátis; faça upgrade quando precisar de mais participantes, Polly AI ou recursos de equipe.',
      'int.h1': 'PollSlide nos <span class="accent">seus slides</span>', 'int.lead': 'O Keynote já funciona pelo app companion para Mac. Os complementos do PowerPoint e do Google Slides estão prontos e <strong>em análise por cada plataforma</strong> — veja o status, como configurar cada um e um vídeo guia.', 'int.mac': 'Companion para Mac (Keynote)', 'int.macSub': 'Uma janela flutuante que mostra resultados ao vivo sobre seus slides do Keynote e detecta o QR da sua enquete automaticamente.', 'int.macStatus': 'Em análise pela App Store da Apple', 'int.ppt': 'Complemento para PowerPoint', 'int.pptSub': 'Funciona no PowerPoint no Windows, Mac e na web — insira enquetes e resultados ao vivo nos seus slides.', 'int.pptStatus': 'Em análise pela Microsoft AppSource', 'int.gs': 'Complemento para Google Slides', 'int.gsSub': 'Leve enquetes ao vivo para o Google Slides pelo menu Extensões — seu público não instala nada.', 'int.gsStatus': 'Em análise pelo Google Workspace Marketplace', 'int.howto': 'Como configurar', 'int.video': 'Vídeo guia — em breve', 'int.ctah': 'Não quer esperar?',
    },
    it: {
      'nav.products': 'Prodotti', 'nav.how': 'Come funziona', 'nav.integrations': 'Integrazioni',
      'nav.pricing': 'Prezzi', 'nav.faq': 'FAQ', 'nav.login': 'Accedi', 'nav.try': 'Prova gratis',
      'hero.badge': 'Un motore · quattro prodotti · con Polly AI',
      'hero.h1': 'Dai vita a<br><span class="grad">ogni slide</span>',
      'hero.sub': '<b>Sondaggi</b> live, <b>survey</b> asincroni, <b>quiz</b> con voto e <b>set di studio</b> — direttamente sopra Keynote, PowerPoint o Google Slides. <b>Polly AI</b> li crea in secondi; il tuo pubblico scansiona un QR e vede i risultati in diretta.',
      'hero.cta1': 'Inizia gratis →', 'hero.cta2': 'Scopri come funziona',
      'hero.note': '<strong>Nessuna carta di credito.</strong> Il tuo pubblico non installa nulla. Gratis da provare.',
      'nav.setup': 'Guida alla configurazione', 'nav.features': 'Funzioni', 'cta.ready': 'Pronto a provarlo?', 'cta.open': 'Apri PollSlide →', 'cta.openShort': 'Apri PollSlide', 'faq.common': 'Domande comuni', 'faq.freq': 'Domande frequenti',
      'dl.h1': 'PollSlide Companion<br>per Mac', 'dl.lead': 'Risultati dei sondaggi in tempo reale che fluttuano sulle tue slide di Keynote — e appaiono automaticamente quando il tuo QR è sullo schermo.', 'dl.status': 'In revisione sull\'App Store di Apple', 'dl.h2steps': 'Pronto in tre passi', 'dl.h2feat': 'Cosa c\'è nell\'app', 'dl.h2sys': 'Requisiti di sistema',
      'set.h1': 'Pronto in <span class="accent">sei passi</span>', 'set.lead': 'Crea un <strong>sondaggio, una survey, un quiz o un set di studio</strong> — a mano o con <strong>✨ Polly AI</strong> — metti un QR sulla tua slide (o condividi un link / via e-mail) e guarda le risposte arrivare in diretta.', 'set.h2_1': 'Crea il tuo primo progetto', 'set.h2_2': 'Metti il QR code sulla tua slide', 'set.h2_3': 'Presenta da Keynote — normalmente', 'set.h2_4': 'Installa l\'app companion per Mac', 'set.h2_5': 'Vai in diretta — è automatico', 'set.h2_6': 'Vedi i risultati, esporta e conserva i tuoi dati',
      'price.h1': 'Un prezzo, l\'intera suite', 'price.lead': 'Sondaggi, survey, quiz e set di studio — tutto in un unico piano. Inizia gratis; passa a un piano superiore quando ti servono più partecipanti, Polly AI o funzioni per team.',
      'int.h1': 'PollSlide nelle <span class="accent">tue slide</span>', 'int.lead': 'Keynote funziona già tramite l\'app companion per Mac. Gli add-in per PowerPoint e Google Slides sono pronti e <strong>in revisione presso ciascuna piattaforma</strong> — ecco lo stato, come configurare ognuno e un video dimostrativo.', 'int.mac': 'Companion per Mac (Keynote)', 'int.macSub': 'Una finestra fluttuante che mostra i risultati in diretta sopra le tue slide di Keynote e rileva automaticamente il QR del tuo sondaggio.', 'int.macStatus': 'In revisione sull\'App Store di Apple', 'int.ppt': 'Add-in per PowerPoint', 'int.pptSub': 'Funziona in PowerPoint su Windows, Mac e web — inserisci sondaggi e risultati in diretta nelle tue slide.', 'int.pptStatus': 'In revisione su Microsoft AppSource', 'int.gs': 'Add-in per Google Slides', 'int.gsSub': 'Porta i sondaggi in diretta in Google Slides dal menu Estensioni — il tuo pubblico non installa nulla.', 'int.gsStatus': 'In revisione su Google Workspace Marketplace', 'int.howto': 'Come configurarlo', 'int.video': 'Video dimostrativo — in arrivo', 'int.ctah': 'Non vuoi aspettare?',
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
