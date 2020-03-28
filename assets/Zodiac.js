// this is a western zodiac
// structure of query + array + comments of script

// var nameInput = document.getElementsById("name-input");
// var birthdayInput = document.getElementsById("birthday-input");
// var birthCountryInput = document.getElementsById("country-input");

// returns 
// var sunSigns = "https://zodiacal.herokuapp.com/api";
// console.log(sunSigns);

// sunSigns length=12
    //0 Aries
    //1 Taurus
    //2 Gemini
    //3 Cancer 
    //4 Leo 
    //5 Virgo 
    //6 Libra 
    //7 Scorpio 
    //8 Saggittarius
    //9 Capricon
    //10 Aquarius
    //11 Pisces

// properties example:
/* "_id": "59740f0a734d1d6202a90186",
"name": "Taurus",
"__v": 0,
"famous_people": [],
"how_to_spot": [],
"secret_wish": [],
"hates": [],
"bad_traits": [],
"good_traits": [],
"favorites": [],
"ruling_planet": [],
"body_parts": [],
"symbol": "The bull",
"keywords": [],
"vibe": "Determined energy",
"compatibility": [],
"mental_traits": [],
"physical_traits": [],
"sun_dates": [],
"cardinality": "Fixed",
"element": "Earth"
*/

// // retuns rising physical and mental traits
// var risingSigns = "https://zodiacal.herokuapp.com/rising";
// console.log(risingSigns);

// properties example:
/* 
"_id": "5973d1694d75a100114e1d7c",
"__v": 0,
"rising_physical": [],
"rising_contents": [],
"rising_name": "Leo"
*/

// // returns name and its emotional traits
// var moonSigns = "https://zodiacal.herokuapp.com/moon";
// console.log(moonSigns);

// properties example:
/*
"_id": "59746193734d1d6202a9100b",
"moon_contents": [],
"moon_name": "Aries"
*/

// returns all 4 elements
// var elements = "https://zodiacal.herokuapp.com/elements";
// console.log(elements);

// properties example:
/*
"_id": "597434bd734d1d6202a90782",
"element_ascendant": [],
"description": [],
"element_contents": [],
"element_name": "Earth"
*/

// returns all 3 cardinalities (modality)
// var cardinity = "https://zodiacal.herokuapp.com/cardinalities";
// console.log(cardinity);

// properties example:
/*
"_id": "5974383e734d1d6202a9080e",
"description": [],
"cardinality_contents": [],
"cardinality_name": "Cardinal"
*/

var apis = {
    // returns sunSigns
    sunSigns: "https://zodiacal.herokuapp.com/api",
    // retuns rising physical and mental traits 
    risingSigns: "https://zodiacal.herokuapp.com/rising",
    // returns name and its emotional traits
    moonSigns: "https://zodiacal.herokuapp.com/moon",
    // returns all 4 elements
    elements: "https://zodiacal.herokuapp.com/elements",
    // returns all 3 cardinalities (modality)
    cardinity: "https://zodiacal.herokuapp.com/cardinalities",
}

function displayZodiac() {
    $.ajax({
        url: sunSigns,
        method: "GET"
    })
    .then(function(response) {
        console.log(response[0].rising_physical)
        console.log(response[0].famous_people)
        console.log(response)

        for (var i = 0; i < response.sunResults.length; i++) {
            var sunDiv = $("<div>");
            $(sunResults).append(sunDiv)
        }

        
    });

};
displayZodiac()  

$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    console.log(response);

    for (i = 0; i < response.cards.length; i++) {
    
        // the whole information on tarot
        var tarotInfor = $(".tarot-info");

        // the name is the name of each card which is being created inside of a div
        var nameResponse = response.cards[i].name;
        var name = $("<div>").text ("Card Name " + nameResponse);
        tarotInfor.append(name);

        // the value is the value of each card which is being created inside of a div
        // var valueResponse = response.cards[i].value;
        // var value = $("<div>").text ("The value is: " + valueResponse);
        // tarotInfor.append(value);


        //  create random gen of [0, 1] up or reverse 

        var zeroOrOne = Math.round(Math.random())

        if (zeroOrOne === 0) {
            // the meaningUpResponse is the meaning of each facing up card which is then being created inside of a div
            var meaningUpResponse = response.cards[i].meaning_up;
            var value = $("<div>").text ("Card Explanation: " + meaningUpResponse);
            tarotInfor.append(value);
        } else {
            // the meaningRevResponse is the meaning of each facing rev card which is then being created inside of a div
            var meaningRevResponse = response.cards[i].meaning_rev;
            var value = $("<div>").text ("Card Explanation: " + meaningRevResponse);
            tarotInfor.append(value);
    
        }

        var nameDescription = response.cards[i].desc;
        var value = $("<div>").text ("Card Description: " + nameDescription);
        tarotInfor.append(value);


    }

});


displayTarot();

