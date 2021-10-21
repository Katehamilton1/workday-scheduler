var saveBtn = $(".saveBtn");
var time = $(".hour");
var plan = $(".description");

var hour7 = $("#7");
var hour8 = $("#8");
var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 =$("#13");
var hour2 = $("#14");
var hour3 = $("#15");



var currentHour = moment().format('H');

var currentTime = moment().format("MMMM Do YYYY h:mma");
$("#currentDay").text(currentTime);

saveBtn.on("click", function() {
  time = $(this).siblings(".hour").text();
  plan = $(this).siblings(".description").val();

  localStorage.setItem(time, plan);
});

function hourUpdate(){
    var currentHour = moment().hours();
    console.log(currentHour)


  
    if (currentHour > hour7) {
     console.log("it worked");
    }
  }
