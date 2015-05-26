'use strict';
$(function(){
  
  var placeHere;
  var children;
  var row;
  var col;
  var shuffleOne;
  var shuffleTwo;
  var shuffleThree;
  var shuffleFour;
  var shuffleFive;
  var shuffleSix;
  var shuffleSeven;
  var shuffleEight;
  var shuffleNine;


  $('#new-game').click(function() {
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
    shuffleOne = shuffle([1,2,3,4,5,6,7,8,9]);
    console.log(shuffleOne);
    $('.quad1').each(function(i) {
      $(this).html('<p>' + shuffleOne[i] + '</p>');
    })
    shuffleTwo = shuffle([1,2,3,4,5,6,7,8,9]);
    console.log(shuffleTwo);
    shuffleThree = shuffle([1,2,3,4,5,6,7,8,9]);
    console.log(shuffleThree);

    while (shuffleOne[0] === shuffleTwo[0] || shuffleOne[0] === shuffleTwo[1] || shuffleOne[0] === shuffleTwo[2] || shuffleOne[1] === shuffleTwo[0] || shuffleOne[1] === shuffleTwo[1] || shuffleOne[1] === shuffleTwo[2] || shuffleOne[2] === shuffleTwo[0] || shuffleOne[2] === shuffleTwo[1] || shuffleOne[2] === shuffleTwo[2] || shuffleOne[3] === shuffleTwo[3] || shuffleOne[3] === shuffleTwo[4] || shuffleOne[3] === shuffleTwo[5] || shuffleOne[4] === shuffleTwo[3] || shuffleOne[4] === shuffleTwo[4] || shuffleOne[4] === shuffleTwo[5] || shuffleOne[5] === shuffleTwo[3] || shuffleOne[5] === shuffleTwo[4] || shuffleOne[5] === shuffleTwo[5] || shuffleOne[6] === shuffleTwo[6] || shuffleOne[6] === shuffleTwo[7] || shuffleOne[6] === shuffleTwo[8] || shuffleOne[7] === shuffleTwo[6] || shuffleOne[7] === shuffleTwo[7] || shuffleOne[7] === shuffleTwo[8] || shuffleOne[8] === shuffleTwo[6] || shuffleOne[8] === shuffleTwo[7] || shuffleOne[8] === shuffleTwo[8]) {
      console.log('we have a match in 2');
      shuffleTwo = shuffle([1,2,3,4,5,6,7,8,9]);
      console.log(shuffleTwo);
    }
    while (shuffleOne[0] === shuffleThree[0] || shuffleTwo[0] === shuffleThree[0] || shuffleOne[0] === shuffleThree[1] || shuffleTwo[0] === shuffleThree[1] || shuffleOne[0] === shuffleThree[2] || shuffleTwo[0] === shuffleThree[2] || shuffleOne[1] === shuffleThree[0] || shuffleTwo[1] === shuffleThree[0] || shuffleOne[1] === shuffleThree[1] || shuffleTwo[1] === shuffleThree[1] || shuffleOne[1] === shuffleThree[2] || shuffleTwo[1] === shuffleThree[2] || shuffleOne[2] === shuffleThree[0] || shuffleTwo[2] === shuffleThree[0] || shuffleOne[2] === shuffleThree[1] || shuffleTwo[2] === shuffleThree[1] || shuffleOne[2] === shuffleThree[2] || shuffleTwo[2] === shuffleThree[2] || shuffleOne[3] === shuffleThree[3] || shuffleTwo[3] === shuffleThree[3] || shuffleOne[3] === shuffleThree[4] || shuffleTwo[3] === shuffleThree[4] || shuffleOne[3] === shuffleThree[5] || shuffleTwo[3] === shuffleThree[5] || shuffleOne[4] === shuffleThree[3] || shuffleTwo[4] === shuffleThree[3] || shuffleOne[4] === shuffleThree[4] || shuffleTwo[4] === shuffleThree[4] || shuffleOne[4] === shuffleThree[5] || shuffleTwo[4] === shuffleThree[5] || shuffleOne[5] === shuffleThree[3] || shuffleTwo[5] === shuffleThree[3] || shuffleOne[5] === shuffleThree[4] || shuffleTwo[5] === shuffleThree[4] || shuffleOne[5] === shuffleThree[5] || shuffleTwo[5] === shuffleThree[5] || shuffleOne[6] === shuffleThree[6] || shuffleTwo[6] === shuffleThree[6] || shuffleOne[6] === shuffleThree[7] || shuffleTwo[6] === shuffleThree[7] || shuffleOne[6] === shuffleThree[8] || shuffleTwo[6] === shuffleThree[8] || shuffleOne[7] === shuffleThree[6] || shuffleTwo[7] === shuffleThree[6] || shuffleOne[7] === shuffleThree[7] || shuffleTwo[7] === shuffleThree[7] || shuffleOne[7] === shuffleThree[8] || shuffleTwo[7] === shuffleThree[8] || shuffleOne[8] === shuffleThree[6] || shuffleTwo[8] === shuffleThree[6] || shuffleOne[8] === shuffleThree[7] || shuffleTwo[8] === shuffleThree[7] || shuffleOne[8] === shuffleThree[8] || shuffleTwo[8] === shuffleThree[8]) {
      console.log('we have a match in 3');
      shuffleThree = shuffle([1,2,3,4,5,6,7,8,9]);
      console.log(shuffleThree);
    }

    $('.quad2').each(function(i) {
      $(this).html('<p>' + shuffleTwo[i] + '</p>');
    })
    $('.quad3').each(function(i) {
      $(this).html('<p>' + shuffleThree[i] + '</p>');
    })
    
    shuffleFour = shuffle([1,2,3,4,5,6,7,8,9]);
    console.log('Four: ' + shuffleFour);
    while (shuffleOne[0] === shuffleFour[0] || shuffleOne[0] === shuffleFour[3] || shuffleOne[0] === shuffleFour[6] || shuffleOne[1] === shuffleFour[1] || shuffleOne[1] === shuffleFour[4] || shuffleOne[1] === shuffleFour[7] || shuffleOne[2] === shuffleFour[2] || shuffleOne[2] === shuffleFour[5] || shuffleOne[2] === shuffleFour[8] || shuffleOne[3] === shuffleFour[0] || shuffleOne[3] === shuffleFour[3] || shuffleOne[3] === shuffleFour[6] || shuffleOne[4] === shuffleFour[1] || shuffleOne[4] === shuffleFour[4] || shuffleOne[4] === shuffleFour[7] || shuffleOne[5] === shuffleFour[2] || shuffleOne[5] === shuffleFour[5] || shuffleOne[5] === shuffleFour[8] || shuffleOne[6] === shuffleFour[0] || shuffleOne[6] === shuffleFour[3] || shuffleOne[6] === shuffleFour[6] || shuffleOne[7] === shuffleFour[1] || shuffleOne[7] === shuffleFour[4] || shuffleOne[7] === shuffleFour[7] || shuffleOne[8] === shuffleFour[2] || shuffleOne[8] === shuffleFour[5] || shuffleOne[8] === shuffleFour[8]) {
      console.log('we have a match in 4');
      shuffleFour = shuffle([1,2,3,4,5,6,7,8,9]);
      console.log(shuffleFour);
    }
    $('.quad4').each(function(i) {
      $(this).html('<p>' + shuffleFour[i] + '</p>');
    })
 
  });


  var checkQuad = function() {
    children = [];
    $('.selected').parent().children().each(function(i) {
      children.push($(this).html());
    })
    console.log('checkQuad is running');
  };
  var checkRow = function() {
    row = [];
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
    console.log('checkRow is running');
  };
  var checkCol = function() {
    col = [];
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
    console.log('checkCol is running');
  };

  $('.tile').click(function() {
    $('.tile').removeClass('selected');
    $('.choice').removeClass('chosen');
    $(this).toggleClass('selected', this.clicked);
    console.log($(this).attr('class') + ' ' + $(this).attr('id'));
    // placeHere = $(this).attr('id');
    // console.log('placeHere upon selection: ' + placeHere);
  });

  $('.choice').click(function() {
    if ($('.tile').hasClass('selected')) {
      $('.choice').removeClass('chosen');
      $(this).toggleClass('chosen', this.clicked);
      
    
      checkQuad();
      checkRow();
      checkCol();

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