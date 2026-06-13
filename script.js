// =========================
// SLIDESHOW
// =========================

const page1Images = [];

for (let i = 1; i <= 21; i++) {
  page1Images.push(`Page1/p1-${i}.jpg`);
}

let currentImage = 0;
const slideshow = document.getElementById("slideshow");

function startSlideshow() {
  if (!slideshow) return;

  slideshow.style.backgroundImage = `url("${page1Images[0]}")`;

  setInterval(() => {
    currentImage = (currentImage + 1) % page1Images.length;
    slideshow.style.backgroundImage = `url("${page1Images[currentImage]}")`;
  }, 4000);
}

startSlideshow();


// =========================
// PAGE NAVIGATION
// =========================

function goToPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  const music = document.getElementById("bgMusic");
  music?.play().catch(() => {});
}


// GLOBAL PAGE BACK
function goBack() {
  const pages = ["page1", "page2", "page3", "page4", "page5"];

  const index = pages.findIndex(p =>
    document.getElementById(p).classList.contains("active")
  );

  if (index > 0) {
    document.getElementById(pages[index]).classList.remove("active");
    document.getElementById(pages[index - 1]).classList.add("active");
  }
}


// =========================
// MUSIC
// =========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn?.addEventListener("click", () => {
  if (!playing) {
    music.play().catch(() => {});
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
});


// =========================
// QUIZ GAME
// =========================

const questions = [
  { q: "First soul animal you were given by someone special.", a: "Penguin", hint: "Pebbles" },
  { q: "Heart of every birthay party.", a: "Cake", hint: "Big Sweet Edible" },
  { q: "I like them on your ears.", a: "Jhumkas", hint: "Heavy OR light" },
  { q: "A flower that matches your elegance.", a: "Rose", hint: "Silent Beauty yet Thorny" },
  { q: "I'll help you wear it on your finger.", a: "Ring", hint: "Spotlight of Engagement" },
  { q: "A special date on which everything began.", a: "26/05/2023", hint: "DD/MM/YYYY" },
  { q: "Something used to listen to music.", a: "Earphones", hint: "Either Wired or Bluetooth Connected" },
  { q: "A fizzy drink you like.", a: "Coke", hint: "Not Diet Coke" },
  { q: "A one-of-a-kind printed photo memory.", a: "Polaroid", hint: "Small Camera Needed" },
  { q: "A social media app where we talk the most.", a: "Instagram", hint: "pink white yellow icon" },
  { q: "Waist accessory you can wear on jeans.", a: "Waist Chain", hint: "Flashy Chain" },
  { q: "A small bag you carry essentials in.", a: "Purse", hint: "Women's Wallet" },
  { q: "Developer's birthday?", a: "23/09/2008", hint: "DD/MM/YYYY" },
  { q: "You love it on your lips.", a: "Lip balm", hint: "Cocoa" },
  { q: "Device used for calling and reels.", a: "Phone", hint: "Daily Necessity" },
  { q: "Decorative chain for keys or bag.", a: "Keychain", hint: "Best Found at Mr. DIY" },
  { q: "Head accessory you deserve for being a (slayyy) queen.", a: "Crown", hint: "Gold and Jewels Embeded" },
  { q: "Your favourite human in animal form.", a: "Frog", hint: "Amphibian" }
];

let currentQ = 0;


// LOAD
function loadQuestion() {
  document.getElementById("questionBox").innerText = questions[currentQ].q;
  document.getElementById("qNum").innerText = currentQ + 1;
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("hintBox").style.display = "none";
}


// HINT
function showHint() {
  const box = document.getElementById("hintBox");
  box.style.display = "block";
  box.innerText = "Hint: " + questions[currentQ].hint;
}


// ANSWER
function checkAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const correct = questions[currentQ].a.toLowerCase();

  if (input === correct) {
    nextQuestion();
  } else {
    document.getElementById("feedback").innerText = "Try Again Shawtie! Think Different.";
  }
}


// SKIP
function skipQuestion() {
  nextQuestion();
}


// NEXT
function nextQuestion() {
  currentQ++;

  if (currentQ >= questions.length) {

document.getElementById("page2").innerHTML = `
<div style="
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  text-align:center;
  z-index:2;
  width:90%;
">

    <h1 style="
      background:#ffd6ec;
      border:4px solid #4da6ff;
      border-radius:25px;
      padding:25px;
      max-width:700px;
      margin:0 auto 25px auto;

      color:#0096ff;
      font-size:2rem;
      font-weight:bold;

      box-shadow:0 6px 20px rgba(0,0,0,0.15);
    ">
      ATTAGIRL SMARTY PANTS FOR MAKING IT TILL HERE. 
TONS & TONS OF LOVE BABYGIRL!!! &lt;3
    </h1>
<button onclick="goBackToLastQuestion()">
  Pichhla Sawaal
</button>

    <button onclick="goToPage('page3')">
      Click To See 18 Reasons Why I Love You!
    </button>

  </div>
`;

    return;
  }

  loadQuestion();
}
// PREVIOUS QUESTION
function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    loadQuestion();
  }
}

