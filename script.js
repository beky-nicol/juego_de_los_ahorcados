const bancoCiclos = {
    1: [
        { palabra: "TECLADO", pistaInicial: "Periférico de entrada esencial utilizado para introducir datos textuales y comandos.", pistasExtra: ["Contiene bloques alfanuméricos, de funciones y numéricos.", "La distribución más común en español se llama QWERTY.", "Se conecta actualmente mediante puertos USB o de forma inalámbrica."] },
        { palabra: "MONITOR", pistaInicial: "Periférico de salida principal que muestra la interfaz visual del sistema operativo.", pistasExtra: ["Su resolución común actual es Full HD (1920x1080 píxeles).", "Su tasa de refresco estándar se mide en hercios (Hz).", "Se conecta a la computadora mediante cables HDMI o DisplayPort."] }
    ],
    2: [
        { palabra: "PROCESADOR", pistaInicial: "Componente central encapsulado que ejecuta las instrucciones y operaciones lógicas.", pistasExtra: ["Se le conoce universalmente como el 'cerebro' de la computadora.", "Va montado directamente sobre el zócalo o socket de la placa madre.", "Intel Core y AMD Ryzen son las familias más dominantes del mercado."] },
        { palabra: "IMPRESORA", pistaInicial: "Periférico que transfiere documentos de texto y gráficos digitales a papel físico.", pistasExtra: ["Las tecnologías más usadas son por inyección de tinta o sistema láser.", "Utiliza consumibles como cartuchos de tinta o tóners de polvo fino.", "Muchas de ellas hoy en día son multifuncionales (incluyen escáner)."] }
    ],
    3: [
        { palabra: "WINDOWS", pistaInicial: "Sistema operativo comercial desarrollado por Microsoft dominando el entorno PC.", pistasExtra: ["Su interfaz gráfica icónica popularizó el menú de inicio y las ventanas.", "Su sistema de archivos nativo estándar actual se denomina NTFS.", "Sus versiones de consumo más recientes incluyen la 10 y la 11."] },
        { palabra: "MEMORIA", pistaInicial: "Componente de almacenamiento volátil y rápido donde se cargan los datos en uso.", pistasExtra: ["Nos referimos específicamente al módulo de acceso aleatorio (RAM).", "Si la computadora se apaga, todo lo almacenado en ella se borra por completo.", "Sus generaciones tecnológicas modernas se denominan DDR4 y DDR5."] }
    ],
    4: [
        { palabra: "INTERNET", pistaInicial: "Red global de computadoras interconectadas que comparten información en todo el mundo.", pistasExtra: ["Funciona bajo el conjunto de protocolos de comunicación TCP/IP.", "Permite el acceso a servicios masivos como la World Wide Web y correos.", "A nivel doméstico se distribuye comúnmente por fibra óptica o Wi-Fi."] },
        { palabra: "ROUTER", pistaInicial: "Dispositivo de hardware que encamina los paquetes de datos entre redes distintas.", pistasExtra: ["Conecta tu red local interna con la red externa de tu proveedor (ISP).", "Es el encargado de asignar direcciones IP locales mediante DHCP.", "Suele emitir ondas de radio en frecuencias de 2.4 GHz y 5 GHz."] }
    ],
    5: [
        { palabra: "ANTIVIRUS", pistaInicial: "Programa de seguridad encargado de prevenir, detección y eliminar código malicioso.", pistasExtra: ["Protege activamente al sistema contra troyanos, gusanos y ransomware.", "Requiere actualizar constantemente su base de datos de firmas.", "Ejemplos integrados o externos son Windows Defender, Avast o ESET."] },
        { palabra: "FORMATEAR", pistaInicial: "Acción de preparar o borrar por completo una unidad de almacenamiento borrando su contenido.", pistasExtra: ["Se realiza de forma casi obligatoria antes de una reinstalar un sistema limpio.", "Reconstruye la tabla de asignación de archivos de la unidad seleccionada.", "Puede ejecutarse en modo rápido o en modo completo para buscar sectores dañados."] }
    ],
    6: [
        { palabra: "MULTIMETRO", pistaInicial: "Instrumento eléctrico portátil utilizado por técnicos para medir magnitudes actives.", pistasExtra: ["Indispensable para comprobar si la fuente de poder entrega los voltajes correctos (12V, 5V, 3.3V).", "Se usa en modo continuidad para saber si un cable o pista está roto internamente.", "También se le conoce en el taller técnico con el nombre de 'téster'."] },
        { palabra: "DISIPADOR", pistaInicial: "Estructura metálica diseñada para evacuar el calor generado por componentes críticos.", pistasExtra: ["Fabricado comúnmente en aluminio o cobre por sus propiedades térmicas.", "Requiere el uso de pasta térmica en su base para un contacto microscópico ideal.", "Por lo general cuenta con un ventilador (cooler) acoplado encima para enfriamiento activo."] }
    ],
    7: [
        { palabra: "BIOS", pistaInicial: "Firmware grabado en un chip de la placa madre que gestiona el arranque inicial del hardware.", pistasExtra: ["Ejecuta la rutina POST para verificar que la RAM, CPU y video estén estables.", "Mantiene sus configuraciones de hora y fecha gracias a una pila de botón CR2032.", "En las placas modernas ha sido completamente sustituida por el estándar UEFI."] },
        { palabra: "OVERCLOCKING", pistaInicial: "Técnica avanzada de forzar la frecuencia de reloj de un componente por encima de los valores de fábrica.", pistasExtra: ["Su objetivo principal es exprimir más rendimiento del procesador o tarjeta gráfica.", "Provoca un incremento drástico en el consumo eléctrico y la temperatura.", "Si se elevan los voltajes sin refrigeración adecuada, se puede quemar el silicio."] }
    ],
    8: [
        { palabra: "ETHERNET", pistaInicial: "Estándar de redes cableadas que define las características físicas y de cableado LAN.", pistasExtra: ["Se asocia directamente con el uso de los conectores plásticos RJ45.", "Sus cables de par trenzado se dividen en categorías de velocidad (Cat5e, Cat6, Cat7).", "Garantiza conexiones de red libres de interferencias ambientales a diferencia del Wi-Fi."] },
        { palabra: "SERVIDOR", pistaInicial: "Computadora de altas prestaciones que provee recursos, servicios o datos a otros clientes.", pistasExtra: ["Suele operar de forma ininterrumpida las 24 horas del día, los 7 días de la semana.", "Utiliza sistemas operativos especializados como Linux Ubuntu Server o Windows Server.", "Aloja bases de datos, páginas web corporativas o archivos compartidos en red."] }
    ]
};

