$(function () {
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();
});
$(document).ready(function () {
    $("form").submit(function () {
        var name = $("input[name=name]").val();

        if (name === "") {
            var htmlString = [
                "<h2>Warning!</h2>",
                "<h3>You Forgot to:</h3>",
                "<p>Enter Your Name! </p>"
            ].join("\n");
            $(".message-col").html(htmlString);
            return false;
        }

        var from = $("input[name=from]").val();
        var to = $("input[name=to]").val();
        
        var message = "Hi " + name + "! You booked the flight from " + from + " to " + to;

        alertify.confirm(message, function (e) {
            if (e) {
                // user clicked "ok"
                return false;
            } else {
                // user clicked "cancel"
                return false;
            }
        });
        // alert("Hi " + name + "! You booked the flight from "
        //         + from + " to " + to);
        return false;
    })
});