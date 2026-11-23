/* ==========================================================================
   BRAINJOY – AQLNI CHARXLA!
   Barcha yosh toifalari uchun 18 ta to'liq interaktiv o'yinlar va reyting tizimi
   ========================================================================== */

// 1. RAG'BATLANTIRUVCHI XABARLAR
const PRAISE_MESSAGES = [
    "Barakalla! Sen uddalading! 🎉",
    "Ajoyib! Miyang juda yaxshi ishlayapti! 🧠",
    "Zo‘r natija! Davom et! 🌟",
    "Super! Sen haqiqiy bilimdonsan! 🚀"
];

const ENCOURAGE_MESSAGES = [
    "Harakat qil! Sen bundan ham yaxshiroq bajara olasan! 💪",
    "Xato qilish — o‘rganishning bir qismi. Keyingisida albatta topasan! ✨"
];

// 2. BARCHA YOSH TOIFALARI UCHUN O'YINLAR KATALOGI (18 TA O'YIN)
const GAMES_DATABASE = {
    "5-8": [
        {
            id: "find-color",
            title: "Ranglarni top",
            emoji: "🎨",
            bg: "#FCE7F3",
            skill: "Diqqat",
            difficulty: "Oson",
            diffClass: "diff-easy",
            desc: "Ko‘rsatilgan rang nomini o‘qing va unga mos keluvchi rangli doirani toping."
        },
        {
            id: "find-shape",
            title: "Shakllarni top",
            emoji: "🔺",
            bg: "#EDE9FE",
            skill: "Mantiq",
            difficulty: "Oson",
            diffClass: "diff-easy",
            desc: "Geometrik shakllarni taniy olasizmi? Doira, kvadrat va uchburchaklarni toping."
        },
        {
            id: "remember-pics",
            title: "Rasmlarni eslab qol",
            emoji: "🖼️",
            bg: "#DBEAFE",
            skill: "Xotira",
            difficulty: "O‘rtacha",
            diffClass: "diff-medium",
            desc: "Ekranda paydo bo‘lgan meva va o‘yinchoqlarni eslab qoling va yashiringanini toping."
        },
        {
            id: "count-numbers",
            title: "Sonlarni sanash",
            emoji: "🍎",
            bg: "#FEF3C7",
            skill: "Matematika",
            difficulty: "Oson",
            diffClass: "diff-easy",
            desc: "Rasmdagi shirinlik va mevalarni diqqat bilan sanang hamda to‘g‘ri sonni belgilang."
        },
        {
            id: "odd-one-out",
            title: "Ortiqchasini top",
            emoji: "🧐",
            bg: "#D1FAE5",
            skill: "Mantiq",
            difficulty: "Oson",
            diffClass: "diff-easy",
            desc: "To‘rtta narsadan biri boshqalarga o‘xshamaydi. Ortiqchasini topa olasizmi?"
        },
        {
            id: "find-animals",
            title: "Hayvonlarni top",
            emoji: "🦁",
            bg: "#FFEDD5",
            skill: "Diqqat",
            difficulty: "Oson",
            diffClass: "diff-easy",
            desc: "Qiziqarli ta'riflar va topishmoqlar orqali qaysi hayvon haqida gap ketayotganini toping."
        }
    ],
    "9-12": [
        {
            id: "math-challenge",
            title: "Matematik challenge",
            emoji: "➕",
            bg: "#FEF3C7",
            skill: "Matematika",
            difficulty: "O‘rtacha",
            diffClass: "diff-medium",
            desc: "Ko‘paytirish, bo‘lish va murakkab misollarni tez va bexato yeching."
        },
        {
            id: "memory-cards",
            title: "Memory Game",
            emoji: "🃏",
            bg: "#EDE9FE",
            skill: "Xotira",
            difficulty: "O‘rtacha",
            diffClass: "diff-medium",
            desc: "Bir xil juftlikdagi kartalarni eng kam urinishda ochib chiqing."
        },
        {
            id: "logic-puzzle",
            title: "Logic Puzzle",
            emoji: "🧩",
            bg: "#DBEAFE",
            skill: "Mantiq",
            difficulty: "O‘rtacha",
            diffClass: "diff-medium",
            desc: "Qiziqarli mantiqiy jumboq va topishmoqlarga to‘g‘ri yechim toping."
        },
        {
            id: "word-builder",
            title: "So‘z topish",
            emoji: "🔤",
            bg: "#FCE7F3",
            skill: "Diqqat",
            difficulty: "O‘rtacha",
            diffClass: "diff-medium",
            desc: "Aralashib ketgan harflardan to‘g‘ri o‘zbekcha so‘z yasang."
        },
        {
            id: "sequence-finder",
            title: "Ketma-ketlikni top",
            emoji: "🔢",
            bg: "#D1FAE5",
            skill: "Mantiq",
            difficulty: "Qiyin",
            diffClass: "diff-hard",
            desc: "Sonlar qatoridagi yashirin qonuniyatni aniqlang va keyingi sonni toping."
        },
        {
            id: "sudoku-kids",
            title: "Sudoku Kids",
            emoji: "🎯",
            bg: "#E0E7FF",
            skill: "Mantiq",
            difficulty: "Qiyin",
            diffClass: "diff-hard",
            desc: "4x4 katakchali bolalar sudokusini har bir qator va ustunda sonlar takrorlanmaydigan qilib to‘ldiring."
        }
    ],
    "13-16": [
        {
            id: "iq-challenge",
            title: "IQ Challenge",
            emoji: "💡",
            bg: "#EDE9FE",
            skill: "Mantiq",
            difficulty: "Qiyin",
            diffClass: "diff-hard",
            desc: "Mantiqiy tafakkur va intellekt darajasini sinovchi murakkab IQ savollar."
        },
        {
            id: "math-battle",
            title: "Math Battle",
            emoji: "⚡",
            bg: "#FEF3C7",
            skill: "Matematika",
            difficulty: "Qiyin",
            diffClass: "diff-hard",
            desc: "Kvadratlar, foizlar va algebraik tenglamalarni tezkor hisoblang."
        },
        {
            id: "advanced-sudoku",
            title: "Advanced Sudoku",
            emoji: "💠",
            bg: "#DBEAFE",
            skill: "Mantiq",
            difficulty: "Ekspert",
            diffClass: "diff-hard",
            desc: "Kamroq yordamchi sonlar berilgan murakkab mantiqiy Sudoku."
        },
        {
            id: "brain-teaser",
            title: "Brain Teaser",
            emoji: "🌀",
            bg: "#FCE7F3",
            skill: "Mantiq",
            difficulty: "Qiyin",
            diffClass: "diff-hard",
            desc: "Chalg‘ituvchi savollar va noodatiy fikrlashni talab qiluvchi boshqotirmalar."
        },
        {
            id: "code-breaker",
            title: "Code Breaker",
            emoji: "🔐",
            bg: "#D1FAE5",
            skill: "Diqqat",
            difficulty: "Ekspert",
            diffClass: "diff-hard",
            desc: "Shifrlangan maxfiy kodlar va Sezar shifrini kalit yordamida oching."
        },
        {
            id: "pattern-master",
            title: "Pattern Master",
            emoji: "📈",
            bg: "#FFEDD5",
            skill: "Matematika",
            difficulty: "Ekspert",
            diffClass: "diff-hard",
            desc: "Murakkab geometrik va arifmetik progressiyalarni davom ettiring."
        }
    ]
};

