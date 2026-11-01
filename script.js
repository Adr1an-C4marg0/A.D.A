// ==========================================================================
// DADOS DOS CASOS
// ==========================================================================
const casesDB = [{
    id: "caso_quarto_304",
    title: "A QUEDA DO QUARTO 304",
    victim: {
        id: "elisa_moura", name: "Elisa Moura", role: "vítima",
        photo: "assets/img/cases/quarto-304/elisa-moura.jpg",
        desc: "Arquivista do Hospital Municipal Santa Augusta. Encontrada morta após uma queda no Hotel Mirante."
    },
    witness: {
        id: "renata_moura", name: "Renata Moura", role: "familiar",
        photo: "assets/img/cases/quarto-304/renata-moura.jpg",
        desc: "Irmã de Elisa. Sabia que ela investigava alterações em documentos hospitalares."
    },
    newspapers: {
        1: { title: "ARQUIVISTA MORRE APÓS QUEDA EM HOTEL", body: "Elisa Moura, de 31 anos, morreu após cair da escada de emergência do Hotel Mirante durante um apagão. A polícia trabalha com a hipótese de acidente." },
        2: { title: "POLÍCIA MANTÉM HIPÓTESE DE ACIDENTE", body: "A família contesta a versão oficial e afirma que Elisa investigava irregularidades em documentos hospitalares. O hotel confirma que as câmeras ficaram desligadas por onze minutos." },
        3: { title: "DOCUMENTOS HOSPITALARES PODEM ESTAR LIGADOS À MORTE", body: "Pessoas próximas afirmam que Elisa vinha investigando alterações em arquivos. A direção do hospital declarou não haver indícios de fraude." },
        4: { title: "FUNCIONÁRIO DO HOSPITAL NEGA ENVOLVIMENTO", body: "Daniel Ferraz nega ter conhecido Elisa fora do trabalho. Registros indicam que os dois trocaram mensagens na noite anterior à morte." },
        5: { title: "A INVESTIGAÇÃO DA A.D.A. CONTINUA", body: "Novas informações contradizem a hipótese inicial de acidente. A Agência de Detetives Anônimos ainda não divulgou sua conclusão." }
    },
    characters: [
        { id: "elisa_moura", name: "Elisa Moura", role: "vítima", photo: "assets/img/cases/quarto-304/elisa-moura.jpg" },
        { id: "augusto_vale", name: "Augusto Vale", role: "gerente do hotel", photo: "assets/img/cases/quarto-304/augusto-vale.jpg" },
        { id: "renata_moura", name: "Renata Moura", role: "familiar", photo: "assets/img/cases/quarto-304/renata-moura.jpg" },
        { id: "daniel_ferraz", name: "Daniel Ferraz", role: "suspeito", photo: "assets/img/cases/quarto-304/daniel-ferraz.jpg" },
        { id: "livia_campos", name: "Lívia Campos", role: "jornalista / predecessor", photo: "assets/img/cases/quarto-304/livia-campos.jpg" },
        { id: "marcelo_nunes", name: "Marcelo Nunes", role: "policial", photo: "assets/img/cases/quarto-304/marcelo-nunes.jpg" }
    ],
    dayNotes: {
        2: [
            { role: "helper", senderId: "augusto_vale", text: "A senhora Moura chegou sozinha. Não conversei com ela na recepção e permaneci no balcão durante o apagão. — Augusto Vale" },
            { role: "helper", senderId: "renata_moura", text: "Minha irmã estava nervosa há semanas. Ela dizia que alguém estava mexendo nos arquivos do hospital. Elisa não bebia. — Renata Moura" },
            { role: "helper", senderId: "daniel_ferraz", text: "Elisa estava obcecada por um erro no sistema de arquivos. Não sei por que foi ao Hotel Mirante. — Daniel Ferraz" },
            { role: "killer", senderId: "marcelo_nunes", text: "Não havia sinais claros de luta no quarto. A vítima apresentava álcool no sangue. Não encontramos motivo para suspeitar de homicídio. — Marcelo Nunes" },
            { role: "predecessor", senderId: "livia_campos", text: "Não comece pela garrafa. Comece pelo corrimão. Procure o registro da manutenção do hotel. Não peça o arquivo com meu nome." }
        ],
        4: [
            { role: "predecessor", senderId: "livia_campos", text: "Você já encontrou a marca no corrimão. Agora procure quem tinha acesso aos arquivos de Elisa e às câmeras do hotel. Uma pessoa está mentindo sobre onde estava. Outra está mentindo sobre o que sabia." }
        ],
        3: [
            { role: "helper", senderId: "marcelo_nunes", text: "O laudo preliminar foi fechado antes da perícia do corrimão. A ordem veio de cima e eu não registrei a contestação. — Marcelo Nunes" },
            { role: "helper", senderId: "renata_moura", text: "Elisa guardava cópias fora de casa. Ela repetia que o nome de Daniel aparecia onde não deveria. — Renata Moura" }
        ],
        5: [
            { role: "helper", senderId: "augusto_vale", text: "A manutenção do hotel não é assunto da agência. O registro foi cancelado porque o reparo não era urgente. — Augusto Vale" },
            { role: "helper", senderId: "livia_campos", text: "A mensagem anônima chegou antes da notícia. Quem escreveu já sabia que a queda seria tratada como acidente. — Lívia Campos" }
        ],
        6: [
            { role: "helper", senderId: "daniel_ferraz", text: "Elisa não entendia o risco do que estava fazendo. Eu tentei impedir que ela espalhasse aqueles arquivos. — Daniel Ferraz" }
        ]
    },
    objectives: {
        1: "Examine as evidências da escada e do quarto 304.",
        2: "Compare os depoimentos com o apagão e as câmeras.",
        3: "Solicite os arquivos de quem tinha acesso aos documentos.",
        4: "Procure contradições nos horários e na manutenção.",
        5: "Monte uma pergunta e agende uma entrevista.",
        6: "Use as respostas para reconstruir a sequência da noite.",
        7: "Preencha o documento de encerramento."
    },
    evidence: {
        1: [
            { id: "corrimao", title: "ESCADA DE EMERGÊNCIA", description: "Marca de impacto no corrimão. A superfície foi raspada recentemente.", image: "assets/img/cases/quarto-304/escada-emergencia.jpg" },
            { id: "quarto-304", title: "QUARTO 304", description: "A garrafa foi encontrada sobre a mesa, mas não havia copo próximo.", image: "assets/img/cases/quarto-304/quarto-304.jpg" },
        ],
        2: [
            { id: "camera", title: "CÂMERA DO TERCEIRO ANDAR", description: "A câmera ficou desligada por onze minutos durante o apagão.", image: "assets/img/cases/quarto-304/camera-corredor.jpg" }
        ],
        3: [
            { id: "pagina-azul", title: "PÁGINA ARRANCADA", description: "Uma página azul foi removida do caderno de Elisa. Renata afirma que ela era importante.", image: "assets/img/cases/quarto-304/mesa-elisa.jpg" }
        ],
        4: [
            { id: "patio-hotel", title: "PÁTIO DO HOTEL", description: "A rota entre o quadro de energia e a escada passa por uma porta sem registro de acesso.", image: "assets/img/cases/quarto-304/patio-hotel.jpg" }
        ]
    },
    documents: {
        5: {
            id: "planilha-entrevistas",
            title: "PLANILHA DE ENTREVISTAS — CASO 01",
            subtitle: "Agência de Detetives Anônimos / Diretoria",
            body: "Registre uma pergunta para cada pessoa relacionada ao caso. As respostas serão anexadas ao quadro no próximo dia.",
            unlocks: "interviews"
        },
        4: {
            id: "linha-do-tempo",
            title: "LINHA DO TEMPO — NOITE DA QUEDA",
            subtitle: "Agência de Detetives Anônimos / Análise cronológica",
            body: "Organize os horários conhecidos e compare-os com os depoimentos. Os intervalos sem registro são parte da investigação.",
            rows: [
                ["HORÁRIO", "EVENTO"],
                ["22:06", "Recepção faz uma ligação interna."],
                ["22:22", "Lívia recebe a mensagem sobre a queda."],
                ["22:41", "Elisa chega ao Hotel Mirante."],
                ["22:48–22:59", "Câmera do terceiro andar permanece desligada."],
                ["23:10", "A morte é divulgada à imprensa."]
            ],
            unlocks: "timeline"
        },
        7: {
            id: "documento-conclusao",
            title: "DOCUMENTO DE ENCERRAMENTO — CASO 01",
            subtitle: "Agência de Detetives Anônimos / Diretoria",
            body: "A investigação atingiu a etapa de encerramento. Registre quem causou a morte, quem participou do encobrimento e como os fatos aconteceram.",
            unlocks: "conclusion"
        }
    },
    files: {
        elisa_moura: { heading: "ARQUIVO: ELISA MOURA", stamp: "VÍTIMA", body: "O arquivo original desapareceu três vezes. A versão digital sempre retorna corrigida." },
        daniel_ferraz: { heading: "ARQUIVO: DANIEL FERRAZ", stamp: "SUSPEITO", body: "Responsável pela digitalização. Acessou arquivos fora do horário de trabalho na semana anterior à morte." },
        augusto_vale: { heading: "ARQUIVO: AUGUSTO VALE", stamp: "HOTEL", body: "O telefone da recepção fez ligações internas às 22h06 e 22h08. Isso contradiz seu depoimento." },
        livia_campos: { heading: "ARQUIVO: LÍVIA CAMPOS", stamp: "JORNALISTA", body: "Recebeu às 22h22 a mensagem: “Ela se matou. Não procure outra explicação.” A morte só foi divulgada às 23h10." },
        marcelo_nunes: { heading: "ARQUIVO: MARCELO NUNES", stamp: "POLÍCIA", body: "A investigação não examinou adequadamente o corrimão e sofreu pressão para priorizar outra ocorrência." },
        manutencao_hotel: { heading: "REGISTRO DE MANUTENÇÃO", stamp: "EVIDÊNCIA", body: "O corrimão tinha uma marca de impacto. O reparo foi cancelado por ordem de Augusto Vale." }
    },
    interviews: {
        augusto_vale: "Eu fui verificar o quadro de energia. O hotel estava cheio. Não tive motivo para ir ao terceiro andar.",
        renata_moura: "Elisa me disse: “Se eu não voltar, procure a página azul.”",
        daniel_ferraz: "Ela ia destruir a vida de muita gente por causa de arquivos que nem entendia.",
        livia_campos: "Recebi uma mensagem de um número descartável. Não sabia se era verdade, mas publiquei a informação.",
        marcelo_nunes: "A cena parecia um acidente. Admito que não investigamos o suficiente o corrimão."
    },
    interviewQuestions: {
        augusto_vale: [
            "Onde você estava durante o apagão?",
            "Quem tinha acesso ao terceiro andar?",
            "Por que o reparo do corrimão foi cancelado?"
        ],
        daniel_ferraz: [
            "Qual era sua relação com os arquivos de Elisa?",
            "Quando você viu Elisa pela última vez?",
            "Por que tentou impedir que ela divulgasse os documentos?"
        ],
        renata_moura: [
            "O que havia na página azul?",
            "Elisa mencionou alguém pelo nome?",
            "Por que ela foi ao Hotel Mirante?"
        ]
    },
    contradictions: [
        { title: "CONTRADIÇÃO: HORÁRIO DA MENSAGEM", body: "Augusto afirma que nada sabia sobre a morte, mas Lívia recebeu a mensagem “Ela se matou” antes da divulgação oficial.", related: ["augusto_vale", "livia_campos"] },
        { title: "CONTRADIÇÃO: ACESSO À ESCADA", body: "Augusto nega ter motivo para ir ao terceiro andar, embora o registro de manutenção tenha sido cancelado por sua ordem.", related: ["augusto_vale", "corrimao"] },
        { title: "CONTRADIÇÃO: ARQUIVOS DE ELISA", body: "Daniel diz que não conhecia o conteúdo dos arquivos, mas Renata afirma que o nome dele aparecia nas cópias guardadas por Elisa.", related: ["daniel_ferraz", "pagina-azul"] }
    ],
    solution: { culprit: "daniel_ferraz", accomplice: "augusto_vale", evidence: ["corrimao", "camera", "pagina-azul"] },
    predecessorId: "livia_campos"
}];

