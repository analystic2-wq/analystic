"use strict";
/* =========================================================
   ANALYSTIC — ACCESS SYSTEM + REAL MARKET ANALYZER
   ========================================================= */

/* =========================================================
   50 ACCESS CODES
   ========================================================= */
/* =========================================================
   50 ACCESS CODES (guardados como hash SHA-256, no en texto
   plano — así nadie puede leerlos abriendo el código fuente)
   ========================================================= */
const accessCodeHashes = [
    "366ffcf4de7752743606e105749183b9bb70dbd2eb808d0fac0e4cbd334c1382", // 01
    "945c49d1ee8908489162d07b12de491edeca0cc677a01bfbcec88eaa817bc04b", // 02
    "afd46c8cf51e38d070222889d523a8f2e09f43be5ce726a6afe0789568596502", // 03
    "a10ba401e209003bde952a5e004e0d4c47e972bf54743a7e86b3a8658e526e29", // 04
    "b14802cc712d3f9c08ed82c7257684ee0426264b159fbd2d09de937e5106bece", // 05
    "165a0e52dda3abb296db2525103ff204bd90a7bd27ccbb85aedb5ea35a2e040e", // 06
    "3cf68caaf8aa3dafd77585b93636f8ae5d5deae3c74a86f5a18c5bf05109c070", // 07
    "410bfde32d072464f9c20ee24d2d8ec7dc9b1ab82aa3b3d919f89dd96b0c5f83", // 08
    "c55a455ba32e9b20a6a3c42fe9156aa5c916d15e868f93b495dae99c6896a515", // 09
    "a8ae50241cf8cbb4e90a6360eda763af79ee05c7e580d0a97f689bc2b0a75b6c", // 10
    "60d576a363fef0984426b05deadfd28082e568d667390d7c4cbe44339264f272", // 11
    "9b31473cc286e85341583ca71cf90b4a0b19fafa75a532420ffb9c428b105385", // 12
    "4147d8edf96364c58bc30c20a07f849acbb5f092b4b7c6b2a60191fd17e305e0", // 13
    "f43e5f1c3e49ec8f9af15699fa3dd35823c998c71047fe91fb73b0bed6d007a8", // 14
    "6db53376aa8ece61435dae01c68fecee9b30ff9de27559c01e02997d8df53386", // 15
    "dc2a303576e07df35f23f0428090c075af85dd98405ab7322f9f8d44afa7097a", // 16
    "010a711ed18e4c22c7c57abc87466929e8881d5819c072aad1d2b12b07b61961", // 17
    "d92fe9ed8d84810c6e246897f44206b1d6516e420be1d7433cf196bd72ecabd3", // 18
    "a3e34c66b92c42c1618373d19d811af2b97549e9e45864269ed8fef47261fe23", // 19
    "b08db8d4ccf3ed20f0ea540b6aa5750795c1085c42495101e053dbfddbc04687", // 20
    "1f846e946a529e467bbbbfc031a6aa485a846b9173c94193c78feca30f84a06c", // 21
    "8653a9f78cc01cc8cac6a154f614ff962907e9078daf5c8e3689b8596fa06cbb", // 22
    "52759e5cfe30b1fb2a80105a1fbcbdac602a64fca14c6ffe388dd52fb7d76738", // 23
    "eac1fe33eb1f7131f111452a576e98aca0ea7baff23fe512a3ed7c10f9e71ec8", // 24
    "647641ec3abf7d97e5d866aad656ea62f85e8cf620f952c4afec02dee6d27fdb", // 25
    "12ed49908fdf8ca89afbe40348702f032303c14e5feaa8f368da9cc175d04d5d", // 26
    "15f73a26780acbca7e99d808ccfe0fb78b0d135a1cc14ed3a9b10dedf1b7b536", // 27
    "17f9025fdfdf22e14e0d47a0721f87077fb34700149ee7f448b77101c58710e7", // 28
    "52e189050c278b153d21d231b8ce87f7848c8ec4ce794a2918b8387bf2aa2aaf", // 29
    "52580b41184e2a2d0f0b56543d9fdcd1dd4491aa3b14aa5de061bb8f9b60cde0", // 30
    "95ead8feaddf5a2ed44faf5ff427651de5a3651bd59c56ca97093213f2b57cd8", // 31
    "4a14265f64b2d279ac3e1a0c58f86fca34cc470bfa21b25f4cd48f1815cf4a0d", // 32
    "65f29a5a1329b48ac4a29c8819ecc5e14be5449bb5086015036a18cfda389460", // 33
    "522492bb810f59c64defe19c4ebdc5fd3daab36567e1e0e11d930b12e95f4dcf", // 34
    "5e163845a25dfd8a05759497025f143944446404eb93681d9a80db7adf9cadd1", // 35
    "924bccd2deff5b346a6f8071a1b2c3a3ff5d3bfe901b63abd9e813448e924d36", // 36
    "f679c8b7d24dac006b019f1d9d443388a6d15a77e370e409947b3b5d6c18ee60", // 37
    "f28d2bce8decea83be8aa31aca1916cd1c14de0939da6a9740fbaeb419b95279", // 38
    "cf667614e44b3283810a17e9cfa02d8315792b5a9d77b0ff2f609752b3c81f13", // 39
    "d49048183025eb5a08eff30638cb82518382f9f1a77b6accb1f8dad165cfa99d", // 40
    "7724d143ba14ee867c8c0e5973a880852608a438ee5c3a039ccf3751d1716d36", // 41
    "29cd68e8dedc02dba1d5bf6d93f9a6eed51827beaef15fd016160354b0917029", // 42
    "19fc29ac966005b6672e77201e160f7a4c7c122dd722db901c2fe8eab26021f3", // 43
    "5bfb51f8c4c14c1fb7ff79f19abee6759b2d6eac66c7aa70c7d2a8c09c52cfac", // 44
    "5a3fc2a9d295f55119f3de8b8e8ec53fc3027a10c8a70ae987259f052632603b", // 45
    "54150b567a913ff6f9578acf50893feef69bb2c1ff010c6d16b7349653f97b79", // 46
    "c0591c55c749dbd88dc35a7253da603f43e1d515cf7e735c45df0d45571b127f", // 47
    "89dbc18ecc6f06607fe511f36a9bd3a33abb8504174aff3332fc701fb2569347", // 48
    "2decc377d48463a713fedb75b4da2faaa6282c79803c7caba158ec1e222982a2", // 49
    "762fe810f54c20fcb3911d69a8b17efe15ed6533596e972a1d010a81c30fca44", // 50
    "a4a60c41014995d7f4286d415c45de2170076467fcc3e1047c8433cca223200b" // 51
];

