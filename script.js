// ==========================================================================
// MOTOR PROCEDURAL (GAME MASTER)
// ==========================================================================
const casesDB = [
    {
        id: "caso_corvo", title: "MORTE NO BECO DO CORVO",
        victim: { name: "Roberto Silva", photo: "assets/img/suspects/silva.jpg", desc: "Contador. Morto no beco. Tinha dívidas." },
        witness: { name: "Ana C.", photo: "assets/img/suspects/ana.jpg", desc: "Garçonete. Viu a vítima com um homem de sobretudo." },
        weapon: "faca",
        newsDay1: "Um homem não identificado foi encontrado sem vida atrás do bar 'O Corvo'. A A.D.A. assumiu a análise dos dados.",
        newsDay2: "A polícia confirmou: o corpo é de Roberto Silva, contador local. Uma garçonete, Ana C., prestou depoimento.",
        newsDay3: "Uma faca encontrada na cena sumiu misteriosamente da sala de evidências da polícia. A plataforma liberou consultas a antecedentes.",
        killerClue: "agiotas locais"
    }
];

const paperColors = [
    { bg: "#bae6fd", color: "#082f49" }, 
    { bg: "#bbf7d0", color: "#064e3b" }, 
    { bg: "#f5f5f5", color: "#171717", border: "1px solid #ccc" }, 
    { bg: "#fef08a", color: "#854d0e" }  
];
const fonts = ["'Caveat', cursive", "'Rock Salt', cursive", "'Special Elite', monospace", "'Shadows Into Light', cursive"];

let currentCase = casesDB[Math.floor(Math.random() * casesDB.length)];

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
    helper: { color: shuffledColors[0], font: shuffledFonts[0], role: "informante" },
    larper: { color: shuffledColors[1], font: shuffledFonts[1], role: "troll" },
    predecessor: { color: shuffledColors[2], font: shuffledFonts[2], role: "caido" },
    killer: { color: shuffledColors[3], font: shuffledFonts[3], role: "assassino" } 
};

function applyVocalTic(role, text) {
    if (role === 'helper') return text.toLowerCase(); 
    if (role === 'larper') return text.toUpperCase(); 
    if (role === 'predecessor') return text.replace(/a/g, 'e').replace(/o/g, 'u'); 
    return text; 
}

// Z-INDEX ALTO PARA SEMPRE FICAR ACIMA
let highestZ = 100;
let connections = []; 
let day = 1;
let pendingRequest = null;
const svgLayer = document.getElementById('strings-layer');

function getRandomPosition() {
    const minX = window.innerWidth * 0.15; const maxX = window.innerWidth * 0.65;
    const minY = window.innerHeight * 0.15; const maxY = window.innerHeight * 0.60;
    return { x: Math.floor(Math.random() * (maxX - minX)) + minX, y: Math.floor(Math.random() * (maxY - minY)) + minY };
}

