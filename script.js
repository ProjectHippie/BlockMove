let isGravityEnabled = false

function setElementPosition(x, y) {
  const element = document.getElementById('myElement');
  const canvas = document.getElementById('myCanvas');
  const canvasRect = canvas.getBoundingClientRect();

  y = Math.min(y, canvasRect.height - element.clientHeight);

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function applyGravity() {
  const element = document.getElementById('myElement');
  const canvas = document.getElementById('myCanvas');
  const canvasRect = canvas.getBoundingClientRect();

  let y = parseFloat(element.style.top) || 0;

  y += 5;

  y = Math.min(y, canvasRect.height - element.clientHeight);

  element.style.top = `${y}px`;

  requestAnimationFrame(applyGravity);
}

setElementPosition(50, 50);
applyGravity();

function setElementPosition(x, y) {
  const element = document.getElementById('myElement');
  const canvas = document.getElementById('myCanvas');
  const canvasRect = canvas.getBoundingClientRect();

  // Ensure the element stays within the canvas boundaries
  x = Math.max(0, Math.min(x, canvasRect.width - element.clientWidth));
  y = Math.min(y, canvasRect.height - element.clientHeight);

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function applyGravity() {
  if (isGravityEnabled) {
    const element = document.getElementById('myElement');
    const canvas = document.getElementById('myCanvas');
    const canvasRect = canvas.getBoundingClientRect();

    let y = parseFloat(element.style.top) || 0;

    // Calculate the distance from the bottom of the canvas
    const distanceToBottom = canvasRect.height - (y + element.clientHeight);

    // Apply gravity, but consider the current position
    y += Math.min(5, distanceToBottom);

    element.style.top = `${y}px`;

    requestAnimationFrame(applyGravity);
  }
}


function handleArrowKeys(event) {
  const element = document.getElementById('myElement');
  const step = 8; // Adjust this value based on how much you want to move with each key press

  switch (event.key) {
    case 'ArrowUp':
      setElementPosition(parseFloat(element.style.left), parseFloat(element.style.top) - step);
      break;
    case 'ArrowLeft':
      setElementPosition(parseFloat(element.style.left) - step, parseFloat(element.style.top));
      break;
    case 'ArrowRight':
      setElementPosition(parseFloat(element.style.left) + step, parseFloat(element.style.top));
      break;
	case 'ArrowDown':
      setElementPosition(parseFloat(element.style.left), parseFloat(element.style.top) + step);
      break;
    default:
      // Ignore other keys
      break;
  }
}

document.addEventListener('keydown', handleArrowKeys);

// Initial setup
setElementPosition(50, 50);
applyGravity();

