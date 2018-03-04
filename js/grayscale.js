// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//waypoints for timeline animations
$(function(){
    var createWaypointWithAnimation = function(elements, animation) {
        [].forEach.call(elements, function(element) {
            element.style.opacity = 0;
            new Waypoint({
                element: element,
                handler: function (direction) {
                    if (direction == 'down') {
                        this.element.classList.add(animation)
                        element.style.opacity = 1;
                        this.destroy();
                    }
                },
                offset: '80%'
            })
        });
    };
    var images = document.querySelectorAll('.timeline-image');
    createWaypointWithAnimation(images, "zoomIn");
    var invertedElements = document.querySelectorAll(".timeline-inverted .timeline-panel");
    createWaypointWithAnimation(invertedElements, "zoomInRight");
    var elements = document.querySelectorAll(".timeline .timeline-panel");
    createWaypointWithAnimation(elements, "zoomInLeft");

});

