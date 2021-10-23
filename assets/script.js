var workCalender = moment();


$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do")); 
    $(".saveBtn").on("click", function(){
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);

    }); 
}); 

