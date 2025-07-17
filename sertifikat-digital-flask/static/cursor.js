document.addEventListener('DOMContentLoaded', () => {
  const cursorLight = document.createElement('div');
  cursorLight.classList.add('cursor-light');
  document.body.appendChild(cursorLight);

  document.addEventListener('mousemove', (e) => {
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;
  });
});