/* =========================================================
   ACCESS SYSTEM
   ========================================================= */
const accessInput = document.getElementById("accessCode");
const loginButton = document.getElementById("loginButton");
const loginMessage = document.getElementById("loginMessage");
const loginContainer = document.querySelector(".login-container");
const mainApp = document.getElementById("mainApp");
const loadingScreen = document.getElementById("loadingScreen");

function showLoginMessage(message, type) {
    if (!loginMessage) {
        return;
    }
    loginMessage.textContent = message;
    loginMessage.className = "login-message " + type;
}

// Convierte un texto a su hash SHA-256 en formato hexadecimal,
// usando la Web Crypto API del navegador (requiere HTTPS o localhost).
async function sha256Hex(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function login() {
    if (!accessInput) {
        return;
    }

    const enteredCode = accessInput.value.trim();

    if (enteredCode === "") {
        showLoginMessage("ENTER YOUR ACCESS CODE", "error");
        return;
    }

    let enteredHash;

    try {
        enteredHash = await sha256Hex(enteredCode);
    } catch (error) {
        console.error("Hashing error:", error);
        showLoginMessage("CONNECTION MUST BE HTTPS", "error");
        return;
    }

    const validCode = accessCodeHashes.includes(enteredHash);

    if (!validCode) {
        showLoginMessage("ACCESS CODE NOT REGISTERED", "error");
        accessInput.value = "";
        accessInput.focus();
        return;
    }

    showLoginMessage("ACCESS GRANTED", "success");

    setTimeout(() => {
        if (loginContainer) {
            loginContainer.classList.add("hidden");
        }

        if (loadingScreen) {
            loadingScreen.classList.remove("hidden");
        }

        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.classList.add("hidden");
            }

            if (mainApp) {
                mainApp.classList.remove("hidden");
            }

            // Arranca el analizador SOLO después de un login válido
            initializeAnalyzer();
        }, 2500);
    }, 400);
}

if (loginButton) {
    loginButton.addEventListener("click", login);
}

if (accessInput) {
    accessInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            login();
        }
    });
}

const logoutButton = document.getElementById("logoutButton");

function logout() {
    // Si hay un análisis en curso, lo detenemos antes de salir
    if (typeof isAnalyzing !== "undefined" && isAnalyzing) {
        stopAnalysis();
    }

    if (mainApp) {
        mainApp.classList.add("hidden");
    }

    if (loadingScreen) {
        loadingScreen.classList.add("hidden");
    }

    if (loginContainer) {
        loginContainer.classList.remove("hidden");
    }

    if (accessInput) {
        accessInput.value = "";
        accessInput.focus();
    }

    showLoginMessage("", "");
}

if (logoutButton) {
    logoutButton.addEventListener("click", logout);
}


/* =========================================================
   ANALYSTIC — REAL MARKET ANALYZER
   (lógica intacta, tal como la enviaste)
   ========================================================= */

const DERIV_WS =
    "wss://api.derivws.com/trading/v1/options/ws/public";


/* =========================================================
   ELEMENTOS HTML
   ========================================================= */

const marketSelect = document.getElementById("market");
const strategySelect = document.getElementById("strategy");
const barrierField = document.getElementById("barrierField");
const barrierRecommendDigit = document.getElementById("barrierRecommendDigit");
const barrierRecommendSide = document.getElementById("barrierRecommendSide");
const startBtn = document.getElementById("startBtn");

const marketTitle = document.getElementById("marketTitle");
const marketDisplay = document.getElementById("marketDisplay");
const strategyDisplay = document.getElementById("strategyDisplay");

const analysisStatus = document.getElementById("analysisStatus");
const statusDisplay = document.getElementById("statusDisplay");

const lastDigit = document.getElementById("lastDigit");
const tickDisplay = document.getElementById("tickDisplay");
const timeDisplay = document.getElementById("timeDisplay");

const digitBars = document.getElementById("digitBars");
const digitSectionEl = document.getElementById("digitSection");
const digitTicker = document.getElementById("digitTicker");
const durationRecommend = document.getElementById("durationRecommend");

