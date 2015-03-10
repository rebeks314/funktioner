$(document).ready(function() {

    addListener();
    
    


});


//en "lyssnare" till knappen
function addListener() {
    $(".knapp").click(function() {
        var numberDice = getDice();
        var dice = rollDice();
        console.log("numberDice: "+numberDice);
        $('<p>').text(dice).appendTo(".ruta");

    });
}
//slumpgenerator
function rollDice() {
    var x = Math.floor((Math.random() * 6) + 1);
    var n = x.toString();
    return n;
    
}

function getDice(){
    console.log(" getdice körs");
    return $('.radioKnapp:checked').val();
    
    for( var i = 0; i < numberDice; i++){
        var x = Math.floor((Math.random() * 6) + 1);
        summa += x;
        
        
    }
    
}

