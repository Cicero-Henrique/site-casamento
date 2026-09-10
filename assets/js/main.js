function setupMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.dataset.open === "true";
    nav.dataset.open = String(!isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.dataset.open = "false";
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupRevealOnScroll() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -10% 0px" }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupCarousel() {
  const carousel = document.querySelector(".carousel");
  const dotsContainer = document.querySelector(".carousel__dots");
  if (!carousel || !dotsContainer) return;

  const viewport = carousel.querySelector(".carousel__viewport");
  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const prevButton = carousel.querySelector(".carousel__arrow--prev");
  const nextButton = carousel.querySelector(".carousel__arrow--next");

  let index = 0;

  function getVisibleCount() {
    return Math.round(
      parseFloat(getComputedStyle(carousel).getPropertyValue("--carousel-visible")) || 1
    );
  }

  function getMaxIndex() {
    return Math.max(slides.length - getVisibleCount(), 0);
  }

  function renderDots() {
    dotsContainer.innerHTML = "";
    const maxIndex = getMaxIndex();
    for (let i = 0; i <= maxIndex; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel__dot";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Ir para a foto ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function update() {
    const maxIndex = getMaxIndex();
    index = Math.min(index, maxIndex);

    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(-${index * (slideWidth + gap)}px)`;

    prevButton.disabled = index === 0;
    nextButton.disabled = index >= maxIndex;

    dotsContainer.querySelectorAll(".carousel__dot").forEach((dot, i) => {
      dot.setAttribute("aria-selected", String(i === index));
    });
  }

  function goTo(nextIndex) {
    index = Math.min(Math.max(nextIndex, 0), getMaxIndex());
    update();
  }

  prevButton.addEventListener("click", () => goTo(index - 1));
  nextButton.addEventListener("click", () => goTo(index + 1));

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderDots();
      update();
    }, 150);
  });

  let touchStartX = null;
  viewport.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
    },
    { passive: true }
  );
  viewport.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) return;
      const deltaX = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        goTo(deltaX < 0 ? index + 1 : index - 1);
      }
      touchStartX = null;
    },
    { passive: true }
  );

  renderDots();
  update();
}

function setupCountdown() {
  const root = document.getElementById("countdownRoot");
  const lede = document.getElementById("countdownLede");
  const clock = document.getElementById("countdownClock");
  const afterEl = document.getElementById("countdownAfterText");
  if (!root || !clock || !afterEl) return;

  const weddingDate = new Date(root.dataset.weddingDate);
  const afterText = root.dataset.afterText;
  const values = {
    days: clock.querySelector('[data-unit="days"]'),
    hours: clock.querySelector('[data-unit="hours"]'),
    minutes: clock.querySelector('[data-unit="minutes"]'),
    seconds: clock.querySelector('[data-unit="seconds"]'),
  };

  function showFinished() {
    lede.hidden = true;
    clock.hidden = true;
    afterEl.textContent = afterText;
    afterEl.hidden = false;
  }

  function tick() {
    const diff = weddingDate - new Date();

    if (diff <= 0) {
      showFinished();
      return false;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    values.days.textContent = String(days);
    values.hours.textContent = String(hours).padStart(2, "0");
    values.minutes.textContent = String(minutes).padStart(2, "0");
    values.seconds.textContent = String(seconds).padStart(2, "0");
    return true;
  }

  if (!tick()) return;
  const intervalId = setInterval(() => {
    if (!tick()) clearInterval(intervalId);
  }, 1000);
}

const QUIZ_QUESTIONS = [
  {
    text: "Quem demora mais para se arrumar?",
    options: [
      { label: "Ele, sem dúvida", persona: "b" },
      { label: "Ela, com certeza", persona: "a" },
      { label: "Os dois, sempre atrasados juntos", persona: "c" },
    ],
  },
  {
    text: "Quem escolhe o restaurante?",
    options: [
      { label: "Ela decide na hora", persona: "a" },
      { label: "Ele já tem um favorito na manga", persona: "b" },
      { label: "Depende de quem está com mais fome", persona: "c" },
    ],
  },
  {
    text: "Quem é mais provável de esquecer alguma coisa no casamento?",
    options: [
      { label: "Ela", persona: "a" },
      { label: "Ele", persona: "b" },
      { label: "Só vamos descobrir no dia", persona: "c" },
    ],
  },
  {
    text: "Quem manda a primeira mensagem depois de uma bobagem?",
    options: [
      { label: "Ela, sempre", persona: "a" },
      { label: "Ele, com um emoji de coração", persona: "b" },
      { label: "Ninguém, o silêncio já resolve sozinho", persona: "c" },
    ],
  },
  {
    text: "Na pista de dança, quem puxa o casal pra dançar primeiro?",
    options: [
      { label: "Ela", persona: "a" },
      { label: "Ele", persona: "b" },
      { label: "A música é quem decide", persona: "c" },
    ],
  },
];

const QUIZ_RESULTS = {
  a: {
    title: "Você é do time Júlia",
    text: "Sensível, atenta aos detalhes e sempre pronta pra ajudar a organizar tudo.",
  },
  b: {
    title: "Você é do time Cícero",
    text: "Descontraído, com uma piada na manga pra deixar qualquer clima mais leve.",
  },
  c: {
    title: "Você é do time “Só o Amor Explica”",
    text: "Você entende que nem tudo precisa fazer sentido — só precisa ser bonito.",
  },
};

function setupQuiz() {
  const root = document.getElementById("quizRoot");
  const progress = document.getElementById("quizProgress");
  const questionBlock = document.getElementById("quizQuestion");
  const questionText = document.getElementById("quizQuestionText");
  const optionsContainer = document.getElementById("quizOptions");
  const resultBlock = document.getElementById("quizResult");
  const resultTitle = document.getElementById("quizResultTitle");
  const resultText = document.getElementById("quizResultText");
  const restartButton = document.getElementById("quizRestart");
  if (!root || !questionBlock || !optionsContainer || !resultBlock) return;

  let currentIndex = 0;
  const scores = { a: 0, b: 0, c: 0 };

  function renderProgress() {
    progress.innerHTML = "";
    QUIZ_QUESTIONS.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = "quiz__dot";
      dot.dataset.state = i < currentIndex ? "done" : i === currentIndex ? "active" : "";
      progress.appendChild(dot);
    });
  }

  function renderQuestion() {
    const question = QUIZ_QUESTIONS[currentIndex];
    questionText.textContent = question.text;
    optionsContainer.innerHTML = "";

    question.options.forEach((option) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "quiz__option";
      card.textContent = option.label;
      card.addEventListener("click", () => selectOption(option));
      optionsContainer.appendChild(card);
    });

    renderProgress();
    transitionIn(questionBlock);
  }

  function transitionIn(element) {
    element.dataset.state = "entering";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.dataset.state = "";
      });
    });
  }

  function selectOption(option) {
    scores[option.persona] += 1;

    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    const winner = Object.keys(scores).reduce((best, key) =>
      scores[key] > scores[best] ? key : best
    , "a");
    const result = QUIZ_RESULTS[winner];

    questionBlock.hidden = true;
    resultTitle.textContent = result.title;
    resultText.textContent = result.text;
    resultBlock.hidden = false;
    transitionIn(resultBlock);
  }

  function restart() {
    currentIndex = 0;
    scores.a = 0;
    scores.b = 0;
    scores.c = 0;
    resultBlock.hidden = true;
    questionBlock.hidden = false;
    renderQuestion();
  }

  if (restartButton) {
    restartButton.addEventListener("click", restart);
  }

  renderQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupRevealOnScroll();
  setupCarousel();
  setupCountdown();
  setupQuiz();
});
