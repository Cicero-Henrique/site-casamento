const qrCode = "assets/images/gifts/qr-code.jpeg";
const gifts = [
  {
    id: "gift-001",
    name: "Lanche",
    description: "Um belo lanche para o casal",
    image: "assets/images/gifts/lanche.jpg",
    price: "R$ 50,00",
    qrCode: qrCode
  },
  {
    id: "gift-002",
    name: "Carro",
    description: "Carrinho para começar a vida",
    image: "assets/images/gifts/carro.jpg",
    price: "R$ 150,00",
    qrCode: qrCode
  },
  {
    id: "gift-003",
    name: "Vaca cabeluda",
    description: "Uma fonte de renda",
    image: "assets/images/gifts/vaca.jpg",
    price: "R$ 400,00",
    qrCode: qrCode
  },
  {
    id: "gift-004",
    name: "Café",
    description: "Primeira fonte de energia",
    image: "assets/images/gifts/cafe.jpg",
    price: "R$ 400,00",
    qrCode: qrCode
  },
  {
    id: "gift-005",
    name: "Geladeira de monster",
    description: "Segunda fonte de energia",
    image: "assets/images/gifts/monster.jpg",
    price: "R$ 400,00",
    qrCode: qrCode
  }
];

function renderGifts() {
  const grid = document.getElementById("giftsGrid");
  if (!grid) return;

  grid.innerHTML = gifts
    .map(
      (gift) => `
        <article class="gift-card">
          <div class="gift-card__image">
            <img src="${gift.image}" alt="${gift.name}" loading="lazy" width="400" height="400" />
          </div>
          <div class="gift-card__body">
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
  renderGifts();
  setupGiftModal();
});
