/* Whole-block translations for the teacher sections of the help centre.
 *
 * WHY BLOCKS AND NOT TEXT NODES
 * The rest of the help centre is translated by a text-node walker, which works until a
 * paragraph contains inline markup. "Open a deck's <b>⋯</b> menu and choose…" reaches
 * the walker as three separate fragments — "Open a deck's", "menu and choose", ", then"
 * — and each is translated on its own. In any language whose word order differs from
 * English (which is all of them) the result is nonsense. So these elements carry
 * data-i18n-html and are swapped whole, markup and all. i18n.js already supports this
 * and skips walking inside them, so nothing is translated twice.
 *
 * THE RULE ABOUT UI LABELS
 * Anything naming a control the teacher must FIND ON SCREEN stays in English —
 * "Assign to a class…", "Save", "Retakes: off", "Gradebook", "Reports". The PollSlide
 * app itself is in English. Translating the button name would send a Spanish-speaking
 * teacher hunting for "Guardar" on a screen whose button says "Save", which is worse
 * than leaving it: the sentence around it explains what the button does, and the
 * English word is what they need to look for. Prose is translated; labels are not.
 *
 * Keys resolve through window.PS_I18N_KEYS, i18n.js's documented extension point for
 * exactly this — long block content lives in its own file rather than bloating i18n.js.
 * Load AFTER i18n.js. Untranslated keys fall back to the English in the markup.
 */
