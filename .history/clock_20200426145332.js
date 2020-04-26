
function clock(){
    document.getElementById('clock').innerHTML = new Date();
    var t = setTimeout(startTime, 500);
}()