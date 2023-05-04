function timer() {
    h1 = document.getElementsByTagName('h1')[0];

    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    h1.innerHTML = hours + ":" + minutes + ":" + seconds;

    setTimeout('timer()', 1000);
}
