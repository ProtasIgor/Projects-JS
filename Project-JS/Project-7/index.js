var hour = document.querySelector('.hour')
var minute = document.querySelector('.minute')
var second = document.querySelector('.second')
var milisecond = document.querySelector('.milisecond')

setInterval(() => {
    let date = new Date()
    hour.textContent = Parse(date.getHours())
    minute.textContent = Parse(date.getMinutes())
    second.textContent = Parse(date.getSeconds())
    milisecond.textContent = date.getMilliseconds()

    function Parse(param) {
        if (param < 10) param = "0" + param
        return param
    }
}, 1)