const paperColors = [
    { bg: "#bae6fd", color: "#082f49" },
    { bg: "#bbf7d0", color: "#064e3b" },
    { bg: "#f5f5f5", color: "#171717", border: "1px solid #ccc" },
    { bg: "#fef08a", color: "#854d0e" },
    { bg: "#fed7aa", color: "#7c2d12" },
    { bg: "#e9d5ff", color: "#581c87" }
];
const characterProfiles = {
    augusto_vale: { color: paperColors[0], font: "'Special Elite', monospace" },
    renata_moura: { color: paperColors[1], font: "'Caveat', cursive" },
    daniel_ferraz: { color: paperColors[2], font: "'Shadows Into Light', cursive" },
    livia_campos: { color: paperColors[3], font: "'Rock Salt', cursive" },
    marcelo_nunes: { color: paperColors[4], font: "'Permanent Marker', cursive" },
    elisa_moura: { color: paperColors[5], font: "'Playfair Display', serif" }
};
const STORAGE_KEY = "ada-case-progress-v2";
const STATIC_IDS = new Set(["daily-news", "request-form", "suspect1", "suspect2"]);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledColors = shuffle([...paperColors]);
const shuffledFonts = shuffle(["'Caveat', cursive", "'Rock Salt', cursive", "'Special Elite', monospace", "'Shadows Into Light', cursive"]);
const adaProfiles = {
    helper: { color: shuffledColors[0], font: shuffledFonts[0] },
    larper: { color: shuffledColors[1], font: shuffledFonts[1] },
    predecessor: { color: shuffledColors[2], font: shuffledFonts[2] },
    killer: { color: shuffledColors[3], font: shuffledFonts[3] }
};

function getSavedCaseId() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null")?.caseId;
    } catch (error) {
        return null;
    }
}

const savedCaseId = getSavedCaseId();
let currentCase = casesDB.find((item) => item.id === savedCaseId) || casesDB[Math.floor(Math.random() * casesDB.length)];
let highestZ = 100;
let connections = [];
let day = 1;
let pendingRequest = null;
let pendingInterviews = [];
let conclusionAttempts = 3;
let failureSequenceActive = false;
let gameSettings = {
    sfx: true,
    music: true,
    reducedMotion: false
};
let ambientTimer = null;
let tempLine = null;
let startPin = null;
let selectedItem = null;
let endDayTimer = null;
let audioContext = null;
let dragSound = null;
let isTransitioning = false;
const svgLayer = document.getElementById("strings-layer");
const trashPanel = document.getElementById("trash-panel");
const trashContent = document.getElementById("trash-panel-content");

function applyVocalTic(role, text) {
    return text;
}

function playFeedback(frequency = 440, duration = 0.06) {
    if (!gameSettings.sfx) return;
    try {
        if (!audioContext) audioContext = new AudioContext();
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0.04, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
        console.warn("Feedback sonoro indisponível neste navegador.", error);
    }
}

function startDragSound() {
    if (!gameSettings.sfx || dragSound) return;
    try {
        if (!audioContext) audioContext = new AudioContext();
        const bufferSize = audioContext.sampleRate * 2;
        const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        for (let index = 0; index < bufferSize; index += 1) {
            data[index] = (Math.random() * 2 - 1) * 0.45;
        }
        const source = audioContext.createBufferSource();
        const filter = audioContext.createBiquadFilter();
        const gain = audioContext.createGain();
        source.buffer = buffer;
        source.loop = true;
        filter.type = "bandpass";
        filter.frequency.value = 900;
        filter.Q.value = 0.7;
        gain.gain.value = 0.0001;
        source.connect(filter).connect(gain).connect(audioContext.destination);
        source.start();
        dragSound = { source, filter, gain };
    } catch (error) {
        console.warn("Som de arrasto indisponível neste navegador.", error);
    }
}

function updateDragSound(movementSpeed, element) {
    if (!dragSound || !audioContext) return;
    const intensity = Math.min(1, movementSpeed / 1.2);
    const area = Math.max(1, element.offsetWidth * element.offsetHeight);
    const referenceArea = 180 * 180;
    const weight = Math.min(1.7, Math.max(0.65, Math.sqrt(area / referenceArea)));
    const now = audioContext.currentTime;
    const volume = 0.0001 + intensity * 0.014 * weight;
    const frequency = 1200 - weight * 260 + intensity * 760;
    dragSound.gain.gain.cancelScheduledValues(now);
    dragSound.gain.gain.linearRampToValueAtTime(volume, now + 0.04);
    dragSound.filter.frequency.cancelScheduledValues(now);
    dragSound.filter.frequency.linearRampToValueAtTime(frequency, now + 0.06);
}