// Paleta de Colores de los Sectores (Inspirada en tu imagen: Rojo, Naranja, Verde, Morado, Amarillo, Blanco, Azul, etc.)
const coloresSectores = ["#e74c3c", "#e67e22", "#2ecc71", "#9b59b6", "#f1c40f", "#ffffff", "#3498db", "#1abc9c"];

let ciclosDisponibles = Object.keys(bancoCiclos).map(Number);
let cicloSeleccionado = null;
let preguntaFaseIndice = 0; 
let totalPreguntasRespondidasGlobal = 0;
let historialResultados = [];

let palabraObjetivo = "";
let lettersAdivinadas = [];
let intentosRestantes = 6;
let pistasUtilizadasCount = 0;
let tiempoRestante = 60;
let temporizadorIntervalo;
let juegoTerminadoParaPregunta = false;

let nombreJugador1 = "";
let nombreJugador2 = "";
let turnoDeJugadorActual = "";

const estadosAhorcadoVisual = [
    "   +---+\n   |   |\n   O   |\n  /|\\  |\n  / \\  |\n       |", 
    "   +---+\n   |   |\n   O   |\n  /|\\  |\n  /    |\n       |", 
    "   +---+\n   |   |\n   O   |\n  /|\\  |\n       |\n       |", 
    "   +---+\n   |   |\n   O   |\n  /|   |\n       |\n       |", 
    "   +---+\n   |   |\n   O   |\n   |   |\n       |\n       |", 
    "   +---+\n   |   |\n   O   |\n       |\n       |\n       |", 
    "   +---+\n   |   |\n       |\n       |\n       |\n       |"  
];

// Nodos DOM
const pantallaRuleta = document.getElementById("pantalla-ruleta");
const pantallaRegistro = document.getElementById("pantalla-registro");
const pantallaJuego = document.getElementById("pantalla-juego");
const pantallaResultados = document.getElementById("pantalla-resultados");

const inputJ1 = document.getElementById("jugador1");
const inputJ2 = document.getElementById("jugador2");
const tituloCiclo = document.getElementById("titulo-ciclo");
const canvasRuleta = document.getElementById("ruleta-canvas");
const ctx = canvasRuleta.getContext("2d");
const textoResultadoRuleta = document.getElementById("texto-resultado-ruleta");
const btnGirarRuleta = document.getElementById("btn-girar-ruleta");

