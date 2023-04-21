/*==========================
      Javascript INDEX
============================
    1. Time countdown
    2. Error/success message
*/

(function($) {
    "use strict";
    setTimeout(function() {
        $('#preloader').addClass('preloaded');
    }, 800);
    setTimeout(function() {
        $('#preloader').remove();
    }, 2000);
})

//Time countdown
const seconds = document.querySelector(".seconds .number");
minutes = document.querySelector(".minutes .number");
hours = document.querySelector(".hours .number");
days = document.querySelector(".days .number");

let secValue = 59,
minValue = 59,
hourValue = 2,
dayValue = 9;

const timeFunction = setInterval(() => {
    "use strict";
    secValue--;

    if (secValue === 0) {
        minValue--;
        secValue = 59;
    }
    if(minValue === 0) {
        hourValue--;
        minValue = 59;
    }
    if(hourValue === 0){
        dayValue--;
        hourValue = 23;
    }
    if(dayValue === 0) {
        clearInterval(timeFunction);
    }
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

}, 1000); // Speed of time

// Error/success message after submitting e-mail for getting notified 
function validate(){
    "use strict";
    let email=document.getElementById("email").value;
    let error=document.getElementById("error1");

    if(!email) {
        error.textContent="Please enter your email address";
        error.style.color = "red";
        return false;
    }
    else {
        let successMessage = "Thank you for subscribing!";
        error.textContent= successMessage;
        error.style.color = "lightgreen";
        localStorage.setItem("successMessage", successMessage);
        return true;
    }
}

    window.addEventListener("load", function() {
        "use strict";
        let successMessage = localStorage.getItem("successMessage");
        if (successMessage) {
            let error=document.getElementById("error1");
            error.textContent = successMessage;
            error.style.color = "lightgreen";
            localStorage.removeItem("successMessage"); // Remove success message from localStorage
        }
    });
    
    
    
    
    
    