function stopDragSound() {
    if (!dragSound) return;
    const sound = dragSound;
    dragSound = null;
    try {
        sound.gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.06);
        sound.source.stop(audioContext.currentTime + 0.07);
    } catch (error) {
        console.warn("Não foi possível encerrar o som de arrasto.", error);
    }
}

function startAmbientSound() {
    if (!gameSettings.music || ambientTimer) return;
    try {
        if (!audioContext) audioContext = new AudioContext();
        const progression = [
            [73.42, 110, 146.83],
            [65.41, 98, 130.81],
            [77.78, 116.54, 155.56],
            [58.27, 87.31, 116.54]
        ];
        let chordIndex = 0;
        const playAmbientChord = () => {
            if (!gameSettings.music || !audioContext) return;
            const now = audioContext.currentTime;
            const chord = progression[chordIndex++ % progression.length];
            chord.forEach((frequency, index) => {
                const oscillator = audioContext.createOscillator();
                const filter = audioContext.createBiquadFilter();
                const gain = audioContext.createGain();
                oscillator.type = index === 0 ? "sine" : "triangle";
                oscillator.frequency.setValueAtTime(frequency, now);
                oscillator.detune.value = index === 2 ? -4 : 0;
                filter.type = "lowpass";
                filter.frequency.value = index === 0 ? 420 : 760;
                filter.Q.value = 0.35;
                gain.gain.setValueAtTime(0.0001, now);
                gain.gain.exponentialRampToValueAtTime(index === 0 ? 0.022 : 0.009, now + 2.2);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 8.5);
                oscillator.connect(filter).connect(gain).connect(audioContext.destination);
                oscillator.start(now + index * 0.18);
                oscillator.stop(now + 8.7);
            });
        };
        playAmbientChord();
        ambientTimer = setInterval(playAmbientChord, 8200);
    } catch (error) {
        console.warn("Música ambiente indisponível neste navegador.", error);
    }
}

function stopAmbientSound() {
        if (ambientTimer) clearInterval(ambientTimer);
        ambientTimer = null;
    }

function applySettings(startAudio = false) {
        document.body.classList.toggle("reduced-motion", gameSettings.reducedMotion);
        const sfx = document.getElementById("setting-sfx");
        const music = document.getElementById("setting-music");
        const reducedMotion = document.getElementById("setting-reduced-motion");
        if (sfx) sfx.checked = gameSettings.sfx;
        if (music) music.checked = gameSettings.music;
        if (reducedMotion) reducedMotion.checked = gameSettings.reducedMotion;
        if (startAudio && gameSettings.music) startAmbientSound();
        else if (!gameSettings.music) stopAmbientSound();
}

function getRandomPosition(noteType = "post-it") {
    const noteWidth = noteType === "official" ? 300 : noteType === "evidence" ? 250 : noteType === "official-document" ? 430 : 180;
    const noteHeight = noteType === "official" ? 260 : noteType === "evidence" ? 250 : noteType === "official-document" ? 390 : 180;
    const minX = 16;
    const maxX = Math.max(minX, window.innerWidth - noteWidth - 16);
    const minY = 80;
    const maxY = Math.max(minY, window.innerHeight - noteHeight - 100);
    return { x: Math.floor(Math.random() * (maxX - minX)) + minX, y: Math.floor(Math.random() * (maxY - minY)) + minY };
}

function saveGame() {
    const notes = [...document.querySelectorAll(".dynamic-note")].map((note) => ({
        id: note.dataset.noteId,
        role: note.dataset.role,
        senderId: note.dataset.senderId || null,
        content: note.dataset.role === "player" ? note.querySelector("[contenteditable]")?.textContent || "" :
            note.dataset.role === "dossier" ? JSON.parse(note.dataset.content) : note.dataset.content || "",
        x: parseFloat(note.style.left) || 0,
        y: parseFloat(note.style.top) || 0,
        rotation: note.dataset.rotation || "0",
        z: parseInt(note.style.zIndex, 10) || 1,
        inTrash: note.parentElement === trashContent
    }));
    const connectionIds = connections
        .filter((connection) => connection.from.dataset.noteId && connection.to.dataset.noteId)
        .map((connection) => [connection.from.dataset.noteId, connection.to.dataset.noteId]);
    const interviewSheet = document.querySelector('[data-document-id="planilha-entrevistas"]');
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        caseId: currentCase.id,
        day,
        pendingRequest,
        pendingInterviews,
        conclusionAttempts,
        settings: gameSettings,
        interviewSheet: interviewSheet ? {
            authorNoteId: interviewSheet.querySelector("[data-interview-slot='author']")?.dataset.interviewNoteId || null,
            topicNoteId: interviewSheet.querySelector("[data-interview-slot='topic']")?.dataset.interviewNoteId || null,
            scheduled: interviewSheet.dataset.interviewScheduled === "true"
        } : null,
        highestZ,
        notes,
        connections: connectionIds
    }));
}

function loadGame() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (!saved || saved.caseId !== currentCase.id || !Number.isInteger(saved.day) || saved.day < 1) return null;
        return saved;
    } catch (error) {
        console.warn("Progresso salvo inválido; iniciando um novo caso.", error);
        localStorage.removeItem(STORAGE_KEY);
        return null;
    }
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

function createPin(isKiller = false) {
    const pin = document.createElement("div");
    pin.className = "pin";
    pin.setAttribute("role", "button");
    pin.setAttribute("tabindex", "0");
    pin.setAttribute("aria-label", "Conectar esta evidência a outra");
    if (isKiller) pin.style.background = "radial-gradient(circle at 30% 30%, #444, #111)";
    return pin;
}

function createNote(roleKey, content, x, y, isDossier = false, savedId = null, senderId = null) {
    highestZ++;
    const note = document.createElement("div");
    const id = savedId || `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    note.dataset.noteId = id;
    note.dataset.role = roleKey;
    if (senderId) note.dataset.senderId = senderId;
    note.dataset.content = isDossier ? JSON.stringify(content) : content;
    note.dataset.rotation = roleKey === "killer" || isDossier ? "0" : String(Math.floor(Math.random() * 8) - 4);
    note.className = `board-item dynamic-note ${
        isDossier ? "dossier" : roleKey === "welcome" ? "welcome-letter" :
            "post-it"
    }`;
    note.style.left = `${x}px`;
    note.style.top = `${y}px`;
    note.style.zIndex = highestZ;
    note.style.transform = `rotate(${note.dataset.rotation}deg)`;
    note.setAttribute("tabindex", "0");
    note.setAttribute("role", "article");
    note.setAttribute("aria-label", isDossier ? "Dossiê de investigação" : roleKey === "player" ? "Anotação do jogador" : roleKey === "welcome" ? "Carta de iniciação da associação" : "Pista da investigação");

    if (roleKey === "welcome") {
        const pin = createPin(true);
        const image = document.createElement("img");
        image.src = "assets/img/ada-welcome.svg";
        image.alt = "Emblema da Associação de Detetives Anônimos";
        image.draggable = false;
        const heading = document.createElement("h2");
        heading.textContent = "ASSOCIAÇÃO DE DETETIVES";
        const subheading = document.createElement("h3");
        subheading.textContent = "ANÔNIMOS";
        const paragraph = document.createElement("p");
        paragraph.textContent = "Se esta carta chegou até você, é porque foi considerado apto a observar o que os outros ignoram.";
        const secondParagraph = document.createElement("p");
        secondParagraph.textContent = "Reúna evidências, questione versões e registre suas conclusões com discrição.";
        const signature = document.createElement("div");
        signature.className = "signature";
        signature.textContent = "— A Direção da A.D.A.";
        note.append(pin, image, heading, subheading, paragraph, secondParagraph, signature);
    } else if (roleKey === "player") {
        note.classList.add("note-player");
        const tape = document.createElement("div");
        tape.className = "drag-tape";
        const editor = document.createElement("div");
        editor.contentEditable = "true";
        editor.dataset.placeholder = "Sua anotação...";
        editor.textContent = content;
        editor.setAttribute("aria-label", "Texto da anotação");
        note.append(tape, createPin(), editor);
        editor.addEventListener("input", saveGame);
    } else if (isDossier) {
        const heading = document.createElement("strong");
        heading.textContent = content.heading;
        const stamp = document.createElement("div");
        stamp.className = `dossier-stamp ${content.success ? "dossier-success" : "dossier-fail"}`;
        stamp.textContent = content.stamp;
        const body = document.createElement("div");
        body.textContent = content.body;
        note.append(heading, stamp, body);
    } else {
        const profile = characterProfiles[senderId] || adaProfiles[roleKey] || adaProfiles.helper;
        note.style.backgroundColor = profile.color.bg;
        note.style.color = profile.color.color;
        note.style.fontFamily = profile.font;
        if (profile.color.border) note.style.border = profile.color.border;
        const body = document.createElement("div");
        body.textContent = applyVocalTic(roleKey, content);
        const pin = createPin();
        const tape = document.createElement("div");
        tape.className = "drag-tape";
        note.append(tape, pin, body);

    }
    document.body.appendChild(note);
    makeDraggable(note);
    initPins();
    return note;
}

function createEvidenceCard(evidence, x, y, savedId = null) {
    highestZ++;
    const card = document.createElement("article");
    card.className = "board-item dynamic-note evidence-card";
    card.dataset.noteId = savedId || `evidence-${evidence.id}`;
    card.dataset.role = "evidence";
    card.dataset.content = JSON.stringify(evidence);
    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    card.style.zIndex = highestZ;
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Prova: ${evidence.title}`);
    const pin = createPin();
    const image = document.createElement("img");
    image.src = evidence.image;
    image.alt = `Imagem da prova: ${evidence.title.toLowerCase()}`;
    const title = document.createElement("strong");
    title.textContent = evidence.title;
    const description = document.createElement("p");
    description.textContent = evidence.description;
    card.append(pin, image, title, description);
    document.body.appendChild(card);
    makeDraggable(card);
    initPins();
    return card;
}

