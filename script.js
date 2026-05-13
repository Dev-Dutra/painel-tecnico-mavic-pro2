document.addEventListener('DOMContentLoaded', () => {
    // 1. SELEÇÃO DE ELEMENTOS
    const hotspots = document.querySelectorAll('.hotspot');
    const panelImg = document.getElementById('panel-img');
    const panelTag = document.getElementById('panel-tag');
    const panelContent = document.getElementById('side-panel-content');
    const resetBtn = document.getElementById('reset-panel');
    const statusText = document.getElementById('system-status');
    const checks = document.querySelectorAll('.flight-check');

    const knobs = {
        'stick-left': document.querySelector('#stick-left .stick-knob'),
        'stick-right': document.querySelector('#stick-right .stick-knob')
    };
    const labels = {
        'stick-left': document.getElementById('label-left'),
        'stick-right': document.getElementById('label-right')
    };

    const tabData = {
   drone: {
            img: "assets/imagens/drone_perspectiva.png",
            tag: "DIAGNÓSTICO GERAL",
            html: `
                <h3 class="detail-title" style="color: #ffffff; margin-bottom: 5px; font-size: 1.2rem; letter-spacing: 1px;">MAVIC PRO 2</h3>
                <p style="color: #00f2ff; font-size: 0.7rem; font-weight: bold; margin-bottom: 12px; text-transform: uppercase;">Visão Geral do Sistema</p>
                
                <!-- INTRODUÇÃO -->
                <div style="margin-bottom: 15px; background: rgba(0, 242, 255, 0.05); padding: 10px; border-radius: 4px; border-right: 2px solid #00f2ff;">
                    <p style="color: #fff; font-size: 0.85rem; line-height: 1.4; margin: 0;">
                        O <strong>Mavic Pro 2</strong> é uma aeronave de performance avançada, projetada para unir a portabilidade de um drone dobrável com o poder de uma câmera cinematográfica. Seu grande diferencial é a engenharia sueca da <strong>Hasselblad</strong>.
                    </p>
                </div>

                <!-- SISTEMA DE IMAGEM -->
                <div style="margin-bottom: 15px;">
                    <h4 style="color: #fff; font-size: 0.85rem; margin-bottom: 5px;">🎥 SISTEMA DE IMAGEM</h4>
                    <p style="color: #bbb; font-size: 0.8rem; line-height: 1.3;">
                        Sensor <strong>CMOS de 1"</strong>. Suporte a Dlog-M de 10 bits e Vídeo HDR. Abertura ajustável de <strong>f/2.8 a f/11</strong> para controle total de exposição.
                    </p>
                </div>

                <!-- SEGURANÇA E INTELIGÊNCIA -->
                <div style="margin-bottom: 15px;">
                    <h4 style="color: #fff; font-size: 0.85rem; margin-bottom: 5px;">🛡️ SEGURANÇA OMNIDIRECIONAL</h4>
                    <p style="color: #bbb; font-size: 0.8rem; line-height: 1.3;">
                        Detecção de obstáculos em <strong>6 lados</strong>. Sistema APAS 2.0 para desvios automáticos e transmissão <strong>OcuSync 2.0</strong> (até 8km em 1080p).
                    </p>
                </div>

                <!-- PERFORMANCE -->
                <div style="margin-bottom: 15px;">
                    <h4 style="color: #fff; font-size: 0.85rem; margin-bottom: 5px;">⚡ PERFORMANCE E ESTRUTURA</h4>
                    <p style="color: #bbb; font-size: 0.8rem; line-height: 1.3;">
                        Design aerodinâmico com 19% menos arrasto. Propulsão silenciosa, <strong>72 km/h</strong> no Modo Sport e autonomia de <strong>31 min</strong>.
                    </p>
                </div>

                <!-- RESUMO TÉCNICO RÁPIDO -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; border-top: 1px solid rgba(0, 242, 255, 0.2); padding-top: 10px;">
                    <div style="font-size: 0.7rem; color: #888;">PESO: <span style="color: #00f2ff;">907g</span></div>
                    <div style="font-size: 0.7rem; color: #888;">RES: <span style="color: #00f2ff;">20MP / 4K</span></div>
                    <div style="font-size: 0.7rem; color: #888;">SENSORES: <span style="color: #00f2ff;">12 TOTAIS</span></div>
                    <div style="font-size: 0.7rem; color: #888;">STORAGE: <span style="color: #00f2ff;">8GB INT.</span></div>
                </div>`
        },
     vlos: {
            img: "assets/imagens/voo.png",
            tag: "SISTEMA DE OPERAÇÃO",
            html: `
                <h3 class="detail-title" style="color: #ffffff; margin-bottom: 5px; font-size: 1.2rem; letter-spacing: 1px;">REGRAS DE OPERAÇÃO</h3>
                <p style="color: #00f2ff; font-size: 0.7rem; font-weight: bold; margin-bottom: 15px; text-transform: uppercase;">Normas e Modalidades de Voo (ANAC/DECEA)</p>
                
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <!-- VLOS -->
                    <div style="border-left: 2px solid #00f2ff; padding-left: 12px;">
                        <p style="font-size: 0.85rem; color: #ffffff; margin-bottom: 2px;"><strong>• VLOS (Visual Line of Sight)</strong></p>
                        <p style="font-size: 0.75rem; color: #bbb; line-height: 1.2;">Operação em alcance visual direto do piloto, sem auxílio de lentes ou dispositivos (exceto óculos de grau).</p>
                    </div>

                    <!-- EVLOS -->
                    <div style="border-left: 2px solid #ffea00; padding-left: 12px;">
                        <p style="font-size: 0.85rem; color: #ffffff; margin-bottom: 2px;"><strong>• EVLOS (Extended Visual Line of Sight)</strong></p>
                        <p style="font-size: 0.75rem; color: #bbb; line-height: 1.2;">Alcance visual estendido com auxílio de <strong>observadores de RPA</strong>, que mantêm contato rádio com o piloto remoto.</p>
                    </div>

                    <!-- BVLOS -->
                    <div style="border-left: 2px solid #ff3e3e; padding-left: 12px;">
                        <p style="font-size: 0.85rem; color: #ffffff; margin-bottom: 2px;"><strong>• BVLOS (Beyond Visual Line of Sight)</strong></p>
                        <p style="font-size: 0.75rem; color: #bbb; line-height: 1.2;">Voo além da linha de visão visual. Requer certificação da aeronave e equipamentos de telemetria avançados.</p>
                    </div>
                </div>

                <div style="margin-top: 20px; padding: 10px; background: rgba(255, 255, 255, 0.05); border-radius: 4px;">
                    <h4 style="color: #00f2ff; font-size: 0.75rem; margin-bottom: 5px; text-align: center;">LIMITES OPERACIONAIS</h4>
                    <div style="display: flex; justify-content: space-around; text-align: center;">
                        <div>
                            <span style="display: block; font-size: 0.6rem; color: #888;">ALTURA MÁX</span>
                            <span style="font-size: 0.8rem; color: #fff;">120m (400ft)</span>
                        </div>
                        <div>
                            <span style="display: block; font-size: 0.6rem; color: #888;">DISTÂNCIA</span>
                            <span style="font-size: 0.8rem; color: #fff;">Varia p/ Categoria</span>
                        </div>
                    </div>
                </div>`
        }
    };

    // --- AUXILIARES DE ESTILO ---
    function clearTabHighlights() {
        const btnDrone = document.getElementById('tab-drone');
        const btnVlos = document.getElementById('tab-vlos');
        [btnDrone, btnVlos].forEach(btn => {
            if(btn) {
                btn.style.background = "rgba(255, 255, 255, 0.05)";
                btn.style.borderColor = "rgba(255, 255, 255, 0.2)";
                btn.style.color = "#fff";
            }
        });
    }

    function highlightButton(activeBtn, inactiveBtn) {
        if(!activeBtn || !inactiveBtn) return;
        activeBtn.style.background = "rgba(0, 242, 255, 0.1)";
        activeBtn.style.borderColor = "#00f2ff";
        activeBtn.style.color = "#00f2ff";
        
        inactiveBtn.style.background = "rgba(255, 255, 255, 0.05)";
        inactiveBtn.style.borderColor = "rgba(255, 255, 255, 0.2)";
        inactiveBtn.style.color = "#fff";
    }

    // --- FUNÇÕES DE INTERFACE ---
    window.updatePanel = function(title, imgPath, description, tagText) {
        panelContent.style.opacity = '0';
        panelImg.style.opacity = '0';
        setTimeout(() => {
            panelImg.src = imgPath;
            panelTag.innerText = tagText;
            panelContent.innerHTML = description;
            panelContent.style.opacity = '1';
            panelImg.style.opacity = '1';
        }, 300);
    };

    window.switchTab = function(type) {
        const btnDrone = document.getElementById('tab-drone');
        const btnVlos = document.getElementById('tab-vlos');
        if (!tabData[type]) return;

        updatePanel("", tabData[type].img, tabData[type].html, tabData[type].tag);
        
        if (type === 'drone') highlightButton(btnDrone, btnVlos);
        else highlightButton(btnVlos, btnDrone);
    };

    // --- JOYSTICKS ---
    function handleJoystickMove(e, id) {
        const joystick = document.getElementById(id);
        const rect = joystick.getBoundingClientRect();
        const knob = knobs[id];
        let x = e.clientX - (rect.left + rect.width / 2);
        let y = e.clientY - (rect.top + rect.height / 2);
        const limit = 40;
        const dist = Math.sqrt(x*x + y*y);
        if (dist > limit) { x *= limit / dist; y *= limit / dist; }
        knob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        updateJoystickLabel(labels[id], x, y, id === 'stick-left');
    }

    function updateJoystickLabel(label, x, y, isLeft) {
        let cmd = "";
        if (isLeft) {
            if (y < -10) cmd += "SUBIR ↑ "; else if (y > 10) cmd += "DESCER ↓ ";
            if (x < -10) cmd += "GIRAR ESQ ⟲"; else if (x > 10) cmd += "GIRAR DIR ⟳";
        } else {
            if (y < -10) cmd += "FRENTE ▲ "; else if (y > 10) cmd += "TRÁS ▼ ";
            if (x < -10) cmd += "LADO ESQ ◀"; else if (x > 10) cmd += "LADO DIR ▶";
        }
        label.textContent = cmd || "ESTACIONÁRIO";
    }

    function resetJoystick(id) {
        knobs[id].style.transform = `translate(-50%, -50%)`;
        labels[id].textContent = 'ESTACIONÁRIO';
    }

    // --- EVENTOS JOYSTICK ---
    ['stick-left', 'stick-right'].forEach(id => {
        const zone = document.getElementById(id);
        if(zone) {
            zone.addEventListener('mousemove', (e) => handleJoystickMove(e, id));
            zone.addEventListener('mouseleave', () => resetJoystick(id));
        }
    });

    // --- EVENTOS HOTSPOTS ---
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            clearTabHighlights();
            const title = hotspot.getAttribute('data-title');
            const imgPath = hotspot.getAttribute('data-img');
            const description = hotspot.getAttribute('data-extra');
            const htmlContent = `<h3 class="detail-title">${title}</h3><div class="detail-desc">${description}</div>`;
            updatePanel(title, imgPath, htmlContent, "DIAGNÓSTICO ATIVO");
        });
    });

    // --- LÓGICA DO CHECKLIST (CORRIGIDA) ---
    const totalItems = checks.length; // Usa o length real dos checkboxes

    checks.forEach(c => {
        c.addEventListener('change', () => {
            const checked = document.querySelectorAll('.flight-check:checked').length;
            
            if (checked === 0) {
                statusText.innerHTML = `» STATUS: AGUARDANDO 0/${totalItems}`;
                statusText.style.color = "#00e7ff";
            } 
            else if (checked < totalItems) {
                statusText.innerHTML = `» EM VERIFICAÇÃO: ${checked}/${totalItems}`;
                statusText.style.color = "#ffea00";
            } 
            else {
                statusText.innerHTML = `» SISTEMAS PRONTOS: ${totalItems}/${totalItems}`;
                statusText.style.color = "#00ff41";
                console.log("Pre-flight checklist completo. Aeronave pronta.");
            }
        });
    });

    // --- INICIALIZAÇÃO ---
    if (resetBtn) resetBtn.addEventListener('click', () => switchTab('drone'));

    switchTab('drone'); // Inicia com a aba drone ativa
});