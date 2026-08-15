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
    { threshold: 0.15 }
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

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupRevealOnScroll();
  setupCarousel();
});
