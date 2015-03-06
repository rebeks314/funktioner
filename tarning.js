$(document).ready(function() {

addListener();
   
//en "lyssnare" till knappen
    function addListener() {
            $(".knapp").click(function() {
            var dice = rollDice();
            $('<p>').text(dice).appendTo(".ruta");

        });
    }
//slumpgenerator
    function rollDice() {
        var x = Math.floor((Math.random() * 6) + 1);
        var n = x.toString();
        return n;
    }

});


