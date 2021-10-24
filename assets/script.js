// Date at top pf calendar
$("#currentDay").text(moment().format("LLL"));
  function timeFrame() {
  var workHours = moment().hours();

// Time block function
$(".time-block").each(function () {
  var hourEl = $(this).attr("id");
  var hourDay = hourEl.substring(5, hourEl.length);
  var eachHour = parseInt(hourDay)
  var currentHour = parseInt(workHours);
    if (parseInt(eachHour) < parseInt(currentHour)) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (parseInt(eachHour) > parseInt(currentHour)) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
    else if (parseInt(eachHour) === parseInt(currentHour)) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    }
  })
};

// Save to local storage
$(document).ready(function () {
  var keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
    var value = localStorage.getItem(keys[i]);
    var temp = $("#" + keys[i]).find("textarea")
    temp.val(value);
  }
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  console.log(this);
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});

// Clear schedule
$("#clearSchedule").click(function() {
    localStorage.clear();
    window.location.assign("./index.html");
}); 

timeFrame();

}); 