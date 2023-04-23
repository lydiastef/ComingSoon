/*==========================
      Javascript INDEX
============================
    1. Time countdown
    2. Error/success message - "Notify Me" button
    3. Error/success message - contact form 

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

// 1. Time countdown
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


// 2. Error/success message after submitting e-mail for getting notified 
function validateEmail(){
    "use strict";
    let email=document.getElementById("email").value;
    let error=document.getElementById("error1");

    if(!email) {
        error.textContent="Please enter your email address";
        error.style.backgroundColor = "black";
        error.style.color = "rgb(300, 0, 0)";
        return false;
    }
    else {
        let successMessage = "Thank you for subscribing!";
        error.textContent= successMessage;
        error.style.backgroundColor = "black";
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
            error.style.backgroundColor = "black";
            error.style.color = "lightgreen";
            localStorage.removeItem("successMessage"); // Remove success message from localStorage
        }
    });
    

    // 3. Error/success message after submitting contact form 
    function validateContactForm() {
        "use strict";
      
        // Get the form elements
        const name = document.getElementById("name1").value;
        const email = document.getElementById("email1").value;
        const message = document.getElementById("message").value;
        const error = document.getElementById("error");
      
        // Validate the form fields
          if (!message) {
          error.textContent = "Please enter your message";
          error.style.color = "red";
          return false;
        } else {
          // Display success message
          const successMessage = "Thank you for your message!";
          error.textContent = successMessage;
          error.style.color = "green";
          localStorage.setItem("successMessage", successMessage);
          return true;
        }
      }      
      
      window.addEventListener("load", function() {
        "use strict";
        let successMessage = localStorage.getItem("successMessage");
        if (successMessage) {
            let error=document.getElementById("error");
            error.textContent = successMessage;
            error.style.color = "green";
            localStorage.removeItem("successMessage"); // Remove success message from localStorage
        }
    });
      
      
      
      
      


