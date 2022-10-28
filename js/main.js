var windw = $(window);

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});




/*
|--------------------------------------------------------------------------
	Counter
|--------------------------------------------------------------------------
*/

$(".counter").counterUp({
   delay: 10,
   time: 1000,

});



/*
|--------------------------------------------------------------------------
  isotope Filter Start
|--------------------------------------------------------------------------
*/

var myTheme = window.myTheme || {},
   $win = $(window);

myTheme.Isotope = function() {
   //4 column layout
   var isotopeContainer = $('.isotopeContainer');
   if (!isotopeContainer.length || !jQuery().isotope) return;
   $win.on('load', function() {
       isotopeContainer.isotope({
           itemSelector: '.isotopeSelector'
       });
       $('.isotopeFilters').on('click', 'a', function(e) {
           $('.isotopeFilters').find('.active').removeClass('active');
           $(this).parent().addClass('active');
           var filterValue = $(this).attr('data-filter');
           isotopeContainer.isotope({ filter: filterValue });
           e.preventDefault();
       });
   });
};
myTheme.Isotope();

/*
|--------------------------------------------------------------------------
   Lighbox
|--------------------------------------------------------------------------
*/
lightbox.option({
   'albumLabel': "Item %1 of %2",
   'positionFromTop': 40,
   'resizeDuration': 500,
   'disableScrolling': false
});

if ($(document.body).width() > 1200) {
   lightbox.option({
       'disableScrolling': true
   });
}

windw.resize(function() {

   if ($(document.body).width() < 1200) {
       $(".lb-dataContainer").css("width", "80%");
       $(".lb-dataContainer").css("height", "80%");
       $(".lb-outerContainer").css("width", "80%");
       $(".lb-outerContainer").css("height", "80%");
       $(".lb-image").css("width", "100%");
       $(".lb-image").css("height", "100%");
   }

});


$(document).ready(function() {
 
   var owl2 = $('#blog-carousel');
owl2.owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        960: {
            items: 4
        },

        1200: {
            items: 4
        }
    }
});

  
   });




/*
|--------------------------------------------------------------------------
	Window scroll button
|--------------------------------------------------------------------------
*/
// <!-- get the btn -->

mybutton = document.getElementById("myBtn");
window.scroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