const resultSection = document.getElementById("resultSection");
const recommendation = document.getElementById("recommendation");
const percentage = document.getElementById("percentage");
const resultTicks = document.getElementById("resultTicks");
const confidence = document.getElementById("confidence");
const resultMarket = document.getElementById("resultMarket");

const newAnalysis = document.getElementById("newAnalysis");

const canvas = document.getElementById("marketChart");
const ctx = canvas ? canvas.getContext("2d") : null;


/* =========================================================
   ESTADO
   ========================================================= */

let socket = null;

let activeSymbols = [];

let currentSymbol = null;
let previousSymbol = null;

let subscribed = false;

let currentDecimals = 2;

let isAnalyzing = false;

let analysisDigits = [];
let analysisPrices = [];
let analysisTickCount = 0;

let tickerDigits = [];
const TICKER_MAX = 20;

let chartPrices = [];

let analysisStartTime = null;
let timerInterval = null;

let renderPending = false;

let finalResult = null;


/* =========================================================
   MERCADOS
   ========================================================= */

const marketNames = {
    vol10: "Volatility 10 (1s)",
    vol25: "Volatility 25 (1s)",
    vol50: "Volatility 50 (1s)",
    vol75: "Volatility 75 (1s)",
    vol100: "Volatility 100 (1s)",
    vol10std: "Volatility 10",
    vol25std: "Volatility 25",
    vol50std: "Volatility 50",
    vol75std: "Volatility 75",
    vol100std: "Volatility 100"
};


/* =========================================================
   STATUS
   ========================================================= */

function setStatus(text) {
    if (analysisStatus) {
        analysisStatus.textContent = text;
    }
    if (statusDisplay) {
        statusDisplay.textContent = text;
    }
}


/* =========================================================
   MERCADO SELECCIONADO
   ========================================================= */

function getSelectedMarket() {
    const value = marketSelect.value;
    return marketNames[value] || value;
}


/* =========================================================
   ESTRATEGIA
   ========================================================= */

function getSelectedStrategy() {
    return strategySelect.options[strategySelect.selectedIndex].text;
}


/* =========================================================
   BARRERA (SOLO OVER/UNDER) — CALCULADA POR EL ANALIZADOR

   El usuario ya no elige la barrera manualmente. En su lugar,
   por cada barrera posible (0 a 9) se calcula qué tan lejos
   está el resultado observado del valor esperado por puro
   azar (el mismo "weightedDeviation" que se usa en el
   resultado final), y se recomienda la barrera con la mayor
   desviación real. Así la recomendación refleja los datos
   observados y no solo cuál barrera "paga más".
   ========================================================= */

function evaluateBarrier(counts, total, barrier) {
    let over = 0;
    let under = 0;

    for (let d = 0; d <= 9; d++) {
        if (d > barrier) {
            over += counts[d];
        } else if (d < barrier) {
            under += counts[d];
        }
    }

    const favorOver = over >= under;

    const resultPercentage = favorOver
        ? (over / total) * 100
        : (under / total) * 100;

    const baselinePercentage = favorOver
        ? ((9 - barrier) / 10) * 100
        : (barrier / 10) * 100;

    const deviation = resultPercentage - baselinePercentage;
    const sampleFactor = Math.min(total / 100, 1);

    return {
        barrier,
        side: favorOver ? "over" : "under",
        percentage: resultPercentage,
        baseline: baselinePercentage,
        weightedDeviation: deviation * sampleFactor
    };
}

function computeBestBarrier(counts, total) {
    if (total === 0) {
        return null;
    }

    let best = null;

    for (let barrier = 0; barrier <= 9; barrier++) {
        const evaluation = evaluateBarrier(counts, total, barrier);

        if (!best || evaluation.weightedDeviation > best.weightedDeviation) {
            best = evaluation;
        } else if (
            evaluation.weightedDeviation === best.weightedDeviation &&
            Math.random() < 0.5
        ) {
            // Empate: elegimos al azar para no sesgar siempre
            // hacia la misma barrera
            best = evaluation;
        }
    }

    return best;
}

function renderBarrierRecommendation(counts, total) {
    if (!barrierRecommendDigit || !barrierRecommendSide) {
        return;
    }

    const rec = computeBestBarrier(counts, total);

    if (!rec) {
        barrierRecommendDigit.textContent = "—";
        barrierRecommendSide.textContent = "Esperando datos...";
        return;
    }

    const sideLabel = rec.side === "over" ? "OVER" : "UNDER";

    barrierRecommendDigit.textContent = `${sideLabel} ${rec.barrier}`;
    barrierRecommendSide.textContent = `${rec.percentage.toFixed(1)}% observado`;
}

function updateBarrierVisibility() {
    if (!barrierField) {
        return;
    }

    const isOverUnder = strategySelect.value === "overunder";

    barrierField.classList.toggle("hidden", !isOverUnder);
}


/* =========================================================
   RECOMENDACIÓN DE DURACIÓN (EN TICKS)

   Rise/Fall se recomienda a 1 tick; el resto de las
   estrategias basadas en el último dígito (Matches/Differs,
   Even/Odd, Over/Under) se recomienda a 2 ticks.
   ========================================================= */

function updateDurationRecommendation() {
    if (!durationRecommend) {
        return;
    }

    const isRiseFall = strategySelect.value === "risefall";
    const duration = isRiseFall ? 1 : 2;

    durationRecommend.textContent = `${duration} tick${duration > 1 ? "s" : ""} duration`;
}


