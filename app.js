function add(a, b){
    text.textContent = Number(a) + Number(b)
}

function subtract(a, b){
    text.textContent = Number(a) - Number(b)
}

function multiply(a, b){
    text.textContent = Number(a) * Number(b)
}

function divide(a, b){
    text.textContent = Number(a) / Number(b)
}

let firstNum, operator, secondNum

function operate(expression){
    let temp = expression.split('')
    if (temp.includes('+')){
        let numbers = expression.split('+')
        add(numbers[0], numbers[1])
    }
    else if (temp.includes('-')){
        let numbers = expression.split('-')
        subtract(numbers[0], numbers[1])
    }
    else if (temp.includes('*')){
        let numbers = expression.split('*')
        multiply(numbers[0], numbers[1])
    }
    else if (temp.includes('/')){
        let numbers = expression.split('/')
        divide(numbers[0], numbers[1])
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


let text = document.getElementById('textBox')

let solve = document.getElementById('=')
solve.addEventListener('click', function(){
    console.log(solve)
    operate(text.textContent)
})