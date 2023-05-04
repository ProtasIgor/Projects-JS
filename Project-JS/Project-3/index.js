var box = document.querySelector('.box')
var x = document.querySelector('.x-value')
var y = document.querySelector('.y-value')

box.addEventListener('mousemove', (event) => {
    x.textContent = window.event.clientX
    y.textContent = event.clientY
    box.style.backgroundColor = `hsl(${event.clientX}, 60%, 50%)`
})