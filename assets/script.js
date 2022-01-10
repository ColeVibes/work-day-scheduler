var currentDate = moment().format("dddd" + ", " + "MMMM Do, YYYY")
$(currentDay).html("Today is " + currentDate)


// save any text/value in textarea element + the time slot ID to local storage after clicking save btn
$(".saveBtn").on("click", function () {
    var textInput = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr("id");
    localStorage.setItem(timeSlot, textInput)
})

var timeBlockColorHandler = function () {
    currentHour = moment().hour()

    $(".time-block").each(function () {
        if ($(this).attr("id") < currentHour) {
            $(this).children(".description").addClass("past") 
        }
        else if ($(this).attr("id") > currentHour) {
            $(this).children(".description").addClass("future")
        }
        else if ($(this).attr("id") == currentHour) {
            $(this).children(".description").addClass("present")
        }
    })
}

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

setInterval(function () {
    timeBlockColorHandler()
}, 1800000)

timeBlockColorHandler()