/* =========================================================
   INFORMACIÓN
   ========================================================= */

function updateMarketInformation() {
    const market = getSelectedMarket();
    const strategy = getSelectedStrategy();

    if (marketTitle) {
        marketTitle.textContent = market;
    }
    if (marketDisplay) {
        marketDisplay.textContent = market;
    }
    if (strategyDisplay) {
        strategyDisplay.textContent = strategy;
    }

    updateBarrierVisibility();

    updateDurationRecommendation();

    // La distribución de dígitos no aplica a Rise/Fall (es un contrato
    // basado en la dirección del precio, no en el último dígito)
    if (digitSectionEl) {
        digitSectionEl.classList.toggle("hidden", strategySelect.value === "risefall");
    }
}


/* =========================================================
   CONEXIÓN
   ========================================================= */

function connectToDeriv() {
    return new Promise((resolve, reject) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            resolve();
            return;
        }

        setStatus("CONNECTING");

        try {
            socket = new WebSocket(DERIV_WS);
        } catch (error) {
            reject(error);
            return;
        }

        socket.onopen = () => {
            console.log("Connected to Deriv");
            setStatus("CONNECTED");

            socket.send(JSON.stringify({
                active_symbols: "brief",
                req_id: 1
            }));

            resolve();
        };

        socket.onmessage = event => {
            handleMessage(event);
        };

        socket.onerror = error => {
            console.error("WebSocket error:", error);
            setStatus("CONNECTION ERROR");
        };

        socket.onclose = () => {
            console.log("WebSocket closed");
            subscribed = false;
        };
    });
}


/* =========================================================
   MENSAJES
   ========================================================= */

function handleMessage(event) {
    let data;

    try {
        data = JSON.parse(event.data);
    } catch {
        return;
    }

    if (data.error) {
        console.error("Deriv error:", data.error);
        setStatus("API ERROR");
        return;
    }

    if (data.msg_type === "active_symbols") {
        handleActiveSymbols(data.active_symbols || []);
        return;
    }

    if (data.msg_type === "history") {
        handleHistory(data);
        return;
    }

    if (data.msg_type === "tick") {
        handleTick(data.tick);
        return;
    }
}


/* =========================================================
   BUSCAR SÍMBOLO REAL
   ========================================================= */

/* =========================================================
   CÓDIGOS FIJOS DE DERIV POR MERCADO

   Estos códigos nunca cambian de nombre, así que son
   mucho más confiables que buscar por texto.
   ========================================================= */

const marketSymbolCodes = {
    vol10: "1HZ10V",
    vol25: "1HZ25V",
    vol50: "1HZ50V",
    vol75: "1HZ75V",
    vol100: "1HZ100V",
    vol10std: "R_10",
    vol25std: "R_25",
    vol50std: "R_50",
    vol75std: "R_75",
    vol100std: "R_100"
};


/* =========================================================
   BUSCAR SÍMBOLO REAL
   ========================================================= */

function findMarketSymbol() {
    const selected = marketSelect.value;

    const code = marketSymbolCodes[selected];

    if (!code) {
        return null;
    }

    let found = activeSymbols.find(item => {
        return item.underlying_symbol === code;
    });

    return found || null;
}


/* =========================================================
   MERCADOS ACTIVOS
   ========================================================= */

function handleActiveSymbols(symbols) {
    activeSymbols = symbols;

    const market = findMarketSymbol();

    if (!market) {
        console.error("Market not found:", getSelectedMarket());
        setStatus("MARKET NOT FOUND");
        return;
    }

    const newSymbol = market.underlying_symbol;

    if (previousSymbol && previousSymbol !== newSymbol) {
        unsubscribeFromSymbol(previousSymbol);
    }

    currentSymbol = newSymbol;
    previousSymbol = newSymbol;

    currentDecimals = pipToDecimals(market.pip_size);

    console.log("Selected market:", getSelectedMarket());
    console.log("Real symbol:", currentSymbol);

    chartPrices = [];

    if (lastDigit) {
        lastDigit.textContent = "—";
    }

    markChartUpdate();

    requestHistory();

    subscribeToCurrentSymbol();
}


/* =========================================================
   DESUSCRIBIR MERCADO ANTERIOR
   ========================================================= */

function unsubscribeFromSymbol(symbol) {
    if (!socket || socket.readyState !== WebSocket.OPEN || !symbol) {
        return;
    }

    console.log("Unsubscribing:", symbol);

    socket.send(JSON.stringify({
        forget_all: "ticks",
        req_id: 10
    }));

    subscribed = false;
}


/* =========================================================
   HISTORIAL
   ========================================================= */

function requestHistory() {
    if (!socket || socket.readyState !== WebSocket.OPEN || !currentSymbol) {
        return;
    }

    console.log("Requesting history:", currentSymbol);

    socket.send(JSON.stringify({
        ticks_history: currentSymbol,
        count: 100,
        end: "latest",
        style: "ticks",
        req_id: 20
    }));
}


/* =========================================================
   SUSCRIPCIÓN
   ========================================================= */

