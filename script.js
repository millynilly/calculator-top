const screen = document.querySelector('#display')
const dVal ='0.'
const btns = document.querySelectorAll('button')

let a = null
let b = null
let op = null


/*Event listener for all buttons*/
btns.forEach( btn => {
    btn.addEventListener('click', n => updateDisplay(btn.textContent))})


function divide(a, b) { return b == 0 ? null : a / b }


function operate(a, b, operator) {

    switch (operator) {
        case '+':
            return (a + b).toString()          
        case '-':
            return (a - b).toString()            
        case '*':
            return (a * b).toString()            
        case '/':
            return b === 0 ? 'error: divide by zero' : divide(a, b).toString()           
    }
}



function updateDisplay(str) {
    
    if (screen.textContent === '0.') { screen.textContent = '' }

    switch (str) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            /*If a and b exist then any operator acts as '='*/
            if (b !== null) {
                a = operate(+a, +b, op)
                b = null
            }
            
            if (a !== null) { op = str }
            if (str === '=') { op = null }
            break

        case 'bksp':
            if (b !== null) {
                b = b.slice(0, -1)
            } else if (a !== null) {
                a = a.slice(0, -1)
            }
            break

        case 'cls':
            a = null
            b = null
            op = null
            break

        default:
            if (op === null) {
                if (a === null) { a = '' }
                a += str
            } else {
                if (b === null) { b = '' }
                b += str
            }
            break
    }
    
    screen.textContent = b === null ? a : b
    if (a === 'error: divide by zero') { a = null }
    console.log(a, b, op)
}

