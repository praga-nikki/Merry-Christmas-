let autoScroll = true;

function stopAutoScroll() {
  autoScroll = false;
}

window.addEventListener('wheel', stopAutoScroll);
window.addEventListener('touchstart', stopAutoScroll);

setTimeout(() => {
  if (!autoScroll) return;

  const scenes = document.querySelectorAll('.scene');
  let index = 0;

  const interval = setInterval(() => {
    if (!autoScroll || index >= scenes.length) {
      clearInterval(interval);
      return;
    }

    scenes[index].scrollIntoView({ behavior: 'smooth' });
    index++;
  }, 3000);

}, 10000);