window.PS_I18N_KEYS = window.PS_I18N_KEYS || {};
(function (B) {
  for (var l in B) { window.PS_I18N_KEYS[l] = Object.assign(window.PS_I18N_KEYS[l] || {}, B[l]); }
})({

  es: {
    't.classes.lead': 'Da a una clase su lista de estudiantes una vez, y cada baraja que le asignes registrará quién respondió <em>por persona</em>, no por lo que escribieran ese día.',
    't.classes.steps': '<li>Abre el menú <b>⋯</b> de una baraja y elige <b>👥 Assign to a class…</b>, y luego <b>＋ New class</b>.</li> <li>Ponle un nombre — <i>“Biology 101, Period 3”</i> — y pega tu lista. Un nombre por línea, o pega una columna directamente desde una hoja de cálculo.</li> <li>Pulsa <b>Save</b>. Verás exactamente quién se ha añadido.</li> <li>De vuelta en la lista de clases, pulsa <b>Assign</b> para vincular esta baraja a esa clase.</li> <li>Ahora los estudiantes <b>eligen su nombre de una lista</b> en lugar de escribirlo.</li>',
    't.classes.card1': '<i>Ruiz, Ana</i> se convierte en <i>Ana Ruiz</i>. Una fila de encabezado como <i>Student Name</i> se ignora en vez de convertirse en un estudiante. La misma persona repetida dos veces se unifica. Las columnas adicionales — correo, curso — se dejan intactas.',
    't.classes.callout1': '<b>Dos nombres parecidos nunca se fusionan automáticamente.</b> Si una clase tiene <i>Jamie</i> y <i>Jamie Smith</i>, PollSlide señala la pareja y no toca nada. Equivocarse aquí significa una nota en el expediente del niño equivocado, así que esa decisión sigue siendo tuya.',
    't.classes.callout2': '<b>Privacidad:</b> los estudiantes solo ven el nombre y la inicial del apellido — <i>Ana R.</i> Los apellidos completos permanecen en tu cuenta y nunca se publican en la sesión.',

    't.verify.lead': 'Una lista de nombres permite que cada estudiante elija el suyo… y, sin algo más, que elija el de otro. Decide cómo demuestra tu clase quién es cada uno.',
    't.verify.steps': '<li>Abre <b>👥 Assign to a class…</b> → <b>Students</b> en la clase que quieras.</li> <li>Elige uno de los tres métodos de abajo. La clase empieza con <b>PIN</b>.</li> <li>Se les pide una sola vez, la primera vez que responden en un dispositivo.</li>',
    't.verify.callout1': '<b>¿PIN olvidado?</b> Restablécelo tú mismo desde la pantalla <b>Students</b> de la clase: el siguiente PIN que escriban será el nuevo. Nunca necesitas abrir un ticket de soporte para esto.',
    't.verify.callout2': '<b>Para qué sirve esto realmente.</b> Impide que un compañero responda haciéndose pasar por otro, que es el problema real en un aula. <em>No</em> es supervisión de exámenes: un estudiante decidido puede pasarle su código a un amigo, y ninguna web puede evitarlo. Para un examen de alto riesgo necesitas un entorno supervisado, no un navegador.',

    't.retakes.lead': 'Por defecto, una respuesta es definitiva. En un cuestionario con el que quieres saber quién ha entendido algo, puedes permitir que lo intenten de nuevo y decidir qué intento cuenta.',
    't.retakes.steps': '<li>Abre el menú <b>⋯</b> de la baraja y elige <b>🔁 Retakes: off</b>.</li> <li>Elige cuántos intentos: <b>2</b>, <b>3</b> o <b>5</b>.</li> <li>Elige qué intento se califica: <b>best</b>, <b>last</b> o <b>first</b>.</li> <li>Quien ya haya respondido verá lo que contestó, cuántos intentos le quedan y cuál cuenta.</li>',
    't.retakes.callout1': '<b>Se guardan todos los intentos</b>, califiques el que califiques. En <a href="#results">Reports</a>, una respuesta procedente de un intento posterior aparece marcada como <i>2nd try</i>, así ves quién necesitó una segunda vuelta y en qué.',
    't.retakes.callout2': '<b>No se ofrece en encuestas rápidas.</b> Una encuesta es una foto de lo que la sala piensa ahora mismo; permitir revisarla convierte esa lectura en una negociación. Los segundos intentos aparecen en cuestionarios, encuestas largas y conjuntos de estudio.',

    't.gradebook.lead': 'Una fila por estudiante, una columna por pregunta y la nota al final: el formato que ya tiene tu libro de calificaciones y el que importan Google Classroom y Canvas.',
    't.gradebook.steps': '<li>Abre <b>Reports</b>.</li> <li>Elige <b>una sola presentación</b> en el filtro: un libro de calificaciones son las notas de una baraja.</li> <li>Pulsa <b>🎓 Gradebook</b>. El archivo se descarga y PollSlide te dice qué contiene y qué ha dejado fuera.</li> <li>Impórtalo en Classroom o Canvas, o ábrelo en Excel, Numbers o Sheets.</li>',
    't.gradebook.card1': 'Un estudiante que nunca respondió y otro que respondió mal son hechos distintos. Las respuestas ausentes quedan en blanco y no penalizan a nadie; una respuesta incorrecta es un 0. La columna <b>Answered</b> muestra la diferencia de un vistazo.',
    't.gradebook.card3': '<b>⤓ Answers</b> te da todas las respuestas, una por fila, para leer lo que la gente dijo realmente. <b>🎓 Gradebook</b> te da las notas. Ambos son CSV normal que se abre en cualquier sitio.',
    't.gradebook.callout1': '<b>Asigna primero la baraja a una <a href="#classes">clase</a>.</b> Sin ella, los estudiantes se identifican por el nombre que escribieron, así que una errata crea una segunda fila. Con una clase, cada estudiante tiene una fila y una columna de ID estable que tu propio sistema puede cruzar.',
  },

  de: {
    't.classes.lead': 'Hinterlege für eine Klasse einmal die Namensliste, und jedes Deck, das du ihr zuweist, hält fest, wer geantwortet hat — <em>pro Person</em>, nicht nach dem, was jemand an dem Tag getippt hat.',
    't.classes.steps': '<li>Öffne im <b>⋯</b>-Menü eines Decks <b>👥 Assign to a class…</b> und dann <b>＋ New class</b>.</li> <li>Gib ihr einen Namen — <i>„Biology 101, Period 3“</i> — und füge deine Liste ein. Ein Name pro Zeile, oder eine Spalte direkt aus einer Tabelle.</li> <li>Auf <b>Save</b> klicken. Du siehst genau, wer hinzugefügt wurde.</li> <li>Zurück in der Klassenliste auf <b>Assign</b> klicken, um dieses Deck der Klasse zuzuordnen.</li> <li>Die Lernenden <b>wählen ihren Namen jetzt aus einer Liste</b>, statt ihn zu tippen.</li>',
    't.classes.card1': 'Aus <i>Ruiz, Ana</i> wird <i>Ana Ruiz</i>. Eine Kopfzeile wie <i>Student Name</i> wird ignoriert statt zu einer Person zu werden. Dieselbe Person doppelt aufgeführt wird zu einer. Zusätzliche Spalten — E-Mail, Jahrgang — bleiben unangetastet.',
    't.classes.callout1': '<b>Zwei ähnliche Namen werden nie automatisch zusammengeführt.</b> Hat eine Klasse <i>Jamie</i> und <i>Jamie Smith</i>, markiert PollSlide das Paar und lässt es in Ruhe. Hier falsch zu raten heißt, eine Note im Zeugnis des falschen Kindes — also bleibt diese Entscheidung bei dir.',
    't.classes.callout2': '<b>Datenschutz:</b> Lernende sehen immer nur Vorname und ersten Buchstaben des Nachnamens — <i>Ana R.</i> Vollständige Nachnamen bleiben in deinem Konto und werden nie in die Sitzung veröffentlicht.',

    't.verify.lead': 'Eine Namensliste lässt jede Person ihren eigenen Namen wählen — und ohne weitere Absicherung auch den einer anderen. Lege fest, wie deine Klasse ihre Identität nachweist.',
    't.verify.steps': '<li>Öffne bei der gewünschten Klasse <b>👥 Assign to a class…</b> → <b>Students</b>.</li> <li>Wähle eine der drei Methoden unten. Die Klasse startet mit <b>PIN</b>.</li> <li>Danach wird einmal danach gefragt — beim ersten Antworten auf einem Gerät.</li>',
    't.verify.callout1': '<b>PIN vergessen?</b> Setze sie selbst über den <b>Students</b>-Bildschirm der Klasse zurück — die nächste eingegebene PIN wird zur neuen. Dafür ist nie ein Support-Ticket nötig.',
    't.verify.callout2': '<b>Wofür das ehrlicherweise da ist.</b> Es verhindert, dass jemand als eine andere Person antwortet — das reale Problem im Klassenzimmer. Es ist <em>keine</em> Prüfungsaufsicht: Wer will, gibt seinen Code an eine Freundin weiter, und keine Website kann das verhindern. Für eine Prüfung mit hohem Einsatz brauchst du eine beaufsichtigte Umgebung, keinen Browser.',

    't.retakes.lead': 'Standardmäßig ist eine Antwort endgültig. Bei einem Quiz, mit dem du herausfinden willst, wer etwas verstanden hat, kannst du einen weiteren Versuch erlauben — und festlegen, welcher zählt.',
    't.retakes.steps': '<li>Öffne das <b>⋯</b>-Menü des Decks und wähle <b>🔁 Retakes: off</b>.</li> <li>Lege die Zahl der Versuche fest: <b>2</b>, <b>3</b> oder <b>5</b>.</li> <li>Lege fest, welcher Versuch bewertet wird — <b>best</b>, <b>last</b> oder <b>first</b>.</li> <li>Wer schon geantwortet hat, sieht die eigene Antwort, die verbleibenden Versuche und welcher zählt.</li>',
    't.retakes.callout1': '<b>Jeder Versuch wird aufbewahrt</b>, egal welchen du bewertest. In <a href="#results">Reports</a> ist eine Antwort aus einem späteren Versuch als <i>2nd try</i> gekennzeichnet — so siehst du, wer wobei einen zweiten Anlauf gebraucht hat.',
    't.retakes.callout2': '<b>Bei Live-Umfragen nicht verfügbar.</b> Eine Umfrage ist eine Momentaufnahme dessen, was der Raum gerade denkt; sie überarbeiten zu lassen macht aus dieser Messung eine Verhandlung. Zweite Versuche gibt es bei Quiz, Umfragebögen und Lernsätzen.',

    't.gradebook.lead': 'Eine Zeile pro Person, eine Spalte pro Frage, am Ende die Punktzahl — genau das Format, das dein Notenspiegel schon hat und das Google Classroom und Canvas importieren.',
    't.gradebook.steps': '<li>Öffne <b>Reports</b>.</li> <li>Wähle im Filter <b>genau eine Präsentation</b> — ein Notenspiegel sind die Noten eines Decks.</li> <li>Klicke auf <b>🎓 Gradebook</b>. Die Datei wird geladen, und PollSlide sagt dir, was drin ist und was weggelassen wurde.</li> <li>Importiere sie in Classroom oder Canvas, oder öffne sie in Excel, Numbers oder Sheets.</li>',
    't.gradebook.card1': 'Wer nie geantwortet hat und wer falsch geantwortet hat, sind zwei verschiedene Tatsachen. Fehlende Antworten bleiben leer und zählen niemandem negativ; eine falsche Antwort ist eine 0. Die Spalte <b>Answered</b> zeigt den Unterschied auf einen Blick.',
    't.gradebook.card3': '<b>⤓ Answers</b> gibt dir jede einzelne Antwort, eine pro Zeile — zum Nachlesen, was die Leute wirklich geschrieben haben. <b>🎓 Gradebook</b> gibt dir die Noten. Beides ist einfaches CSV, das sich überall öffnen lässt.',
    't.gradebook.callout1': '<b>Weise das Deck vorher einer <a href="#classes">Klasse</a> zu.</b> Ohne sie werden Lernende über den getippten Namen zugeordnet, und ein Tippfehler erzeugt eine zweite Zeile. Mit einer Klasse bekommt jede Person genau eine Zeile und eine stabile ID-Spalte, auf die dein eigenes System abgleichen kann.',
  },

  fr: {
    't.classes.lead': 'Enregistrez une fois la liste des élèves d’une classe, et chaque jeu que vous lui associez retiendra qui a répondu <em>par personne</em>, et non selon ce qui a été tapé ce jour-là.',
    't.classes.steps': '<li>Ouvrez le menu <b>⋯</b> d’un jeu et choisissez <b>👥 Assign to a class…</b>, puis <b>＋ New class</b>.</li> <li>Donnez-lui un nom — <i>« Biology 101, Period 3 »</i> — et collez votre liste. Un nom par ligne, ou une colonne collée directement depuis un tableur.</li> <li>Cliquez sur <b>Save</b>. Vous voyez exactement qui a été ajouté.</li> <li>De retour dans la liste des classes, cliquez sur <b>Assign</b> pour rattacher ce jeu à cette classe.</li> <li>Les élèves <b>choisissent désormais leur nom dans une liste</b> au lieu de le taper.</li>',
    't.classes.card1': '<i>Ruiz, Ana</i> devient <i>Ana Ruiz</i>. Une ligne d’en-tête comme <i>Student Name</i> est ignorée plutôt que transformée en élève. La même personne présente deux fois n’en fait qu’une. Les colonnes supplémentaires — e-mail, niveau — sont laissées telles quelles.',
    't.classes.callout1': '<b>Deux noms proches ne sont jamais fusionnés à votre place.</b> Si une classe contient <i>Jamie</i> et <i>Jamie Smith</i>, PollSlide signale la paire et n’y touche pas. Se tromper ici, c’est une note dans le dossier du mauvais enfant : cette décision reste la vôtre.',
    't.classes.callout2': '<b>Confidentialité :</b> les élèves ne voient que le prénom et l’initiale du nom — <i>Ana R.</i> Les noms complets restent dans votre compte et ne sont jamais publiés dans la session.',

    't.verify.lead': 'Une liste de noms permet à chaque élève de choisir le sien — et, sans garde-fou, de choisir celui d’un autre. Décidez comment votre classe prouve son identité.',
    't.verify.steps': '<li>Ouvrez <b>👥 Assign to a class…</b> → <b>Students</b> sur la classe voulue.</li> <li>Choisissez l’une des trois méthodes ci-dessous. La classe démarre sur <b>PIN</b>.</li> <li>Elle est demandée une seule fois, à la première réponse sur un appareil.</li>',
    't.verify.callout1': '<b>Code PIN oublié ?</b> Réinitialisez-le vous-même depuis l’écran <b>Students</b> de la classe : le prochain code saisi devient le nouveau. Aucun ticket d’assistance n’est jamais nécessaire pour cela.',
    't.verify.callout2': '<b>À quoi cela sert honnêtement.</b> Cela empêche un camarade de répondre à la place d’un autre, le problème réel en classe. Ce n’est <em>pas</em> de la surveillance d’examen : un élève déterminé peut transmettre son code à un ami, et aucun site web ne peut l’empêcher. Pour un examen à fort enjeu, il faut un environnement surveillé, pas un navigateur.',

    't.retakes.lead': 'Par défaut, une réponse est définitive. Pour un quiz destiné à savoir qui a compris, vous pouvez autoriser une nouvelle tentative — et décider laquelle compte.',
    't.retakes.steps': '<li>Ouvrez le menu <b>⋯</b> du jeu et choisissez <b>🔁 Retakes: off</b>.</li> <li>Choisissez le nombre d’essais : <b>2</b>, <b>3</b> ou <b>5</b>.</li> <li>Choisissez la tentative notée — <b>best</b>, <b>last</b> ou <b>first</b>.</li> <li>Les élèves ayant déjà répondu voient leur réponse, le nombre d’essais restants et celle qui compte.</li>',
    't.retakes.callout1': '<b>Toutes les tentatives sont conservées</b>, quelle que soit celle que vous notez. Dans <a href="#results">Reports</a>, une réponse issue d’un essai ultérieur est marquée <i>2nd try</i> : vous voyez qui a eu besoin d’un second passage, et sur quoi.',
    't.retakes.callout2': '<b>Pas proposé sur les sondages.</b> Un sondage est un instantané de ce que la salle pense à cet instant ; permettre de le réviser transforme cette lecture en négociation. Les secondes tentatives existent sur les quiz, les questionnaires et les jeux de révision.',

    't.gradebook.lead': 'Une ligne par élève, une colonne par question, la note à la fin — exactement la forme qu’a déjà votre carnet de notes, et celle qu’importent Google Classroom et Canvas.',
    't.gradebook.steps': '<li>Ouvrez <b>Reports</b>.</li> <li>Choisissez <b>une seule présentation</b> dans le filtre : un carnet de notes, ce sont les notes d’un jeu.</li> <li>Cliquez sur <b>🎓 Gradebook</b>. Le fichier se télécharge, et PollSlide vous dit ce qu’il contient et ce qui a été écarté.</li> <li>Importez-le dans Classroom ou Canvas, ou ouvrez-le dans Excel, Numbers ou Sheets.</li>',
    't.gradebook.card1': 'Un élève qui n’a jamais répondu et un élève qui a mal répondu sont deux faits différents. Les réponses manquantes restent vides et ne pénalisent personne ; une mauvaise réponse vaut 0. La colonne <b>Answered</b> montre la différence d’un coup d’œil.',
    't.gradebook.card3': '<b>⤓ Answers</b> vous donne chaque réponse, une par ligne — pour lire ce que les gens ont réellement écrit. <b>🎓 Gradebook</b> vous donne les notes. Les deux sont du CSV ordinaire, qui s’ouvre partout.',
    't.gradebook.callout1': '<b>Associez d’abord le jeu à une <a href="#classes">classe</a>.</b> Sans cela, les élèves sont identifiés par le nom qu’ils ont tapé, et une faute de frappe crée une deuxième ligne. Avec une classe, chaque élève a une ligne et une colonne d’identifiant stable sur laquelle votre propre système peut s’aligner.',
  },

  pt: {
    't.classes.lead': 'Registe uma vez a lista de alunos de uma turma e cada baralho que lhe atribuir passa a registar quem respondeu <em>por pessoa</em>, e não pelo que escreveram nesse dia.',
    't.classes.steps': '<li>Abra o menu <b>⋯</b> de um baralho e escolha <b>👥 Assign to a class…</b> e depois <b>＋ New class</b>.</li> <li>Dê-lhe um nome — <i>“Biology 101, Period 3”</i> — e cole a sua lista. Um nome por linha, ou cole uma coluna diretamente de uma folha de cálculo.</li> <li>Carregue em <b>Save</b>. Verá exatamente quem foi adicionado.</li> <li>De volta à lista de turmas, carregue em <b>Assign</b> para ligar este baralho a essa turma.</li> <li>Os alunos passam a <b>escolher o seu nome numa lista</b> em vez de o escrever.</li>',
    't.classes.card1': '<i>Ruiz, Ana</i> passa a <i>Ana Ruiz</i>. Uma linha de cabeçalho como <i>Student Name</i> é ignorada em vez de virar aluno. A mesma pessoa listada duas vezes passa a uma. Colunas extra — e-mail, ano — ficam intactas.',
    't.classes.callout1': '<b>Dois nomes parecidos nunca são fundidos por si.</b> Se uma turma tiver <i>Jamie</i> e <i>Jamie Smith</i>, o PollSlide assinala o par e não lhe toca. Errar aqui significa uma nota no registo da criança errada, por isso essa decisão continua a ser sua.',
    't.classes.callout2': '<b>Privacidade:</b> os alunos veem apenas o primeiro nome e a inicial do apelido — <i>Ana R.</i> Os apelidos completos ficam na sua conta e nunca são publicados na sessão.',

    't.verify.lead': 'Uma lista de nomes deixa cada aluno escolher o seu — e, sem mais nada, escolher o de outra pessoa. Decida como a sua turma prova quem é.',
    't.verify.steps': '<li>Abra <b>👥 Assign to a class…</b> → <b>Students</b> na turma pretendida.</li> <li>Escolha um dos três métodos abaixo. A turma começa em <b>PIN</b>.</li> <li>É pedido uma só vez, na primeira resposta em cada dispositivo.</li>',
    't.verify.callout1': '<b>PIN esquecido?</b> Reponha-o você mesmo a partir do ecrã <b>Students</b> da turma: o próximo PIN que escreverem passa a ser o novo. Nunca precisa de abrir um pedido de apoio para isto.',
    't.verify.callout2': '<b>Para que serve isto, honestamente.</b> Impede que um colega responda fazendo-se passar por outro, que é o problema real numa sala de aula. <em>Não</em> é vigilância de exame: um aluno determinado pode passar o código a um amigo, e nenhum site consegue evitá-lo. Para um exame de alto risco é preciso um ambiente vigiado, não um navegador.',

    't.retakes.lead': 'Por predefinição, uma resposta é definitiva. Num questionário com que quer perceber quem entendeu, pode permitir nova tentativa — e decidir qual conta.',
    't.retakes.steps': '<li>Abra o menu <b>⋯</b> do baralho e escolha <b>🔁 Retakes: off</b>.</li> <li>Escolha quantas tentativas: <b>2</b>, <b>3</b> ou <b>5</b>.</li> <li>Escolha qual a tentativa avaliada — <b>best</b>, <b>last</b> ou <b>first</b>.</li> <li>Quem já respondeu passa a ver o que respondeu, quantas tentativas restam e qual conta.</li>',
    't.retakes.callout1': '<b>Todas as tentativas são guardadas</b>, seja qual for a que avalia. Em <a href="#results">Reports</a>, uma resposta vinda de uma tentativa posterior aparece marcada como <i>2nd try</i>, para ver quem precisou de uma segunda volta e em quê.',
    't.retakes.callout2': '<b>Não disponível em sondagens.</b> Uma sondagem é um retrato do que a sala pensa neste momento; deixar revê-la transforma essa leitura numa negociação. As segundas tentativas existem em questionários, inquéritos e conjuntos de estudo.',

    't.gradebook.lead': 'Uma linha por aluno, uma coluna por pergunta, a nota no fim — o formato que a sua pauta já tem e o que o Google Classroom e o Canvas importam.',
    't.gradebook.steps': '<li>Abra <b>Reports</b>.</li> <li>Escolha <b>uma única apresentação</b> no filtro: uma pauta são as notas de um baralho.</li> <li>Carregue em <b>🎓 Gradebook</b>. O ficheiro é descarregado e o PollSlide diz-lhe o que contém e o que ficou de fora.</li> <li>Importe-o no Classroom ou no Canvas, ou abra-o no Excel, Numbers ou Sheets.</li>',
    't.gradebook.card1': 'Um aluno que nunca respondeu e um aluno que respondeu mal são factos diferentes. As respostas em falta ficam em branco e não penalizam ninguém; uma resposta errada é 0. A coluna <b>Answered</b> mostra a diferença num relance.',
    't.gradebook.card3': '<b>⤓ Answers</b> dá-lhe todas as respostas, uma por linha — para ler o que as pessoas escreveram mesmo. <b>🎓 Gradebook</b> dá-lhe as notas. Ambos são CSV simples, que abre em qualquer lado.',
    't.gradebook.callout1': '<b>Atribua primeiro o baralho a uma <a href="#classes">turma</a>.</b> Sem ela, os alunos são identificados pelo nome que escreveram, por isso um erro de escrita cria uma segunda linha. Com uma turma, cada aluno tem uma linha e uma coluna de ID estável que o seu próprio sistema pode cruzar.',
  },

  it: {
    't.classes.lead': 'Inserisci una volta l’elenco degli studenti di una classe e ogni mazzo che le assegni registrerà chi ha risposto <em>per persona</em>, non in base a quello che ha digitato quel giorno.',
    't.classes.steps': '<li>Apri il menu <b>⋯</b> di un mazzo e scegli <b>👥 Assign to a class…</b>, poi <b>＋ New class</b>.</li> <li>Dalle un nome — <i>“Biology 101, Period 3”</i> — e incolla il tuo elenco. Un nome per riga, oppure incolla una colonna presa direttamente da un foglio di calcolo.</li> <li>Premi <b>Save</b>. Vedrai esattamente chi è stato aggiunto.</li> <li>Tornato all’elenco delle classi, premi <b>Assign</b> per collegare questo mazzo a quella classe.</li> <li>Gli studenti ora <b>scelgono il proprio nome da un elenco</b> invece di digitarlo.</li>',
    't.classes.card1': '<i>Ruiz, Ana</i> diventa <i>Ana Ruiz</i>. Una riga di intestazione come <i>Student Name</i> viene ignorata anziché diventare uno studente. La stessa persona elencata due volte diventa una. Le colonne aggiuntive — e-mail, anno — restano intatte.',
    't.classes.callout1': '<b>Due nomi simili non vengono mai uniti al posto tuo.</b> Se una classe ha <i>Jamie</i> e <i>Jamie Smith</i>, PollSlide segnala la coppia e non tocca nulla. Sbagliare qui significa un voto nella scheda del bambino sbagliato, quindi quella decisione resta tua.',
    't.classes.callout2': '<b>Privacy:</b> gli studenti vedono solo il nome e l’iniziale del cognome — <i>Ana R.</i> I cognomi completi restano nel tuo account e non vengono mai pubblicati nella sessione.',

    't.verify.lead': 'Un elenco di nomi permette a ogni studente di scegliere il proprio — e, senza altro, anche quello di un compagno. Decidi come la tua classe dimostra la propria identità.',
    't.verify.steps': '<li>Apri <b>👥 Assign to a class…</b> → <b>Students</b> sulla classe che ti interessa.</li> <li>Scegli uno dei tre metodi qui sotto. La classe parte con <b>PIN</b>.</li> <li>Viene chiesto una sola volta, alla prima risposta su un dispositivo.</li>',
    't.verify.callout1': '<b>PIN dimenticato?</b> Reimpostalo tu dalla schermata <b>Students</b> della classe: il PIN successivo che digitano diventa quello nuovo. Non serve mai aprire una richiesta di assistenza per questo.',
    't.verify.callout2': '<b>A cosa serve davvero.</b> Impedisce a un compagno di rispondere al posto di un altro, che è il problema reale in classe. <em>Non</em> è sorveglianza d’esame: uno studente determinato può passare il codice a un amico, e nessun sito può impedirlo. Per un esame ad alto rischio serve un ambiente sorvegliato, non un browser.',

    't.retakes.lead': 'Per impostazione predefinita una risposta è definitiva. In un quiz con cui vuoi capire chi ha compreso, puoi concedere un altro tentativo — e decidere quale conta.',
    't.retakes.steps': '<li>Apri il menu <b>⋯</b> del mazzo e scegli <b>🔁 Retakes: off</b>.</li> <li>Scegli quanti tentativi: <b>2</b>, <b>3</b> o <b>5</b>.</li> <li>Scegli quale tentativo viene valutato — <b>best</b>, <b>last</b> o <b>first</b>.</li> <li>Chi ha già risposto vede la propria risposta, quanti tentativi restano e quale conta.</li>',
    't.retakes.callout1': '<b>Ogni tentativo viene conservato</b>, qualunque sia quello che valuti. In <a href="#results">Reports</a> una risposta arrivata da un tentativo successivo è contrassegnata come <i>2nd try</i>, così vedi chi ha avuto bisogno di una seconda occasione e su cosa.',
    't.retakes.callout2': '<b>Non disponibile nei sondaggi.</b> Un sondaggio è un’istantanea di ciò che la sala pensa in quel momento; permettere di rivederlo trasforma quella lettura in una trattativa. I secondi tentativi ci sono su quiz, questionari e set di studio.',

    't.gradebook.lead': 'Una riga per studente, una colonna per domanda, il punteggio in fondo: esattamente il formato che il tuo registro ha già e quello che Google Classroom e Canvas importano.',
    't.gradebook.steps': '<li>Apri <b>Reports</b>.</li> <li>Scegli <b>una sola presentazione</b> nel filtro: un registro sono i voti di un mazzo.</li> <li>Premi <b>🎓 Gradebook</b>. Il file viene scaricato e PollSlide ti dice cosa contiene e cosa ha lasciato fuori.</li> <li>Importalo in Classroom o Canvas, oppure aprilo in Excel, Numbers o Sheets.</li>',
    't.gradebook.card1': 'Uno studente che non ha mai risposto e uno che ha risposto male sono fatti diversi. Le risposte mancanti restano vuote e non penalizzano nessuno; una risposta sbagliata è uno 0. La colonna <b>Answered</b> mostra la differenza a colpo d’occhio.',
    't.gradebook.card3': '<b>⤓ Answers</b> ti dà tutte le risposte, una per riga — per leggere quello che le persone hanno scritto davvero. <b>🎓 Gradebook</b> ti dà i voti. Entrambi sono normali CSV, che si aprono ovunque.',
    't.gradebook.callout1': '<b>Assegna prima il mazzo a una <a href="#classes">classe</a>.</b> Senza, gli studenti vengono abbinati in base al nome digitato, quindi un errore di battitura crea una seconda riga. Con una classe, ogni studente ha una riga e una colonna di ID stabile su cui il tuo sistema può fare corrispondenza.',
  },
});
/* Appended to help-teachers-blocks.js — same rules: whole blocks via data-i18n-html,
 * markup preserved, UI labels ("Reports", "Find GIFs") left in English because the app
 * itself is English and translating a button name sends someone hunting for a word
 * that is not on their screen. */
