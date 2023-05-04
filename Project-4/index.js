var pole = document.querySelector('.pole')
var position = pole.getBoundingClientRect()
var ball = document.querySelector('.ball')
pole.addEventListener('click', (e) => {
    ball.style.top = `${e.clientY - position.top - ball.offsetHeight / 2 - pole.style.borderWidth}px`
    ball.style.left = `${e.clientX - position.left - ball.offsetWidth / 2 - pole.style.borderWidth}px`
})
