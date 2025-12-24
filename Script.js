const gift = document.getElementById("gift-box");
const giftScreen = document.getElementById("gift-screen");
const stage = document.getElementById("card-stage");
let cards = document.querySelectorAll(".card");

gift.onclick = () => {
  giftScreen.classList.add("hidden");
  stage.classList.remove("hidden");
};

let startX = 0;
let startY = 0;

cards.forEach(card => {
  card.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  card.addEventListener("touchmove", e => {
    let dx = e.touches[0].clientX - startX;
    let dy = e.touches[0].clientY - startY;
    card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * 0.05}deg)`;
  });

  card.addEventListener("touchend", e => {
    let dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 80) {
      card.style.opacity = 0;
      setTimeout(() => card.remove(), 300);
    } else {
      card.style.transform = "";
    }
  });
});
