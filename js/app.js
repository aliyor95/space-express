// To-top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("activat");
  } else {
    toTop.classList.remove("activat");
  }
});

// Init AOS
(function ($) {
    "use strict";
  
    function aos_init() {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });
    }
    $(window).on("load", function () {
      aos_init();
    });
  })(jQuery);
  
  // Number function
  $(document).ready(function() {
    $('.number').counterUp({
      delay: 10,
      time: 3000
    });
  });

  // ! Fixed header
$(function () {
  let nav = $("#nav, #nav_toggle"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);
  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      nav.addClass("fixed");
    } else nav.removeClass("fixed");
  }
});

  // Contact Tabs
const tabsBtn = document.querySelectorAll(".tab__link");
const tabsItems = document.querySelectorAll(".tab__item, .services__tab-text");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

document.querySelector(".tab__link").click();

// Params
var mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
var mainSliderOptions = {
      loop: true,
      speed:1000,
      autoplay:{
        delay:3000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          var swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (var i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }
        },
        touchStart: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
var mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
var navSliderOptions = {
      loop: true,
      loopAdditionalSlides: 10,
      speed:1000,
      spaceBetween: 5,
      slidesPerView: 5,
      centeredSlides : true,
      touchRatio: 0.2,
      slideToClickedSlide: true,
      direction: 'vertical',
      on: {
        imagesReady: function(){
          this.el.classList.remove('loading');
        },
        click: function(){
          mainSlider.autoplay.stop();
        }
      }
    };
var navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;

//  Menu nav toggle
$("#nav_toggle").on("click", function (event) {
  event.preventDefault();
  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});

// Smooth scroll
$('[data-scroll]').on('click', function(event) {
  event.preventDefault();

  let = $this = $(this),
  blockId = $this.data('scroll'),
  blockOffset = $(blockId).offset().top;

  $('.nav-link').removeClass('active');
  $this.addClass('active');

  $('#nav-menu').removeClass('active')
  $('#nav_toggle').removeClass('active')
  $('#nav').removeClass('active')

  $('html, body').animate ({
      scrollTop: blockOffset
  }, 100);
})