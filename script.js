

const seconds = document.querySelector(".seconds .number");
minutes = document.querySelector(".minutes .number");
hours = document.querySelector(".hours .number");
days = document.querySelector(".days .number");

let secValue = 60,
minValue = 60,
hourValue = 2,
dayValue = 9;

const timeFunction = setInterval(() => {
    secValue--;

    if (secValue === 0) {
        minValue--;
        secValue = 60;
    }
    if(minValue === 0) {
        hourValue--;
        minValue = 60;
    }
    if(hourValue === 0){
        dayValue--;
        hourValue = 60;
    }
    if(dayValue === 0) {
        clearInterval(timeFunction);
    }
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

}, 1000); 

function validate(){
    var email=document.getElementById("email").value;
    var error=document.getElementById("error1");

    if(!email) {
        error.textContent="Please enter your email address";
        error.style.color = "red";
        return false;
    }
    else {
        error.textContent="Thank you for subscribing!";
        error.style.color = "lightgreen";
        return false;
    }
}



