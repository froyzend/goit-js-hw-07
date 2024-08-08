const controls = document.getElementById('controls');
const input = controls.querySelector('input[type="number"]');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');

function createBoxes(amount) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(box);
    }

    boxes.appendChild(fragment);
}
            
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
    boxes.innerHTML = '';
}
createButton.addEventListener('click', () => {
    const count = parseInt(input.value, 10);

    if (isNaN(count) || count < 1 || count > 100) {
        return;
    }

    destroyBoxes();  // Очищаем предыдущие элементы
    createBoxes(count);  // Создаём новые элементы
    input.value = '';  // Очищаем поле ввода
});

destroyButton.addEventListener('click', () => {
    destroyBoxes();
});