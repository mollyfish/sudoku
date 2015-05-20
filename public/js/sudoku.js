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
      console.log('placeHere at beginning of choice: ' + placeHere);
      $('.choice').removeClass('chosen');
      $(this).toggleClass('chosen', this.clicked);
      
      var children = [];
      $('.selected').parent().children().each(function(i) {
        children.push($(this).html());
      })
      
      var row = [];
      if ($('.selected').hasClass('row1')) {
        console.log('in row one');
        $('.row1').each(function(i) {
          row.push($(this).html());
        })
      } else if ($('.selected').hasClass('row2')) {
        console.log('in row two');
        $('.row2').each(function(i) {
          row.push($(this).html());
        })
      } else if ($('.selected').hasClass('row3')) {
        console.log('in row three');
        $('.row3').each(function(i) {
          row.push($(this).html());
        })
      } else if ($('.selected').hasClass('row4')) {
        console.log('in row four');
        $('.row4').each(function(i) {
          row.push($(this).html());
        })
      } else if ($('.selected').hasClass('row5')) {
        console.log('in row five');
        $('.row5').each(function(i) {
          row.push($(this).html());
        })
      } else if ($('.selected').hasClass('row6')) {
        console.log('in row six');
        $('.row6').each(function(i) {
          row.push($(this).html());
        })
      } else if ($('.selected').hasClass('row7')) {
        console.log('in row seven');
        $('.row7').each(function(i) {
          row.push($(this).html());
        })
      } else if ($('.selected').hasClass('row8')) {
        console.log('in row eight');
        $('.row8').each(function(i) {
          row.push($(this).html());
        })
      } else {
        console.log('in row nine');
        $('.row9').each(function(i) {
          row.push($(this).html());
        })
      }
      console.log('row: ' + row);

      var col = [];
      if ($('.selected').hasClass('col1')) {
        console.log('in col one');
        $('.col1').each(function(i) {
          col.push($(this).html());
        })
      } else if ($('.selected').hasClass('col2')) {
        console.log('in col two');
        $('.col2').each(function(i) {
          col.push($(this).html());
        })
      } else if ($('.selected').hasClass('col3')) {
        console.log('in col three');
        $('.col3').each(function(i) {
          col.push($(this).html());
        })
      } else if ($('.selected').hasClass('col4')) {
        console.log('in col four');
        $('.col4').each(function(i) {
          col.push($(this).html());
        })
      } else if ($('.selected').hasClass('col5')) {
        console.log('in col five');
        $('.col5').each(function(i) {
          col.push($(this).html());
        })
      } else if ($('.selected').hasClass('col6')) {
        console.log('in col six');
        $('.col6').each(function(i) {
          col.push($(this).html());
        })
      } else if ($('.selected').hasClass('col7')) {
        console.log('in col seven');
        $('.col7').each(function(i) {
          col.push($(this).html());
        })
      } else if ($('.selected').hasClass('col8')) {
        console.log('in col eight');
        $('.col8').each(function(i) {
          col.push($(this).html());
        })
      } else {
        console.log('in col nine');
        $('.col9').each(function(i) {
          col.push($(this).html());
        })
      }
      console.log('col: ' + col);

      if ($.inArray($(this).html(),children) !== -1 || $.inArray($(this).html(),row) !== -1 || $.inArray($(this).html(),col) !== -1) {
        console.log('found it');
        $('.tile').removeClass('selected');
        $('.choice').removeClass('chosen');
      } else {
        console.log('didn\'t find it');
        $('.selected').html($(this).html());
        $('.tile').removeClass('selected');
      }      
    } else {
      alert('Please select a spot to place your tile');
    }
  });
 
});