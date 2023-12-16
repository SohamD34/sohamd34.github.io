var count = 0;
function changetext() {
    if(count<5){
        document.getElementById("text").innerHTML = "Surprise!!";
        document.getElementById("button").innerHTML = "There you go!!";
        count = count+1;
    }
    if(count == 5){
        document.getElementById("text").innerHTML = "Enough surprises!!";
        document.getElementById("button").innerHTML = "Not anymore xD";
        count = count+1;
    }
    if(count == 6){
        document.getElementById("text").innerHTML = "To know more about me, feel free to explore my website. :)";
        document.getElementById("button").innerHTML = "Not happening";
    }
    
}

function restoretext() {
    document.getElementById("text").innerHTML = "To know more about me, feel free to explore my website. :)";
    document.getElementById("button").innerHTML = "Wanna see it again ?";
}

function myFunction() {
    changetext();
    setTimeout(restoretext, 500);
}

function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("minute");
    const secondHand = document.getElementById("second");

    const hourRotation = (hour * 30) + (minute * 0.5); // Each hour mark is 30 degrees, each minute mark is 0.5 degrees
    const minuteRotation = (minute * 6) + (second * 0.1); // Each minute mark is 6 degrees, each second mark is 0.1 degrees
    const secondRotation = second * 6; // Each second mark is 6 degrees

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1);