function startDragging(element, event, isNew = false) {
    playFeedback(300, 0.04);
    startDragSound();
    highestZ++;
    element.style.zIndex = highestZ;
    selectedItem = element;
    const startX = event.clientX;
    const startY = event.clientY;
    let lastX = startX;
    let lastY = startY;
    let lastMoveTime = performance.now();
    const fromTrash = element.parentElement === trashContent;
    if (fromTrash) {
        document.body.appendChild(element);
        trashPanel.classList.add("hidden");
        checkTrashEmpty();
        element.style.position = "absolute";
        element.style.transform = `rotate(${element.dataset.rotation || "0"}deg)`;
    }
    const initialLeft = isNew || fromTrash
        ? event.clientX - element.offsetWidth / 2
        : parseFloat(element.style.left) || 0;
    const initialTop = isNew || fromTrash
        ? event.clientY - element.offsetHeight / 2
        : parseFloat(element.style.top) || 0;
    if (isNew || fromTrash) {
        element.style.left = `${initialLeft}px`;
        element.style.top = `${initialTop}px`;
        if (isNew) element.style.opacity = "0.5";
    } else {
        element.style.boxShadow = "-15px 22px 30px rgba(0,0,0,0.65)";
    }
    const onMouseMove = (moveEvent) => {
        const now = performance.now();
        const elapsed = Math.max(1, now - lastMoveTime);
        const distance = Math.hypot(moveEvent.clientX - lastX, moveEvent.clientY - lastY);
        updateDragSound(distance / elapsed, element);
        lastX = moveEvent.clientX;
        lastY = moveEvent.clientY;
        lastMoveTime = now;
        element.style.left = `${initialLeft + moveEvent.clientX - startX}px`;
        element.style.top = `${initialTop + moveEvent.clientY - startY}px`;
        drawStrings();
    };
    const onMouseUp = () => {
        stopDragSound();
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        element.style.opacity = "1";
        element.style.boxShadow = "";
        const trash = document.getElementById("trash-bin");
        const itemRect = element.getBoundingClientRect();
        const trashRect = trash.getBoundingClientRect();
        if (element.dataset.role !== "official-document" && assignInterviewNote(element)) {
            saveGame();
            drawStrings();
            return;
        }
        clearInterviewNoteAssignment(element);
        if (!STATIC_IDS.has(element.id) && element.parentElement !== trashContent &&
            itemRect.right > trashRect.left && itemRect.left < trashRect.right &&
            itemRect.bottom > trashRect.top && itemRect.top < trashRect.bottom) {
            playFeedback(120, 0.12);
            connections = connections.filter((connection) => connection.from !== element && connection.to !== element);
            element.classList.add("trash-eat");
            element.offsetWidth;
            checkTrashEmpty();
            saveGame();
            setTimeout(() => {
                element.classList.remove("trash-eat");
                element.style.left = "auto";
                element.style.top = "auto";
                element.style.position = "relative";
                element.style.transform = "scale(0.7)";
                trashContent.appendChild(element);
                checkTrashEmpty();
                saveGame();
                drawStrings();
            }, 400);
        } else {
            saveGame();
        }

        drawStrings();
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
}

function moveWithKeyboard(element, key) {
    const step = key === "Shift" ? 20 : 8;
    const delta = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[key];
    if (!delta) return false;
    element.style.left = `${Math.max(0, (parseFloat(element.style.left) || 0) + delta[0])}px`;
    element.style.top = `${Math.max(0, (parseFloat(element.style.top) || 0) + delta[1])}px`;
    drawStrings();
    saveGame();
    return true;
}

function getInterviewItemContent(item) {
    if (item.dataset.role === "player") {
        return item.querySelector("[contenteditable]")?.textContent.trim() || "";
    }
    if (item.dataset.content) return item.dataset.content;
    return item.querySelector("strong")?.textContent.trim() ||
        item.querySelector(".text-black")?.textContent.trim() ||
        item.getAttribute("aria-label") || "";
}

function isInterviewSelectable(item) {
    if (!item || item.dataset.role === "official-document") return false;
    if (item.classList.contains("drag-tape") || item.closest(".drag-tape")) return false;
    if (item.id === "postit-pad" || item.id === "trash-bin") return false;
    return item.classList.contains("dynamic-note") ||
        item.classList.contains("photo") ||
        item.classList.contains("evidence-card");
}

function clearInterviewNoteAssignment(item) {
    const documentElement = document.querySelector('[data-document-id="planilha-entrevistas"]');
    if (!documentElement) return;
    documentElement.querySelectorAll("[data-interview-slot]").forEach((zone) => {
        if (zone.dataset.interviewNoteId !== item.dataset.noteId) return;
        delete zone.dataset.interviewNoteId;
        delete zone.dataset.interviewSenderId;
        delete zone.dataset.interviewContent;
    });
    item.classList.remove("interview-selected-note");
    updateInterviewSheetState(documentElement);
}

function assignInterviewNote(note) {
    if (!isInterviewSelectable(note)) return false;
    const documentElement = document.querySelector('[data-document-id="planilha-entrevistas"]');
    if (!documentElement) return false;
    const authorZone = documentElement.querySelector("[data-interview-slot='author']");
    const topicZone = documentElement.querySelector("[data-interview-slot='topic']");
    const noteRect = note.getBoundingClientRect();
    const contains = (zone) => {
        const zoneRect = zone.getBoundingClientRect();
        return noteRect.left < zoneRect.right && noteRect.right > zoneRect.left &&
            noteRect.top < zoneRect.bottom && noteRect.bottom > zoneRect.top;
    };
    const targetZone = contains(authorZone) ? authorZone : contains(topicZone) ? topicZone : null;
    if (!targetZone) return false;
    const content = getInterviewItemContent(note);
    if (targetZone === authorZone && !note.dataset.senderId) return false;
    if (!content) return false;
    documentElement.querySelectorAll("[data-interview-slot]").forEach((zone) => {
        if (zone !== targetZone && zone.dataset.interviewNoteId === note.dataset.noteId) {
            delete zone.dataset.interviewNoteId;
            delete zone.dataset.interviewSenderId;
            delete zone.dataset.interviewContent;
        }
    });
    if (targetZone.dataset.interviewNoteId && targetZone.dataset.interviewNoteId !== note.dataset.noteId) {
        const previous = document.querySelector(`[data-note-id="${targetZone.dataset.interviewNoteId}"]`);
        previous?.classList.remove("interview-selected-note");
    }
    targetZone.dataset.interviewNoteId = note.dataset.noteId;
    targetZone.dataset.interviewSenderId = note.dataset.senderId || "";
    targetZone.dataset.interviewContent = content;
    note.classList.add("interview-selected-note");
    updateInterviewSheetState(documentElement);
    return true;
}

function updateInterviewSheetState(documentElement) {
    if (!documentElement) {
        return;
    }
    const interviewButton = documentElement.querySelector("[data-make-interview]");
    const authorZone = documentElement.querySelector("[data-interview-slot='author']");
    const topicZone = documentElement.querySelector("[data-interview-slot='topic']");
    if (!interviewButton || !authorZone || !topicZone) return;
    const questionSelect = documentElement.querySelector("[data-interview-question]");
    if (questionSelect) {
        const questions = currentCase.interviewQuestions?.[authorZone.dataset.interviewSenderId] || [];
        const previous = questionSelect.value;
        questionSelect.replaceChildren();
        questions.forEach((question) => {
            const option = document.createElement("option");
            option.value = question;
            option.textContent = question;
            questionSelect.appendChild(option);
        });
        if (!questions.length) {
            const option = document.createElement("option");
            option.value = "";
            option.textContent = "Nenhuma pergunta alternativa disponível";
            questionSelect.appendChild(option);
        } else if (questions.includes(previous)) {
            questionSelect.value = previous;
        }
    }
    const ready = authorZone.dataset.interviewSenderId && topicZone.dataset.interviewContent &&
        !documentElement.dataset.interviewScheduled;
    const scheduled = documentElement.dataset.interviewScheduled === "true";
    interviewButton.classList.toggle("hidden", !ready && !scheduled);
    interviewButton.classList.toggle("scheduled", scheduled);
    interviewButton.disabled = scheduled;
    interviewButton.textContent = scheduled ? "ENTREVISTA AGENDADA" : "FAZER ENTREVISTA";
}

function scheduleInterview(documentElement) {
    const authorZone = documentElement?.querySelector("[data-interview-slot='author']");
    const topicZone = documentElement?.querySelector("[data-interview-slot='topic']");
    if (!documentElement || !authorZone?.dataset.interviewSenderId || !topicZone?.dataset.interviewContent) return;
    const questionSelect = documentElement.querySelector("[data-interview-question]");
    pendingInterviews.push({
        characterId: authorZone.dataset.interviewSenderId,
        question: questionSelect?.value || topicZone.dataset.interviewContent
    });
    documentElement.dataset.interviewScheduled = "true";
    documentElement.querySelectorAll("[data-interview-slot]").forEach((zone) => {
        const selected = document.querySelector(`[data-note-id="${zone.dataset.interviewNoteId}"]`);
        selected?.classList.remove("interview-selected-note");
        delete zone.dataset.interviewNoteId;
        delete zone.dataset.interviewSenderId;
        delete zone.dataset.interviewContent;
    });
    if (questionSelect) questionSelect.value = "";
    updateInterviewSheetState(documentElement);
    saveGame();
}

function restoreInterviewSheet(savedSheet) {
    if (!savedSheet) return;
    const documentElement = document.querySelector('[data-document-id="planilha-entrevistas"]');
    if (!documentElement) return;
    const byId = new Map([...document.querySelectorAll(".dynamic-note")].map((note) => [note.dataset.noteId, note]));
    const assignSaved = (slot, noteId) => {
        const note = byId.get(noteId);
        const zone = documentElement.querySelector(`[data-interview-slot="${slot}"]`);
        if (!note || !zone) return;
        zone.dataset.interviewNoteId = note.dataset.noteId;
        zone.dataset.interviewSenderId = note.dataset.senderId || "";
        zone.dataset.interviewContent = note.dataset.role === "player"
            ? note.querySelector("[contenteditable]")?.textContent.trim() || ""
            : note.dataset.content || "";
        note.classList.add("interview-selected-note");
    };
    assignSaved("author", savedSheet.authorNoteId);
    assignSaved("topic", savedSheet.topicNoteId);
    updateInterviewSheetState(documentElement);
}

function makeDraggable(element) {
    if (element.dataset.draggable === "true") return;
    element.dataset.draggable = "true";
    element.addEventListener("mousedown", (event) => {
        if (event.target.hasAttribute("contenteditable") || event.target.classList.contains("pin") ||
            ["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(event.target.tagName)) return;
        event.preventDefault();
        startDragging(element, event);
    });
    element.addEventListener("keydown", (event) => {
        if (moveWithKeyboard(element, event.key)) event.preventDefault();
        if (event.key === "Enter" && event.target === element) {
            element.querySelector("[contenteditable]")?.focus();
        }
    });
}

function checkTrashEmpty() {
    document.getElementById("trash-empty-msg").style.display = trashContent.children.length ? "none" : "block";
}

function initPins() {
    document.querySelectorAll(".pin").forEach((pin) => {
        if (pin.dataset.ready) return;
        pin.dataset.ready = "true";
        pin.addEventListener("mousedown", (event) => beginConnection(pin, event));
        pin.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            event.preventDefault();
            if (!startPin) {
                startPin = pin;
                pin.classList.add("connection-source");
            } else if (startPin !== pin) {
                addConnection(startPin, pin);
                startPin.classList.remove("connection-source");
                startPin = null;
            }
        });
    });
}

function beginConnection(pin, event) {
    startPin = pin;
    tempLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    tempLine.setAttribute("stroke", "#cc0000");
    tempLine.setAttribute("stroke-width", "3");
    tempLine.setAttribute("stroke-dasharray", "4,4");
    svgLayer.appendChild(tempLine);
    const rect = pin.getBoundingClientRect();
    tempLine.setAttribute("x1", rect.left + rect.width / 2);
    tempLine.setAttribute("y1", rect.top + rect.height / 2);
    tempLine.setAttribute("x2", rect.left + rect.width / 2);
    tempLine.setAttribute("y2", rect.top + rect.height / 2);
    event.stopPropagation();
}

function addConnection(fromPin, toPin) {
    const from = fromPin.closest(".board-item");
    const to = toPin.closest(".board-item");
    if (!from || !to || from === to) return;
    const exists = connections.some((connection) =>
        (connection.from === from && connection.to === to) || (connection.from === to && connection.to === from));
    if (!exists) {
        connections.push({ from, to });
        playFeedback(620, 0.08);
    }
    saveGame();
}

window.addEventListener("mousemove", (event) => {
    if (tempLine) {
        tempLine.setAttribute("x2", event.clientX);
        tempLine.setAttribute("y2", event.clientY);
    }
});
window.addEventListener("mouseup", (event) => {
    if (!tempLine || !startPin) return;
    if (event.target.classList.contains("pin") && event.target !== startPin) addConnection(startPin, event.target);
    tempLine.remove();
    tempLine = null;
    startPin.classList.remove("connection-source");
    startPin = null;
    drawStrings();
});

function drawStrings() {
    const currentTemp = tempLine;
    svgLayer.replaceChildren();
    if (currentTemp) svgLayer.appendChild(currentTemp);
    connections.forEach((connection) => {
        if (!connection.from.isConnected || !connection.to.isConnected ||
            connection.from.parentElement === trashContent || connection.to.parentElement === trashContent) return;
        const pin1 = connection.from.querySelector(".pin")?.getBoundingClientRect();
        const pin2 = connection.to.querySelector(".pin")?.getBoundingClientRect();
        if (!pin1 || !pin2) return;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", pin1.left + pin1.width / 2);
        line.setAttribute("y1", pin1.top + pin1.height / 2);
        line.setAttribute("x2", pin2.left + pin2.width / 2);
        line.setAttribute("y2", pin2.top + pin2.height / 2);
        line.setAttribute("stroke", "#a00");
        line.setAttribute("stroke-width", "3");
        line.setAttribute("opacity", "0.85");
        const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.textContent = `Relação: ${getInterviewItemContent(connection.from).slice(0, 60)} ↔ ${getInterviewItemContent(connection.to).slice(0, 60)}`;
        line.appendChild(title);
        svgLayer.appendChild(line);
    });
}

function updateCaseView() {
    const newspaper = currentCase.newspapers[day] || currentCase.newspapers[5];
    setText("news-title", newspaper.title);
    setText("news-body", newspaper.body);
    setText("day-counter", day);
    document.getElementById("request-form").style.display = day >= 3 ? "block" : "none";
    Object.keys(currentCase.documents)
        .filter((documentDay) => Number(documentDay) <= day)
        .forEach((documentDay) => deliverDocumentsForDay(Number(documentDay)));
    deliverContradictionsForDay(day);
    updateInterviewSheetState(document.querySelector('[data-document-id="planilha-entrevistas"]'));
    document.getElementById("btn-conclude").classList.toggle("hidden", !hasDeliveredDocument("documento-conclusao"));
}

function hasDeliveredDocument(documentId) {
    return Boolean(document.querySelector(`[data-document-id="${documentId}"]`));
}

function showDossier(query) {
    const normalized = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    const position = getRandomPosition("dossier");
    const character = currentCase.characters.find((item) => {
        const name = item.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        return normalized === name || normalized === name.split(" ")[0] || name.includes(normalized);
    });
    const file = character ? currentCase.files[character.id] : currentCase.files[normalized];
    const data = file
        ? { ...file, success: true }
        : { heading: "A.D.A. SYSTEM", stamp: "INEXISTENTE", body: `ALVO: "${query.toUpperCase()}" não localizado nos arquivos da agência.`, success: false };
    createNote("dossier", data, position.x, position.y, true);
}

function deliverNotesForDay(dayNumber) {
    (currentCase.dayNotes[dayNumber] || []).forEach((item) => {
        const position = getRandomPosition(item.role === "killer" ? "official" : "post-it");
        createNote(item.role, item.text, position.x, position.y, false, null, item.senderId);
    });
}

function deliverContradictionsForDay(dayNumber) {
    if (dayNumber < 4) return;
    (currentCase.contradictions || []).forEach((item, index) => {
        const noteId = `contradiction-${index + 1}`;
        if (document.querySelector(`[data-note-id="${noteId}"]`)) return;
        const position = getRandomPosition("official");
        const note = createNote("helper", `${item.title}\n\n${item.body}`, position.x, position.y, false, noteId);
        note.dataset.contradiction = "true";
    });
}

function deliverEvidenceForDay(dayNumber) {
    (currentCase.evidence[dayNumber] || []).forEach((evidence) => {
        if (document.querySelector(`[data-evidence-id="${evidence.id}"]`)) return;
        const position = getRandomPosition("evidence");
        const card = createEvidenceCard(evidence, position.x, position.y);
        card.dataset.evidenceId = evidence.id;
    });
}

function createOfficialDocument(documentData, x, y, savedId = null) {
    highestZ++;
    const documentElement = document.createElement("article");
    documentElement.className = "board-item dynamic-note official-document";
    documentElement.dataset.noteId = savedId || `document-${documentData.id}`;
    documentElement.dataset.role = "official-document";
    documentElement.dataset.documentId = documentData.id;
    documentElement.dataset.content = JSON.stringify(documentData);
    documentElement.style.left = `${x}px`;
    documentElement.style.top = `${y}px`;
    documentElement.style.zIndex = highestZ;
    documentElement.setAttribute("tabindex", "0");
    documentElement.setAttribute("role", "article");
    documentElement.setAttribute("aria-label", `Documento oficial: ${documentData.title}`);

    const pin = createPin(true);
    const heading = document.createElement("h3");
    heading.textContent = documentData.title;
    const subtitle = document.createElement("div");
    subtitle.className = "official-document-subtitle";
    subtitle.textContent = documentData.subtitle;
    const body = document.createElement("p");
    body.textContent = documentData.body;
    documentElement.append(pin, heading, subtitle, body);
    if (documentData.id === "documento-conclusao") {
        const checklist = document.createElement("div");
        checklist.className = "official-checklist";
        const documentAttempts = createAttemptMarkers("document");
        checklist.appendChild(documentAttempts);
        checklist.append(
            createConclusionChoice("Existe um culpado?", "document-has-culprit", "culprit"),
            createConclusionPersonField("culprit", "Responsável pela morte"),
            createConclusionChoice("Houve encobrimento?", "document-has-coverup", "coverup"),
            createConclusionPersonField("accomplice", "Responsável pelo encobrimento")
        );
        checklist.appendChild(createEvidenceChecklist());
        const methodLabel = document.createElement("label");
        methodLabel.textContent = "Reconstrução dos acontecimentos";
        const method = document.createElement("textarea");
        method.dataset.conclusionMethod = "document";
        method.rows = 3;
        method.placeholder = "Descreva o que aconteceu...";
        methodLabel.appendChild(method);
        const submit = document.createElement("button");
        submit.type = "button";
        submit.dataset.conclusionSubmit = "document";
        submit.textContent = "ENTREGAR CONCLUSÃO";
        const status = document.createElement("p");
        status.className = "official-checklist-status";
        status.dataset.conclusionStatus = "document";
        checklist.append(methodLabel, submit, status);
        documentElement.appendChild(checklist);
        submit.addEventListener("click", () => {
            syncConclusionControls(documentElement);
            submitConclusion(status, documentElement);
        });
    } else if (documentData.rows) {
        const table = document.createElement("div");
        table.className = "spreadsheet-table";
        documentData.rows.forEach((row, rowIndex) => {
            row.forEach((cell) => {
                const cellElement = document.createElement(rowIndex === 0 ? "strong" : "span");
                cellElement.textContent = cell;
                table.appendChild(cellElement);
            });
        });
        documentElement.appendChild(table);
    }
    if (documentData.id === "planilha-entrevistas") {
        const instructions = document.createElement("p");
        instructions.className = "interview-sheet-instructions";
        instructions.textContent = "Arraste a nota do autor para a marca à esquerda e a nota sobre o tema para a marca à direita.";
        const slots = document.createElement("div");
        slots.className = "interview-sheet-slots";
        const authorZone = document.createElement("div");
        authorZone.dataset.interviewSlot = "author";
        authorZone.textContent = "NOTA DO AUTOR";
        const topicZone = document.createElement("div");
        topicZone.dataset.interviewSlot = "topic";
        topicZone.textContent = "NOTA DO TEMA";
        slots.append(authorZone, topicZone);
        const interviewButton = document.createElement("button");
        interviewButton.type = "button";
        interviewButton.className = "mystery-button hidden";
        interviewButton.dataset.makeInterview = "true";
        interviewButton.textContent = "FAZER ENTREVISTA";
        interviewButton.addEventListener("click", () => scheduleInterview(documentElement));
        const questionLabel = document.createElement("label");
        questionLabel.className = "interview-question-label";
        questionLabel.textContent = "PERGUNTA PARA A ENTREVISTA";
        const questionSelect = document.createElement("select");
        questionSelect.dataset.interviewQuestion = "true";
        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = "Escolha uma pergunta depois de selecionar o autor";
        questionSelect.appendChild(placeholder);
        questionLabel.appendChild(questionSelect);
        documentElement.append(instructions, slots, questionLabel, interviewButton);
        updateInterviewSheetState(documentElement);
    }
    document.body.appendChild(documentElement);
    makeDraggable(documentElement);
    initPins();
    return documentElement;
}

function createConclusionChoice(labelText, name, field) {
    const fieldset = document.createElement("fieldset");
    fieldset.dataset.conclusionField = field;
    const legend = document.createElement("legend");
    legend.textContent = labelText;
    fieldset.appendChild(legend);
    ["yes", "no"].forEach((value) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = name;
        input.value = value;
        input.dataset.conclusionChoice = field;
        label.append(input, value === "yes" ? " Sim" : " Não");
        fieldset.appendChild(label);
    });
    return fieldset;
}