// 3. YUTUQLAR (BADGES) RO'YXATI
const BADGES_LIST = [
    { id: "first_step", title: "Birinchi qadam", desc: "Ilk o‘yinni muvaffaqiyatli yakunlang", icon: "🌱", condition: (s) => s.gamesPlayed >= 1 },
    { id: "score_100", title: "Yosh bilimdon", desc: "100 ball to‘plang", icon: "⭐", condition: (s) => s.totalScore >= 100 },
    { id: "score_300", title: "Aql charxlovchi", desc: "300 ball to‘plang", icon: "🧠", condition: (s) => s.totalScore >= 300 },
    { id: "games_5", title: "Faol o‘yinchi", desc: "5 ta o‘yin o‘ynang", icon: "🎮", condition: (s) => s.gamesPlayed >= 5 },
    { id: "accuracy_80", title: "Mergan aql", desc: "Kamida 10 ta to‘g‘ri javob bering", icon: "🎯", condition: (s) => s.correctAnswers >= 10 },
    { id: "master_500", title: "BrainJoy Chempioni", desc: "500 ball jamg‘aring", icon: "👑", condition: (s) => s.totalScore >= 500 }
];

// 4. FOYDALANUVCHI HOLATI (STATE & LOCALSTORAGE)
let appState = {
    ageGroup: null,
    totalScore: 0,
    gamesPlayed: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    history: []
};

let currentGame = null;
let gameSession = {
    round: 1,
    maxRounds: 5,
    score: 0,
    correct: 0,
    locked: false
};

// LocalStorage dan yuklash
function loadState() {
    const saved = localStorage.getItem("brainjoy_user_data");
    if (saved) {
        appState = { ...appState, ...JSON.parse(saved) };
    }
}

function saveState() {
    localStorage.setItem("brainjoy_user_data", JSON.stringify(appState));
    updateStatsUI();
}

// ==========================================================================
// 5. BOSHLANG'ICH YUKLANISH VA NAVIGATSIYA
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupWelcomeScreen();
    setupNavigation();
    updateStatsUI();

    // Agar foydalanuvchi avval yoshini tanlagan bo'lsa, darhol katalogga o'tish mumkin
    if (appState.ageGroup) {
        enterMainApp(appState.ageGroup);
    }
});

function setupWelcomeScreen() {
    const ageButtons = document.querySelectorAll("#welcome-age-buttons .age-btn");
    const startBtn = document.getElementById("start-journey-btn");
    const errorMsg = document.getElementById("age-error-msg");
    let selectedAge = appState.ageGroup;

    ageButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            ageButtons.forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedAge = btn.dataset.age;
            errorMsg.classList.add("hidden");
        });
    });

    startBtn.addEventListener("click", () => {
        if (!selectedAge) {
            errorMsg.classList.remove("hidden");
            return;
        }
        appState.ageGroup = selectedAge;
        saveState();
        enterMainApp(selectedAge);
    });
}

function enterMainApp(ageGroup) {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("main-app").classList.remove("hidden");
    document.getElementById("current-age-badge").textContent = `${ageGroup} yosh`;
    document.getElementById("catalog-title").textContent = `${ageGroup} yosh uchun aqliy o‘yinlar`;
    renderGamesCatalog("all");
}

function setupNavigation() {
    const navButtons = document.querySelectorAll(".nav-item, .mobile-nav-item");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.dataset.tab;
            switchTab(targetTab);
        });
    });

    // Logo bosilganda bosh sahifaga
    document.getElementById("nav-logo").addEventListener("click", () => switchTab("catalog"));

    // Yoshni o'zgartirish modali
    const ageModal = document.getElementById("age-modal");
    document.getElementById("change-age-trigger").addEventListener("click", () => {
        ageModal.classList.remove("hidden");
    });
    document.getElementById("close-modal-btn").addEventListener("click", () => {
        ageModal.classList.add("hidden");
    });

    document.querySelectorAll(".modal-age-btns .age-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            appState.ageGroup = btn.dataset.age;
            saveState();
            enterMainApp(appState.ageGroup);
            ageModal.classList.add("hidden");
            switchTab("catalog");
        });
    });

    // Kategoriya filtrlari
    document.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            renderGamesCatalog(chip.dataset.filter);
        });
    });

    // Natijalarni tozalash
    document.getElementById("reset-progress-btn").addEventListener("click", () => {
        if (confirm("Barcha to‘plangan ballar va natijalarni o‘chirmoqchimisiz?")) {
            appState.totalScore = 0;
            appState.gamesPlayed = 0;
            appState.correctAnswers = 0;
            appState.totalQuestions = 0;
            appState.history = [];
            saveState();
        }
    });

    // O'yin maydonidan chiqish
    document.getElementById("exit-game-btn").addEventListener("click", () => switchTab("catalog"));
    document.getElementById("back-to-catalog-btn").addEventListener("click", () => switchTab("catalog"));
    document.getElementById("play-again-btn").addEventListener("click", () => startGame(currentGame));
}