function subscribeToCurrentSymbol() {
    if (!socket || socket.readyState !== WebSocket.OPEN || !currentSymbol) {
        return;
    }

    console.log("Subscribing:", currentSymbol);

    socket.send(JSON.stringify({
        ticks: currentSymbol,
        subscribe: 1,
        req_id: 30
    }));

    subscribed = true;

    setStatus(isAnalyzing ? "ANALYZING" : "LIVE MARKET");
}


/* =========================================================
   HISTORIAL RECIBIDO
   ========================================================= */

function handleHistory(data) {
    if (!data.history || !data.history.prices) {
        return;
    }

    chartPrices = [];

    data.history.prices.forEach(price => {
        const value = Number(price);
        if (Number.isFinite(value)) {
            chartPrices.push(value);
        }
    });

    chartPrices = chartPrices.slice(-150);

    markChartUpdate();
}


/* =========================================================
   TICK REAL
   ========================================================= */

function handleTick(tick) {
    if (!tick) {
        return;
    }

    if (tick.symbol && currentSymbol && tick.symbol !== currentSymbol) {
        return;
    }

    const price = Number(tick.quote);

    if (!Number.isFinite(price)) {
        return;
    }

    chartPrices.push(price);

    if (chartPrices.length > 150) {
        chartPrices.shift();
    }

    const observedDecimals = observedDecimalsOf(tick.quote);

    if (observedDecimals > currentDecimals) {
        currentDecimals = observedDecimals;
    }

    const currentDigit = getLastDigit(tick.quote);

    if (lastDigit) {
        lastDigit.textContent = currentDigit;
        lastDigit.classList.remove("pulse");
        // Forzar reflow para poder re-disparar la animación en cada tick
        void lastDigit.offsetWidth;
        lastDigit.classList.add("pulse");
    }

    const digitHero = document.querySelector(".digit-hero");
    if (digitHero) {
        digitHero.classList.remove("loading");
    }

    tickerDigits.push(currentDigit);

    if (tickerDigits.length > TICKER_MAX) {
        tickerDigits.shift();
    }

    renderTicker();

    markChartUpdate();

    if (!isAnalyzing) {
        return;
    }

    analysisDigits.push(currentDigit);
    analysisPrices.push(price);
    analysisTickCount++;

    if (tickDisplay) {
        tickDisplay.textContent = analysisTickCount;
    }

    updateDigitDistribution();
}


/* =========================================================
   TICKER DE DÍGITOS EN VIVO
   ========================================================= */

function renderTicker() {

    if (!digitTicker) {
        return;
    }

    digitTicker.innerHTML = "";

    tickerDigits.forEach((value, index) => {

        const el = document.createElement("div");

        el.className =
            "tick" +
            (index === tickerDigits.length - 1 ? " live" : "");

        el.textContent = value;

        digitTicker.appendChild(el);

    });

}


/* =========================================================
   DECIMALES DEL MERCADO (PIP)
   ========================================================= */

function pipToDecimals(pip) {
    if (!pip) {
        return 2;
    }

    const str = String(pip);

    if (str.includes("e-")) {
        return parseInt(str.split("e-")[1], 10);
    }

    const parts = str.split(".");

    return parts[1] ? parts[1].length : 0;
}


/* =========================================================
   DECIMALES OBSERVADOS EN VIVO

   El pip_size que manda la API es solo un punto de partida.
   Si un tick real llega con más decimales de los esperados,
   ajustamos currentDecimals para que nunca se nos pierda un
   dígito (por ejemplo, el 0 final).
   ========================================================= */

function observedDecimalsOf(value) {
    const str = String(value);

    if (!str.includes(".")) {
        return 0;
    }

    return str.split(".")[1].length;
}


/* =========================================================
   ÚLTIMO DÍGITO
   ========================================================= */

function getLastDigit(price) {
    const numeric = Number(price);

    if (!Number.isFinite(numeric)) {
        return 0;
    }

    // toFixed reconstruye los ceros finales que el número
    // ya trae perdidos (1234.5 en vez de 1234.50).
    const fixed = numeric.toFixed(currentDecimals);

    const clean = fixed.replace(/[^0-9]/g, "");

    if (!clean) {
        return 0;
    }

    return Number(clean[clean.length - 1]);
}


/* =========================================================
   ANIMACIÓN DE NÚMEROS (COUNT-UP)
   ========================================================= */

// Guarda, por elemento, el valor actualmente mostrado, para
// poder animar siempre desde el valor real (no desde 0 cada vez).
const countAnimState = new WeakMap();

function animateNumberTo(el, targetValue, options) {
    if (!el) {
        return;
    }

    const opts = options || {};
    const decimals = opts.decimals || 0;
    const suffix = opts.suffix || "";
    const duration = opts.duration || 500;

    const startValue = countAnimState.has(el)
        ? countAnimState.get(el).value
        : 0;

    // Evita relanzar animaciones idénticas innecesariamente
    const existing = countAnimState.get(el);
    if (existing && existing.raf) {
        cancelAnimationFrame(existing.raf);
    }

    const startTime = performance.now();

    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // easeOutCubic: arranca rápido, llega suave
        const eased = 1 - Math.pow(1 - progress, 3);

        const current = startValue + (targetValue - startValue) * eased;

        el.textContent = current.toFixed(decimals) + suffix;

        if (progress < 1) {
            const state = { value: current, raf: requestAnimationFrame(step) };
            countAnimState.set(el, state);
        } else {
            el.textContent = targetValue.toFixed(decimals) + suffix;
            countAnimState.set(el, { value: targetValue, raf: null });
        }
    }

    countAnimState.set(el, { value: startValue, raf: requestAnimationFrame(step) });
}