function createEvidenceChecklist() {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "evidence-checklist";
    const legend = document.createElement("legend");
    legend.textContent = "Quais evidências sustentam sua conclusão?";
    fieldset.appendChild(legend);
    [
        ["corrimao", "Marca no corrimão"],
        ["camera", "Câmera desligada"],
        ["pagina-azul", "Página azul"]
    ].forEach(([value, labelText]) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.dataset.conclusionEvidence = "true";
        input.value = value;
        label.append(input, ` ${labelText}`);
        fieldset.appendChild(label);
    });
    return fieldset;
}

function createAttemptMarkers(scope) {
    const markers = document.createElement("div");
    markers.className = `attempt-markers attempt-markers-${scope}${scope === "document" ? "" : " hidden"}`;
    markers.setAttribute("aria-label", "3 tentativas restantes");
    for (let index = 0; index < 3; index += 1) {
        const marker = document.createElement("span");
        marker.className = "ada-logo intact";
        marker.textContent = "A.D.A.";
        markers.appendChild(marker);
    }
    return markers;
}

function createConclusionPersonField(field, labelText) {
    const wrapper = document.createElement("label");
    wrapper.dataset.conclusionPersonField = field;
    wrapper.classList.add("hidden");
    wrapper.textContent = labelText;
    const select = document.createElement("select");
    select.dataset.conclusionPerson = field;
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Selecione uma pessoa";
    select.appendChild(placeholder);
    currentCase.characters
        .filter((character) => character.id !== "elisa_moura")
        .forEach((character) => {
            const option = document.createElement("option");
            option.value = character.id;
            option.textContent = character.name;
            select.appendChild(option);
        });
    wrapper.appendChild(select);
    return wrapper;
}

