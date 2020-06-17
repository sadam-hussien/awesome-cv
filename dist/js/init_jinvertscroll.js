"use strict";

$(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= $(".about").offset().top) {
      $.jInvertScroll(['.about']);
    }
  });
});