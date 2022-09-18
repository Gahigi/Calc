const display = document.querySelector("#outScreen")

function repeat() {

}

document.querySelector("#one").addEventListener('click', () => {
    const one = document.querySelector("#one").innerText
    console.log(document.querySelector("#one"))
    display.innerText += one 
})
document.querySelector("#two").addEventListener('click', () => {
    const two = document.querySelector("#two").innerText
    console.log(document.querySelector("#two"))
    display.innerText += two 
})
document.querySelector("#three").addEventListener('click', () => {
    const three = document.querySelector("#three").innerText
    console.log(document.querySelector("#three"))
    display.innerText += three 
})
document.querySelector("#four").addEventListener('click', () => {
    const four = document.querySelector("#four").innerText
    console.log(document.querySelector("#four"))
    display.innerText += four
})
document.querySelector("#five").addEventListener('click', () => {
    const five = document.querySelector("#five").innerText
    console.log(document.querySelector("#five"))
    display.innerText += five
})
document.querySelector("#six").addEventListener('click', () => {
    const six = document.querySelector("#six").innerText
    console.log(document.querySelector("#six"))
    display.innerText += six 
})
document.querySelector("#seven").addEventListener('click', () => {
    const seven = document.querySelector("#seven").innerText
    console.log(document.querySelector("#seven"))
    display.innerText += seven
})
document.querySelector("#eight").addEventListener('click', () => {
    const eight = document.querySelector("#eight").innerText
    console.log(document.querySelector("#eight"))
    display.innerText += eight
})
document.querySelector("#nine").addEventListener('click', () => {
    const nine = document.querySelector("#nine").innerText
    console.log(document.querySelector("#nine"))
    display.innerText += nine
})
document.querySelector("#zero").addEventListener('click', () => {
    const zero = document.querySelector("#zero").innerText
    console.log(document.querySelector("#zero"))
    display.innerText += zero 
})
document.querySelector("#point").addEventListener('click', () => {
    var text = display.innerText

// ON CLICK "."
// Get the last digit
var length = text.length
var last_digit_index = length - 1;
var last_character = text[last_digit_index];


// Check if last digit is a number
var is_last_digit_a_number = !isNaN(last_character)
// 4 = true
// + = false
if(is_last_digit_a_number && last_character != '.') {
    // Handle operation
    const point = document.querySelector("#point").innerText
    console.log(document.querySelector("#point"))
    display.innerText += point 
}

})
document.querySelector("#sum").addEventListener('click', () => {
    var text = display.innerText
    var length = text.length
    var last_digit_index = length - 1;
    var last_character = text[last_digit_index];

    var is_last_digit_a_character = !isNaN(last_character)

    if(is_last_digit_a_character && last_character != '+') {

    const sum = document.querySelector("#sum").innerText
    console.log(document.querySelector("#sum"))
    display.innerText += sum 
    }
})
document.querySelector("#minus").addEventListener('click', () => {
    var text = display.innerText
    var length = text.length
    var last_digit_index = length - 1;
    var last_character = text[last_digit_index];
   var is_last_digit_a_character = !isNaN(last_character)

   if(is_last_digit_a_number && last_character != '-') {
    const minus = document.querySelector("#minus").innerText
    console.log(document.querySelector("#minus"))
    display.innerText += minus 
   }
})
document.querySelector("#multiply").addEventListener('click', () => {
    const multiply = document.querySelector("#multiply").innerText
    console.log(document.querySelector("#multiply"))
    display.innerText += multiply
})
document.querySelector("#division").addEventListener('click', () => {
    const division = document.querySelector("#division").innerText
    console.log(document.querySelector("#division"))
    display.innerText = division 
})
document.querySelector("#modulus").addEventListener('click', () => {
    const modulus = document.querySelector("#modulus").innerText
    console.log(document.querySelector("#modulus"))
    display.innerText += modulus
})
document.querySelector("#equals").addEventListener('click', () => {
    console.log(document.querySelector("#outScreen").innerText) 
    display.innerText= eval(display.innerText)
})
document.querySelector("#clearAll").addEventListener('click', () => {
    display.innerText = " "
})