window.PS_I18N_KEYS = window.PS_I18N_KEYS || {};
(function (B) {
  for (var l in B) { window.PS_I18N_KEYS[l] = Object.assign(window.PS_I18N_KEYS[l] || {}, B[l]); }
})({
  es: {
    't.progress.lead': 'Las demás vistas responden a «qué pasó en esta sesión». Esta responde a la pregunta que de verdad te haces: <em>¿este estudiante lo está entendiendo?</em>',
    't.progress.steps': '<li>Abre <b>Reports</b> y elige <b>Progress over time</b>.</li> <li>Cada estudiante tiene una fila: cuántas sesiones ha hecho, su media, su mejor nota, la más reciente y una pequeña línea con la forma de todo ello.</li> <li><b>Worth a look</b>, arriba, indica a quién conviene mirar: no es una clasificación de tu clase.</li> <li>Pasa el cursor por cualquier fila para ver el razonamiento de su tendencia.</li>',
    't.progress.card1': 'Con menos de tres sesiones dice <i>not enough yet</i> en lugar de aventurar una dirección. Una línea entre dos puntos es solo una línea, y «bajando» es una palabra que acaba llegando a una reunión con las familias.',
    't.progress.card3': 'Sin ella, los estudiantes se identifican por el nombre que escribieron, así que una grafía distinta parte en dos el historial de una misma persona. Asigna la baraja a una <a href="#classes">clase</a> y el historial sigue a la persona.',
    't.progress.callout1': '<b>Un mal día no reescribe un trimestre.</b> La tendencia compara las primeras sesiones del estudiante con las más recientes, en vez de la primera con la última, así que un lunes flojo aparece en los números sin darle la vuelta a la historia.',
    't.offline.lead': 'Treinta móviles en el wifi del centro es lo más normal del mundo, y era lo único que podía hacer perder una respuesta. Ya no.',
    't.offline.steps': '<li>Un estudiante pulsa <b>Enviar</b> y la conexión está caída.</li> <li>Su móvil dice: <i>«Sin conexión: tu respuesta está guardada y se enviará automáticamente.»</i></li> <li>Se envía sola en cuanto vuelve la conexión, aunque haya cerrado la pestaña y vuelto más tarde.</li> <li>Ve <i>«✓ Enviado»</i> cuando llega.</li>',
    't.offline.card2': 'Una respuesta que se quedó atascada aparece como <b>sent late</b> en tu informe y en el CSV, con cuánto tiempo esperó. Tú la valoras; el software no decide por ti.',
    't.offline.callout1': '<b>No hay que activar nada.</b> Así funcionan ahora las respuestas, en todos los productos y todos los planes.',
    't.gifs.lead': 'Siempre pudiste buscar un GIF e insertarlo. Ahora puedes dejar que PollSlide los proponga para toda una baraja y limitarte a revisar lo que ha elegido.',
    't.gifs.steps': '<li>Abre el menú <b>⋯</b> de una baraja y elige <b>🎞 GIFs</b>.</li> <li>Marca <b>un GIF en cada pregunta</b>, <b>en cada respuesta revelada</b>, o ambas.</li> <li>Pulsa <b>Find GIFs</b>. Cada uno aparece junto a la pregunta a la que pertenece.</li> <li>Consérvalo, cámbialo (<b>↻</b>) o quítalo (<b>✕</b>) antes de presentar.</li>',
    't.gifs.card1': '<i>«¿Qué app culpan los millennials de arruinar las citas?»</i> busca <i>app millennials citas</i>. Buscar la frase entera no devuelve nada útil.',
    't.gifs.card2': 'La respuesta correcta es <i>42</i>, o <i>B</i>. No hay ninguna imagen de eso, así que obtienes una celebración… y la pantalla de revisión te dice que eso es lo que ha pasado.',
    't.gifs.callout1': '<b>Nada aparece en pantalla sin que tú lo hayas visto.</b> Los GIFs se buscan al marcar la casilla y se muestran para revisión: nunca se buscan en directo durante la sesión.',
    't.gifs.callout2': '<b>Tu propia imagen siempre manda.</b> Si una pregunta ya tiene una imagen elegida por ti, el GIF no la sustituye. Y quien haya pedido a su dispositivo que reduzca el movimiento verá un fotograma fijo en lugar de la animación.',
  },
  de: {
    't.progress.lead': 'Alle anderen Ansichten beantworten „was ist in dieser Sitzung passiert“. Diese beantwortet die Frage, die du wirklich hast: <em>versteht diese Person es?</em>',
    't.progress.steps': '<li>Öffne <b>Reports</b> und wähle <b>Progress over time</b>.</li> <li>Jede Person bekommt eine Zeile: wie viele Sitzungen, ihr Durchschnitt, ihr bestes und ihr letztes Ergebnis, und eine kleine Linie, die den Verlauf zeigt.</li> <li><b>Worth a look</b> oben nennt, bei wem du nachschauen solltest — keine Rangliste deiner eigenen Klasse.</li> <li>Fahre über eine Zeile, um die Begründung der Tendenz zu sehen.</li>',
    't.progress.card1': 'Unter drei Sitzungen steht dort <i>not enough yet</i> statt einer geratenen Richtung. Eine Linie durch zwei Punkte ist nur eine Linie, und „fällt ab“ ist ein Wort, das am Elternabend ankommt.',
    't.progress.card3': 'Ohne sie werden Lernende über den getippten Namen zugeordnet, und eine andere Schreibweise zerteilt die Geschichte einer Person in zwei. Weise das Deck einer <a href="#classes">Klasse</a> zu, dann folgt der Verlauf der Person.',
    't.progress.callout1': '<b>Ein schlechter Tag schreibt kein Halbjahr um.</b> Die Tendenz vergleicht die ersten Sitzungen mit den jüngsten statt die erste mit der letzten — ein schwacher Montag taucht in den Zahlen auf, ohne die Geschichte umzudrehen.',
    't.offline.lead': 'Dreißig Handys im Schul-WLAN ist das Normalste der Welt — und war das Einzige, was eine Antwort verlieren konnte. Jetzt nicht mehr.',
    't.offline.steps': '<li>Jemand tippt auf <b>Senden</b>, und die Verbindung ist weg.</li> <li>Das Handy sagt: <i>„Keine Verbindung — deine Antwort ist gespeichert und wird automatisch gesendet.“</i></li> <li>Sie sendet sich selbst, sobald die Verbindung zurück ist — auch wenn der Tab zwischendurch geschlossen war.</li> <li>Beim Ankommen erscheint <i>„✓ Gesendet“</i>.</li>',
    't.offline.card2': 'Eine hängengebliebene Antwort erscheint im Bericht und im CSV als <b>sent late</b>, mit der Wartezeit. Du beurteilst sie; die Software entscheidet das nicht für dich.',
    't.offline.callout1': '<b>Nichts einzuschalten.</b> So funktioniert Antworten jetzt — in jedem Produkt und in jedem Tarif.',
    't.gifs.lead': 'Ein GIF suchen und einfügen ging immer schon. Jetzt kann PollSlide sie für ein ganzes Deck vorschlagen, und du prüfst nur noch die Auswahl.',
    't.gifs.steps': '<li>Öffne das <b>⋯</b>-Menü eines Decks und wähle <b>🎞 GIFs</b>.</li> <li>Setze das Häkchen bei <b>ein GIF pro Frage</b>, <b>pro aufgedeckter Antwort</b> oder beidem.</li> <li>Klicke auf <b>Find GIFs</b>. Jedes erscheint bei der Frage, zu der es gehört.</li> <li>Behalte, tausche (<b>↻</b>) oder entferne (<b>✕</b>) es, bevor du präsentierst.</li>',
    't.gifs.card1': '<i>„Welcher App geben Millennials die Schuld am Ende des Datings?“</i> sucht nach <i>App Millennials Dating</i>. Der ganze Satz liefert nichts Brauchbares.',
    't.gifs.card2': 'Die richtige Antwort ist <i>42</i> oder <i>B</i>. Davon gibt es kein Bild, also bekommst du stattdessen einen Jubel — und die Prüfansicht sagt dir, dass genau das passiert ist.',
    't.gifs.callout1': '<b>Nichts erscheint auf einem Bildschirm, bevor du es gesehen hast.</b> GIFs werden beim Setzen des Häkchens geholt und zur Prüfung gezeigt — nie mitten in der Sitzung live geladen.',
    't.gifs.callout2': '<b>Dein eigenes Bild gewinnt immer.</b> Hat eine Frage schon ein von dir gewähltes Bild, ersetzt das GIF es nicht. Und wer an seinem Gerät reduzierte Bewegung eingestellt hat, sieht ein Standbild statt der Animation.',
  },
  fr: {
    't.progress.lead': 'Toutes les autres vues répondent à « que s’est-il passé pendant cette session ? ». Celle-ci répond à la vraie question : <em>cet élève comprend-il ?</em>',
    't.progress.steps': '<li>Ouvrez <b>Reports</b> et choisissez <b>Progress over time</b>.</li> <li>Chaque élève a sa ligne : nombre de sessions, moyenne, meilleur score, score le plus récent, et une petite courbe qui en montre la forme.</li> <li><b>Worth a look</b>, en haut, indique qui mérite votre attention — ce n’est pas un classement de votre classe.</li> <li>Survolez une ligne pour voir le raisonnement derrière sa tendance.</li>',
    't.progress.card1': 'En dessous de trois sessions, l’affichage indique <i>not enough yet</i> plutôt que de deviner une direction. Une droite passant par deux points n’est qu’une droite, et « en baisse » est un mot qui finit par arriver jusqu’à une réunion parents-professeurs.',
    't.progress.card3': 'Sans elle, les élèves sont identifiés par le nom qu’ils ont tapé : une orthographe différente coupe l’historique d’une même personne en deux. Associez le jeu à une <a href="#classes">classe</a> et l’historique suit la personne.',
    't.progress.callout1': '<b>Un mauvais jour ne réécrit pas un trimestre.</b> La tendance compare les premières sessions aux plus récentes plutôt que la première à la dernière : un lundi difficile apparaît dans les chiffres sans inverser l’histoire.',
    't.offline.lead': 'Trente téléphones sur le wifi de l’établissement, c’est la chose la plus ordinaire du monde — et c’était la seule qui pouvait faire perdre une réponse. Ce n’est plus le cas.',
    't.offline.steps': '<li>Un élève appuie sur <b>Envoyer</b> et la connexion est coupée.</li> <li>Son téléphone affiche : <i>« Pas de connexion — votre réponse est enregistrée et partira automatiquement. »</i></li> <li>Elle part d’elle-même dès le retour de la connexion, même s’il a fermé l’onglet entre-temps.</li> <li>Il voit <i>« ✓ Envoyé »</i> à l’arrivée.</li>',
    't.offline.card2': 'Une réponse restée bloquée apparaît comme <b>sent late</b> dans votre rapport et dans le CSV, avec le temps d’attente. C’est vous qui jugez ; le logiciel ne décide pas à votre place.',
    't.offline.callout1': '<b>Rien à activer.</b> C’est ainsi que fonctionnent désormais les réponses, sur tous les produits et toutes les formules.',
    't.gifs.lead': 'Chercher un GIF et l’insérer a toujours été possible. Vous pouvez désormais laisser PollSlide en proposer pour tout un jeu et vous contenter de vérifier ses choix.',
    't.gifs.steps': '<li>Ouvrez le menu <b>⋯</b> d’un jeu et choisissez <b>🎞 GIFs</b>.</li> <li>Cochez <b>un GIF sur chaque question</b>, <b>sur chaque réponse révélée</b>, ou les deux.</li> <li>Cliquez sur <b>Find GIFs</b>. Chacun apparaît à côté de la question à laquelle il appartient.</li> <li>Gardez-le, changez-le (<b>↻</b>) ou retirez-le (<b>✕</b>) avant de présenter.</li>',
    't.gifs.card1': '<i>« Quelle appli les millennials accusent-ils d’avoir gâché les rencontres ? »</i> lance une recherche sur <i>appli millennials rencontres</i>. Chercher la phrase entière ne donne rien d’utile.',
    't.gifs.card2': 'La bonne réponse est <i>42</i>, ou <i>B</i>. Il n’existe pas d’image de cela : vous obtenez donc une célébration — et l’écran de vérification vous dit que c’est ce qui s’est passé.',
    't.gifs.callout1': '<b>Rien n’apparaît à l’écran sans que vous l’ayez vu.</b> Les GIFs sont récupérés au moment où vous cochez la case et présentés pour vérification — jamais chargés en direct pendant la session.',
    't.gifs.callout2': '<b>Votre propre image l’emporte toujours.</b> Si une question a déjà une image que vous avez choisie, le GIF ne la remplace pas. Et toute personne ayant demandé à son appareil de réduire les animations verra une image fixe.',
  },
  pt: {
    't.progress.lead': 'Todas as outras vistas respondem a «o que aconteceu nesta sessão». Esta responde à pergunta que realmente tem: <em>este aluno está a perceber?</em>',
    't.progress.steps': '<li>Abra <b>Reports</b> e escolha <b>Progress over time</b>.</li> <li>Cada aluno tem uma linha: quantas sessões fez, a sua média, a melhor nota, a mais recente e uma pequena linha com a forma disso tudo.</li> <li><b>Worth a look</b>, no topo, indica quem convém acompanhar — não é uma classificação da sua turma.</li> <li>Passe o rato sobre qualquer linha para ver o raciocínio por trás da tendência.</li>',
    't.progress.card1': 'Com menos de três sessões diz <i>not enough yet</i> em vez de arriscar uma direção. Uma reta que passa por dois pontos é apenas uma reta, e «a descer» é uma palavra que acaba por chegar a uma reunião de pais.',
    't.progress.card3': 'Sem ela, os alunos são identificados pelo nome que escreveram, por isso uma grafia diferente parte em dois o histórico da mesma pessoa. Atribua o baralho a uma <a href="#classes">turma</a> e o histórico acompanha a pessoa.',
    't.progress.callout1': '<b>Um dia mau não reescreve um período.</b> A tendência compara as primeiras sessões do aluno com as mais recentes, em vez da primeira com a última, por isso uma segunda-feira difícil aparece nos números sem inverter a história.',
    't.offline.lead': 'Trinta telemóveis na rede da escola é a coisa mais normal do mundo — e era a única que podia perder uma resposta. Já não é.',
    't.offline.steps': '<li>Um aluno carrega em <b>Enviar</b> e a ligação está em baixo.</li> <li>O telemóvel diz: <i>«Sem ligação — a sua resposta está guardada e será enviada automaticamente.»</i></li> <li>É enviada sozinha assim que a ligação regressa, mesmo que ele tenha fechado o separador.</li> <li>Vê <i>«✓ Enviado»</i> quando chega.</li>',
    't.offline.card2': 'Uma resposta que ficou presa aparece como <b>sent late</b> no seu relatório e no CSV, com o tempo que esperou. É você que avalia; o software não decide por si.',
    't.offline.callout1': '<b>Não há nada para ativar.</b> É assim que as respostas funcionam agora, em todos os produtos e todos os planos.',
    't.gifs.lead': 'Procurar um GIF e inseri-lo sempre foi possível. Agora pode deixar o PollSlide propô-los para um baralho inteiro e limitar-se a rever o que escolheu.',
    't.gifs.steps': '<li>Abra o menu <b>⋯</b> de um baralho e escolha <b>🎞 GIFs</b>.</li> <li>Marque <b>um GIF em cada pergunta</b>, <b>em cada resposta revelada</b>, ou ambos.</li> <li>Carregue em <b>Find GIFs</b>. Cada um aparece junto à pergunta a que pertence.</li> <li>Mantenha-o, troque-o (<b>↻</b>) ou remova-o (<b>✕</b>) antes de apresentar.</li>',
    't.gifs.card1': '<i>«Que app culpam os millennials por estragar os encontros?»</i> procura <i>app millennials encontros</i>. Procurar a frase inteira não devolve nada de útil.',
    't.gifs.card2': 'A resposta correta é <i>42</i>, ou <i>B</i>. Não existe imagem disso, por isso recebe uma celebração — e o ecrã de revisão diz-lhe que foi isso que aconteceu.',
    't.gifs.callout1': '<b>Nada aparece num ecrã sem que o tenha visto.</b> Os GIFs são obtidos quando marca a caixa e mostrados para revisão — nunca obtidos ao vivo a meio da sessão.',
    't.gifs.callout2': '<b>A sua própria imagem manda sempre.</b> Se uma pergunta já tem uma imagem escolhida por si, o GIF não a substitui. E quem tiver pedido ao seu dispositivo para reduzir o movimento vê um fotograma fixo em vez da animação.',
  },
  it: {
    't.progress.lead': 'Tutte le altre viste rispondono a «che cosa è successo in questa sessione». Questa risponde alla domanda che ti fai davvero: <em>questo studente sta capendo?</em>',
    't.progress.steps': '<li>Apri <b>Reports</b> e scegli <b>Progress over time</b>.</li> <li>Ogni studente ha una riga: quante sessioni ha fatto, la media, il risultato migliore, l’ultimo, e una piccola linea che ne mostra l’andamento.</li> <li><b>Worth a look</b>, in alto, indica chi vale la pena seguire — non è una classifica della tua classe.</li> <li>Passa sopra una riga per vedere il ragionamento dietro la tendenza.</li>',
    't.progress.card1': 'Sotto le tre sessioni compare <i>not enough yet</i> invece di azzardare una direzione. Una retta per due punti è solo una retta, e «in calo» è una parola che finisce per arrivare a un colloquio con i genitori.',
    't.progress.card3': 'Senza, gli studenti vengono abbinati in base al nome digitato, quindi una grafia diversa spezza in due la storia della stessa persona. Assegna il mazzo a una <a href="#classes">classe</a> e la storia segue la persona.',
    't.progress.callout1': '<b>Una brutta giornata non riscrive un quadrimestre.</b> La tendenza confronta le prime sessioni con le più recenti anziché la prima con l’ultima: un lunedì storto compare nei numeri senza ribaltare il quadro.',
    't.offline.lead': 'Trenta telefoni sul wi-fi della scuola è la cosa più normale del mondo — ed era l’unica capace di far perdere una risposta. Ora non più.',
    't.offline.steps': '<li>Uno studente tocca <b>Invia</b> e la connessione è caduta.</li> <li>Il telefono dice: <i>«Nessuna connessione — la tua risposta è salvata e verrà inviata automaticamente.»</i></li> <li>Parte da sola appena la connessione torna, anche se nel frattempo ha chiuso la scheda.</li> <li>Vede <i>«✓ Inviato»</i> quando arriva.</li>',
    't.offline.card2': 'Una risposta rimasta bloccata compare come <b>sent late</b> nel tuo rapporto e nel CSV, con quanto ha atteso. Sei tu a valutarla; il software non decide al posto tuo.',
    't.offline.callout1': '<b>Non c’è nulla da attivare.</b> È così che funzionano le risposte adesso, su ogni prodotto e ogni piano.',
    't.gifs.lead': 'Cercare una GIF e inserirla è sempre stato possibile. Ora puoi lasciare che PollSlide le proponga per un mazzo intero e limitarti a rivedere ciò che ha scelto.',
    't.gifs.steps': '<li>Apri il menu <b>⋯</b> di un mazzo e scegli <b>🎞 GIFs</b>.</li> <li>Spunta <b>una GIF su ogni domanda</b>, <b>su ogni risposta rivelata</b>, o entrambe.</li> <li>Premi <b>Find GIFs</b>. Ognuna compare accanto alla domanda a cui appartiene.</li> <li>Tienila, cambiala (<b>↻</b>) o rimuovila (<b>✕</b>) prima di presentare.</li>',
    't.gifs.card1': '<i>«Quale app incolpano i millennial per aver rovinato gli appuntamenti?»</i> cerca <i>app millennial appuntamenti</i>. Cercare l’intera frase non restituisce nulla di utile.',
    't.gifs.card2': 'La risposta corretta è <i>42</i>, oppure <i>B</i>. Non ne esiste un’immagine, quindi ottieni una celebrazione — e la schermata di revisione ti dice che è successo proprio questo.',
    't.gifs.callout1': '<b>Nulla compare su uno schermo prima che tu lo abbia visto.</b> Le GIF vengono cercate quando spunti la casella e mostrate per la revisione — mai caricate dal vivo durante la sessione.',
    't.gifs.callout2': '<b>La tua immagine vince sempre.</b> Se una domanda ha già un’immagine scelta da te, la GIF non la sostituisce. E chi ha chiesto al proprio dispositivo di ridurre il movimento vede un fotogramma fisso invece dell’animazione.',
  },
});