function switchTab(tabName) {
    document.querySelectorAll(".tab-section").forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll(".nav-item, .mobile-nav-item").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    if (tabName === "arena") {
        document.getElementById("game-arena").classList.add("active");
    } else {
        document.getElementById(`tab-${tabName}`).classList.add("active");
        if (tabName === "stats" || tabName === "badges") {
            updateStatsUI();
        }
    }
}

// ==========================================================================
// 6. O'YINLAR KATALOGINI CHIZISH
// ==========================================================================
function renderGamesCatalog(filterSkill) {
    const grid = document.getElementById("games-grid");
    grid.innerHTML = "";
    const games = GAMES_DATABASE[appState.ageGroup] || [];

    const filtered = filterSkill === "all"
        ? games
        : games.filter(g => g.skill === filterSkill);

    filtered.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
            <div>
                <div class="card-top">
                    <div class="game-icon-box" style="background: ${game.bg};">${game.emoji}</div>
                    <div class="card-badges">
                        <span class="skill-tag">${game.skill}</span>
                        <span class="difficulty-tag ${game.diffClass}">${game.difficulty}</span>
                    </div>
                </div>
                <h3>${game.title}</h3>
                <p>${game.desc}</p>
            </div>
            <button class="play-card-btn">▶ O‘YNASH</button>
        `;
        card.querySelector(".play-card-btn").addEventListener("click", () => startGame(game));
        grid.appendChild(card);
    });
}

// ==========================================================================
// 7. O'YIN YURITUVCHI DVIGATEL (GAME ENGINE)
// ==========================================================================
function startGame(game) {
    currentGame = game;
    // Memory va Sudoku o'yinlari bir martalik katta boshqotirma, qolganlari 5 bosqichli
    const isSingleBoard = ["memory-cards", "sudoku-kids", "advanced-sudoku"].includes(game.id);
    
    gameSession = {
        round: 1,
        maxRounds: isSingleBoard ? 1 : 5,
        score: 0,
        correct: 0,
        locked: false
    };

    document.getElementById("arena-game-emoji").textContent = game.emoji;
    document.getElementById("arena-game-title").textContent = game.title;
    document.getElementById("game-play-area").classList.remove("hidden");
    document.getElementById("game-result-area").classList.add("hidden");

    switchTab("arena");
    loadNextRound();
}

function updateArenaHeader() {
    document.getElementById("arena-progress").textContent = `${gameSession.round} / ${gameSession.maxRounds}`;
    document.getElementById("arena-score").textContent = gameSession.score;
}

function loadNextRound() {
    if (gameSession.round > gameSession.maxRounds) {
        finishGame();
        return;
    }

    gameSession.locked = false;
    updateArenaHeader();
    const playArea = document.getElementById("game-play-area");
    playArea.innerHTML = "";

    // Har bir o'yin ID siga mos generatorni chaqirish
    switch (currentGame.id) {
        case "find-color": renderColorGame(playArea); break;
        case "find-shape": renderShapeGame(playArea); break;
        case "remember-pics": renderRememberPicsGame(playArea); break;
        case "count-numbers": renderCountGame(playArea); break;
        case "odd-one-out": renderOddOneOutGame(playArea); break;
        case "find-animals": renderAnimalsGame(playArea); break;
        case "math-challenge": renderMathGame(playArea, false); break;
        case "memory-cards": renderMemoryCardsGame(playArea); break;
        case "logic-puzzle": renderLogicQuizGame(playArea, "9-12"); break;
        case "word-builder": renderWordBuilderGame(playArea); break;
        case "sequence-finder": renderSequenceGame(playArea, false); break;
        case "sudoku-kids": renderSudokuGame(playArea, 6); break;
        case "iq-challenge": renderLogicQuizGame(playArea, "13-16"); break;
        case "math-battle": renderMathGame(playArea, true); break;
        case "advanced-sudoku": renderSudokuGame(playArea, 9); break;
        case "brain-teaser": renderBrainTeaserGame(playArea); break;
        case "code-breaker": renderCodeBreakerGame(playArea); break;
        case "pattern-master": renderSequenceGame(playArea, true); break;
    }
}

function handleAnswer(isCorrect, explanation, btnElement = null) {
    if (gameSession.locked) return;
    gameSession.locked = true;

    const playArea = document.getElementById("game-play-area");
    const allBtns = playArea.querySelectorAll(".option-btn");
    allBtns.forEach(b => b.disabled = true);

    const feedback = document.createElement("div");
    feedback.className = `feedback-banner ${isCorrect ? "feedback-success" : "feedback-error"}`;

    if (isCorrect) {
        if (btnElement) btnElement.classList.add("correct");
        gameSession.score += 20;
        gameSession.correct += 1;
        const msg = PRAISE_MESSAGES[Math.floor(Math.random() * PRAISE_MESSAGES.length)];
        feedback.textContent = msg;
        triggerMiniConfetti();
    } else {
        if (btnElement) btnElement.classList.add("wrong");
        const enc = ENCOURAGE_MESSAGES[Math.floor(Math.random() * ENCOURAGE_MESSAGES.length)];
        feedback.innerHTML = `${enc}<br><small>💡 Izoh: ${explanation}</small>`;
    }

    playArea.appendChild(feedback);
    updateArenaHeader();

    setTimeout(() => {
        gameSession.round++;
        loadNextRound();
    }, isCorrect ? 1400 : 2500);
}

function finishGame() {
    document.getElementById("game-play-area").classList.add("hidden");
    const resultArea = document.getElementById("game-result-area");
    resultArea.classList.remove("hidden");

    const ratio = gameSession.correct / gameSession.maxRounds;
    let stars = "⭐";
    let headline = "Yaxshi urinish! Yana bir bor sinab ko‘r! 💪";
    if (ratio >= 0.8) {
        stars = "⭐⭐⭐";
        headline = "Barakalla! Sen uddalading! 🎉";
        triggerBigConfetti();
    } else if (ratio >= 0.5) {
        stars = "⭐⭐";
        headline = "Ajoyib! Miyang juda yaxshi ishlayapti! 🧠";
    }

    document.getElementById("result-stars").textContent = stars;
    document.getElementById("result-headline").textContent = headline;
    document.getElementById("final-earned-points").textContent = `+${gameSession.score} ball`;
    document.getElementById("final-correct-count").textContent = `${gameSession.correct} / ${gameSession.maxRounds}`;

    // Umumiy statistikaga qo'shish
    appState.totalScore += gameSession.score;
    appState.gamesPlayed += 1;
    appState.correctAnswers += gameSession.correct;
    appState.totalQuestions += gameSession.maxRounds;
    appState.history.unshift({
        title: currentGame.title,
        emoji: currentGame.emoji,
        score: gameSession.score,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    if (appState.history.length > 10) appState.history.pop();

    saveState();
}

// ==========================================================================
// 8. BARCHA 18 TA O'YINNING INTERAKTIV LOGIKASI
// ==========================================================================

// Yordamchi: Variantli tugmalar chizish
function renderChoiceButtons(container, options, correctAnswer, explanation) {
    const grid = document.createElement("div");
    grid.className = "options-grid";
    options.sort(() => Math.random() - 0.5).forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = opt.label || opt;
        const val = opt.value !== undefined ? opt.value : opt;
        btn.addEventListener("click", () => {
            handleAnswer(val === correctAnswer, explanation, btn);
        });
        grid.appendChild(btn);
    });
    container.appendChild(grid);
}

// O'YIN 1 (5-8): RANGLARNI TOP
function renderColorGame(container) {
    const colors = [
        { name: "QIZIL", hex: "#EF4444" },
        { name: "KO‘K", hex: "#3B82F6" },
        { name: "YASHIL", hex: "#10B981" },
        { name: "SARIQ", hex: "#FACC15" },
        { name: "BINAFSHA", hex: "#8B5CF6" },
        { name: "PUSHTI", hex: "#EC4899" }
    ];
    const target = colors[Math.floor(Math.random() * colors.length)];
    const choices = [...colors].sort(() => Math.random() - 0.5).slice(0, 4);
    if (!choices.includes(target)) choices[0] = target;

    container.innerHTML = `<div class="question-prompt">Qaysi doira <span style="color:${target.hex}; text-decoration:underline;">${target.name}</span> rangda?</div>`;
    
    const opts = choices.map(c => ({
        label: `<span style="display:inline-block;width:42px;height:42px;border-radius:50%;background:${c.hex};border:3px solid #fff;box-shadow:0 3px 8px rgba(0,0,0,0.2);"></span>`,
        value: c.name
    }));
    renderChoiceButtons(container, opts, target.name, `To‘g‘ri rang: ${target.name}.`);
}

// O'YIN 2 (5-8): SHAKLLARNI TOP
function renderShapeGame(container) {
    const shapes = [
        { name: "Doira", svg: `<circle cx="30" cy="30" r="24" fill="#EC4899"/>` },
        { name: "Kvadrat", svg: `<rect x="8" y="8" width="44" height="44" rx="6" fill="#3B82F6"/>` },
        { name: "Uchburchak", svg: `<polygon points="30,6 54,52 6,52" fill="#10B981"/>` },
        { name: "Yulduzcha", svg: `<polygon points="30,4 37,21 55,21 41,32 46,50 30,39 14,50 19,32 5,21 23,21" fill="#FBBF24"/>` }
    ];
    const target = shapes[Math.floor(Math.random() * shapes.length)];
    container.innerHTML = `<div class="question-prompt">"${target.name}" shaklini toping!</div>`;

    const opts = shapes.map(s => ({
        label: `<svg width="60" height="60" viewBox="0 0 60 60">${s.svg}</svg>`,
        value: s.name
    }));
    renderChoiceButtons(container, opts, target.name, `Bu shakl ${target.name} edi.`);
}

// O'YIN 3 (5-8): RASMLARNI ESLAB QOL
function renderRememberPicsGame(container) {
    const items = ["🍓", "🚗", "🐶", "🎈", "🍦", "🦋", "🚀", "⚽"];
    const shown = [...items].sort(() => Math.random() - 0.5).slice(0, 3);
    const missing = shown[Math.floor(Math.random() * shown.length)];
    const distractors = items.filter(i => !shown.includes(i)).slice(0, 3);

    container.innerHTML = `
        <div class="question-prompt">Ushbu 3 ta rasmni yaxshilab eslab qoling! ⏳</div>
        <div class="visual-board" style="font-size:3.5rem;">${shown.join("  ")}</div>
    `;

    setTimeout(() => {
        if (!document.body.contains(container)) return;
        const remaining = shown.filter(i => i !== missing);
        container.innerHTML = `
            <div class="question-prompt">Qaysi rasm g‘oyib bo‘ldi? 🤔</div>
            <div class="visual-board" style="font-size:3.5rem;">${remaining.join("  ")}  ❓</div>
        `;
        const opts = [missing, ...distractors];
        renderChoiceButtons(container, opts, missing, `G‘oyib bo‘lgan rasm ${missing} edi.`);
    }, 2200);
}

// O'YIN 4 (5-8): SONLARNI SANASH
function renderCountGame(container) {
    const emojis = ["🍎", "⭐", "🐥", "🍩", "🌸"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const count = Math.floor(Math.random() * 8) + 2; // 2 dan 9 gacha
    const boardItems = Array(count).fill(emoji).join(" ");

    container.innerHTML = `
        <div class="question-prompt">Rasmda nechta ${emoji} bor?</div>
        <div class="visual-board" style="font-size:2.6rem; max-width:420px;">${boardItems}</div>
    `;

    const opts = new Set([count]);
    while (opts.size < 4) {
        opts.add(Math.max(1, count + Math.floor(Math.random() * 5) - 2));
    }
    renderChoiceButtons(container, [...opts], count, `Rasmda jami ${count} ta ${emoji} bor edi.`);
}

// O'YIN 5 (5-8): ORTIQCHASINI TOP
function renderOddOneOutGame(container) {
    const sets = [
        { items: ["🍎", "🍌", "🍇", "🚗"], odd: "🚗", reason: "Mashina transport, qolganlari esa mevalar." },
        { items: ["🐶", "🐱", "🐰", "✈️"], odd: "✈️", reason: "Samolyot uchadi, qolganlari hayvonlar." },
        { items: ["⚽", "🏀", "🎾", "🍕"], odd: "🍕", reason: "Pitsa yegulik, qolganlari sport to‘plari." },
        { items: ["☀️", "🌙", "⭐", "👟"], odd: "👟", reason: "Krossovka oyoq kiyim, qolganlari osmon jismlari." },
        { items: ["✏️", "📚", "🎒", "🍔"], odd: "🍔", reason: "Burger taom, qolganlari maktab anjomlari." }
    ];
    const current = sets[Math.floor(Math.random() * sets.length)];
    container.innerHTML = `<div class="question-prompt">Qaysi biri bu guruhga kirmaydi (ortiqcha)?</div>`;
    renderChoiceButtons(container, [...current.items], current.odd, current.reason);
}

// O'YIN 6 (5-8): HAYVONLARNI TOP
function renderAnimalsGame(container) {
    const animals = [
        { clue: "Men asalni juda yaxshi ko‘raman va qishda uxlayman. Men kimman?", ans: "🐻 Ayiq", opts: ["🐻 Ayiq", "🦊 Tulki", "🐸 Qurbaqa", "🐧 Pingvin"] },
        { clue: "Mening bo‘ynim juda uzun, daraxtlarning eng baland barglarini yeyman.", ans: "🦒 Jirafa", opts: ["🦒 Jirafa", "🐘 Fil", "🦓 Zebra", "🐯 Yo‘lbars"] },
        { clue: "Men o‘rmon qiroliman va baland ovozda na'ra tortaman!", ans: "🦁 Sher", opts: ["🦁 Sher", "🐰 Quyon", "🐨 Koala", "🐼 Panda"] },
        { clue: "Mening uzun xartumim va katta quloqlarim bor.", ans: "🐘 Fil", opts: ["🐘 Fil", "🐒 Maymun", "🐢 Toshbaqa", "🦉 Boyo‘g‘li"] },
        { clue: "Men sabzini yaxshi ko‘raman va juda tez sakrayman.", ans: "🐰 Quyon", opts: ["🐰 Quyon", "🐊 Timsoh", "🦈 Akula", "🐺 Bo‘ri"] }
    ];
    const q = animals[Math.floor(Math.random() * animals.length)];
    container.innerHTML = `<div class="question-prompt">🐾 ${q.clue}</div>`;
    renderChoiceButtons(container, [...q.opts], q.ans, `To‘g‘ri javob: ${q.ans}`);
}

// O'YIN 7 & 14 (9-12 & 13-16): MATEMATIK CHALLENGE / MATH BATTLE
function renderMathGame(container, isHard) {
    let questionText = "";
    let answer = 0;

    if (!isHard) {
        const a = Math.floor(Math.random() * 12) + 3;
        const b = Math.floor(Math.random() * 10) + 2;
        const isMult = Math.random() > 0.4;
        if (isMult) {
            questionText = `${a} × ${b} = ?`;
            answer = a * b;
        } else {
            const sum = a + b + 15;
            questionText = `${sum} - ${a} = ?`;
            answer = sum - a;
        }
    } else {
        const mode = Math.floor(Math.random() * 3);
        if (mode === 0) {
            const x = Math.floor(Math.random() * 15) + 5;
            const b = Math.floor(Math.random() * 20) + 10;
            questionText = `Tenglamani yeching: 2x + ${b} = ${2 * x + b}. x = ?`;
            answer = x;
        } else if (mode === 1) {
            const base = Math.floor(Math.random() * 9) + 6;
            questionText = `${base}² + 15 = ?`;
            answer = base * base + 15;
        } else {
            const num = (Math.floor(Math.random() * 8) + 2) * 20;
            questionText = `${num} sonining 25% i nechaga teng?`;
            answer = num * 0.25;
        }
    }

    container.innerHTML = `<div class="question-prompt">🧮 ${questionText}</div>`;
    const opts = new Set([answer]);
    while (opts.size < 4) {
        opts.add(answer + (Math.floor(Math.random() * 11) - 5) || answer + 3);
    }
    renderChoiceButtons(container, [...opts], answer, `To‘g‘ri hisob-kitob natijasi: ${answer}.`);
}

// O'YIN 8 (9-12): MEMORY GAME (KARTALARNI ESLAB QOLISH)
function renderMemoryCardsGame(container) {
    const emojis = ["🚀", "🪐", "🧬", "🎨", "🎸", "🏆"];
    const deck = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    let flipped = [];
    let matchedCount = 0;

    container.innerHTML = `
        <div class="question-prompt">Bir xil juftlikdagi kartalarni toping!</div>
        <div class="memory-grid" id="mem-grid"></div>
    `;

    const grid = container.querySelector("#mem-grid");
    deck.forEach((symbol) => {
        const card = document.createElement("div");
        card.className = "mem-card";
        card.textContent = symbol;

        card.addEventListener("click", () => {
            if (flipped.length >= 2 || card.classList.contains("flipped") || card.classList.contains("matched")) return;
            card.classList.add("flipped");
            flipped.push(card);

            if (flipped.length === 2) {
                const [c1, c2] = flipped;
                if (c1.textContent === c2.textContent) {
                    c1.classList.add("matched");
                    c2.classList.add("matched");
                    flipped = [];
                    matchedCount++;
                    gameSession.score += 15;
                    updateArenaHeader();

                    if (matchedCount === emojis.length) {
                        gameSession.correct = 1;
                        triggerBigConfetti();
                        setTimeout(() => {
                            gameSession.round++;
                            loadNextRound();
                        }, 1000);
                    }
                } else {
                    setTimeout(() => {
                        c1.classList.remove("flipped");
                        c2.classList.remove("flipped");
                        flipped = [];
                    }, 750);
                }
            }
        });
        grid.appendChild(card);
    });
}

// O'YIN 9 & 13 (9-12 & 13-16): LOGIC PUZZLE / IQ CHALLENGE
function renderLogicQuizGame(container, level) {
    const puzzles9_12 = [
        { q: "Yugurish musobaqasida siz 2-o‘rindagi sportchini quvib o‘tdingiz. Hozir nechanchi o‘rindasiz?", ans: "2-o‘rinda", opts: ["1-o‘rinda", "2-o‘rinda", "3-o‘rinda", "Oxirgi o‘rinda"], exp: "2-o‘rindagi odamni quvib o‘tsangiz, uning o‘rnini egallaysiz." },
        { q: "Bir yilda nechta oyda 28 kun bor?", ans: "Barcha 12 oyda", opts: ["Faqat 1 oyda", "6 oyda", "Barcha 12 oyda", "2 oyda"], exp: "Har bir oyda kamida 28 kun mavjud!" },
        { q: "Dengiz tubida qanday tosh bo‘lmaydi?", ans: "Quruq tosh", opts: ["Katta tosh", "Quruq tosh", "Oq tosh", "Og‘ir tosh"], exp: "Suv ostidagi hamma tosh ho‘l bo‘ladi." },
        { q: "Anvarning 4 ta opasi bor. Har bir opasining 1 tadan ukasi bor. Oilada nechta bola bor?", ans: "5 ta", opts: ["8 ta", "5 ta", "4 ta", "9 ta"], exp: "4 ta qiz va bitta uka (Anvarning o‘zi) — jami 5 ta!" },
        { q: "Qaysi so‘z har doim noto‘g‘ri yoziladi?", ans: "«Noto‘g‘ri» so‘zi", opts: ["«Xato» so‘zi", "«Noto‘g‘ri» so‘zi", "«Qiyin» so‘zi", "«Sirli» so‘zi"], exp: "«Noto‘g‘ri» so‘zining o‘zi shunday o‘qiladi." }
    ];

    const puzzles13_16 = [
        { q: "Agar 5 ta mashina 5 ta detalni 5 daqiqada tayyorlasa, 100 ta mashina 100 ta detalni necha daqiqada tayyorlaydi?", ans: "5 daqiqada", opts: ["100 daqiqada", "5 daqiqada", "20 daqiqada", "1 daqiqada"], exp: "Har bir mashina 1 ta detalga 5 daqiqa sarflaydi." },
        { q: "Ko‘ldagi nilufar guli har kuni 2 baravar kattalashadi. 48 kunda butun ko‘lni qoplasa, nechanchi kuni ko‘lning yarmini qoplagan?", ans: "47-kuni", opts: ["24-kuni", "47-kuni", "36-kuni", "46-kuni"], exp: "Har kuni 2 baravar oshgani uchun, 48-kundan bir kun oldin (47-kuni) yarmi bo‘lgan." },
        { q: "Daftar va qalam birgalikda 11 000 so‘m turadi. Daftar qalamdan 10 000 so‘m qimmat. Qalam necha so‘m?", ans: "500 so‘m", opts: ["1 000 so‘m", "500 so‘m", "1 500 so‘m", "2 000 so‘m"], exp: "Qalam 500 so‘m + Daftar 10 500 so‘m = 11 000 so‘m (farq 10 000)." },
        { q: "3 ta mushuk 3 ta sichqonni 3 daqiqada tutadi. 1 ta mushuk 1 ta sichqonni necha daqiqada tutadi?", ans: "3 daqiqada", opts: ["1 daqiqada", "3 daqiqada", "9 daqiqada", "6 daqiqada"], exp: "Mushuklar parallel ravishda ov qiladi, har biri 3 daqiqa sarflaydi." },
        { q: "Otasi 36 yoshda, o‘g‘li 6 yoshda. Necha yildan keyin otasi o‘g‘lidan 3 baravar katta bo‘ladi?", ans: "9 yildan keyin", opts: ["6 yildan keyin", "9 yildan keyin", "12 yildan keyin", "15 yildan keyin"], exp: "9 yildan so‘ng ota 45 yosh, o‘g‘il 15 yosh bo‘ladi (45 / 15 = 3)." }
    ];

    const list = level === "9-12" ? puzzles9_12 : puzzles13_16;
    const item = list[(gameSession.round - 1) % list.length];

    container.innerHTML = `<div class="question-prompt">🧠 ${item.q}</div>`;
    renderChoiceButtons(container, [...item.opts], item.ans, item.exp);
}

// O'YIN 10 (9-12): SO'Z TOPISH
function renderWordBuilderGame(container) {
    const words = [
        { word: "KITOB", hint: "Bilim manbai" },
        { word: "MANTIQ", hint: "To‘g‘ri fikrlash ilmi" },
        { word: "YULDUZ", hint: "Tunda osmonda porlaydi" },
        { word: "KOMPYUTER", hint: "Aqlli elektron qurilma" },
        { word: "MAKTAB", hint: "Bilim maskani" }
    ];
    const targetObj = words[(gameSession.round - 1) % words.length];
    const targetWord = targetObj.word;
    const scrambled = targetWord.split("").sort(() => Math.random() - 0.5);
    let currentGuess = [];

    container.innerHTML = `
        <div class="question-prompt">💡 Yordam: ${targetObj.hint}</div>
        <div class="word-slots" id="word-slots"></div>
        <div class="letter-bank" id="letter-bank"></div>
        <button id="clear-word-btn" class="btn-secondary" style="margin-top:18px;">Tozalash ↺</button>
    `;

    const slotsDiv = container.querySelector("#word-slots");
    const bankDiv = container.querySelector("#letter-bank");

    function renderSlots() {
        slotsDiv.innerHTML = "";
        for (let i = 0; i < targetWord.length; i++) {
            const slot = document.createElement("div");
            slot.className = "word-slot";
            slot.textContent = currentGuess[i] || "";
            slotsDiv.appendChild(slot);
        }
    }

    scrambled.forEach((char) => {
        const tile = document.createElement("button");
        tile.className = "letter-tile";
        tile.textContent = char;
        tile.addEventListener("click", () => {
            if (currentGuess.length < targetWord.length) {
                currentGuess.push(char);
                tile.disabled = true;
                renderSlots();

                if (currentGuess.length === targetWord.length) {
                    const formed = currentGuess.join("");
                    handleAnswer(formed === targetWord, `To‘g‘ri so‘z: ${targetWord}`);
                }
            }
        });
        bankDiv.appendChild(tile);
    });

    container.querySelector("#clear-word-btn").addEventListener("click", () => {
        currentGuess = [];
        bankDiv.querySelectorAll(".letter-tile").forEach(t => t.disabled = false);
        renderSlots();
    });

    renderSlots();
}

// O'YIN 11 & 18 (9-12 & 13-16): KETMA-KETLIKNI TOP / PATTERN MASTER
function renderSequenceGame(container, isAdvanced) {
    let seq = [];
    let nextVal = 0;
    let explanation = "";

    if (!isAdvanced) {
        const start = Math.floor(Math.random() * 10) + 2;
        const step = Math.floor(Math.random() * 5) + 2;
        seq = [start, start + step, start + step * 2, start + step * 3];
        nextVal = start + step * 4;
        explanation = `Har bir keyingi son +${step} ga ortib bormoqda.`;
    } else {
        const type = Math.floor(Math.random() * 2);
        if (type === 0) {
            // Geometrik progressiya
            const start = Math.floor(Math.random() * 3) + 2;
            seq = [start, start * 2, start * 4, start * 8];
            nextVal = start * 16;
            explanation = `Har bir son 2 ga ko‘paytirib borilmoqda.`;
        } else {
            // Fibonachchi uslubi
            seq = [2, 3, 5, 8, 13];
            nextVal = 21;
            explanation = `Har bir son o‘zidan oldingi ikkita sonning yig‘indisiga teng (8 + 13 = 21).`;
        }
    }

    container.innerHTML = `
        <div class="question-prompt">Ketma-ketlikni davom ettiring:</div>
        <div class="visual-board" style="font-size:1.8rem; font-weight:900; color:var(--purple-dark);">
            ${seq.join("  →  ")}  →  ❓
        </div>
    `;

    const opts = new Set([nextVal]);
    while (opts.size < 4) {
        opts.add(nextVal + (Math.floor(Math.random() * 10) - 4) || nextVal + 5);
    }
    renderChoiceButtons(container, [...opts], nextVal, explanation);
}

// O'YIN 12 & 15 (9-12 & 13-16): SUDOKU KIDS & ADVANCED SUDOKU (4x4)
function renderSudokuGame(container, emptyCellsCount) {
    // Tayyor to'g'ri 4x4 Sudoku bazasi va aralashtirish
    const baseSolution = [
        [1, 2, 3, 4],
        [3, 4, 1, 2],
        [2, 1, 4, 3],
        [4, 3, 2, 1]
    ];

    // Bo'sh kataklarni tanlash
    const puzzle = baseSolution.map(row => [...row]);
    let removed = 0;
    while (removed < emptyCellsCount) {
        const r = Math.floor(Math.random() * 4);
        const c = Math.floor(Math.random() * 4);
        if (puzzle[r][c] !== 0) {
            puzzle[r][c] = 0;
            removed++;
        }
    }

    container.innerHTML = `
        <div class="question-prompt">Har bir qator va ustunda 1 dan 4 gacha sonlar bir martadan qatnashsin!</div>
        <div class="sudoku-grid" id="sudoku-board"></div>
        <button id="check-sudoku-btn" class="btn-primary">Tekshirish ✅</button>
    `;

    const board = container.querySelector("#sudoku-board");
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            const input = document.createElement("input");
            input.type = "number";
            input.min = 1;
            input.max = 4;
            input.className = "sudoku-cell";
            input.dataset.r = r;
            input.dataset.c = c;

            if (puzzle[r][c] !== 0) {
                input.value = puzzle[r][c];
                input.disabled = true;
                input.classList.add("fixed");
            }
            board.appendChild(input);
        }
    }

    container.querySelector("#check-sudoku-btn").addEventListener("click", () => {
        const inputs = board.querySelectorAll(".sudoku-cell");
        let isSolved = true;
        inputs.forEach(inp => {
            const r = inp.dataset.r;
            const c = inp.dataset.c;
            if (parseInt(inp.value) !== baseSolution[r][c]) {
                isSolved = false;
            }
        });
        handleAnswer(isSolved, "Barcha qator va ustunlarda 1, 2, 3, 4 raqamlari takrorlanmasligi kerak.");
    });
}

// O'YIN 16 (13-16): BRAIN TEASER
function renderBrainTeaserGame(container) {
    const teasers = [
        { q: "Nimani ko‘z bilan ko‘rib bo‘lmaydi, lekin u har doim oldimizda turadi?", ans: "Kelajak", opts: ["Kelajak", "Shamol", "Qorong‘ulik", "Oyna"], exp: "Kelajak hali kelmagan, lekin u doim oldinda." },
        { q: "Qaysi idishdan ovqat yeb bo‘lmaydi?", ans: "Bo‘sh idishdan", opts: ["Katta idishdan", "Bo‘sh idishdan", "Chuqur idishdan", "Issiq idishdan"], exp: "Ichida hech narsa yo‘q bo‘sh idishdan ovqat yeb bo‘lmaydi!" },
        { q: "U sizga tegishli, lekin undan boshqalar sizdan ko‘ra ko‘proq foydalanadi. Bu nima?", ans: "Sizning ismingiz", opts: ["Telefoningiz", "Sizning ismingiz", "Kitobingiz", "Uyingiz"], exp: "Sizni chaqirishganda boshqalar ismingizni ko‘proq aytadi." },
        { q: "Qancha ko‘p olsangiz, shuncha kattalashadigan narsa nima?", ans: "Chuqur (o‘ra)", opts: ["Qarz", "Chuqur (o‘ra)", "Bilim", "Tosh"], exp: "Tuproqni qancha ko‘p olsangiz, chuqur shuncha kattalashadi." },
        { q: "Suvga tushsa ham ho‘l bo‘lmaydigan narsa nima?", ans: "Soya", opts: ["Baliq", "Soya", "Yog‘", "Barg"], exp: "Soya moddiy jism emas, u ho‘l bo‘lmaydi." }
    ];
    const t = teasers[(gameSession.round - 1) % teasers.length];
    container.innerHTML = `<div class="question-prompt">🌀 ${t.q}</div>`;
    renderChoiceButtons(container, [...t.opts], t.ans, t.exp);
}

// O'YIN 17 (13-16): CODE BREAKER (SHIFRLARNI YECHISH)
function renderCodeBreakerGame(container) {
    const ciphers = [
        { code: "A = 1, B = 2, D = 4 ... «4 - 1 - 18 - 19» kodi qaysi so‘z?", ans: "DARS", opts: ["DARS", "BOLA", "OLMA", "KITOB"], exp: "Alifbo tartibida: 4=D, 1=A, 18=R, 19=S → DARS." },
        { code: "Sezar shifri (+1 harf oldinga): «B-K-L-B» shifrlangan so‘zni oching!", ans: "ALMA (OLMA)", opts: ["ALMA (OLMA)", "BOLA", "QALAM", "DARYO"], exp: "Har bir harfdan bitta oldingi harf olinadi: B→A, K→L, L→M, B→A." },
        { code: "Teskari kod: «Q-I-T-N-A-M» so‘zini o‘qing!", ans: "MANTIQ", opts: ["MANTIQ", "TAQVIM", "QAYMOQ", "MATN"], exp: "So‘z o‘ngdan chapga teskari yozilgan: MANTIQ." },
        { code: "Agar 🔺= 5, 🔵= 3, 🟩= 2 bo‘lsa, (🔺 × 🔵) - 🟩 = ?", ans: "13", opts: ["13", "10", "17", "15"], exp: "(5 × 3) - 2 = 15 - 2 = 13." },
        { code: "Kod: 2+3=10, 7+2=63, 6+5=66 bo‘lsa, 8+4 = ?", ans: "96", opts: ["96", "32", "48", "84"], exp: "Qoida: (a + b) × a. Demak, (8 + 4) × 8 = 12 × 8 = 96." }
    ];
    const c = ciphers[(gameSession.round - 1) % ciphers.length];
    container.innerHTML = `<div class="question-prompt">🔐 ${c.code}</div>`;
    renderChoiceButtons(container, [...c.opts], c.ans, c.exp);
}

// ==========================================================================
// 9. STATISTIKA, YUTUQLAR VA KONFETTI EFFEKTLARI
// ==========================================================================
function updateStatsUI() {
    document.getElementById("header-score").textContent = appState.totalScore;
    document.getElementById("stat-total-score").textContent = appState.totalScore;
    document.getElementById("stat-games-played").textContent = appState.gamesPlayed;
    document.getElementById("stat-correct-answers").textContent = appState.correctAnswers;

    const acc = appState.totalQuestions > 0
        ? Math.round((appState.correctAnswers / appState.totalQuestions) * 100)
        : 0;
    document.getElementById("stat-accuracy").textContent = `${acc}%`;

    // O'yinlar tarixi
    const historyList = document.getElementById("game-history-list");
    if (appState.history.length > 0) {
        historyList.innerHTML = appState.history.map(item => `
            <div class="history-item">
                <div><strong>${item.emoji} ${item.title}</strong> <small style="color:var(--text-muted); margin-left:8px;">${item.date}</small></div>
                <span style="color:var(--green); font-weight:800;">+${item.score} ball</span>
            </div>
        `).join("");
    } else {
        historyList.innerHTML = `<p class="empty-msg">Hali birorta ham o‘yin o‘ynalmagan. Hoziroq boshlang!</p>`;
    }

    // Yutuqlar (Badges)
    const badgesGrid = document.getElementById("badges-grid");
    badgesGrid.innerHTML = BADGES_LIST.map(badge => {
        const unlocked = badge.condition(appState);
        return `
            <div class="badge-card ${unlocked ? "unlocked" : "locked"}">
                <div class="badge-icon">${badge.icon}</div>
                <h4>${badge.title}</h4>
                <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">${badge.desc}</p>
                <span class="badge-status">${unlocked ? "Qo‘lga kiritilgan ✓" : "Qulflangan 🔒"}</span>
            </div>
        `;
    }).join("");
}

function triggerMiniConfetti() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 35,
            spread: 60,
            origin: { y: 0.7 }
        });
    }
}

function triggerBigConfetti() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 100,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
}