const button = document.querySelector('#button')
const color = document.querySelector('#color')

function generateRandomColor() {
  let digits = '0123456789abcdef'
  let colorHex = '#'
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16)
    colorHex += digits[randomIndex]
  }
  return colorHex
}

button.addEventListener('click', function() {
  let randomColor = generateRandomColor()
  color.textContent = randomColor
  document.body.style.backgroundColor = randomColor
})