// INIT QUIZ
document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});
function goBackToLastQuestion() {

  currentQ = questions.length - 1;

  document.getElementById("page2").innerHTML = `

    <div class="quiz-container">

      <div class="progress">
        Question <span id="qNum">1</span> / 18
      </div>

      <div class="question-box" id="questionBox"></div>

      <div id="hintBox" style="display:none;"></div>

      <input type="text" id="answerInput">

      <button onclick="checkAnswer()">FOUND IT</button>
      <button onclick="skipQuestion()">I am Bhondu</button>
      <button onclick="showHint()">Help Me Fizzy</button>
      <button onclick="prevQuestion()">Pichhla Sawaal</button>

      <p id="feedback"></p>

    </div>

  `;

  loadQuestion();
}
// =========================
// PAGE 3 SLIDESHOW
// =========================

const page3Images = [];

for (let i = 1; i <= 15; i++) {
  page3Images.push(`Page3/p3-${i}.jpg`);
}

let page3ImageIndex = 0;


// =========================
// PAGE 3 CARDS
// =========================

const reasons = [

"You make people like me feel comfortable around you.",

"Your smile can improve any terrible day.",

"You care the most about the people you love.",

"Your habits are adorable without even trying.",

"You somehow make everyone's ordinary moments special.",

"You get excited about the cutest things.",

"You have the prettiest eyes.",

"You are the purest soul I have ever met.",

"You make us laugh when I least expect it.",

"You have the biggest heart (literally, iykyk).",

"You make every memory memorable just by being there.",

"You are stronger and smarter than you give yourself credit for.",

"You look beautiful even when you think you don't.",

"You make me want to become a better person.",

"You are the kind of daughter every family deserves.",

"You can be a completely clueless silly sometimes.",

"You are my favorite and safest person to talk to.",

"Because you're Arshiya, and honestly, that reason alone is enough. There are a hundred more, and a thousand more that I can't count, but believe me. YOU ARE THE BEST, THE MOST LOVELY BANDI OF THIS UNIVERSE, AND I MEAN IT."

];

let currentReason = 0;


// =========================
// OPEN PAGE 3
// =========================

function initializePage3() {

  const bg = document.getElementById("page3Slideshow");
  const card = document.getElementById("reasonText");

  if (!bg || !card) return;

  bg.style.backgroundImage =
    `url("${page3Images[0]}")`;

  card.innerText = reasons[0];

  document.getElementById("reasonNumber").innerText = "1";

  document.getElementById("reasonFinishBtn").style.display =
    "none";

  setInterval(() => {

    page3ImageIndex++;

    if (page3ImageIndex >= page3Images.length) {
      page3ImageIndex = 0;
    }

    bg.style.backgroundImage =
      `url("${page3Images[page3ImageIndex]}")`;

  }, 5000);
}


// =========================
// NEXT CARD
// =========================

function nextReason() {

  if (currentReason < reasons.length - 1) {

    currentReason++;

    document.getElementById("reasonText").innerText =
      reasons[currentReason];

    document.getElementById("reasonNumber").innerText =
      currentReason + 1;

    if (currentReason === reasons.length - 1) {

      document.getElementById("reasonFinishBtn").style.display =
        "inline-block";
    }

  }
}

// =========================
// PREVIOUS CARD
// =========================

function previousReason() {

  if (currentReason > 0) {

    currentReason--;

    document.getElementById("reasonText").innerText =
      reasons[currentReason];

    document.getElementById("reasonNumber").innerText =
      currentReason + 1;

    document.getElementById("reasonFinishBtn").style.display =
      "none";
  }
}


// =========================
// PAGE 4 BUTTON
// =========================

function finishReasons() {

  goToPage("page4");

}


// =========================
// PAGE CHANGE DETECTOR
// =========================

const originalGoToPage = goToPage;

goToPage = function(pageId) {

  originalGoToPage(pageId);

  if (pageId === "page3") {

    currentReason = 0;

    setTimeout(() => {

      initializePage3();

    }, 100);
  }
};


// =========================
// WHOLE SCREEN NAVIGATION
// =========================

document.addEventListener("click", function(e) {

  const page3 = document.getElementById("page3");

  if (!page3.classList.contains("active")) return;

if (
  e.target.id === "reasonFinishBtn" ||
  e.target.closest("#reasonFinishBtn")
) {
  return;
}
  if (e.target.closest("#backBtn")) return;
  if (e.target.closest("#musicBtn")) return;

  const middle = window.innerWidth / 2;

  if (e.clientX > middle) {
    nextReason();
  } else {
    previousReason();
  }

});
// =========================
// PAGE 4 LETTER
// =========================

const birthdayLetter = `

Before this page ends, I just wanted you to truly feel what it means to be you.

You are genuinely one of the kindest, purest, and most lovable people I have ever known. You bring comfort wherever you go, happiness wherever you stay, and memories wherever you exist. Everyone close to you is lucky enough to have you in their lives, and I am luckier than the most.

I know you don't always see yourself the way others do, but trust me when I say that you leave a little bit of warmth in every heart you touch.

Thank you for being you.

Thank you for your smile, your care, your silliness, your strength, and all the little things that make you Arshiya.

I hope this 18th year treats you as wonderfully as you deserve to be treated.

HAPPY BIRTHDAY, KUCHUPUCHU PENGUIN MERA MWAH!

With all my love,
`;

