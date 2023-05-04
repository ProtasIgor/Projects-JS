
var bar = document.querySelector('.nav-button')
var nav = document.getElementsByClassName('nav-items')[0]

bar.addEventListener('click', () => {
    nav.classList.toggle('hide-nav-items')
})

function change(ex) {
    ex.classList.toggle('change')
}