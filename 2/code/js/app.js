jQuery(document).ready(function ($) {
  var sliderTimer = 5000;
  var beforeEnd = 500;
  var $imageSlider = $(".image-slider");
  $imageSlider.slick({
    autoplay: true,
    autoplaySpeed: sliderTimer,
    speed: 1000,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  function progressBar() {
    $(".slider-progress").find("span").removeAttr("style");
    $(".slider-progress").find("span").removeClass("active");
    setTimeout(function () {
      $(".slider-progress")
        .find("span")
        .css("transition-duration", sliderTimer / 1000 + "s")
        .addClass("active");
    }, 100);
  }
  progressBar();
  $imageSlider.on("beforeChange", function (e, slick) {
    progressBar();
  });
  $imageSlider.on("afterChange", function (e, slick, nextSlide) {
    titleAnim(nextSlide);
  });

  // Title Animation JS
  function titleAnim(ele) {
    $imageSlider.find(".slick-current").find("h1").addClass("show");
    setTimeout(function () {
      $imageSlider.find(".slick-current").find("h1").removeClass("show");
    }, sliderTimer - beforeEnd);
  }
  titleAnim();
});

let swiper = new Swiper(".container", {
  slidePerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
