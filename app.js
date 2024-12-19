const form = document.querySelector(".form")
const numbers = document.querySelector("#numbers")
const numberMin = document.querySelector("#numberMin")
const numberMax = document.querySelector("#numberMax")
const repeat = document.querySelector("#repeat")
const result = document.querySelector(".result")
const resultNumbers = document.querySelector(".result-numbers")
const reset = document.querySelector("#reset")

numbers.oninput = () => {
  inputNumber(numbers)
}

numberMin.oninput = () => {
  inputNumber(numberMin)
}

numberMax.oninput = () => {
  inputNumber(numberMax)
}

form.onsubmit = (event) => {
  event.preventDefault()
  handleDraw()
}

reset.onclick = () => {
  resultNumbers.innerHTML = ""
  toggleScreen()
}

function inputNumber(input) {
  input.value = input.value.replace(/\D+/g, "")
}

function handleDraw() {
  const drawNumbers = []

  while (drawNumbers.length < Number(numbers.value)) {
    let randomNumber =
      Math.floor(Math.random() * Number(numberMax.value)) +
      Number(numberMin.value)

    if (repeat.checked) {
      if (!drawNumbers.includes(randomNumber)) {
        drawNumbers.push(randomNumber)
        addDrawNumber(randomNumber)
      }
    } else {
      drawNumbers.push(randomNumber)
      addDrawNumber(randomNumber)
    }
  }

  toggleScreen()
}

function toggleScreen() {
  form.classList.toggle("hide")
  result.classList.toggle("hide")
}

function addDrawNumber(randomNumber) {
  const number = document.createElement("span")
  number.textContent = randomNumber

  resultNumbers.append(number)
}
