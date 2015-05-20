'use strict';
$(function(){

  $('.tile').click(function() {
        $('.tile').removeClass('selected');
        $('.choice').removeClass('chosen');
        $(this).toggleClass('selected', this.clicked);
        console.log($(this).attr('class') + ' ' + $(this).attr('id'));
    });
  $('.choice').click(function() {
    if ($('.tile').hasClass('selected')) {
        // console.log($('.selected').attr('id'));
        $('.choice').removeClass('chosen');
        $(this).toggleClass('chosen', this.clicked);
        // console.log($(this).attr('id'));
        // console.log($('.selected').html()); 
        console.log($('.selected').attr('class'));
        console.log($('.selected').siblings().length);
        $('.selected').siblings().each(function(i) {
          console.log( (i + 1) + ': ' + $(this).attr('id') + ' ' + $(this).html() + ' ' + $(this).attr('class'));
        });


        $('.selected').html($(this).html());
        // console.log($('.selected').html()); 
      } else {
        alert('Please select a spot to place your tile');
      }
    });
 
});