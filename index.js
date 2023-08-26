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

