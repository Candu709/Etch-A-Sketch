const sheet = document.querySelector(`.sketchGrid`)

function drawGrid(size) {
  for (let y = size; y > 0; y--) {
    for (let x = 1; x <= size; x++) {
      const pixel = document.createElement(`div`);
      pixel.classList.add(`pixel`, `y=${y}`, `x=${x}`);
      pixel.style.setProperty(`--size`, size)
      sheet.appendChild(pixel);
    };
  }
}

drawGrid(16)
