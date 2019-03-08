(function () {

    document.addEventListener('DOMContentLoaded', function () {

        var eDisplayMoment = document.getElementById('displayMoment');
        eDisplayMoment.innerHTML = moment("20190401", "YYYYMMDD").fromNow();

        /*
        let eventTime = 1554089400;
        let eventNow = Date.now();
        console.log(eventNow);
        let diffTime = eventTime - eventNow;
        let duration = moment.duration(diffTime*1000, 'milliseconds');
        let interval = 1000;

        setInterval(function(){
            duration = moment.duration(duration - interval, 'milliseconds');
            document.getElementsByClassName('countdown')[0].innerHTML = duration.days() +
                "<p>" + duration.hours() + ":" + duration.minutes() + ":" + duration.seconds() + "</p>";
        }, interval);
        */

    });

    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

    // timestamp for Monday, 1 April 2019 03:30:00 = 1554089400
})();