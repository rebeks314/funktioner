$(document).ready(function() {
//    console.log("hej");
    $(".knapp").click(function() {
        var x = Math.floor((Math.random() * 6) + 1);
       var n = x.toString();
        $('<p>').text(n).appendTo("#1");
        console.log(n);
   
    });
});