function deliverDocumentsForDay(dayNumber) {
    const documentData = currentCase.documents[dayNumber];
    if (!documentData || hasDeliveredDocument(documentData.id)) return;
    const position = getRandomPosition("official-document");
    createOfficialDocument(documentData, position.x, position.y);
}

function getCurrentDocumentById(documentId, fallback) {
    const documentDay = Object.keys(currentCase.documents).find((dayNumber) =>
        currentCase.documents[dayNumber].id === documentId
    );
    return documentDay ? currentCase.documents[documentDay] : fallback;
}

function getConclusionState(source = document) {
    const root = source === document ? document : source;
    const culpritChoice = root.querySelector("input[data-conclusion-choice='culprit']:checked, input[name='has-culprit']:checked");
    const coverupChoice = root.querySelector("input[data-conclusion-choice='coverup']:checked, input[name='has-coverup']:checked");
    return {
        hasCulprit: culpritChoice?.value || "",
        hasCoverup: coverupChoice?.value || "",
        culprit: root.querySelector("[data-conclusion-person='culprit'], #conclusion-culprit")?.value || "",
        accomplice: root.querySelector("[data-conclusion-person='accomplice'], #conclusion-accomplice")?.value || "",
        method: root.querySelector("[data-conclusion-method='document'], #conclusion-method")?.value || "",
        evidence: [...root.querySelectorAll("[data-conclusion-evidence]:checked")].map((input) => input.value)
    };
}

