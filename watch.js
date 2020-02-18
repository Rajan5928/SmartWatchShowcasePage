function displayTime() {
    var time = new Date();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var sec = time.getSeconds();
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById("time").innerHTML = hrs + ":" + mins + ":" + sec;
}
setInterval(displayTime,1000);
function clicked1() {
     document.getElementById("timeBtn").classList.add("timeClick");
     document.getElementById("heartBtn").classList.remove("timeClick");
     document.getElementById("iconheart").style.display = 'none';
     document.getElementById('time').style.display = 'block';
 }
function clicked2() {
    document.getElementById("heartBtn").classList.add("timeClick");
    document.getElementById("timeBtn").classList.remove("timeClick");
    document.getElementById("iconheart").classList.add("icon");
    document.getElementById("iconheart").style.display = 'block';
    document.getElementById('time').style.display = 'none';
}
 function secondimage() {
     document.getElementById("primary").src = "https://imgur.com/PTgQlim.png";
     document.getElementById("red").classList.add("strapimages");
     document.getElementById("black").classList.remove("strapimages");
     document.getElementById("blue").classList.remove("strapimages");
     document.getElementById("grey").classList.remove("strapimages");
 }
function thirdimage() {
    document.getElementById("primary").src = "https://imgur.com/Mplj1YR.png";
    document.getElementById("blue").classList.add("strapimages");
    document.getElementById("red").classList.remove("strapimages");
    document.getElementById("black").classList.remove("strapimages");
    document.getElementById("grey").classList.remove("strapimages");
}
function fourthimage() {
    document.getElementById("primary").src = "https://imgur.com/xSIK4M8.png";
    document.getElementById("grey").classList.add("strapimages");
    document.getElementById("red").classList.remove("strapimages");
    document.getElementById("blue").classList.remove("strapimages");
    document.getElementById("black").classList.remove("strapimages");
}
function firstimage() {
    document.getElementById("primary").src = "https://imgur.com/iOeUBV7.png";
    document.getElementById("black").classList.add("strapimages");
    document.getElementById("red").classList.remove("strapimages");
    document.getElementById("blue").classList.remove("strapimages");
    document.getElementById("grey").classList.remove("strapimages");
}