/* =========================================================
   DESEMPATE JUSTO ENTRE DÍGITOS CON EL MISMO CONTEO

   Antes, cuando dos o más dígitos tenían el mismo conteo, el
   sistema siempre se quedaba con el de menor índice (el 0 si
   estaba entre los empatados), porque solo reemplazaba el
   "ganador" cuando encontraba un conteo ESTRICTAMENTE mayor.
   Con pocos ticks los empates son comunes, así que en la
   práctica el 0 terminaba ganando casi siempre.

   Esta función junta a todos los dígitos empatados en el
   conteo más alto y elige uno al azar entre ellos, para que
   el resultado refleje los datos reales y no un sesgo de
   programación hacia el dígito 0.
   ========================================================= */

function pickMaxWithTieBreak(counts, from, to) {
    let max = -Infinity;
    let candidates = [];

    for (let i = from; i <= to; i++) {
        if (counts[i] > max) {
            max = counts[i];
            candidates = [i];
        } else if (counts[i] === max) {
            candidates.push(i);
        }
    }

    if (candidates.length === 0) {
        return from;
    }

    return candidates[Math.floor(Math.random() * candidates.length)];
}


/* =========================================================
   GRUPO GANADOR SEGÚN ESTRATEGIA ACTIVA

   Cada estrategia resalta un conjunto distinto de dígitos:
   - matches: el dígito individual más frecuente
   - evenodd: todo el grupo par o impar, el que domine
   - overunder: todo el grupo por encima/debajo de la barrera
   - risefall: no se resalta por dígito (es sobre la dirección del precio)
   ========================================================= */

function getWinningDigitSet(counts, total) {
    const strategy = strategySelect.value;
    const winners = new Set();

    if (total === 0) {
        return winners;
    }

    if (strategy === "matches") {
        winners.add(pickMaxWithTieBreak(counts, 0, 9));

        return winners;
    }

    if (strategy === "evenodd") {
        let evenCount = 0;
        let oddCount = 0;

        for (let d = 0; d <= 9; d++) {
            if (d % 2 === 0) {
                evenCount += counts[d];
            } else {
                oddCount += counts[d];
            }
        }

        const favorEven = evenCount >= oddCount;

        for (let d = 0; d <= 9; d++) {
            if ((d % 2 === 0) === favorEven) {
                winners.add(d);
            }
        }

        return winners;
    }

    if (strategy === "overunder") {
        const rec = computeBestBarrier(counts, total);

        if (!rec) {
            return winners;
        }

        for (let d = 0; d <= 9; d++) {
            if (rec.side === "over" && d > rec.barrier) {
                winners.add(d);
            }
            if (rec.side === "under" && d < rec.barrier) {
                winners.add(d);
            }
        }

        return winners;
    }

    // "risefall" no resalta dígitos individuales
    return winners;
}


/* =========================================================
   DISTRIBUCIÓN
   ========================================================= */

function updateDigitDistribution() {
    if (!digitBars) {
        return;
    }

    const counts = Array(10).fill(0);

    analysisDigits.forEach(digit => {
        counts[digit]++;
    });

    const total = analysisDigits.length;
    const maxCount = Math.max(...counts, 1);

    if (strategySelect.value === "overunder") {
        renderBarrierRecommendation(counts, total);
    }

    const winnerSet = getWinningDigitSet(counts, total);
    const hasData = total > 0 && winnerSet.size > 0;

    const existingCols = digitBars.querySelectorAll(".bar-col");

    if (existingCols.length === 10) {
        // Ya existen las columnas: solo actualizamos valores y animamos
        for (let digit = 0; digit <= 9; digit++) {
            const col = existingCols[digit];
            const percent = total > 0 ? (counts[digit] / total) * 100 : 0;
            const heightPercent = Math.round((counts[digit] / maxCount) * 100);

            const valueEl = col.querySelector(".bar-value");
            const barEl = col.querySelector(".bar");

            if (valueEl) {
                animateNumberTo(valueEl, percent, { decimals: 1, suffix: "%", duration: 450 });
            }

            if (barEl) {
                barEl.style.height = heightPercent + "%";
            }

            const isWinner = hasData && winnerSet.has(digit);
            col.classList.toggle("winner", isWinner);
            col.classList.toggle("dim", hasData && !isWinner);
        }

        return;
    }

    // Primera vez: construimos las columnas desde cero
    digitBars.innerHTML = "";

    for (let digit = 0; digit <= 9; digit++) {
        const percent = total > 0 ? (counts[digit] / total) * 100 : 0;
        const heightPercent = Math.round((counts[digit] / maxCount) * 100);

        const col = document.createElement("div");
        col.className = "bar-col";

        col.innerHTML = `
            <div class="bar-value">${percent.toFixed(1)}%</div>
            <div class="bar" style="height:${heightPercent}%"></div>
            <div class="bar-digit">${digit}</div>
        `;

        digitBars.appendChild(col);
    }
}


/* =========================================================
   CANVAS
   ========================================================= */

function resizeCanvas() {
    if (!canvas || !ctx) {
        return;
    }

    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;

    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    markChartUpdate();
}


/* =========================================================
   ACTUALIZAR GRÁFICA
   ========================================================= */