const infoCiclo = document.getElementById("info-ciclo");
const infoTiempo = document.getElementById("info-tiempo");
const infoVidas = document.getElementById("info-vidas");
const textTurnoJugador = document.getElementById("turno-jugador");
const divAhorcadoVisual = document.getElementById("contenedor-ahorcado");
const pPistaPregunta = document.getElementById("pista-pregunta");
const divPalabraOculta = document.getElementById("palabra-oculta");
const pTextoPistaExtra = document.getElementById("texto-pista-extra");
const btnPista = document.getElementById("btn-pista");
const spanPistasRestantes = document.getElementById("pistas-restantes");
const contenedorOpcionesTeclado = document.getElementById("opciones");
const bloqueRetro = document.getElementById("retroalimentacion");
const textoRetro = document.getElementById("texto-retroalimentacion");
const btnSiguiente = document.getElementById("btn-siguiente");
const bloqueResultadoFinal = document.getElementById("resultadoFinal");

// DIBUJAR LA RULETA DINÁMICAMENTE EN EL CANVAS
function dibujarRuleta() {
    const numSectores = ciclosDisponibles.length;
    if (numSectores === 0) return;

    const anguloSector = (2 * Math.PI) / numSectores;
    const centroX = canvasRuleta.width / 2;
    const centroY = canvasRuleta.height / 2;
    const radio = centroX - 10;

    ctx.clearRect(0, 0, canvasRuleta.width, canvasRuleta.height);

    for (let i = 0; i < numSectores; i++) {
        const anguloInicio = i * anguloSector;
        const anguloFin = anguloInicio + anguloSector;

        // Dibujar el sector de color
        ctx.beginPath();
        ctx.moveTo(centroX, centroY);
        ctx.arc(centroX, centroY, radio, anguloInicio, anguloFin);
        ctx.closePath();
        ctx.fillStyle = coloresSectores[ciclosDisponibles[i] - 1];
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#050816";
        ctx.stroke();

        // Escribir el texto rotado (ej: "Ciclo 1")
        ctx.save();
        ctx.translate(centroX, centroY);
        ctx.rotate(anguloInicio + anguloSector / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = ciclosDisponibles[i] === 6 ? "#000000" : "#ffffff";
        ctx.font = "bold 16px 'Orbitron', sans-serif";
        ctx.fillText(`Ciclo ${ciclosDisponibles[i]}`, radio - 20, 5);
        ctx.restore();
    }

    // Círculo central blanco/vacío (Como en tu imagen)
    ctx.beginPath();
    ctx.arc(centroX, centroY, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#e8f9ff";
    ctx.fill();
    ctx.stroke();
}

// Inicializar primera vista de la ruleta
dibujarRuleta();

// GIRAR LA RULETA CON CANVAS
let gradosRotacionAcumulados = 0;
btnGirarRuleta.addEventListener("click", () => {
    if (ciclosDisponibles.length === 0) return;
    btnGirarRuleta.disabled = true;
    textoResultadoRuleta.textContent = "Sorteando ciclo académico...";

// ESCUCHAR EL CLIC DEL BOTÓN PARA RESTAURAR TODOS LOS CICLOS EN LA RULETA
document.getElementById("btn-restaurar-ruleta").addEventListener("click", () => {
    if (confirm("¿Deseas restaurar todos los ciclos en la ruleta? (Se volverán a mostrar del 1 al 8)")) {
        // 1. Volver a llenar el array con todos los ciclos
        ciclosDisponibles = Object.keys(bancoCiclos).map(Number);
        
        // 2. Redibujar la ruleta con los 8 sectores completos de inmediato
        dibujarRuleta();
        
        // 3. Resetear textos y asegurar que el botón de girar esté activo
        textoResultadoRuleta.textContent = "¡Ruleta restaurada! Giren para seleccionar un ciclo.";
        btnGirarRuleta.disabled = false;
    }
});

    // Elegir índice al azar
    let indiceAzar = Math.floor(Math.random() * ciclosDisponibles.length);
    cicloSeleccionado = ciclosDisponibles[indiceAzar];

    // Calcular el ángulo donde se encuentra el ciclo seleccionado para que apunte a la flecha derecha (0 radianes / 360 grados)
    const numSectores = ciclosDisponibles.length;
    const anguloSectorGrados = 360 / numSectores;
    const centroSectorGrados = (indiceAzar * anguloSectorGrados) + (anguloSectorGrados / 2);

    // Compensación para que frene exactamente en la flecha de la derecha (0° en Canvas)
    const gradosDestino = 360 - centroSectorGrados;

    // Sumar múltiples vueltas (4 a 6 vueltas completas) para el efecto visual de velocidad
    gradosRotacionAcumulados += 1440 + gradosDestino - (gradosRotacionAcumulados % 360);
    canvasRuleta.style.transform = `rotate(${gradosRotacionAcumulados}deg)`;

    setTimeout(() => {
        textoResultadoRuleta.innerHTML = `¡Salió el <span style="color:#00f5ff">Ciclo ${cicloSeleccionado}</span>!`;
        setTimeout(() => {
            pantallaRuleta.classList.add("oculto");
            pantallaRegistro.classList.remove("oculto");
            tituloCiclo.textContent = `Registro: Ciclo ${cicloSeleccionado}`;
            inputJ1.value = "";
            inputJ2.value = "";
        }, 1500);
    }, 4000);
});

// GUARDAR PARTICIPANTES E INICIAR JUEGO
document.getElementById("btn-iniciar-nivel").addEventListener("click", () => {
    nombreJugador1 = inputJ1.value.trim();
    nombreJugador2 = inputJ2.value.trim();
    if (!nombreJugador1 || !nombreJugador2) {
        alert("Por favor, ingresen el nombre de ambos participantes.");
        return;
    }
    pantallaRegistro.classList.add("oculto");
    pantallaJuego.classList.remove("oculto");
    preguntaFaseIndice = 0;
    iniciarPreguntaAhorcado();
});

// LOGICA JUEGO AHORCADO
function iniciarPreguntaAhorcado() {
    juegoTerminadoParaPregunta = false;
    lettersAdivinadas = [];
    intentosRestantes = 6;
    pistasUtilizadasCount = 0;
    tiempoRestante = 60;

    turnoDeJugadorActual = preguntaFaseIndice === 0 ? nombreJugador1 : nombreJugador2;

    const datosPregunta = bancoCiclos[cicloSeleccionado][preguntaFaseIndice];
    palabraObjetivo = datosPregunta.palabra.toUpperCase();

    infoCiclo.textContent = `Ciclo Activo: ${cicloSeleccionado}° Ciclo`;
    infoVidas.textContent = `Intentos: ${intentosRestantes}`;
    textTurnoJugador.textContent = `Turno de: ${turnoDeJugadorActual}`;
    pPistaPregunta.textContent = `Pista Inicial: ${datosPregunta.pistaInicial}`;
    pTextoPistaExtra.textContent = "";
    spanPistasRestantes.textContent = 3;
    btnPista.disabled = false;
    bloqueRetro.classList.add("oculto");
    btnSiguiente.classList.add("oculto");

    actualizarPalabraOculta();
    actualizarDibujoAhorcado();
    generarTecladoVirtual();

    infoTiempo.textContent = `Tiempo: ${tiempoRestante}s`;
    clearInterval(temporizadorIntervalo);
    temporizadorIntervalo = setInterval(() => {
        tiempoRestante--;
        infoTiempo.textContent = `Tiempo: ${tiempoRestante}s`;
        if (tiempoRestante <= 0) {
            clearInterval(temporizadorIntervalo);
            finalizarPregunta(false, "¡Se agotó el tiempo!");
        }
    }, 1000);
}

function actualizarPalabraOculta() {
    let display = "";
    for (let i = 0; i < palabraObjetivo.length; i++) {
        let letra = palabraObjetivo[i];
        if (lettersAdivinadas.includes(letra)) {
            display += letra + " ";
        } else {
            display += "_ ";
        }
    }
    divPalabraOculta.textContent = display.trim();
}

function actualizarDibujoAhorcado() {
    divAhorcadoVisual.innerHTML = `
        <pre style="font-family: monospace; line-height: 1.2; background: rgba(0,0,0,0.5); padding: 15px; border-radius: 10px; display: inline-block; text-align: left; color: #c77dff; border: 1px solid rgba(199,125,255,0.3);">
            ${estadosAhorcadoVisual[intentosRestantes]}
        </pre>
    `;
}

function generarTecladoVirtual() {
    contenedorOpcionesTeclado.innerHTML = "";
    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
    alfabeto.forEach(letra => {
        const btnLetra = document.createElement("button");
        btnLetra.className = "opcion";
        btnLetra.style.marginTop = "0";
        btnLetra.style.padding = "10px";
        btnLetra.textContent = letra;
        btnLetra.addEventListener("click", () => presionarLetra(btnLetra, letra));
        contenedorOpcionesTeclado.appendChild(btnLetra);
    });
}

function presionarLetra(nodoBoton, letraPresionada) {
    if (juegoTerminadoParaPregunta) return;
    nodoBoton.disabled = true;

    if (palabraObjetivo.includes(letraPresionada)) {
        nodoBoton.classList.add("correcta");
        lettersAdivinadas.push(letraPresionada);
        actualizarPalabraOculta();

        const palabraLimpia = palabraObjetivo.replace(/\s/g, "");
        const gano = palabraLimpia.split("").every(l => lettersAdivinadas.includes(l));
        if (gano) finalizarPregunta(true, "¡Correcto! Descubriste la palabra.");
    } else {
        nodoBoton.classList.add("incorrecta");
        intentosRestantes--;
        infoVidas.textContent = `Intentos: ${intentosRestantes}`;
        actualizarDibujoAhorcado();
        if (intentosRestantes <= 0) finalizarPregunta(false, "¡Ahorcado! Sin intentos.");
    }
}

btnPista.addEventListener("click", () => {
    if (juegoTerminadoParaPregunta || pistasUtilizadasCount >= 3) return;
    const datosPregunta = bancoCiclos[cicloSeleccionado][preguntaFaseIndice];
    pTextoPistaExtra.textContent = `💡 Pista ${pistasUtilizadasCount + 1}: ${datosPregunta.pistasExtra[pistasUtilizadasCount]}`;
    pistasUtilizadasCount++;
    spanPistasRestantes.textContent = 3 - pistasUtilizadasCount;
    if (pistasUtilizadasCount >= 3) btnPista.disabled = true;
});function finalizarPregunta(exito, mensajeMotivo) {juegoTerminadoParaPregunta = true;clearInterval(temporizadorIntervalo);totalPreguntasRespondidasGlobal++;const botonesTeclado = contenedorOpcionesTeclado.querySelectorAll(".opcion");botonesTeclado.forEach(btn => btn.disabled = true);historialResultados.push({preguntaNum: totalPreguntasRespondidasGlobal,ciclo: cicloSeleccionado,participante: turnoDeJugadorActual,palabra: palabraObjetivo,resultado: exito ? "Acertó" : "No acertó"});divPalabraOculta.textContent = palabraObjetivo.split("").join(" ");bloqueRetro.classList.remove("oculto");btnSiguiente.classList.remove("oculto");if (exito) {
        textoRetro.innerHTML = `<span style="color: #00ff99; font-weight: bold;">${mensajeMotivo}</span><br>¡Excelente respuesta, ${turnoDeJugadorActual}!`;
    } else {
        textoRetro.innerHTML = `<span style="color: #ff7675; font-weight: bold;">${mensajeMotivo}</span><br>La solución correcta era: <strong>${palabraObjetivo}</strong>.`;
    }
}// CONTROL AVANCE DE PANTALLAS
btnSiguiente.addEventListener("click", () => {
    if (preguntaFaseIndice === 0) {
        preguntaFaseIndice = 1;
        iniciarPreguntaAhorcado();
    } else {
        // Eliminar físicamente el ciclo completado del array
        ciclosDisponibles = ciclosDisponibles.filter(c => c !== cicloSeleccionado);
        if (ciclosDisponibles.length > 0) {
            // REDIBUJAR LA RULETA: Ahora tendrá un trozo menos en pantalla
            dibujarRuleta();
            // Regresar a la ruleta
            btnGirarRuleta.disabled = false;
            textoResultadoRuleta.textContent = "¡Giren para seleccionar el próximo ciclo!";
            pantallaJuego.classList.add("oculto");
            pantallaRuleta.classList.remove("oculto");
        } else {
            mostrarResultadosFinales();
        }
    }
});
function mostrarResultadosFinales() {
    pantallaJuego.classList.add("oculto");
    pantallaResultados.classList.remove("oculto");
    bloqueResultadoFinal.innerHTML = "";
    historialResultados.forEach(res => {
        const fila = document.createElement("p");
        fila.style.marginBottom = "15px";
        fila.style.fontSize = "18px";
        const colorResultado = res.resultado === "Acertó" ? "#00ff99" : "#ff7675";
        fila.innerHTML = `⚡ <strong>Pregunta ${res.preguntaNum} (Ciclo ${res.ciclo}):</strong> Turno de <u>${res.participante}</u> - Palabra: <strong>${res.palabra}</strong> -> <span style="color: ${colorResultado}; font-weight:bold;">[${res.resultado}]</span>`;
        bloqueResultadoFinal.appendChild(fila);
    });
}