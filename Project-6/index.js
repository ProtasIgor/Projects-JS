var box = document.querySelectorAll('.button')

box.forEach((item) => {
    item.addEventListener('click', (e) => {
        calc(e.target.textContent)
    })
})

let calc = function (operation) {
    let aps1 = Number(document.querySelector('.input1').value)
    let aps2 = Number(document.querySelector('.input2').value)
    let result
    switch (operation) {
        case '+':
            result = aps1 + aps2
            break;
        case '-':
            result = aps1 - aps2
            break;
        case '*':
            result = aps1 * aps2
            break;
        case '/':
            result = aps1 / aps2
            break;
        default:
            return
    }
    document.querySelector('.result').value = result
}