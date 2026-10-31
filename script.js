// ==========================================================================
// DADOS DOS CASOS
// ==========================================================================
const casesDB = [
    {
        id: "caso_corvo",
        title: "MORTE NO BECO DO CORVO",
        victim: { name: "Roberto Silva", photo: "assets/img/suspects/silva.jpg", desc: "Contador. Morto no beco. Tinha dívidas." },
        witness: { name: "Ana C.", photo: "assets/img/suspects/ana.jpg", desc: "Garçonete. Viu a vítima com um homem de sobretudo." },
        weapon: "faca",
        newsDay1: "Um homem não identificado foi encontrado sem vida atrás do bar 'O Corvo'. A A.D.A. assumiu a análise dos dados.",
        newsDay2: "A polícia confirmou: o corpo é de Roberto Silva, contador local. Uma garçonete, Ana C., prestou depoimento.",
        newsDay3: "Uma faca encontrada na cena sumiu misteriosamente da sala de evidências da polícia. A plataforma liberou consultas a antecedentes.",
        killerClue: "agiotas locais"
    },
    {
        id: "caso_estacao",
        title: "O ECO DA ESTAÇÃO",
        victim: { name: "Lia Martins", photo: "assets/img/suspects/ana.jpg", desc: "Arquivista. Encontrada na plataforma desativada. Investigava contratos antigos." },
        witness: { name: "Sr. Silva", photo: "assets/img/suspects/silva.jpg", desc: "Vigia noturno. Ouviu uma discussão perto da sala de controle." },
        weapon: "lanterna",
        newsDay1: "A plataforma desativada amanheceu isolada. A A.D.A. foi chamada para reconstruir os últimos passos da vítima.",
        newsDay2: "A vítima foi identificada como Lia Martins, arquivista municipal. O vigia prestou depoimento.",
        newsDay3: "A sala de controle foi arrombada e uma lanterna sumiu da perícia. Consultas de antecedentes foram liberadas.",
        killerClue: "contratos municipais"
    }
];

const paperColors = [
    { bg: "#bae6fd", color: "#082f49" },
    { bg: "#bbf7d0", color: "#064e3b" },
    { bg: "#f5f5f5", color: "#171717", border: "1px solid #ccc" },
    { bg: "#fef08a", color: "#854d0e" }
];
const fonts = ["'Caveat', cursive", "'Rock Salt', cursive", "'Special Elite', monospace", "'Shadows Into Light', cursive"];
const STORAGE_KEY = "ada-caso-404-v1";
const STATIC_IDS = new Set(["daily-news", "request-form", "suspect1", "suspect2"]);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledColors = shuffle([...paperColors]);
const shuffledFonts = shuffle([...fonts]);
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
let tempLine = null;
let startPin = null;
let selectedItem = null;
let endDayTimer = null;
let audioContext = null;
let isTransitioning = false;
const svgLayer = document.getElementById("strings-layer");
const trashPanel = document.getElementById("trash-panel");
const trashContent = document.getElementById("trash-panel-content");

function applyVocalTic(role, text) {
    if (role === "helper") return text.toLowerCase();
    if (role === "larper") return text.toUpperCase();
    if (role === "predecessor") return text.replace(/a/g, "e").replace(/o/g, "u");
    return text;
}

