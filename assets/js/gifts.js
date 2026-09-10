const qrCode = "assets/images/gifts/qr-code.jpeg";
const paletaImage = "assets/images/gifts/paleta.jpeg";

const CATEGORY_ALL = "Todos";

const gifts = [
  {
    id: "gift-viagem-002",
    name: "Uma diária da nossa hospedagem",
    category: "Lua de Mel",
    image: "assets/images/gifts/hotel.jpg",
    price: "R$ 250,00",
    qrCode: qrCode
  },
  {
    id: "gift-002",
    name: "Carro",
    description: "Carrinho para começar a vida",
    category: "Pedidos especiais",
    image: "assets/images/gifts/carro.jpg",
    price: "R$ 120,00",
    qrCode: qrCode
  },
  {
    id: "gift-livre-002",
    name: "Um presente para a vida a dois",
    category: "Um futuro a dois",
    image: "assets/images/gifts/presente.png",
    price: "R$ 75,00",
    qrCode: qrCode
  },
  {
    id: "gift-vida-002",
    name: "Maratona de filmes com direito a besteiras",
    category: "Nossos momentos",
    image: "assets/images/gifts/filme.jpg",
    price: "R$ 55,00",
    qrCode: qrCode
  },
  {
    id: "gift-vida-005",
    name: "Fondue para uma noite fria",
    category: "Nossos momentos",
    image: "assets/images/gifts/fondue.png",
    price: "R$ 80,00",
    qrCode: qrCode
  },
  {
    id: "gift-viagem-001",
    name: "Duas passagens",
    category: "Lua de Mel",
    image: "assets/images/gifts/passagens.png",
    price: "R$ 110,00",
    qrCode: qrCode
  },
  {
    id: "gift-livre-003",
    name: "Contribuição para uma experiência especial",
    category: "Um futuro a dois",
    image: "assets/images/gifts/experiencia.jpg",
    price: "R$ 85,00",
    qrCode: qrCode
  },
  {
    id: "gift-livre-001",
    name: "Contribuição para os nossos próximos sonhos",
    category: "Um futuro a dois",
    image: "assets/images/gifts/futuro.jpg",
    price: "R$ 200,00",
    qrCode: qrCode
  },
  {
    id: "gift-viagem-003",
    name: "Jantar romântico",
    category: "Lua de Mel",
    image: "assets/images/gifts/jantar.jpg",
    price: "R$ 90,00",
    qrCode: qrCode
  },
  {
    id: "gift-vida-007",
    name: "Contribuição para nossa primeira grande compra",
    category: "Nossos momentos",
    image: "assets/images/gifts/grande-compra.jpg",
    price: "R$ 300,00",
    qrCode: qrCode
  },
  {
    id: "gift-001",
    name: "Lanche",
    description: "Um belo lanche para o casal",
    category: "Pedidos especiais",
    image: "assets/images/gifts/lanche.jpg",
    price: "R$ 45,00",
    qrCode: qrCode
  },
  {
    id: "gift-vida-004",
    name: "Noite de massas e sobremesa",
    category: "Nossos momentos",
    image: "assets/images/gifts/massas.jpg",
    price: "R$ 70,00",
    qrCode: qrCode
  },
  {
    id: "gift-004",
    name: "Uma saca de café",
    description: "Primeira fonte de energia",
    category: "Pedidos especiais",
    image: "assets/images/gifts/cafe.jpg",
    price: "R$ 40,00",
    qrCode: qrCode
  },
  {
    id: "gift-viagem-004",
    name: "Contribuição para a nossa lua de mel",
    category: "Lua de Mel",
    image: "assets/images/gifts/lua-de-mel.jpg",
    price: "R$ 95,00",
    qrCode: qrCode
  },
  {
    id: "gift-003",
    name: "Vaca cabeluda",
    description: "Uma fonte de renda",
    category: "Pedidos especiais",
    image: "assets/images/gifts/vaca.jpg",
    price: "R$ 100,00",
    qrCode: qrCode
  },
  {
    id: "gift-vida-006",
    name: "Kit para uma noite de jogos",
    category: "Nossos momentos",
    image: "assets/images/gifts/boardgames.jpg",
    price: "R$ 65,00",
    qrCode: qrCode
  },
  {
    id: "gift-vida-001",
    name: "Noite de pizza sem precisar cozinhar",
    category: "Nossos momentos",
    image: "assets/images/gifts/pizza.jpg",
    price: "R$ 50,00",
    qrCode: qrCode
  },
  {
    id: "gift-vida-003",
    name: "Um mês de cafés especiais",
    category: "Nossos momentos",
    image: "assets/images/gifts/cafes.png",
    price: "R$ 60,00",
    qrCode: qrCode
  }
];

const categories = [CATEGORY_ALL, ...new Set(gifts.map((gift) => gift.category))];
let activeCategory = CATEGORY_ALL;

function renderGiftFilters() {
  const filters = document.getElementById("giftsFilters");
  if (!filters) return;

  filters.innerHTML = categories
    .map(
      (category) => `
        <button
          type="button"
          class="gifts-filter__button"
          data-category="${category}"
          aria-pressed="${category === activeCategory}"
        >${category}</button>
      `
    )
    .join("");

  filters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderGiftFilters();
      renderGifts();
    });
  });
}

function renderGifts() {
  const grid = document.getElementById("giftsGrid");
  if (!grid) return;

  const visibleGifts =
    activeCategory === CATEGORY_ALL
      ? gifts
      : gifts.filter((gift) => gift.category === activeCategory);

  grid.innerHTML = visibleGifts
    .map(
      (gift) => `
        <article class="gift-card">
          <div class="gift-card__image">
            <img src="${gift.image}" alt="${gift.name}" loading="lazy" width="400" height="400" />
          </div>
          <div class="gift-card__body">
            <span class="gift-card__category">${gift.category}</span>
            <h3 class="gift-card__name">${gift.name}</h3>
            ${gift.description ? `<p class="gift-card__description">${gift.description}</p>` : ""}
            <p class="gift-card__price">${gift.price}</p>
            <button class="button gift-card__button" data-gift-id="${gift.id}">Presentear</button>
          </div>
        </article>
      `
    )
    .join("");

  grid.querySelectorAll("[data-gift-id]").forEach((button) => {
    button.addEventListener("click", () => openGiftModal(button.dataset.giftId));
  });
}

function openGiftModal(giftId) {
  const gift = gifts.find((item) => item.id === giftId);
  const modal = document.getElementById("qrModal");
  if (!gift || !modal) return;

  document.getElementById("qrModalName").textContent = gift.name;
  document.getElementById("qrModalPrice").textContent = gift.price;
  const image = document.getElementById("qrModalImage");
  image.src = gift.qrCode;
  image.alt = `QR Code para presentear: ${gift.name}`;

  modal.dataset.open = "true";
}

function closeGiftModal() {
  const modal = document.getElementById("qrModal");
  if (!modal) return;
  modal.dataset.open = "false";
}

function setupGiftModal() {
  const modal = document.getElementById("qrModal");
  if (!modal) return;

  modal.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeGiftModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeGiftModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGiftFilters();
  renderGifts();
  setupGiftModal();
});