function markChartUpdate() {
    if (renderPending) {
        return;
    }

    renderPending = true;

    requestAnimationFrame(() => {
        renderPending = false;
        drawChart();
    });
}


/* =========================================================
   DIBUJAR GRÁFICA
   ========================================================= */

function drawChart() {
    if (!canvas || !ctx) {
        return;
    }

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (width <= 0 || height <= 0) {
        return;
    }

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(255,255,255,0.07)";
    ctx.lineWidth = 1;

    for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }

    if (chartPrices.length < 2) {
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Waiting for real market ticks...", width / 2, height / 2);
        return;
    }

    const data = chartPrices.slice(-100);

    let min = Math.min(...data);
    let max = Math.max(...data);

    if (min === max) {
        min -= 0.0001;
        max += 0.0001;
    }

    const padding = 20;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;

    ctx.beginPath();

    for (let i = 0; i < data.length; i++) {
        const normalized = (data[i] - min) / (max - min);
        const x = padding + (i / (data.length - 1)) * chartWidth;
        const y = height - padding - (normalized * chartHeight);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.strokeStyle = "#4da3ff";
    ctx.lineWidth = 2;
    ctx.stroke();

    const lastIndex = data.length - 1;
    const normalized = (data[lastIndex] - min) / (max - min);
    const x = padding + chartWidth;
    const y = height - padding - (normalized * chartHeight);

    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {
    stopTimer();

    analysisStartTime = Date.now();

    timerInterval = setInterval(() => {
        if (!isAnalyzing) {
            return;
        }

        const elapsed = Math.floor((Date.now() - analysisStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;

        if (timeDisplay) {
            timeDisplay.textContent =
                String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
        }
    }, 1000);
}


/* =========================================================
   STOP TIMER
   ========================================================= */

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}


/* =========================================================
   START / STOP
   ========================================================= */

async function startAnalysis() {
    if (isAnalyzing) {
        stopAnalysis();
        return;
    }

    analysisDigits = [];
    analysisPrices = [];
    analysisTickCount = 0;
    finalResult = null;

    if (tickDisplay) {
        tickDisplay.textContent = "0";
    }

    if (timeDisplay) {
        timeDisplay.textContent = "00:00";
    }

    if (resultSection) {
        resultSection.classList.add("hidden");
        resultSection.classList.remove("visible");
    }

    updateDigitDistribution();

    isAnalyzing = true;

    startBtn.textContent = "STOP ANALYSIS";

    setStatus("ANALYZING");

    startTimer();

    try {
        await connectToDeriv();
    } catch (error) {
        console.error(error);

        isAnalyzing = false;
        stopTimer();

        startBtn.textContent = "START ANALYSIS";

        setStatus("CONNECTION ERROR");
    }
}


/* =========================================================
   STOP ANALYSIS
   ========================================================= */

function stopAnalysis() {
    isAnalyzing = false;

    stopTimer();

    startBtn.textContent = "START ANALYSIS";

    setStatus("ANALYSIS STOPPED");

    generateFinalResult();
}


/* =========================================================
   RESULTADO
   ========================================================= */

function generateFinalResult() {
    const total = analysisDigits.length;

    if (total === 0) {
        if (recommendation) {
            recommendation.textContent = "NO DATA";
        }
        if (percentage) {
            percentage.textContent = "0%";
            countAnimState.delete(percentage);
        }
        if (resultTicks) {
            resultTicks.textContent = "0";
        }
        if (confidence) {
            confidence.textContent = "LOW";
        }
        if (resultMarket) {
            resultMarket.textContent = getSelectedMarket();
        }
        if (resultSection) {
            resultSection.classList.remove("hidden");
            requestAnimationFrame(() => resultSection.classList.add("visible"));
        }

        return;
    }

    const counts = Array(10).fill(0);

    analysisDigits.forEach(digit => {
        counts[digit]++;
    });

    const strategy = strategySelect.value;

    let resultText = "—";
    let resultPercentage = 0;
    let baselinePercentage = 50;

    if (strategy === "matches") {
        const bestDigit = pickMaxWithTieBreak(counts, 0, 9);

        resultText = `MATCH ${bestDigit}`;
        resultPercentage = (counts[bestDigit] / total) * 100;
        // Baseline teórico: si los dígitos fueran perfectamente aleatorios,
        // cada uno debería aparecer ~10% de las veces
        baselinePercentage = 10;
    }

    if (strategy === "evenodd") {
        let even = 0;
        let odd = 0;

        analysisDigits.forEach(digit => {
            if (digit % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        });

        if (even >= odd) {
            resultText = "EVEN";
            resultPercentage = (even / total) * 100;
        } else {
            resultText = "ODD";
            resultPercentage = (odd / total) * 100;
        }

        baselinePercentage = 50;
    }

    if (strategy === "overunder") {
        const rec = computeBestBarrier(counts, total);

        if (rec) {
            resultText = rec.side === "over"
                ? `OVER ${rec.barrier}`
                : `UNDER ${rec.barrier}`;
            resultPercentage = rec.percentage;
            baselinePercentage = rec.baseline;
        }
    }

    if (strategy === "risefall") {
        const entryPrice = analysisPrices[0];
        const lastPrice = analysisPrices[analysisPrices.length - 1];

        let above = 0;
        let below = 0;

        analysisPrices.forEach(p => {
            if (p > entryPrice) {
                above++;
            } else if (p < entryPrice) {
                below++;
            }
        });

        const isRise = lastPrice >= entryPrice;

        resultText = isRise ? "RISE" : "FALL";
        resultPercentage = isRise
            ? (above / total) * 100
            : (below / total) * 100;

        baselinePercentage = 50;
    }

    // Confianza basada en cuánto se aleja el resultado observado del
    // valor esperado por puro azar (baseline), no en umbrales fijos
    // sobre el porcentaje bruto. Una desviación pequeña con pocos ticks
    // no es lo mismo que la misma desviación con cientos de ticks.
    const deviation = resultPercentage - baselinePercentage;
    const sampleFactor = Math.min(total / 100, 1); // más ticks, más confianza en la lectura
    const weightedDeviation = deviation * sampleFactor;

    let confidenceText = "LOW";

    if (weightedDeviation >= 4) {
        confidenceText = "MEDIUM";
    }

    if (weightedDeviation >= 9) {
        confidenceText = "HIGH";
    }

    finalResult = {
        recommendation: resultText,
        percentage: resultPercentage,
        ticks: total,
        confidence: confidenceText,
        market: getSelectedMarket()
    };

    if (recommendation) {
        recommendation.textContent = finalResult.recommendation;
    }

    if (percentage) {
        countAnimState.delete(percentage);
        animateNumberTo(percentage, finalResult.percentage, { decimals: 2, suffix: "%", duration: 900 });
    }

    if (resultTicks) {
        countAnimState.delete(resultTicks);
        animateNumberTo(resultTicks, finalResult.ticks, { decimals: 0, suffix: "", duration: 700 });
    }

    if (confidence) {
        confidence.textContent = finalResult.confidence;
    }

    if (resultMarket) {
        resultMarket.textContent = finalResult.market;
    }

    if (resultSection) {
        resultSection.classList.remove("hidden");
        resultSection.classList.remove("visible");
        // requestAnimationFrame para permitir que el navegador registre
        // el estado inicial antes de animar hacia "visible" (fade-in real)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => resultSection.classList.add("visible"));
        });
    }

    console.log("FINAL ANALYSIS:", finalResult);
}


/* =========================================================
   CAMBIO DE MERCADO
   ========================================================= */

async function changeMarket() {
    if (isAnalyzing) {
        marketSelect.value = marketSelect.dataset.previous || marketSelect.value;

        alert("Primero detén el análisis antes de cambiar de mercado.");

        return;
    }

    marketSelect.dataset.previous = marketSelect.value;

    analysisDigits = [];
    analysisPrices = [];
    analysisTickCount = 0;
    finalResult = null;

    if (tickDisplay) {
        tickDisplay.textContent = "0";
    }

    if (timeDisplay) {
        timeDisplay.textContent = "00:00";
    }

    if (resultSection) {
        resultSection.classList.add("hidden");
        resultSection.classList.remove("visible");
    }

    updateDigitDistribution();

    updateMarketInformation();

    chartPrices = [];

    if (lastDigit) {
        lastDigit.textContent = "—";
    }

    const digitHero = document.querySelector(".digit-hero");
    if (digitHero) {
        digitHero.classList.add("loading");
    }

    markChartUpdate();

    setStatus("LOADING MARKET");

    try {
        await connectToDeriv();

        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({
                active_symbols: "brief",
                req_id: 100
            }));
        }
    } catch (error) {
        console.error(error);

        setStatus("CONNECTION ERROR");
    }
}


