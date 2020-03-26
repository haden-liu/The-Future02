// this is a western zodiac
// structure of query + array + comments of script

// var nameInput = document.getElementsById("name-input");
// var birthdayInput = document.getElementsById("birthday-input");
// var birthCountryInput = document.getElementsById("country-input");

// returns 
var sunSigns = "https://zodiacal.herokuapp.com/api";
console.log(sunSigns);

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

// sunSigns[0] famous_people: length=32
    // 0: "Lady Gaga"
    // 2: " Celine Dion"
    // 16: " Kourtney Kardashian"
    // 17: " Big Sean"
    // 22: " Tommy Hilfiger"
    // 26: " Jessie J"
    // 28: " Robert Downey Jr."

// sunSigns[1] famous_people:



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

    })
        .then(function(response) {
            console.log(response[0].rising_physical)
            console.log(response[0].famous_people)
            console.log(response)
            
            

            var sunResults = response;

            for (var i = 0; i < sunResults.length; i++) {
                var sunDiv = $("<div>");
                $(sunResults).append(sunDiv)
            }

            
        });

};
displayZodiac()  

