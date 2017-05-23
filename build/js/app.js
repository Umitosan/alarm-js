(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
