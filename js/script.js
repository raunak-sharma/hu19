(function () {

    // to hide the loader
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

    document.addEventListener('DOMContentLoaded', function () {

        /* ANIMATION DEFINITIONS */

            // initializing scroll magic
            let controller = new ScrollMagic.Controller();

            let aboutC = new ScrollMagic.Scene({
                triggerElement : '#details-c'
            })
            .setClassToggle('#details-c', 'fade-in')
            .addTo(controller);

            let aboutT = new ScrollMagic.Scene({
                triggerElement : '#details-t'
            })
            .setClassToggle('#details-t', 'fade-in')
            .addTo(controller);

            let galleryT = new ScrollMagic.Scene({
                triggerElement : '#gal-head'
            })
            .setClassToggle('#gal-head', 'fade-in')
            .addTo(controller);
            
            let detailsT = new ScrollMagic.Scene({
                triggerElement : '#details-eve'
            })
            .setClassToggle('#details-eve', 'fade-in')
            .addTo(controller);


        /* END OF ANIMATION DEFINITIONS */

        // timestamp for Monday, 1 April 2019 03:30:00 = 1554089400
        let eventTime = 1554089400;
        let eventNow = Math.floor(new Date().getTime()/1000.0);
        let diffTime = eventTime - eventNow;
        let duration = moment.duration(diffTime*1000, 'milliseconds');
        let interval = 1000;

        setInterval(function(){
            duration = moment.duration(duration - interval, 'milliseconds');
            let days = duration.days(), hrs = duration.hours(), mins = duration.minutes(), secs = duration.seconds();

            document.getElementsByClassName('countdown')[0].innerHTML =
            "<p style=\"font-family:'lmonoULight'\">"
                + "<span style=\"font-size: 4vh\">Starts in </span></br>"
                + "<span style='font-size: 8vh;'>"
                + days + "</span> Days </br> <span style='font-size: 8vh;'>"
                + hrs + "</span> HRS</br> <span style='font-size: 8vh;'>"
                + mins + "</span> MINS</br> <span style='font-size: 8vh;'>"
                + secs + "</span> SECS</p>";
        }, 1000);


        // navbar toggle
        let hamburger = document.querySelector(".hamburger");
        let navbar = document.querySelector("nav");
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("is-active");
            navbar.classList.toggle("nav-hidden");
            navbar.classList.toggle("nav-show");
        });

    });

})();