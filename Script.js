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
const THRESHOLD = 120;
const RESISTANCE = 0.35;

cards.forEach(card => {
  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchmove", e => {
    let dx = e.touches[0].clientX - startX;
    card.style.transform =
      `translateX(${dx * RESISTANCE}px) rotate(${dx * 0.02}deg)`;
  });

  card.addEventListener("touchend", e => {
    let dx = e.changedTouches[0].clientX - startX;

    if (cards.length === 1) {
      document.body.classList.add("last-card-active");
      return;
    }

    if (Math.abs(dx) > THRESHOLD) {
      card.style.opacity = 0;
      setTimeout(() => {
        card.remove();
        cards.pop();
        activateTop();
      }, 300);
    } else {
      card.style.transform = "translateX(0)";
    }

    const hint = document.querySelector(".swipe-hint");
    if (hint) hint.remove();
  });
});
