const sheet = document.querySelector(`.sketchGrid`)

let pointerIsDown = false
document.addEventListener (`pointerdown`, () => pointerIsDown = true)
document.addEventListener (`pointerup`, () => pointerIsDown = false)

function drawGrid(size) {
  for (let y = size; y > 0; y--) {
    for (let x = 1; x <= size; x++) {
      const pixel = document.createElement(`div`);
      pixel.classList.add(`pixel`, `y=${y}`, `x=${x}`);
      pixel.style.setProperty(`--size`, size)
      pixel.addEventListener(`pointerdown`, () => pixel.classList.add (`colored`))
      pixel.addEventListener (`pointerenter`, () => {
      if (pointerIsDown) pixel.classList.add (`colored`)
      })
      sheet.appendChild(pixel);
    };
  }
}

drawGrid(16)
