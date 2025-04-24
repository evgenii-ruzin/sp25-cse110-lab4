let func = function() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(func, 1000);