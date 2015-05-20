'use strict';
$(function(){
var placeHere;
  $('.tile').click(function() {
        $('.tile').removeClass('selected');
        $('.choice').removeClass('chosen');
        $(this).toggleClass('selected', this.clicked);
        console.log($(this).attr('class') + ' ' + $(this).attr('id'));
        placeHere = $(this).attr('id');
        console.log('placeHere upon selection: ' + placeHere);
    });
  $('.choice').click(function() {
    if ($('.tile').hasClass('selected')) {
        // console.log($('.selected').attr('id'));
        console.log('placeHere at beginning of choice: ' + placeHere);
        $('.choice').removeClass('chosen');
        $(this).toggleClass('chosen', this.clicked);
        console.log($('.selected').attr('class'));
        console.log($('.selected').siblings().length);
        var siblings = []
        $('.selected').siblings().each(function(i) {
          siblings.push($(this).html());
        };
        console.log(siblings);

        $('.selected').html($(this).html());

        $('.selected').siblings().each(function(i) {
          console.log( (i + 1) + ': ' + $(this).attr('id') + ' ' + $(this).html() + ' ' + $(this).attr('class'));
        });


        

      } else {
        alert('Please select a spot to place your tile');
      }
    });
 
});