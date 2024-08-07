document.addEventListener('DOMContentLoaded', () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input[type="number"]');
  const createButton = controls.querySelector('button[data-create]');
  const destroyButton = controls.querySelector('button[data-destroy]');
  const boxes = document.getElementById('boxes');

  createButton.addEventListener('click', () => {
    const count = parseInt(input.value, 10);

    if (isNaN(count) || count < 1 || count > 100) {
      return;
    }

    boxes.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(box);
    }

    input.value = '';
  });

  destroyButton.addEventListener('click', () => {
    boxes.innerHTML = '';
  });

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
});
