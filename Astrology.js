function displayTarot() {

    var queryURL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=20";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        $(".tarot info").text(JSON.stringify(response));
    });
}

displayTarot();