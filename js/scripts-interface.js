$(document).ready(function(){

  var time = function() {
    var myTime = new Date();
    var hours = myTime.getHours();
    var minutes = myTime.getMinutes();
    var seconds = myTime.getSeconds();
    return (hours + ":" + minutes + ":" + seconds)
  };

  var userAlarm = null

  $(".clock").text(time());

  setInterval(function() {
    $(".clock").text(time());
  }, 1000);

  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    userAlarm = $('#user-alarm').val();
  });

  var check_alarm = function(time, alarm) {
    if (time == alarm) {
      $('#alarm-alert').text('wakeup!');
    }
  };

  setInterval(function() {
    var currentTime = time().slice(0,5)
    check_alarm(currentTime, userAlarm);
  }, 1000);

});
