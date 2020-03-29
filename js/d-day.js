var goToSchool = new Date("April 6, 2020");
var now = new Date();

function getDday(){

    var howmuch = goToSchool.getTime() - now.getTime();
    var dday = Math.floor(howmuch /  (1000 * 60 * 60 * 24)) +1;
    dday = `개학까지 D-${dday}`;
    document.getElementById('dday').innerText = dday;
}

function init(){
    getDday();
    setInterval(getDday(), 1000);
}

init();