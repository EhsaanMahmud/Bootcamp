const characterRange = document.getElementById('characterRange')
const characterNumber = document.getElementById('characterNumber')
const includeUppercaseElement = document.getElementById('Upper')
const includeNumbersElement = document.getElementById('Numbers')
const includeSymbolsElement = document.getElementById('Special')
const form = document.getElementById('passwordGen')
const passwordDisplay = document.getElementById('passwordDisplayy')

const upperCaseCharCode = arrayFromLowToHigh(65, 90)
const lowerCaseCharCode = arrayFromLowToHigh(97, 122)
const numberCharCodes = arrayFromLowToHigh(48, 57)
const specialCharCodes = arrayFromLowToHigh(33, 47).concat  
(arrayFromLowToHigh(58, 64) ).concat(
    arrayFromLowToHigh(91, 96)
).concat (
    arrayFromLowToHigh(123, 126)
)

characterRange.addEventListener('input', syncCharacterAmount)
characterNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault
    const characterAmount = characterNumber.value
    const includeUpperCase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
    console.log(password)

})

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols) {
    let charCodes = lowerCaseCharCode
    if (includeUpperCase) charCodes = charCodes.concat(upperCaseCharCode)
    if (includeNumbers) charCodes = charCodes.concat(numberCharCodes)
    if (includeSymbols) charCodes = charCodes.concat(specialCharCodes)
     const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
    String.fromCharCode(65)
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterRange.value = value
    characterNumber.value = value
}