
$(function () {
  'use strict';

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  });
  
  var navButtons = $('.nav-buttons button');
  console.log(navButtons);

  $('.nav-buttons button').each(function (index, element) {
    // element == this
    $(element).on('click', function(){
     $(this).addClass("activated");
     $(this).siblings().addClass("default");
    });
    
  });


});
