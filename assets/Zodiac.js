// this is a western zodiac
// structure of query + array + comments of script

// var nameInput = document.getElementsById("name-input");
// var birthdayInput = document.getElementsById("birthday-input");
// var birthCountryInput = document.getElementsById("country-input");

// returns 
var sunSigns = "https://zodiacal.herokuapp.com/api";
console.log(sunSigns);
// Name of famous - 

// retuns rising physical and mental traits
var risingSigns = "https://zodiacal.herokuapp.com/rising";
console.log(risingSigns);

// returns name and its emotional traits
var moonSigns = "https://zodiacal.herokuapp.com/moon";
console.log(moonSigns);

// returns all 4 elements
var elements = "https://zodiacal.herokuapp.com/elements";
console.log(elements);

// returns all 3 cardinalities (modality)
var cardinity = "https://zodiacal.herokuapp.com/cardinalities";
console.log(cardinity);

function displayZodiac() {
    $.ajax({
        url: sunSigns,
        method: "GET"
    }).then(function(response) {
            console.log(response[0].famous_people)
            console.log(response)
            var sunResults = response;

            for (var i = 0; i < sunResults.length; i++) {
                var sunDiv = $("<div>");
            }

            
        });

};
displayZodiac()