function playFeedback(frequency = 440, duration = 0.06) {
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

function getRandomPosition(noteType = "post-it") {
    const noteWidth = noteType === "official" ? 300 : 180;
    const noteHeight = noteType === "official" ? 260 : 180;
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        caseId: currentCase.id, day, pendingRequest, highestZ, notes, connections: connectionIds
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

function createNote(roleKey, content, x, y, isDossier = false, savedId = null) {
    highestZ++;
    const note = document.createElement("div");
    const id = savedId || `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    note.dataset.noteId = id;
    note.dataset.role = roleKey;
    note.dataset.content = isDossier ? JSON.stringify(content) : content;
    note.dataset.rotation = roleKey === "killer" || isDossier ? "0" : String(Math.floor(Math.random() * 8) - 4);
    note.className = `board-item dynamic-note ${
        isDossier ? "dossier" : roleKey === "welcome" ? "welcome-letter" :
            roleKey === "killer" ? "official-record" : "post-it"
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
        const profile = adaProfiles[roleKey];
        note.style.backgroundColor = profile.color.bg;
        note.style.color = profile.color.color;
        note.style.fontFamily = profile.font;
        if (profile.color.border) note.style.border = profile.color.border;
        const body = document.createElement("div");
        body.textContent = applyVocalTic(roleKey, content);
        const pin = createPin(roleKey === "killer");
        if (roleKey === "killer") {
            note.append(pin, body);
        } else {
            const tape = document.createElement("div");
            tape.className = "drag-tape";
            note.append(tape, pin, body);
        }
    }
    document.body.appendChild(note);
    makeDraggable(note);
    initPins();
    return note;
}

function startDragging(element, event, isNew = false) {
    playFeedback(300, 0.04);
    highestZ++;
    element.style.zIndex = highestZ;
    selectedItem = element;
    const startX = event.clientX;
    const startY = event.clientY;
    const fromTrash = element.parentElement === trashContent;
    if (fromTrash) {
        document.body.appendChild(element);
        trashPanel.classList.add("hidden");
        checkTrashEmpty();
        element.style.position = "absolute";
        element.style.transform = `rotate(${element.dataset.rotation || "0"}deg)`;
    }
    const initialLeft = isNew || fromTrash ? event.clientX - 80 : parseFloat(element.style.left) || 0;
    const initialTop = isNew || fromTrash ? event.clientY - 70 : parseFloat(element.style.top) || 0;
    if (isNew) {
        element.style.left = `${initialLeft}px`;
        element.style.top = `${initialTop}px`;
        element.style.opacity = "0.5";
    } else {
        element.style.boxShadow = "-15px 22px 30px rgba(0,0,0,0.65)";
    }
    const onMouseMove = (moveEvent) => {
        element.style.left = `${initialLeft + moveEvent.clientX - startX}px`;
        element.style.top = `${initialTop + moveEvent.clientY - startY}px`;
        drawStrings();
    };
    const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        element.style.opacity = "1";
        element.style.boxShadow = "";
        const trash = document.getElementById("trash-bin");
        const itemRect = element.getBoundingClientRect();
        const trashRect = trash.getBoundingClientRect();
        if (!STATIC_IDS.has(element.id) && element.parentElement !== trashContent &&
            itemRect.right > trashRect.left && itemRect.left < trashRect.right &&
            itemRect.bottom > trashRect.top && itemRect.top < trashRect.bottom) {
            element.classList.add("trash-eat");
            playFeedback(120, 0.12);
            connections = connections.filter((connection) => connection.from !== element && connection.to !== element);
            element.style.left = "auto";
            element.style.top = "auto";
            element.style.position = "relative";
            element.style.transform = "scale(0.7)";
            trashContent.appendChild(element);
            checkTrashEmpty();
            saveGame();
            setTimeout(() => {
                element.classList.remove("trash-eat");
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

function makeDraggable(element) {
    if (element.dataset.draggable === "true") return;
    element.dataset.draggable = "true";
    element.addEventListener("mousedown", (event) => {
        if (event.target.hasAttribute("contenteditable") || event.target.classList.contains("pin") ||
            ["INPUT", "BUTTON"].includes(event.target.tagName)) return;
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
        svgLayer.appendChild(line);
    });
}

function updateCaseView() {
    const news = day === 1 ? currentCase.newsDay1 : day === 2 ? currentCase.newsDay2 : currentCase.newsDay3;
    setText("news-title", day === 1 ? currentCase.title : day === 2 ? "VÍTIMA IDENTIFICADA" : "FALHA NA EVIDÊNCIA");
    setText("news-body", news);
    setText("day-counter", day);
    document.getElementById("request-form").style.display = day >= 3 ? "block" : "none";
}

function showDossier(query) {
    const normalized = query.toLowerCase();
    const position = getRandomPosition("dossier");
    let data;
    if (normalized.includes(currentCase.victim.name.toLowerCase().split(" ")[0])) {
        data = { heading: `ARQUIVO: ${currentCase.victim.name.toUpperCase()}`, stamp: "VÍTIMA", body: currentCase.victim.desc, success: true };
    } else if (normalized.includes(currentCase.witness.name.toLowerCase().split(" ")[0])) {
        data = { heading: `ARQUIVO: ${currentCase.witness.name.toUpperCase()}`, stamp: "TESTEMUNHA", body: currentCase.witness.desc, success: true };
    } else {
        data = { heading: "A.D.A. SYSTEM", stamp: "INEXISTENTE", body: `ALVO: "${query.toUpperCase()}" não localizado nos arquivos estaduais.`, success: false };
    }
    createNote("dossier", data, position.x, position.y, true);
}

function advanceDay() {
    if (isTransitioning) return;
    isTransitioning = true;
    playFeedback(220, 0.12);
    document.getElementById("night-overlay").classList.add("lights-out");
    endDayTimer = setTimeout(() => {
        day++;
        updateCaseView();
        if (day === 2) {
            const pos = getRandomPosition();
            createNote("helper", `olá. também peguei esse caso. a testemunha, ${currentCase.witness.name}, parece saber quem fez isso.`, pos.x, pos.y);
        } else if (day === 3) {
            const p1 = getRandomPosition();
            const p2 = getRandomPosition("official");
            createNote("larper", `A ${currentCase.weapon.toUpperCase()} FOI ROUBADA! O GOVERNO ESTÁ POR TRÁS DISSO! EU TENHO CERTEZA!`, p1.x, p1.y);
            createNote("killer", `Colegas, a ferramenta de Requisição foi liberada no sistema hoje. Foquem nos ${currentCase.killerClue}.`, p2.x, p2.y);
        } else if (day === 4) {
            const p1 = getRandomPosition();
            createNote("predecessor", "Eles estau manipulandu us dadus de mesa. Nau cuinfe nu sistema uficial.", p1.x, p1.y);
            if (connections.length) connections.pop();
        }
        if (pendingRequest) {
            showDossier(pendingRequest);
            pendingRequest = null;
        }
        saveGame();
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
        const note = createNote(item.role, item.content, item.x, item.y, item.role === "dossier", item.id);
        note.dataset.rotation = item.rotation;
        note.style.transform = `rotate(${item.rotation}deg)`;
        note.style.zIndex = item.z;
        if (item.inTrash) trashContent.appendChild(note);
    });
    const byId = new Map([...document.querySelectorAll(".dynamic-note")].map((note) => [note.dataset.noteId, note]));
    connections = saved.connections.map(([from, to]) => ({ from: byId.get(from), to: byId.get(to) }))
        .filter((connection) => connection.from && connection.to);
    checkTrashEmpty();
}

function init() {
    document.getElementById("news-title").textContent = currentCase.title;
    document.getElementById("news-body").textContent = currentCase.newsDay1;
    const suspect1 = document.getElementById("suspect1");
    const suspect2 = document.getElementById("suspect2");
    suspect1.querySelector("img").src = currentCase.victim.photo;
    suspect1.querySelector(".text-black").textContent = currentCase.victim.name;
    suspect2.querySelector("img").src = currentCase.witness.photo;
    suspect2.querySelector(".text-black").textContent = currentCase.witness.name;
    document.querySelectorAll(".board-item").forEach(makeDraggable);
    initPins();
    createNote("welcome", "Carta de iniciação", Math.min(450, window.innerWidth - 390), 300);

    const saved = loadGame();
    if (saved) {
        day = saved.day;
        pendingRequest = saved.pendingRequest;
        highestZ = saved.highestZ || highestZ;
        document.querySelectorAll(".dynamic-note").forEach((note) => note.remove());
        restoreNotes(saved);
        updateCaseView();
    }
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
    document.getElementById("btn-reset-case").addEventListener("click", resetGame);
    document.getElementById("btn-start-case").addEventListener("click", () => {
    document.getElementById("intro-modal").classList.add("hidden");
    playFeedback(520, 0.08);
    });
    window.addEventListener("resize", drawStrings);
    checkTrashEmpty();
    drawStrings();
    saveGame();
    if (saved) document.getElementById("intro-modal").classList.add("hidden");
}

init();