/* =========================================================
   NUEVO ANÁLISIS
   ========================================================= */

function resetAnalysis() {
    isAnalyzing = false;
    stopTimer();

    analysisDigits = [];
    analysisPrices = [];
    analysisTickCount = 0;
    finalResult = null;

    if (tickDisplay) {
        tickDisplay.textContent = "0";
    }

    if (timeDisplay) {
        timeDisplay.textContent = "00:00";
    }

    if (resultSection) {
        resultSection.classList.add("hidden");
        resultSection.classList.remove("visible");
    }

    updateDigitDistribution();

    startBtn.textContent = "START ANALYSIS";

    setStatus("READY");
}


/* =========================================================
   EVENTOS
   ========================================================= */

marketSelect.addEventListener("change", changeMarket);

strategySelect.addEventListener("change", () => {
    if (isAnalyzing) {
        alert("Detén el análisis antes de cambiar de estrategia.");
        return;
    }

    updateMarketInformation();
    updateDigitDistribution();
});

startBtn.addEventListener("click", startAnalysis);

if (newAnalysis) {
    newAnalysis.addEventListener("click", resetAnalysis);
}

window.addEventListener("resize", resizeCanvas);


/* =========================================================
   INICIO DEL ANALIZADOR
   (se ejecuta SOLO cuando login() lo llama tras un
   código de acceso válido — ya no se auto-ejecuta al cargar)
   ========================================================= */

function initializeAnalyzer() {
    updateMarketInformation();

    setStatus("READY");

    resizeCanvas();

    updateDigitDistribution();

    if (marketSelect) {
        marketSelect.dataset.previous = marketSelect.value;
    }

    // Estado de carga (shimmer) inicial en el dígito grande,
    // hasta que llegue el primer tick real
    const digitHero = document.querySelector(".digit-hero");
    if (digitHero) {
        digitHero.classList.add("loading");
    }

    console.log("ANALYSTIC INITIALIZED");
}