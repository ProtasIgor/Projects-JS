newFunction(5, 10)

function newFunction(from, to) {
    let current = from

    setTimeout(function go() {
        console.log(current)
        if (current < to) {
            setTimeout(go, 1000)
        }
        current++
        console.log(current + 'after');
    }, )
}
