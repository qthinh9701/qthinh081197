$(document).ready(function () {
  let $carousel = $(".slider__img");
  let width = $(window).width();
  $carousel.flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
  });

  $(".slider__bottom .prev").on("click", function () {
    $carousel.flickity("previous");
  });
  $(".slider__bottom .next").on("click", function () {
    $carousel.flickity("next");
  });
  $(".slider__button-mb .prevbtn").on("click", function () {
    $carousel.flickity("previous");
  });
  $(".slider__button-mb .nextbtn").on("click", function () {
    $carousel.flickity("next");
  });
  $(".slider__bottom .zoom").on("click", function () {
    $carousel.flickity("viewFullscreen");
  });
});
