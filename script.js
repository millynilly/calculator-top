const screen = document.querySelector('#display')
const btns = document.querySelectorAll('button')

let a = null
let b = null
let op = null
let decimal = false


/*Event listener for all buttons*/
btns.forEach( btn => {
    btn.addEventListener('click', n => updateDisplay(btn.textContent))})


function operate(a, b, operator) {

    switch (operator) {
        case '+':
            return (a + b).toString()          
        case '-':
            return (a - b).toString()            
        case '*':
            return (a * b).toString()            
        case '/':
            return b === 0 ? 'Error: divide by zero' : (a / b).toString()           
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
            decimal = false
            break

        case 'bksp':
            if (b !== null) {
                b = b.slice(0, -1)
            } else if (a !== null) {
                a = a.slice(0, -1)
            }
            break

        case 'cls':
            clear()
            break

        default:
            if (str === '.') {
                if (decimal) {
                    screen.textContent = 'Error: too many points'
                    clear()
                    return
                } else {
                    decimal = true
                }
            }
            if (op === null) {
                if (a === null) { a = '' }
                a += str
            } else {
                if (b === null) { b = '' }
                b += str
            }
            str === '.' && decimal
            break
    }
    
    screen.textContent = b === null ? a : b
    if (a === 'Error: divide by zero') { clear() }
    console.log(a, b, op)
}


function clear() {
    a = null
    b = null
    op = null
    decimal = false
}

