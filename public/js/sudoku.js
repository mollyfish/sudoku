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
    $('.row1').each(function(i) {
      $(this).html('<p>' + shuffleOne[i] + '</p>');
    })

  var fillInRow = function(rowclass) {
    var column1 = [];
    var column2 = [];
    var column3 = [];
    var column4 = [];
    var column5 = [];
    var column6 = [];
    var column7 = [];
    var column8 = [];
    var column9 = [];
    // var row2 = [];
    // var row3 = [];
    var row4 = [];
    var row5 = [];
    var row6 = [];
    var row7 = [];
    var row8 = [];
    var row9 = [];

    $(rowclass).each(function(i) {
      var row2 = [];
      var row3 = [];
      var value = Math.floor(Math.random() * (10 - 1) + 1);
      var displayValue = '<p>' + value + '</p>';
      console.log('initial: ' + displayValue);

      if ($(this).hasClass('col1')) {
        $('.col1').each(function(i) {
          column1.push($(this).html());
        })
        console.log('col 1: ' + column1);
        while ($.inArray(displayValue,column1) !== -1) {
          console.log('in column 1');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 1: ' + column1);
        }
      }
      if ($(this).hasClass('col2')) {
        $('.col2').each(function(i) {
          column2.push($(this).html());
        })
        console.log('col 2: ' + column2);
        while ($.inArray(displayValue,column2) !== -1) {
          console.log('in col 2');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 2: ' + column2);
        }
      }
      if ($(this).hasClass('col3')) {
        $('.col3').each(function(i) {
          column3.push($(this).html());
        })
        console.log('col 3: ' + column3);
        while ($.inArray(displayValue,column3) !== -1) {
          console.log('in col 3');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 3: ' + column3);
        }
      }
      if ($(this).hasClass('col4')) {
        $('.col4').each(function(i) {
          column4.push($(this).html());
        })
        console.log('col 4: ' + column4);
        while ($.inArray(displayValue,column4) !== -1) {
          console.log('in col 4');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 4: ' + column4);
        }
      }
      if ($(this).hasClass('col5')) {
        $('.col5').each(function(i) {
          column5.push($(this).html());
        })
        console.log('col 5: ' + column5);
        while ($.inArray(displayValue,column5) !== -1) {
          console.log('in col 5');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 5: ' + column5);
        }
      }
      if ($(this).hasClass('col6')) {
        $('.col6').each(function(i) {
          column6.push($(this).html());
        })
        console.log('col 6: ' + column6);
        while ($.inArray(displayValue,column6) !== -1) {
          console.log('in col 6');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 6: ' + column6);
        }
      }
      if ($(this).hasClass('col7')) {
        $('.col7').each(function(i) {
          column7.push($(this).html());
        })
        console.log('col 7: ' + column7);
        while ($.inArray(displayValue,column7) !== -1) {
          console.log('in col 7');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 7: ' + column7);
        }
      }
      if ($(this).hasClass('col8')) {
        $('.col8').each(function(i) {
          column8.push($(this).html());
        })
        console.log('col 8: ' + column8);
        while ($.inArray(displayValue,column8) !== -1) {
          console.log('in col 8');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 8: ' + column8);
        }
      }
      if ($(this).hasClass('col9')) {
        $('.col9').each(function(i) {
          column9.push($(this).html());
        })
        console.log('col 9: ' + column9);
        while ($.inArray(displayValue,column9) !== -1) {
          console.log('in col 9');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
          console.log('col 9: ' + column9);
        }
      }
      if ($(this).hasClass('row2')) {
        $('.row2').each(function(i) {
          row2.push($(this).html());
        })
        console.log('row 2: ' + row2);
        while ($.inArray(displayValue,row2) !== -1) {
          console.log('in row 2');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
      }
      if ($(this).hasClass('row3')) {
        $('.row3').each(function(i) {
          row3.push($(this).html());
        })
        console.log('row 3: ' + row3);
        while ($.inArray(displayValue,row3) !== -1) {
          console.log('in row 3');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
      }
      if ($(this).hasClass('row4')) {
        $('.row4').each(function(i) {
          row4.push($(this).html());
        })
        console.log('row 4: ' + row4);
        while ($.inArray(displayValue,row4) !== -1) {
          console.log('in row 4');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
      }
      if ($(this).hasClass('row5')) {
        $('.row5').each(function(i) {
          row5.push($(this).html());
        })
        console.log('row 5: ' + row5);
        while ($.inArray(displayValue,row5) !== -1) {
          console.log('in row 5');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
      }
      if ($(this).hasClass('row6')) {
        $('.row6').each(function(i) {
          row6.push($(this).html());
        })
        console.log('row 6: ' + row6);
        while ($.inArray(displayValue,row6) !== -1) {
          console.log('in row 6');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
      }
      if ($(this).hasClass('row7')) {
        $('.row7').each(function(i) {
          row7.push($(this).html());
        })
        console.log('row 7: ' + row7);
        while ($.inArray(displayValue,row7) !== -1) {
          console.log('in row 7');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
      }
      if ($(this).hasClass('row8')) {
        $('.row8').each(function(i) {
          row8.push($(this).html());
        })
        console.log('row 8: ' + row8);
        while ($.inArray(displayValue,row8) !== -1) {
          console.log('in row 8');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
      }
      if ($(this).hasClass('row9')) {
        $('.row9').each(function(i) {
          row9.push($(this).html());
        })
        console.log('row 9: ' + row9);
        while ($.inArray(displayValue,row9) !== -1) {
          console.log('in row 9');
          value = Math.floor(Math.random() * (10 - 1) + 1);
          displayValue = '<p>' + value + '</p>';
          console.log('new displayValue: ' + displayValue);
        }
      }
      $(this).html(displayValue);
    })
  };
  fillInRow('.row2')
  fillInRow('.row3')
  // fillInRow('.row4')
  // fillInRow('.row5')
  // fillInRow('.row6')
  // fillInRow('.row7')
  // fillInRow('.row8')
  // fillInRow('.row9')
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