function openLetter(){

  const flap =
    document.getElementById("envelopeFlap");

  const envelope =
    document.getElementById("envelopeContainer");

  const paper =
    document.getElementById("letterPaper");

  flap.style.transform =
    "rotateX(180deg)";

  setTimeout(()=>{

    envelope.style.display = "none";

    paper.style.display = "block";

    typeLetter();

  },1000);
}

function typeLetter(){

  const target =
    document.getElementById("typedLetter");

  let i = 0;

  target.innerHTML = "";

  const interval = setInterval(()=>{

    target.innerHTML += birthdayLetter[i];

    i++;

    if(i >= birthdayLetter.length){

      clearInterval(interval);

      document.getElementById(
        "page4NextBtn"
      ).style.display = "inline-block";

    }

  },35);
}

// floating hearts
const floatingWords = [

"I LOVE YOU",
"MY PENGUIN",
"PROUD OF YOU",
"U DA BEST",
"CUTIE",
"HOTTIE",
"GO QUEEN",
"18!!!!",
"MWAH",
"BEST WISHES",
"KEEP GOING",
"ARSHIYA AURA",
"ADORABLE",
"SLAYYY",
"MOMMYYY"

];

const wordColors = [

"#ff69b4",
"#ff1493",
"#9370db",
"#00bfff",
"#32cd32",
"#ff8c00",
"#ffd700",
"#ff4d6d",
"#7b68ee",
"#20b2aa"

];

setInterval(()=>{

  const page4 =
    document.getElementById("page4");

  if(!page4) return;

  const word =
    document.createElement("div");

  word.className =
    "floating-heart";

  word.innerHTML =
    floatingWords[
      Math.floor(
        Math.random() *
        floatingWords.length
      )
    ];

  word.style.left =
    Math.random()*100 + "%";

  word.style.color =
    wordColors[
      Math.floor(
        Math.random() *
        wordColors.length
      )
    ];

  page4.appendChild(word);

  setTimeout(()=>{

    word.remove();

  },10000);

},400);
// =========================
// PAGE 5 - CLEAN RITUAL
// =========================

let page5Started = false;

function startPage5() {
  const page5 = document.getElementById("page5");
  if (!page5 || page5Started) return;

  page5Started = true;

  startPhotoFloat();   
  runWishSequence();
}

/* =========================
   1. WISH SEQUENCE
========================= */

function runWishSequence() {
  const lines = document.querySelectorAll("#wishSequence .wish-line");

  let i = 0;

  const interval = setInterval(() => {
    if (i < lines.length) {
      lines[i].classList.add("show");
      i++;
    } else {
      clearInterval(interval);
      triggerFinal();
    }
  }, 1800);
}

/* =========================
   2. FINAL REVEAL
========================= */

function triggerFinal() {
  const toast = document.getElementById("toastAnimation");
  const finalMsg = document.querySelector(".final-message");
  const signature = document.querySelector(".final-signature");

  if (toast) toast.classList.add("show");

  setTimeout(() => {
    if (finalMsg) finalMsg.classList.add("show");
  }, 2000);

  setTimeout(() => {
    if (signature) signature.classList.add("show");
  }, 3500);
}


/* =========================
   AUTO START WHEN PAGE OPENS
========================= */

setInterval(() => {
  const page5 = document.getElementById("page5");

  if (page5 && page5.classList.contains("active")) {
    startPage5();
  }
}, 500);
function startPhotoFloat() {
  const container = document.getElementById("floatingMemories");
  if (!container) return;

  const photos = [];
  const velocities = [];

  const W = window.innerWidth;
  const H = window.innerHeight;

  // CREATE 30 IMAGES
  for (let i = 1; i <= 30; i++) {
    const img = document.createElement("img");

    img.src = `Page5/p5-${i}.jpg`;
    img.className = "floating-photo";

    const obj = {
      el: img,
      x: Math.random() * (W - 100),
      y: Math.random() * (H - 100),
      vx: (Math.random() - 0.5) * 3,  // horizontal speed
      vy: (Math.random() - 0.5) * 3   // vertical speed
    };

    photos.push(obj);
    container.appendChild(img);
  }

  // ANIMATION LOOP (PHYSICS ENGINE)
  function animate() {
    const W = window.innerWidth;
    const H = window.innerHeight;

    for (let p of photos) {

      p.x += p.vx;
      p.y += p.vy;

      // LEFT / RIGHT BOUNCE
      if (p.x <= 0 || p.x >= W - 100) {
        p.vx *= -1;
        p.x = Math.max(0, Math.min(p.x, W - 100));
      }

      // TOP / BOTTOM BOUNCE
      if (p.y <= 0 || p.y >= H - 100) {
        p.vy *= -1;
        p.y = Math.max(0, Math.min(p.y, H - 100));
      }

      p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
    }

    requestAnimationFrame(animate);
  }

  animate();
}