function updateConclusionVisibility(root, state) {
    root.querySelector("[data-conclusion-person-field='culprit'], #culprit-field")
        ?.classList.toggle("hidden", state.hasCulprit !== "yes");
    root.querySelector("[data-conclusion-person-field='accomplice'], #accomplice-field")
        ?.classList.toggle("hidden", state.hasCoverup !== "yes");
}

function syncConclusionControls(source) {
    const state = getConclusionState(source);
    const modal = document.getElementById("conclusion-panel");
    const documentElement = document.querySelector("[data-document-id='documento-conclusao']");
    if (source !== modal && modal) {
        const modalCulprit = modal.querySelector(`input[name='has-culprit'][value='${state.hasCulprit}']`);
        const modalCoverup = modal.querySelector(`input[name='has-coverup'][value='${state.hasCoverup}']`);
        if (modalCulprit) modalCulprit.checked = true;
        if (modalCoverup) modalCoverup.checked = true;
        document.getElementById("conclusion-culprit").value = state.culprit;
        document.getElementById("conclusion-accomplice").value = state.accomplice;
        document.getElementById("conclusion-method").value = state.method;
        modal.querySelectorAll("[data-conclusion-evidence]").forEach((input) => {
            input.checked = state.evidence.includes(input.value);
        });
        updateConclusionVisibility(modal, state);
    }
    if (source === modal && documentElement) {
        const documentCulprit = documentElement.querySelector(`input[data-conclusion-choice='culprit'][value='${state.hasCulprit}']`);
        const documentCoverup = documentElement.querySelector(`input[data-conclusion-choice='coverup'][value='${state.hasCoverup}']`);
        if (documentCulprit) documentCulprit.checked = true;
        if (documentCoverup) documentCoverup.checked = true;
        documentElement.querySelector("[data-conclusion-person='culprit']").value = state.culprit;
        documentElement.querySelector("[data-conclusion-person='accomplice']").value = state.accomplice;
        documentElement.querySelector("[data-conclusion-method='document']").value = state.method;
        documentElement.querySelectorAll("[data-conclusion-evidence]").forEach((input) => {
            input.checked = state.evidence.includes(input.value);
        });
        updateConclusionVisibility(documentElement, state);
    }
    if (documentElement) updateConclusionVisibility(documentElement, state);
}

function submitConclusion(result, source = document.getElementById("conclusion-panel")) {
    const state = getConclusionState(source);
    if (!state.hasCulprit || !state.hasCoverup ||
        (state.hasCulprit === "yes" && !state.culprit) ||
        (state.hasCoverup === "yes" && !state.accomplice) ||
        state.evidence.length < 2) {
        result.textContent = "Complete o checklist e selecione as pessoas indicadas antes de entregar.";
        result.style.color = "#991b1b";
        return;
    }
    const correct = state.hasCulprit === "yes" &&
        state.culprit === currentCase.solution.culprit &&
        state.hasCoverup === "yes" &&
        state.accomplice === currentCase.solution.accomplice;
    const evidenceCorrect = currentCase.solution.evidence.every((id) => state.evidence.includes(id));
    if (!correct || !evidenceCorrect) {
        conclusionAttempts = Math.max(0, conclusionAttempts - 1);
        updateAttemptMarkers();
        saveGame();
    }
    const accepted = correct && evidenceCorrect;
    result.textContent = accepted
        ? "Conclusão aceita. Daniel Ferraz causou a morte e Augusto Vale ajudou no encobrimento."
        : conclusionAttempts
            ? `Conclusão incorreta. Você perdeu uma tentativa. Restam ${conclusionAttempts}.`
            : "Conclusão incorreta. As três tentativas foram perdidas.";
    result.style.color = accepted ? "#166534" : "#92400e";
    if (!accepted && conclusionAttempts === 0) {
        document.querySelectorAll("#btn-submit-conclusion, [data-conclusion-submit='document']")
            .forEach((button) => { button.disabled = true; });
        beginFailureSequence();
    }
}

function updateAttemptMarkers() {
    const markerGroups = document.querySelectorAll("#conclusion-attempts, .attempt-markers-document");
    markerGroups.forEach((markers) => {
        markers.classList.remove("hidden");
        [...markers.children].forEach((marker, index) => {
            marker.classList.toggle("intact", index < conclusionAttempts);
            marker.classList.toggle("cracked", index === conclusionAttempts);
            marker.classList.toggle("lost", index > conclusionAttempts);
        });
        markers.setAttribute("aria-label", `${conclusionAttempts} tentativas restantes`);
    });
}

function beginFailureSequence() {
    if (failureSequenceActive) return;
    failureSequenceActive = true;
    document.getElementById("conclusion-panel")?.classList.add("hidden");
    const items = [...document.querySelectorAll(
        ".dynamic-note, #daily-news, #request-form, #suspect1, #suspect2, #postit-pad, #trash-bin, #trash-panel, .bottom-controls, #strings-layer"
    )].reverse();
    items.forEach((item, index) => {
        setTimeout(() => item.classList.add("dismissal-exit"), index * 180);
        setTimeout(() => item.remove(), index * 180 + 1250);
    });
    const exitDuration = Math.max(1200, items.length * 180 + 1200);
    setTimeout(() => {
        const overlay = document.getElementById("dismissal-overlay");
        overlay.classList.remove("hidden");
        requestAnimationFrame(() => overlay.classList.add("reveal"));
        setTimeout(() => {
            overlay.classList.add("button-ready");
        }, 3000);
    }, exitDuration);
}

function restartAfterDismissal() {
    const overlay = document.getElementById("dismissal-overlay");
    const documentElement = document.getElementById("dismissal-document");
    const signature = document.getElementById("dismissal-signature-input").value.trim();
    if (!signature) return;
    documentElement.classList.add("signed");
    document.getElementById("btn-sign-dismissal").textContent = "ASSINATURA REGISTRADA";
    overlay.classList.add("blackout");
    setTimeout(() => {
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
    }, 2200);
}

function deliverInterviewAnswers() {
    pendingInterviews.forEach((request) => {
        const character = currentCase.characters.find((item) => item.id === request.characterId);
        const response = getInterviewResponse(request);
        const position = getRandomPosition();
        createNote("helper", `RESPOSTA DE ${character.name.toUpperCase()}\n\n${response}`, position.x, position.y, false, null, request.characterId);
    });
    pendingInterviews = [];
}

function getInterviewResponse(request) {
    const responses = {
        "augusto_vale": {
            "Quem tinha acesso ao terceiro andar?": "Apenas a gerência e a manutenção. Eu não controlava cada chave.",
            "Por que o reparo do corrimão foi cancelado?": "O reparo não era urgente. Foi uma decisão administrativa, não minha."
        },
        "daniel_ferraz": {
            "Quando você viu Elisa pela última vez?": "Na saída do hospital. Ela estava com uma pasta azul e parecia decidida a falar.",
            "Por que tentou impedir que ela divulgasse os documentos?": "Eu tentei impedir um escândalo, não a verdade. Ela não entendia as consequências."
        },
        "renata_moura": {
            "Elisa mencionou alguém pelo nome?": "Ela disse que Daniel aparecia nos registros, mas pediu que eu não o confrontasse.",
            "Por que ela foi ao Hotel Mirante?": "Acreditava que encontraria ali a pessoa que estava alterando os arquivos."
        }
    };
    return responses[request.characterId]?.[request.question] ||
        currentCase.interviews[request.characterId] ||
        "A pessoa não respondeu à pergunta.";
}

