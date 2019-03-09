(function () {

    // to hide the loader
    window.addEventListener("load", function () {
        setTimeout(function () {
            const loader = document.querySelector(".loader");
            loader.className += " hidden";
        }, 1000);
    });

    document.addEventListener('DOMContentLoaded', function () {

        // timestamp for Monday, 1 April 2019 03:30:00 = 1554089400
        let eventTime = 1554089400;
        let eventNow = Math.floor(new Date().getTime()/1000.0);
        let diffTime = eventTime - eventNow;
        let duration = moment.duration(diffTime*1000, 'milliseconds');
        let interval = 1000;

        setInterval(function(){
            duration = moment.duration(duration - interval, 'milliseconds');
            let days = duration.days(), hrs = duration.hours(), mins = duration.minutes(), secs = duration.seconds();

            document.getElementsByClassName('countdown')[0].innerHTML = "<p>" + days + " DAYS </br> "
                + hrs + " Hours</br> " + mins + " Mins</br> " + secs + " Secs</p>";
        }, 1000);


        // navbar toggle
        let hamburger = document.querySelector(".hamburger");
        let navbar = document.querySelector("nav");
        let navitems = document.querySelector("nav .row");
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("is-active");
            navbar.classList.toggle("nav-hidden");
            navitems.classList.toggle("nav-items-hidden");
            navitems.classList.toggle("nav-items-show");
        });


    });

})();