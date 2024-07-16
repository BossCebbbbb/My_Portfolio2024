// JavaScript for typing animation
const roles = ["UI/UX Designer", "Web Developer"]; // Array of roles to rotate
let index = 0;
const roleElement = document.getElementById("role");
let typingTimeout;

function typeWriter(text, index, cb) {
    if (index < text.length) {
        roleElement.innerText = text.substring(0, index + 1);
        typingTimeout = setTimeout(function() {
            typeWriter(text, index + 1, cb);
        }, 100); // Adjust typing speed here (in milliseconds)
    } else {
        cb(); // Callback to handle completion
    }
}

function changeRole() {
    const currentRole = roles[index];
    typeWriter(currentRole, 0, function() {
        // After typing completes, schedule next role change
        clearTimeout(typingTimeout); // Clear any existing typing animation timeout
        index = (index + 1) % roles.length;
        setTimeout(changeRole, 3000); // Change role every 5 seconds
    });
}

// Initial call
changeRole();





document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".header12 h1", {
        duration: 2,
        opacity: 0,
        y: -50,
        ease: "power4.out"
    });

    gsap.to(".contact-form, .contact-info", {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: "power4.out"
    });

    gsap.to("input, textarea, button", {
        duration: 1,
        opacity: 1,
        x: 0,
        delay: 0.5,
        stagger: 0.3,
        ease: "power4.out"
    });

    gsap.from(".social-media a", {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 1.5,
        stagger: 0.2,
        ease: "power4.out"
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        gsap.to("form", {
            duration: 0.5,
            opacity: 0,
            y: -50,
            ease: "power4.out",
            onComplete: function() {
                document.querySelector(".contact-form h2").textContent = "Thank you!";
                gsap.to("form", {
                    duration: 0.5,
                    opacity: 1,
                    y: 0,
                    ease: "power4.out"
                });
            }
        });
    });
});





$(document).ready(function() {
    // Smooth scrolling on navigation click
    $('.nav-link').on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 200); // Adjust duration here, e.g., 200 for faster scroll

        // Remove active class from all links
        $('.nav-link').removeClass('active');
        // Add active class to the clicked link
        $(this).addClass('active');
    });

    // Add active class to navigation links on scroll
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();

        // Assign active class to nav links based on scroll position
        $('section').each(function() {
            var top = $(this).offset().top - 100; // Adjusted offset for better UX
            var bottom = top + $(this).outerHeight(); // Calculate bottom of section

            if (scrollPosition >= top && scrollPosition < bottom) {
                var id = $(this).attr('id');
                $('.nav-link').removeClass('active');
                $('.nav-link[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // Ensure Home link is active by default on page load
    $('.nav-link[href="#home"]').addClass('active');
});



// Initialize GSAP ScrollTrigger Header
// Wait for the DOM to be fully loaded
 document.addEventListener("DOMContentLoaded", function() {
    // Animation timeline for the header and banner text
    var tl = gsap.timeline();

    // Header animation
    tl.from(".navbar-brand h1", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out"
    });

    tl.from(".header-content li", {
        opacity: 0,
        y: -20,
        stagger: 0.2,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.5"); // Start these animations 0.5s earlier than the previous animation

    // Home Animation
    tl.from("#banner-title", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out"
    });
    tl.from(".home_text", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.5"); // Start this animation 0.5s earlier than the previous animation

        tl.from(".home_pic", {
        opacity: 0,
        x: 100, // Move from right to left (adjust distance as needed)
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.1"); // Start this animation 0.1s earlier than the previous animation



});