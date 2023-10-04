function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

let firstNum, operator, secondNum

function operate(firstNum, operator, secondNum){
    if (operator == '+'){
        add(firstNum, secondNum)
    }
    else if (operator == '-'){
        subtract(firstNum, secondNum)
    }
    else if (operator == '*'){
        multiply( firstNum, secondNum)
    }
    else if (operator == '/'){
        divide(firstNum, secondNum)
    }

}
let btns = document.querySelectorAll('.btn')
let scrn = document.querySelector('.display') 
// scrn.textContent = 'hello'
btns.forEach(button => {
    button.addEventListener('click', function(){
        let text = document.getElementById('textBox')
        text.textContent += button.id
        console.log(button.id)
    })
});

let clear = document.getElementById('c')
clear.addEventListener('click', function(){
    let text = document.getElementById('textBox')
    text.textContent = ""
})