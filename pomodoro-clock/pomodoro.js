$(document).ready(function(){
  var minutes = $('#minutes').text(),
  seconds = $('#seconds').text(),
  memoMin = minutes,
  t,
  breakMin = $('#br-minutes').text();
  seconds = 60;
  minutes = minutes - 1;

  function countTime(){
    t = setInterval(function(){
      seconds--;
      if(minutes == 00 && seconds == 00){
        //Set the break
        alert("Break!");
        $('#minutes').text(breakMin);
        $('#seconds').text("00");
        minutes = breakMin -1;
        seconds = 59;
      }else if(seconds == 00){
        minutes --;
        seconds = 59;
      }

      //add 0 before the number if is < 10
      //seconds
      if(seconds < 10){
        $('#seconds').text("0" + seconds);
      }else
      $('#seconds').text(seconds);
      //minutes
      if(minutes < 10){
        $('#minutes').text("0" + minutes);
      }else
      $('#minutes').text(minutes);

    }, 1000);

  }//ebd countTime

  //buttons
  $('.minus').click(function(){
    var auxMin = $('#minutes').text() - 1;
    $('#minutes').text(auxMin);
    minutes = auxMin - 1;
    memoMin = auxMin;
  });

  $('.plus').click(function(){
    var auxMin = +$('#minutes').text() + 1;
    $('#minutes').text(auxMin);
    minutes = auxMin - 1;
    memoMin = auxMin;
  });

  $('.start').click(function(){
    countTime();
  });

  $('.stop').click(function(){
    clearInterval(t);
  });

  $('.reset').click(function(){
    $('#minutes').text(memoMin);
    $('#seconds').text("00");
  });
  //Break buttons
  $('.br-minus').click(function(){
    var auxMin = $('#br-minutes').text() - 1;
    $('#br-minutes').text(auxMin);
    //minutes = auxMin - 1;
    breakMin = auxMin;
  });

  $('.br-plus').click(function(){
    var auxMin = +$('#br-minutes').text() + 1;
    $('#br-minutes').text(auxMin);
    //minutes = auxMin - 1;
    breakMin = auxMin;
  });

});
