var btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    let temp = `#${Math.floor(Math.random() * 255).toString(16)}` +
        `${Math.round(Math.random() * 255).toString(16)}${Math.round(Math.random() * 255).toString(16)}`
    body.style.backgroundColor = temp.toString()
    console.log(temp);
})