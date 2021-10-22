$(document).ready(colorChange());
var saveBtn = $(".saveBtn");
var time = $(".hour");
var plan = $(".description");

var hour7 = $("#7").attr("id");
var hour8 = $("#8").attr("id");
var hour9 = $("#9").attr("id");
var hour10 = $("#10").attr("id");
var hour11 = $("#11").attr("id");
var hour12 = $("#12").attr("id");
var hour13 = $("#13").attr("id");
var hour14 = $("#14").attr("id");
var hour15 = $("#15").attr("id");
var hour16 = $("#16").attr("id");
var hour17 = $("#17").attr("id");


var currentHour = moment().format('H');
var currentTime = moment().format("MMMM Do YYYY h:mma");
$("#currentDay").text(currentTime);


function loadSchedule() {
  $("#7").children("textarea").text(localStorage.getItem("7am"));
  $("#8").children("textarea").text(localStorage.getItem("8am"));
  $("#9").children("textarea").text(localStorage.getItem("9am"));
  $("#10").children("textarea").text(localStorage.getItem("10am"));
  $("#11").children("textarea").text(localStorage.getItem("11am"));
  $("#12").children("textarea").text(localStorage.getItem("12am"));
  $("#13").children("textarea").text(localStorage.getItem("13am"));
  $("#14").children("textarea").text(localStorage.getItem("14am"));
  $("#15").children("textarea").text(localStorage.getItem("15am"));
  $("#16").children("textarea").text(localStorage.getItem("16am"));
  $("#17").children("textarea").text(localStorage.getItem("17am"));
}
loadSchedule() 
saveBtn.on("click", function() {
  time = $(this).siblings(".hour").text();
  plan = $(this).siblings(".description").val();

  localStorage.setItem(time, plan);

});


   
function colorChange () {
    
  var currentTime = moment().hours();
// How the blocks know if they are past, present or future
  $(".row").each(function () {
      var scheduledTime = parseInt($(this).attr("id"));
  

      if (currentTime > scheduledTime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      } else if (currentTime < scheduledTime) {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      } else {
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("present");
      }
  });
}

colorChange () 

$(function() {
  $(".decription").draggable();

  $('.trash').droppable({
      over: function(event, ui) {
          ui.draggable.remove();
      }
  });
});