// ==========================================================================
// DRAG & DROP SEM PULOS E COM ELEVAÇÃO
// ==========================================================================
function startDragging(element, e, isNew = false) {
    highestZ++;
    element.style.zIndex = highestZ;
    
    let startX = e.clientX; 
    let startY = e.clientY;
    let initialLeft, initialTop;
    
    // Se for puxado da lixeira ou gerado novinho pelo bloco de notas
    if (element.parentElement.id === 'trash-panel-content' || isNew) {
        if(element.parentElement.id === 'trash-panel-content') {
            document.body.appendChild(element); 
            document.getElementById('trash-panel').classList.add('hidden');
            checkTrashEmpty();
        }
        
        element.style.position = 'absolute';
        
        // Centraliza a nota exatamente onde o mouse clicou ou gerou
        initialLeft = e.clientX - 80; // 80 é metade da largura padrão
        initialTop = e.clientY - 70;  // 70 é metade da altura padrão
        element.style.left = `${initialLeft}px`; 
        element.style.top = `${initialTop}px`;
        
        const rot = Math.floor(Math.random() * 10) - 5;
        element.style.transform = `rotate(${rot}deg) scale(1.2)`;
        element.style.opacity = '0.5';
        
        setTimeout(() => {
            element.style.transform = `rotate(${rot}deg) scale(1)`;
            element.style.opacity = '1';
        }, 10);
        
    } else {
        // CORREÇÃO DO BUG (element.style.top): Lê a posição baseada na tag style puramente para ignorar Transforms
        initialLeft = parseFloat(element.style.left) || 0; 
        initialTop = parseFloat(element.style.top) || 0; 
        
        // Efeito de levantar a nota da mesa (scale 1.05 e sombra)
        let baseTransform = element.style.transform.replace(/scale\([^\)]*\)/g, '').trim();
        element.style.transform = `${baseTransform} scale(1.05)`;
        element.style.boxShadow = "-15px 22px 30px rgba(0,0,0,0.65)";
    }

    function onMouseMove(event) {
        const dx = event.clientX - startX; 
        const dy = event.clientY - startY;
        element.style.left = `${initialLeft + dx}px`; 
        element.style.top = `${initialTop + dy}px`;
        drawStrings();
    }
    
    function onMouseUp(event) {
        document.removeEventListener('mousemove', onMouseMove); 
        document.removeEventListener('mouseup', onMouseUp);
        
        // Remove efeito de levantar
        if(!isNew && element.parentElement && element.parentElement.id !== 'trash-panel-content') {
            element.style.transform = element.style.transform.replace(/scale\([^\)]*\)/g, '').trim();
            element.style.boxShadow = "";
        }
        
        const trashBin = document.getElementById('trash-bin');
        if (trashBin && element.parentElement !== document.getElementById('trash-panel-content')) {
            const itemRect = element.getBoundingClientRect(); 
            const trashRect = trashBin.getBoundingClientRect();
            if (itemRect.right > trashRect.left && itemRect.left < trashRect.right && itemRect.bottom > trashRect.top && itemRect.top < trashRect.bottom) {
                if (['daily-news', 'request-form', 'suspect1', 'suspect2'].includes(element.id)) {
                    element.style.left = `${initialLeft}px`; element.style.top = `${initialTop}px`; drawStrings(); return; 
                }
                element.classList.add('trash-eat');
                connections = connections.filter(conn => conn.from !== element && conn.to !== element);
                drawStrings();
                setTimeout(() => {
                    element.classList.remove('trash-eat'); 
                    document.getElementById('trash-panel-content').appendChild(element); 
                    checkTrashEmpty();
                }, 400);
            }
        }
    }
    document.addEventListener('mousemove', onMouseMove); 
    document.addEventListener('mouseup', onMouseUp);
}

