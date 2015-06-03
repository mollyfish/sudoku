'use strict';
$(function(){
  $('#new-game').click(function() {
    var value = Math.floor(Math.random() * (10 - 1)) + 1;
    var choices = [1,2,3,4,5,6,7,8,9];
    var column1 = [];
    var column2 = [];
    var column3 = [];
    var column4 = [];
    var column5 = [];
    var column6 = [];
    var column7 = [];
    var column8 = [];
    var column9 = [];

    function shuffle(deck) {
      var i = deck.length,
          j = 0,
          temp;
      while (i--) {
          j = Math.floor(Math.random() * (i+1));
          temp = deck[i];
          deck[i] = deck[j];
          deck[j] = temp;
      }
      return deck;
    };

    var rowOneShuffle = shuffle([1,2,3,4,5,6,7,8,9]);
    console.log('One: ' + rowOneShuffle);
    $('.row1').each(function(i) {
      $(this).html(rowOneShuffle[i]);
    })

    var rowTwoShuffle = shuffle([1,2,3,4,5,6,7,8,9]);
    console.log('Two: ' + rowTwoShuffle);
    for (var i = 0; i < rowOneShuffle.length; i++) {
      console.log('i: ' + i);
      if (rowTwoShuffle[i] === rowOneShuffle[i]) {
        var removed = rowTwoShuffle.splice(i,1);
        rowTwoShuffle.push(removed[0]);
        console.log('Two: ' + rowTwoShuffle);
      }
    }
    $('.row2').each(function(i) {
      $(this).html(rowTwoShuffle[i]);
    })

    var rowThreeShuffle = shuffle([1,2,3,4,5,6,7,8,9]);
    console.log('Three: ' + rowThreeShuffle);
    for (var i = 0; i < rowOneShuffle.length; i++) {
      console.log('i: ' + i);
      if ((rowThreeShuffle[i] === rowOneShuffle[i]) || (rowThreeShuffle[i] === rowTwoShuffle[i])) {
        var removed = rowThreeShuffle.splice(i,1);
        rowThreeShuffle.push(removed[0]);
        console.log('Three: ' + rowThreeShuffle);
      }
    }
    $('.row3').each(function(i) {
      $(this).html(rowThreeShuffle[i]);
    })

    var rowFourShuffle = shuffle([1,2,3,4,5,6,7,8,9]);
    console.log('Four: ' + rowFourShuffle);
    for (var i = 0; i < rowOneShuffle.length; i++) {
      console.log('i: ' + i);
      if ((rowFourShuffle[i] === rowOneShuffle[i]) || (rowFourShuffle[i] === rowTwoShuffle[i]) || (rowFourShuffle[i] === rowThreeShuffle[i])) {
        var removed = rowFourShuffle.splice(i,1);
        rowFourShuffle.push(removed[0]);
        console.log('Four: ' + rowFourShuffle);
      }
    }
    $('.row4').each(function(i) {
      $(this).html(rowFourShuffle[i]);
    })

    $('.column9').each(function(i) {
      column9.push($(this).text());
    })
    console.log(column9);
    $('.column8').each(function(i) {
      column8.push($(this).text());
    })
    console.log(column8);


    var counts9 = {};
    $.each(column9, function(key,value) {
      if (!counts9.hasOwnProperty(value)) {
        counts9[value] = 1;
      } else {
        counts9[value]++;
        // console.log('duplicate in col 9')
      }
    });
    console.log(counts9);
    var counts8 = {};
    $.each(column8, function(key,value) {
      if (!counts8.hasOwnProperty(value)) {
        counts8[value] = 1;
      } else {
        counts8[value]++;
        // console.log('duplicate in col 8')
      }
    });
    console.log(counts8);

  })
});

