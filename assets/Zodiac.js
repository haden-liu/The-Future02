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

// sunSigns[1] famous_people: length=27
    // 0: "Adele"
    // 2: " David Beckham"
    // 3: " Stevie Wonder"
    // 4: " Donatella Versace"
    // 7: " Chris Brown"
    // 11: " Queen Elizabeth II"
    // 21: " William Shakespeare"

// sunSigns[2] famous_people: length=33
    // 0: "Angelina Jolie"
    // 1: " Kanye West"
    // 21: " Kanye West"
    // 22: " Angelina Jolie"
    // 23: " John F. Kennedy"
    // 24: " George Bush"

// sunSigns[3] famous_people: length=30
    // 1: " Tom Cruise"
    // 2: " Ariana Grande"
    // 3: " Selena Gomez"
    // 4: " Khloe Kardashian"
    // 5: " Jaden Smith"
    // 6: " Kourtney Kardashian"
    // 15: " OJ Simpson"
    // 16: " Selena Gomez"
    // 17: " Khloe Kardashian"
    // 18: " John Quincy Adams"
    // 20: " Gerald R. Ford"
    // 21: " George W. Bush"
    // 22: " Franz Kafka"
    // 23: " Nathaniel Hawthorne"
    // 26: " Emily Bronte"
    // 28: " Giorgio Armani"

// sunSigns[4] famous_people: length=31
    // 0: "Madonna"
    // 3: " Barack Obama"
    // 10: " Jennifer Lawrence"
    // 16: " Arnold Schwarzenegger"
    // 18: " Whitney Houston"
    // 22: " Jennifer Lawrence"
    // 27: " Yves Saint-Laurent"
    // 28: " Coco Chanel"
    // 29: " Michael Kors"
    // 30: " Domenico Dolce"

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

// retuns rising physical and mental traits
var risingSigns = "https://zodiacal.herokuapp.com/rising";
console.log(risingSigns);

// properties example:
/* 
"_id": "5973d1694d75a100114e1d7c",
"__v": 0,
"rising_physical": [],
"rising_contents": [],
"rising_name": "Leo"
*/

// returns name and its emotional traits
var moonSigns = "https://zodiacal.herokuapp.com/moon";
console.log(moonSigns);

// properties example:
/*
"_id": "59746193734d1d6202a9100b",
"moon_contents": [],
"moon_name": "Aries"
*/

// returns all 4 elements
var elements = "https://zodiacal.herokuapp.com/elements";
console.log(elements);

// properties example:
/*
"_id": "597434bd734d1d6202a90782",
"element_ascendant": [],
"description": [],
"element_contents": [],
"element_name": "Earth"
*/

// returns all 3 cardinalities (modality)
var cardinity = "https://zodiacal.herokuapp.com/cardinalities";
console.log(cardinity);

// properties example:
/*
"_id": "5974383e734d1d6202a9080e",
"description": [],
"cardinality_contents": [],
"cardinality_name": "Cardinal"
*/

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

