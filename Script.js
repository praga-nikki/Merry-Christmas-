const gift = document.getElementById("gift-box");
const giftScreen = document.getElementById("gift-screen");
const stage = document.getElementById("card-stage");
let cards = [...document.querySelectorAll(".card")];

gift.onclick = () => {
  giftScreen.classList.add("hidden");
  stage.classList.remove("hidden");
  activateTop();
};

function activateTop() {
  const top = cards[cards.length - 1];
  if (top) top.classList.add("active");
}

let startX = 0;

cards.forEach(card => {
  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchend", e => {
    let dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 80) {
      card.style.opacity = 0;
      setTimeout(() => {
        card.remove();
        cards.pop();
        activateTop();
      }, 300);
    }
  });
});