function advanceDay() {
    if (isTransitioning) return;
    isTransitioning = true;
    playFeedback(220, 0.12);
    document.getElementById("night-overlay").classList.add("lights-out");
    endDayTimer = setTimeout(() => {
        day++;
        updateCaseView();
        deliverNotesForDay(day);
        deliverContradictionsForDay(day);
        deliverEvidenceForDay(day);
        deliverDocumentsForDay(day);
        deliverInterviewAnswers();
        if (pendingRequest) {
            showDossier(pendingRequest);
            pendingRequest = null;
        }
        saveGame();
        updateCaseView();
        drawStrings();
        setTimeout(() => {
            document.getElementById("night-overlay").classList.remove("lights-out");
            isTransitioning = false;
        }, 1000);
    }, 1500);
}

function resetGame() {
    if (!window.confirm("Reiniciar o caso apagará o progresso salvo. Continuar?")) return;
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
}

function restoreNotes(saved) {
    saved.notes.forEach((item) => {
        const note = item.role === "evidence"
            ? createEvidenceCard(typeof item.content === "string" ? JSON.parse(item.content) : item.content, item.x, item.y, item.id)
            : item.role === "official-document"
                ? createOfficialDocument(
                    (() => {
                        const savedDocument = typeof item.content === "string" ? JSON.parse(item.content) : item.content;
                        return getCurrentDocumentById(savedDocument.id, savedDocument);
                    })(),
                    item.x,
                    item.y,
                    item.id
                )
            : createNote(item.role, item.content, item.x, item.y, item.role === "dossier", item.id, item.senderId);
        note.dataset.rotation = item.rotation;
        note.style.transform = `rotate(${item.rotation}deg)`;
        note.style.zIndex = item.z;
        if (item.role === "evidence") note.dataset.evidenceId = JSON.parse(note.dataset.content).id;
        if (item.inTrash) trashContent.appendChild(note);
    });
    const byId = new Map([...document.querySelectorAll(".dynamic-note")].map((note) => [note.dataset.noteId, note]));
    connections = saved.connections.map(([from, to]) => ({ from: byId.get(from), to: byId.get(to) }))
        .filter((connection) => connection.from && connection.to);
    restoreInterviewSheet(saved.interviewSheet);
    checkTrashEmpty();
}

function togglePauseMenu() {
    const menu = document.getElementById("pause-menu");
    const dismissal = document.getElementById("dismissal-overlay");
    if (!menu || dismissal && !dismissal.classList.contains("hidden")) return;
    menu.classList.toggle("hidden");
    if (!menu.classList.contains("hidden")) document.getElementById("btn-resume-game").focus();
}

function closePauseMenu() {
    document.getElementById("pause-menu")?.classList.add("hidden");
}

function init() {
    updateCaseView();
    const suspect1 = document.getElementById("suspect1");
    const suspect2 = document.getElementById("suspect2");
    suspect1.querySelector("img").src = currentCase.victim.photo;
    suspect1.querySelector(".text-black").textContent = currentCase.victim.name;
    suspect1.dataset.senderId = currentCase.victim.id;
    suspect1.dataset.content = `Foto de ${currentCase.victim.name}`;
    suspect2.querySelector("img").src = currentCase.witness.photo;
    suspect2.querySelector(".text-black").textContent = currentCase.witness.name;
    suspect2.dataset.senderId = currentCase.witness.id;
    suspect2.dataset.content = `Foto de ${currentCase.witness.name}`;
    document.querySelectorAll(".board-item").forEach(makeDraggable);
    initPins();
    createNote("welcome", "Carta de iniciação", Math.min(450, window.innerWidth - 390), 300);
    deliverEvidenceForDay(1);

    const saved = loadGame();
    if (saved) {
        day = saved.day;
        pendingRequest = saved.pendingRequest;
        pendingInterviews = saved.pendingInterviews || [];
        conclusionAttempts = Number.isInteger(saved.conclusionAttempts)
            ? Math.max(0, Math.min(3, saved.conclusionAttempts))
            : 3;
        gameSettings = { ...gameSettings, ...(saved.settings || {}) };
        highestZ = saved.highestZ || highestZ;
        document.querySelectorAll(".dynamic-note").forEach((note) => note.remove());
        restoreNotes(saved);
        updateCaseView();
    }
    applySettings();
    if (conclusionAttempts < 3) updateAttemptMarkers();
    if (conclusionAttempts === 0) setTimeout(beginFailureSequence, 400);
    document.getElementById("postit-pad").addEventListener("mousedown", (event) => {
        const note = createNote("player", "", 0, 0);
        startDragging(note, event, true);
    });
    document.getElementById("trash-bin").addEventListener("mousedown", () => {
        document.getElementById("trash-bin").style.transform = "scale(0.85)";
        setTimeout(() => { document.getElementById("trash-bin").style.transform = ""; }, 150);
        trashPanel.classList.toggle("hidden");
        checkTrashEmpty();
    });
    document.getElementById("btn-request").addEventListener("click", () => {
        const status = document.getElementById("req-status");
        if (pendingRequest) {
            status.textContent = "UMA SOLICITAÇÃO JÁ ESTÁ EM FILA.";
            status.style.color = "#991b1b";
            return;
        }
        const input = document.getElementById("req-input");
        if (!input.value.trim()) {
            status.textContent = "INFORME UM ALVO.";
            status.style.color = "#991b1b";
            return;
        }
        pendingRequest = input.value.trim();
        status.textContent = "PROCESSO INICIADO. RETORNO AMANHÃ.";
        status.style.color = "#166534";
        input.value = "";
        saveGame();
    });
    document.getElementById("btn-end-day").addEventListener("click", advanceDay);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") togglePauseMenu();
    });
    document.getElementById("btn-resume-game").addEventListener("click", closePauseMenu);
    document.getElementById("btn-close-pause-menu").addEventListener("click", closePauseMenu);
    const dismissalSignature = document.getElementById("dismissal-signature-input");
    const dismissalButton = document.getElementById("btn-sign-dismissal");
    dismissalSignature.addEventListener("input", () => {
        dismissalButton.disabled = !dismissalSignature.value.trim();
    });
    dismissalButton.addEventListener("click", restartAfterDismissal);
    const conclusionPanel = document.getElementById("conclusion-panel");
    const culprit = document.getElementById("conclusion-culprit");
    const accomplice = document.getElementById("conclusion-accomplice");
    const culpritField = document.getElementById("culprit-field");
    const accompliceField = document.getElementById("accomplice-field");
    const updateConclusionChecklist = (event) => {
        const source = event?.target.closest("[data-document-id='documento-conclusao']") ||
            (event?.target.closest("#conclusion-panel") ? conclusionPanel : conclusionPanel);
        syncConclusionControls(source);
        const state = getConclusionState(conclusionPanel);
        updateConclusionVisibility(conclusionPanel, state);
        if (state.hasCulprit !== "yes") culprit.value = "";
        if (state.hasCoverup !== "yes") accomplice.value = "";
    };
    conclusionPanel.querySelectorAll("input, select, textarea")
        .forEach((input) => input.addEventListener("change", (event) => updateConclusionChecklist(event)));
    document.addEventListener("change", (event) => {
        if (!event.target.closest("[data-document-id='documento-conclusao']")) return;
        if (!event.target.matches("input, select, textarea")) return;
        updateConclusionChecklist(event);
    });
    currentCase.characters.filter((item) => item.id !== "elisa_moura").forEach((character) => {
        [culprit, accomplice].forEach((select) => {
            const option = document.createElement("option");
            option.value = character.id;
            option.textContent = character.name;
            select.appendChild(option);
        });
    });
    document.getElementById("btn-conclude").addEventListener("click", () => conclusionPanel.classList.remove("hidden"));
    document.getElementById("btn-close-conclusion").addEventListener("click", () => conclusionPanel.classList.add("hidden"));
    document.getElementById("btn-submit-conclusion").addEventListener("click", () => {
        submitConclusion(document.getElementById("conclusion-result"));
    });
    document.getElementById("btn-start-case").addEventListener("click", () => {
    document.getElementById("intro-modal").classList.add("hidden");
    applySettings(true);
    playFeedback(520, 0.08);
    });
    document.addEventListener("pointerdown", () => startAmbientSound(), { once: true });
    window.addEventListener("resize", drawStrings);
    checkTrashEmpty();
    drawStrings();
    saveGame();
    if (saved) document.getElementById("intro-modal").classList.add("hidden");
}

init();
