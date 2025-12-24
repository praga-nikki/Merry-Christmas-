const gift = document.getElementById("gift-box");
const giftScreen = document.getElementById("gift-screen");
const cards = document.getElementById("cards");
const cardEls = document.querySelectorAll(".card");

let current = 0;

gift.onclick = () => {
  giftScreen.classList.add("hidden");
  cards.classList.remove("hidden");
  updateCards();
};

function updateCards() {
  cardEls.forEach((card, i) => {
    card.style.zIndex = cardEls.length - i;
    card.style.display = i === current ? "block" : "none";
  });
}

let startX = 0;

cardEls.forEach(card => {
  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchend", e => {
    let diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      current++;
      if (current >= cardEls.length) current = cardEls.length - 1;
      updateCards();
    }
  });
});
