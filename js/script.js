const textElem = document.querySelector('.copy__text')
const buttonClearElem = document.querySelector(".button__clear")
const buttonCopyElem = document.querySelector(".button__copy")

function delTextAreaValue (){
    textElem.value = " ";
}

buttonClearElem.addEventListener("click", delTextAreaValue)

function copyTextAreaValue (){
    navigator.clipboard.writeText(textElem.value)
}

buttonCopyElem.addEventListener("click", copyTextAreaValue)