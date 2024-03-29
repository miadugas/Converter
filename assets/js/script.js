//page script
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
        $('html, body').animate({
            scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
        }
    }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
    target: '#mainNav',
    offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

  })(jQuery); // End of use strict

// console.log("test");

//date shows current date
// console.log("today")
let today = new Date();

let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let m = today.getMonth();
// console.log(month[m]);

let date = today.getDate() + " " + month[m] + ", " + today.getFullYear();
// console.log(date);

document.getElementsByClassName("date")[0].textContent = date;

document.getElementById("main-unit").addEventListener("keyup", () => {

let u = document.querySelector(".main-unit-options")
// console.log(u);
let s = document.querySelector(".second-unit-options")
// console.log(s);

let mainUnit = u.options[u.selectedIndex].textContent.toLowerCase();
// console.log(mainUnit);
let secondUnit = s.options[s.selectedIndex].textContent.toLowerCase();
// console.log(secondUnit);


let numberTyped = document.getElementById("main-unit").value;

console.log(numberTyped);
console.log(typeof numberTyped);

numberTyped = parseInt(numberTyped);
console.log(typeof numberTyped);




if(mainUnit === "celsius") {
    if(secondUnit === "kelvin") {
        document.getElementById("second-unit").value = numberTyped + 273.15;
    } else if(secondUnit === "fahrenheit") {
        document.getElementById("second-unit").value = (numberTyped * 9/5) + 32;

    } else {
        document.getElementById("second-unit").value = numberTyped = numberTyped;

    } 

} else if(mainUnit === "kelvin") {
            if(secondUnit === "celsius") {
                document.getElementById("second-unit").value = numberTyped - 273.15; 
            } else if(secondUnit === "fahrenheit") {
                document.getElementById("second-unit").value = (numberTyped - 273.15) * 9/5 + 32;
            } else {
                document.getElementById("second-unit").value = numberTyped;
        
            }   
} else if(mainUnit === "fahrenheit") {
    if(secondUnit === "celsius") {
        document.getElementById("second-unit").value = (numberTyped - 32) * 5/9; 
    } else if(secondUnit === "kelvin") {
        document.getElementById("second-unit").value = (numberTyped - 32) * 5/9 + 273.15;
    } else {
        document.getElementById("second-unit").value = numberTyped;

    }   
} 

//Clear "change" on different unit conversion option
Array.from(document.querySelectorAll(".reset")).forEach( select => {
    select.addEventListener("change", () => {
        document.getElementById("main-unit").value= "";
        document.getElementById("second-unit").value= "";
    })
    

});




});

