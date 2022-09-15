const board = document.querySelector('#board');
const colors = [
  'aqua',
  'aquamarine',
  'yellow',
  'yellowgreen',
  'cornflowerblue',
];
const SQUARES_NUMBER = 500;
for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  board.append(square);
}
function setColor(element) {
  const color = getRandomCalor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#041f21';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomCalor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
