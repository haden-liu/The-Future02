// function that retrieves the Tarot information
function displayTarot() {
   
    let queryURL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

        for (i = 0; i < response.cards.length; i++) {
            // the whole information on tarot
            let tarotInfor = [];
            // the name is the name of each card which is being created inside of a div
            let nameResponse = response.cards[i].name;
            let nameDescription = response.cards[i].desc;
            let zeroOrOne = Math.round(Math.random())
            let meaningResponse;
            if (zeroOrOne === 0) {
                // the meaningUpResponse is the meaning of each facing up card which is then being created inside of a div
                meaningResponse = response.cards[i].meaning_up;
            } else {
                // the meaningRevResponse is the meaning of each facing rev card which is then being created inside of a div
                meaningResponse = response.cards[i].meaning_rev;
            };
            // Creating the Dom elements
            let cardRow = $("<div class='row tarot-row'>");
            // Card Name 
            let cardName = $("<div class='cardName'>").text(nameResponse);
            let cardElements = $("<div class='col-sm-4'>").append(cardName);
            $(cardRow).append(cardElements);
            // Description
            let cardDescription = $("<div class='cardDescription'>").text( nameDescription); 
            let cardDescDesc = $("<div class='col-sm-4'>").append(cardDescription);
            $(cardRow).append(cardDescDesc);     
            // card info
            let cardInfo = $("<div class='cardInfo'>").text(meaningResponse);
            let cardElInfo = $("<div class='col-sm-4'>").append(cardInfo);
            // Append all elements into cardrow then into the html element
            $(cardRow).append(cardElInfo);
            $(".tarot-info").append(cardRow);
        }
    });
}

$(".tarotBtn").on("click", function(){
    $(".horoscope-info").empty();
    $(".tarot-info").empty();
    event.preventDefault();
    event.stopPropagation();
    displayTarot()
});
