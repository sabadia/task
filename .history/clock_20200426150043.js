
function clock(){
    let current = new Date();
    let hour = current.getHours();
    let minute = current.getMinutes();
    let second = current.getSeconds();
    document.getElementById('clock').innerHTML = `${hour}:${hour}`;
    var t = setTimeout(startTime, 500);
}