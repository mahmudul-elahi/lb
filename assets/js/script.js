
const btn = document.querySelector(".theme-switch input");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", () => {
    if (prefersDarkScheme.matches) {
        document.documentElement.classList.toggle("light");
    } else {
        document.documentElement.classList.toggle("dark");
    }
});



$(document).ready(function () {
    feather.replace();

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});


$(document).ready(function () {
    // Check initial state of checkbox
    if ($("#checkbox").is(":checked")) {
        $("html").attr("data-bs-theme", "dark");
    } else {
        $("html").attr("data-bs-theme", "light");
    }

    // On checkbox change
    $("#checkbox").on("change", function () {
        if ($(this).is(":checked")) {
            $("html").attr("data-bs-theme", "dark");
        } else {
            $("html").attr("data-bs-theme", "light");
        }
    });
});

AOS.init({
    duration: 600,
    once: true
});


$(document).ready(function () {
    var navbar = $('.navbar')

    $(window).scroll(() => {
        var scrollPosition = $(this).scrollTop()

        if (scrollPosition > 300) {
            navbar.addClass('navbar-fixed')
        } else if (scrollPosition <= 0) {
            navbar.removeClass('navbar-fixed')
        }
    })



    var $backToTop = $(".back-to-top");
    $backToTop.hide();


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 800) {
            $backToTop.fadeIn();
        } else {
            $backToTop.fadeOut();
        }
    });

    $backToTop.on('click', function (e) {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});


