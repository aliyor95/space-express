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
        duration: 1000,
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



$( document ).ready(function( $ ) {
  $( '#example5' ).sliderPro({
       width: 960,
       height: 500,
       orientation: 'horizontal',
       loop: false,
       arrows: false,
       fullScreen: true,
      imageScaleMode:'cover',

      buttons: false,
       thumbnailsPosition: 'right',
       thumbnailPointer: false,
       thumbnailWidth: 250,
       thumbnailHeight: 275,
      breakpoints: {
          800: {
              thumbnailsPosition: 'center',
              thumbnailWidth: 270,
              thumbnailHeight: 100
          },
          500: {
              thumbnailsPosition: 'center',
              thumbnailWidth: 120,
              thumbnailHeight: 50
          }
      }

   });
});

const applicat = new Vue({
  el: '#app',
  data: {
      message: 'test test',
      last_index_slider: 0,
      max_lenght: 0,
      menu_mobile: false,
      menushow: false,
  },
  methods: {
      clickmenu: function () {
          if (this.menushow == true) {
              this.menushow = false;
          } else {
              this.menushow = true;
          }
      },
      scrollelements: function (id) {
          $([document.documentElement, document.body]).animate({
              scrollTop: $("#" + id).offset().top
          }, 2000);
      },
      NextSlider: function () {
          var contentsilide = document.getElementById('slider_content');

          var slider_items = document.getElementById('slider_items');
          this.max_lenght = slider_items.children.length;

          if (this.last_index_slider + 1 < this.max_lenght) {

              slider_items.children[this.last_index_slider].classList.add('active_slide');


              this.last_index_slider += 1;
              slider_items.children[this.last_index_slider].classList.add('active_slide');
              contentsilide.children[0].src = slider_items.children[this.last_index_slider].children[0].src;






          } else {


              slider_items.children[this.last_index_slider].classList.add('active_slide');
              this.last_index_slider = 0;

              contentsilide.children[0].src = slider_items.children[this.last_index_slider].children[0].src;

              if (this.last_index_slider + 1 <= this.max_lenght) {
                  slider_items.children[this.last_index_slider + 1].classList.remove('active_slide');
              }
              if (this.last_index_slider + 2 <= this.max_lenght) {
                  slider_items.children[this.last_index_slider + 2].classList.remove('active_slide');
              }

          }



      },
      nxslider: function () {
          $('#example5').sliderPro('nextSlide');

      },
      prslider: function () {
          $('#example5').sliderPro('previousSlide');

      },
      PrevSlider: function () {
          var contentsilide = document.getElementById('slider_content');

          var slider_items = document.getElementById('slider_items');
          this.max_lenght = slider_items.children.length;

          if (this.last_index_slider - 1 >= 0) {

              slider_items.children[this.last_index_slider].classList.remove('active_slide');
              this.last_index_slider -= 1;
              slider_items.children[this.last_index_slider].classList.add('active_slide');
              contentsilide.children[0].src = slider_items.children[this.last_index_slider].children[0].src;




          } else {

              slider_items.children[this.last_index_slider].classList.remove('active_slide');

              this.last_index_slider = this.max_lenght - 1;


              slider_items.children[this.last_index_slider].classList.add('active_slide');
              contentsilide.children[0].src = slider_items.children[this.last_index_slider].children[0].src;
          }



      }

  }
});

$(window).resize(function () {
  var width = $(window).width();
  if (width < 1200) {
      applicat.menu_mobile = true;
  } else {
      applicat.menu_mobile = false;
  }
});

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