function makeDraggable(element) {
    element.addEventListener('mousedown', (e) => {
        if (e.target.hasAttribute('contenteditable') || e.target.classList.contains('pin') || e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
        startDragging(element, e);
    });
}

// ==========================================================================
// INTERAÇÃO COM A LIXEIRA
// ==========================================================================
document.getElementById('trash-bin').addEventListener('mousedown', () => { 
    const tb = document.getElementById('trash-bin');
    tb.style.transform = 'scale(0.85)';
    setTimeout(() => { tb.style.transform = ''; }, 150);
    document.getElementById('trash-panel').classList.toggle('hidden'); 
    checkTrashEmpty(); 
});

function checkTrashEmpty() {
    const container = document.getElementById('trash-panel-content');
    const msg = document.getElementById('trash-empty-msg');
    msg.style.display = container.children.length === 0 ? 'block' : 'none';
}

// ==========================================================================
// SISTEMA DE FIOS 
// ==========================================================================
let tempLine = null; let startPin = null;
function initPins() {
    document.querySelectorAll('.pin').forEach(pin => { const newPin = pin.cloneNode(true); pin.replaceWith(newPin); });
    document.querySelectorAll('.pin').forEach(pin => {
        pin.addEventListener('mousedown', (e) => {
            startPin = e.target;
            tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            tempLine.setAttribute('stroke', '#cc0000'); tempLine.setAttribute('stroke-width', '3'); tempLine.setAttribute('stroke-dasharray', '4,4');
            svgLayer.appendChild(tempLine);
            const rect = startPin.getBoundingClientRect();
            tempLine.setAttribute('x1', rect.left + rect.width / 2); tempLine.setAttribute('y1', rect.top + rect.height / 2);
            tempLine.setAttribute('x2', rect.left + rect.width / 2); tempLine.setAttribute('y2', rect.top + rect.height / 2);
            e.stopPropagation(); 
        });
    });
}
window.addEventListener('mousemove', (e) => { if (tempLine) { tempLine.setAttribute('x2', e.clientX); tempLine.setAttribute('y2', e.clientY); } });
window.addEventListener('mouseup', (e) => {
    if (tempLine && startPin) {
        if (e.target.classList.contains('pin') && e.target !== startPin) {
            const fromItem = startPin.closest('.board-item'); const toItem = e.target.closest('.board-item');
            const exists = connections.some(c => (c.from === fromItem && c.to === toItem) || (c.from === toItem && c.to === fromItem));
            if(!exists) connections.push({ from: fromItem, to: toItem });
        }
        tempLine.remove(); tempLine = null; startPin = null; drawStrings();
    }
});
function drawStrings() {
    const currentTemp = tempLine; svgLayer.innerHTML = '';
    if (currentTemp) svgLayer.appendChild(currentTemp);
    connections.forEach(conn => {
        if (conn.from.parentElement.id === 'trash-panel-content' || conn.to.parentElement.id === 'trash-panel-content') return;
        const pin1 = conn.from.querySelector('.pin').getBoundingClientRect(); const pin2 = conn.to.querySelector('.pin').getBoundingClientRect();
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', pin1.left + pin1.width / 2); line.setAttribute('y1', pin1.top + pin1.height / 2); 
        line.setAttribute('x2', pin2.left + pin2.width / 2); line.setAttribute('y2', pin2.top + pin2.height / 2);
        line.setAttribute('stroke', '#a00'); line.setAttribute('stroke-width', '3'); line.setAttribute('opacity', '0.85');
        line.style.filter = "drop-shadow(-2px 4px 2px rgba(0,0,0,0.5))"; 
        svgLayer.appendChild(line);
    });
}

// ==========================================================================
// GERAÇÃO DE NOTAS E INÍCIO (DIA 1)
// ==========================================================================
function spawnNote(roleKey, content, x, y, isDossier = false) {
    highestZ++;
    const note = document.createElement('div');
    
    let processedContent = content;
    let finalRot = Math.floor(Math.random() * 8) - 4;
    let pinType = `<div class="drag-tape"></div><div class="pin"></div>`;

    if (roleKey === 'player') {
        note.className = `board-item post-it`;
        note.style.backgroundColor = '#fef08a';
        note.style.fontFamily = "'Permanent Marker', cursive";
        note.style.color = '#1e3a8a';
    } else if (roleKey === 'dossier') {
        note.className = `board-item dossier`;
        finalRot = 0; 
    } else {
        const profile = adaProfiles[roleKey];
        note.className = `board-item post-it`;
        note.style.backgroundColor = profile.color.bg;
        note.style.color = profile.color.color;
        note.style.fontFamily = profile.font;
        if(profile.color.border) note.style.border = profile.color.border;

        if (roleKey === 'killer') {
            finalRot = 0;
            pinType = `<div class="pin" style="background: radial-gradient(circle at 30% 30%, #444, #111);"></div>`;
        }
        processedContent = applyVocalTic(roleKey, content);
    }

    note.style.left = x + 'px'; note.style.top = y + 'px'; 
    note.style.transform = `rotate(${finalRot}deg)`; note.style.zIndex = highestZ;
    
    if (roleKey === 'player') {
        note.innerHTML = `${pinType}<div contenteditable="true" data-placeholder="Sua anotação..."></div>`;
    } else {
        note.innerHTML = `${pinType}<div>${processedContent}</div>`;
    }
    
    document.body.appendChild(note); makeDraggable(note); initPins();
    return note;
}

// Setup DIA 1
document.getElementById('news-title').innerText = currentCase.title;
document.getElementById('news-body').innerText = currentCase.newsDay1;
document.getElementById('suspect1').querySelector('img').src = currentCase.victim.photo;
document.getElementById('suspect1').querySelector('.text-black').innerText = currentCase.victim.name;
document.getElementById('suspect2').querySelector('img').src = currentCase.witness.photo;
document.getElementById('suspect2').querySelector('.text-black').innerText = currentCase.witness.name;
document.querySelectorAll('.board-item').forEach(makeDraggable); initPins();

// Bilhete de Boas vindas
spawnNote('killer', 'Bem-vindo à Associação de Detetives Anônimos. Este é um quadro compartilhado. Respeite as evidências. - Direção', 450, 400);

// Puxando notas do Bloco Físico
document.getElementById('postit-pad').addEventListener('mousedown', (e) => {
    const note = spawnNote('player', '', 0, 0);
    startDragging(note, e, true);
});

// ==========================================================================
// PRANCHETA DE REQUISIÇÃO E CICLO NOTURNO
// ==========================================================================
document.getElementById('btn-request').addEventListener('click', () => {
    if (pendingRequest) {
        document.getElementById('req-status').innerText = "UMA SOLICITAÇÃO JÁ ESTÁ EM FILA.";
        document.getElementById('req-status').style.color = "#991b1b"; return;
    }
    const input = document.getElementById('req-input').value.trim();
    if(input !== "") {
        pendingRequest = input;
        document.getElementById('req-status').innerText = "PROCESSO INICIADO. RETORNO AMANHÃ.";
        document.getElementById('req-status').style.color = "#166534";
        setTimeout(() => document.getElementById('req-status').innerText = "", 3000);
        document.getElementById('req-input').value = "";
    }
});

document.getElementById('btn-end-day').addEventListener('click', () => {
    document.getElementById('night-overlay').classList.add('lights-out');
    
    setTimeout(() => {
        day++; document.getElementById('day-counter').innerText = day;

        if(day === 2) {
            document.getElementById('news-title').innerText = "VÍTIMA IDENTIFICADA";
            document.getElementById('news-body').innerText = currentCase.newsDay2;
            const pos = getRandomPosition();
            spawnNote('helper', `olá. também peguei esse caso. a testemunha, ${currentCase.witness.name.split(' ')[0]}, parece saber quem fez isso.`, pos.x, pos.y);
        } 
        else if (day === 3) {
            document.getElementById('news-title').innerText = "FALHA NA EVIDÊNCIA";
            document.getElementById('news-body').innerText = currentCase.newsDay3;
            
            const form = document.getElementById('request-form');
            form.style.display = 'block';
            makeDraggable(form);
            
            const p1 = getRandomPosition(); const p2 = getRandomPosition();
            spawnNote('larper', `A ${currentCase.weapon.toUpperCase()} FOI ROUBADA! O GOVERNO ESTÁ POR TRÁS DISSO! EU TENHO CERTEZA!`, p1.x, p1.y);
            spawnNote('killer', `Colegas, a ferramenta de Requisição foi liberada no sistema hoje. Foquem nos ${currentCase.killerClue}.`, p2.x, p2.y);
        } 
        else if (day === 4) {
            document.getElementById('news-title').innerText = "TESTEMUNHA AMEAÇADA";
            document.getElementById('news-body').innerText = `${currentCase.witness.name} sofreu tentativa de invasão. A direção da A.D.A. suspeita de vazamento de dados interno.`;
            
            const p1 = getRandomPosition();
            spawnNote('predecessor', `Eles estau manipulandu us dadus de mesa. Nau cuinfe nu sistema uficial.`, p1.x, p1.y);
            if(connections.length > 0) connections.pop();
        }

        if(pendingRequest) {
            const queryName = pendingRequest.toLowerCase(); const pos = getRandomPosition();
            if(queryName.includes(currentCase.victim.name.toLowerCase().split(' ')[0])) {
                spawnNote('dossier', `<strong>ARQUIVO: ${currentCase.victim.name.toUpperCase()}</strong><br><div class="dossier-stamp dossier-success">VÍTIMA</div><br>${currentCase.victim.desc}`, pos.x, pos.y, true);
            } else if(queryName.includes(currentCase.witness.name.toLowerCase().split(' ')[0])) {
                spawnNote('dossier', `<strong>ARQUIVO: ${currentCase.witness.name.toUpperCase()}</strong><br><div class="dossier-stamp dossier-success">TESTEMUNHA</div><br>${currentCase.witness.desc}`, pos.x, pos.y, true);
            } else {
                spawnNote('dossier', `<strong>A.D.A. SYSTEM</strong><br><div class="dossier-stamp dossier-fail">INEXISTENTE</div><br>ALVO: "${pendingRequest.toUpperCase()}" não localizado nos arquivos estaduais.`, pos.x, pos.y, true);
            }
            pendingRequest = null;
        }

        drawStrings();
    }, 2000); 

    setTimeout(() => { 
        document.getElementById('night-overlay').classList.remove('lights-out'); 
    }, 4500);
});