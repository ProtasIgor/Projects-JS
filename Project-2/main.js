var btn = document.querySelector('.btn')
var boxModal = document.querySelector('.box-modal')
var closeModal = document.querySelector('.close-modal')

btn.addEventListener('click', () => {
    boxModal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
    boxModal.style.display = 'none'
})