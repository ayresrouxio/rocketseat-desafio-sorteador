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
  if (
    validateForm(
      Number(numbers.value),
      Number(numberMin.value),
      Number(numberMax.value)
    )
  ) {
    handleDraw()
  }
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

    if (!repeat.checked || !drawNumbers.includes(randomNumber)) {
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

function validateForm(numbers, numberMin, numberMax) {
  if (numbers <= 0) {
    alert("A quantidade de números deve ser superior a 0 (zero)")
    return false
  }

  if (numbers > numberMax) {
    alert("A quantidade de números não pode ser maior que o número máximo.")
    return false
  }

  if (numberMin > numberMax) {
    alert("O número mínimo não pode ser maior que o número máximo.")
    return false
  }

  if (numberMin <= 0) {
    alert("O número mínimo não pode ser menor ou igual a 0 (zero)")
    return false
  }

  if (numberMax > 999) {
    alert("O número máximo não pode ser maior que 999")
    return false
  }

  return true
}
