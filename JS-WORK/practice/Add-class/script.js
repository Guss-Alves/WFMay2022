console.log("let's go")

function otherWord(element){
    element.innerText= "You're in"
    element.style.backgroundColor = 'lightgreen'
}

function newClass(element){
    element.classList.add('shadow')
}

function noClass(element){
    element.classList.remove('shadow')
} 

function ghost(element){
    element.remove()
}
