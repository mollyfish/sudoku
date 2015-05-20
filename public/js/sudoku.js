'use strict';
$(function(){

  $('.tile').click(function() {
        $('.tile').removeClass('selected');
        $(this).toggleClass('selected', this.clicked);
    });
  $('.choice').click(function() {
    if ($('.tile').hasClass('selected')) {
        $('.choice').removeClass('selected');
        $(this).toggleClass('selected', this.clicked);
      } else {
        alert('Please select a spot to place your tile');
      }
    });
 
});