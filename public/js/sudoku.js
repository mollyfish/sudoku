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
  var column1 = [];
  var column2 = [];
  var column3 = [];
  var column4 = [];
  var column5 = [];
  var column6 = [];
  var column7 = [];
  var column8 = [];
  var column9 = [];


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
    $('.row1').each(function(i) {
      $(this).html('<p>' + shuffleOne[i] + '</p>');
    })
    // shuffleOne.splice(0,1);
    // shuffleTwo = shuffle(shuffleOne);
    // $('.col1:not(:first)').each(function(i) {
    //   $(this).html('<p>' + shuffleTwo[i] + '</p>');
    // })
var fillInRow = function(rowclass) {
    $(rowclass).each(function(i) {
      var value = Math.floor(Math.random() * (10 - 1) + 1);
      var displayValue = '<p>' + value + '</p>';
      console.log(displayValue);

      if($(this).hasClass('col1')) {
        $('.col1').each(function(i) {
          column1.push($(this).html());
        })
        console.log(column1);
        while ($.inArray(displayValue,column1) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
      if($(this).hasClass('col2')) {
        $('.col2').each(function(i) {
          column2.push($(this).html());
        })
        console.log(column2);
        while ($.inArray(displayValue,column2) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
      if($(this).hasClass('col3')) {
        $('.col3').each(function(i) {
          column3.push($(this).html());
        })
        console.log(column3);
        while ($.inArray(displayValue,column3) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
      if($(this).hasClass('col4')) {
        $('.col4').each(function(i) {
          column4.push($(this).html());
        })
        console.log(column4);
        while ($.inArray(displayValue,column4) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
      if($(this).hasClass('col5')) {
        $('.col5').each(function(i) {
          column5.push($(this).html());
        })
        console.log(column5);
        while ($.inArray(displayValue,column5) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
      if($(this).hasClass('col6')) {
        $('.col6').each(function(i) {
          column6.push($(this).html());
        })
        console.log(column6);
        while ($.inArray(displayValue,column6) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
      if($(this).hasClass('col7')) {
        $('.col7').each(function(i) {
          column7.push($(this).html());
        })
        console.log(column7);
        while ($.inArray(displayValue,column7) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
      if($(this).hasClass('col8')) {
        $('.col8').each(function(i) {
          column8.push($(this).html());
        })
        console.log(column8);
        while ($.inArray(displayValue,column8) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
      if($(this).hasClass('col9')) {
        $('.col9').each(function(i) {
          column9.push($(this).html());
        })
        console.log(column9);
        while ($.inArray(displayValue,column9) !== -1) {
          console.log('in the array');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
        $(this).html(displayValue);
      }
    })
};
fillInRow('.row2')
fillInRow('.row3')
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