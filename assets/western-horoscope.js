// links of all the apis
const apis = {
    // returns sunSigns
    sunSigns: "https://zodiacal.herokuapp.com/api",
    // retuns rising physical and mental traits 
    risingSigns: "https://zodiacal.herokuapp.com/rising",
    // returns name and its emotional traits
    moonSigns: "https://zodiacal.herokuapp.com/moon",

}

$(".westernBtn").on("click", function(){
    event.preventDefault();
    displaySun();
});

// function for sunSigns
function displaySun() {
    $.ajax({
        url: apis.sunSigns,
        method: "GET"
    })
    .then(function(response) {

        for (i = 0; i < response.length; i++) {
            // the whole information on western horoscope
            let westernHoroscope = $(".western-Horoscope");

            // names of sun signs
            let sunNameResponse = response[i].name;

            let sunName = $("<div>").text("Sign Name: " + sunNameResponse);
            westernHoroscope.append(sunName);

            // name of famous people
            let sunFameResponse = response[i].famous_people;

            let sunFame = $("<div>").text("Famouse People: " + sunFameResponse);
            westernHoroscope.append(sunFame);

            // bad_traits
            let sunBadTraitsResponse = response[i].bad_traits;

            let sunBadTraits = $("<div>").text("Bad Traits: " + sunBadTraitsResponse);
            westernHoroscope.append(sunBadTraits);

            // good_traits
            let sunGoodTraitsResponse = response[i].good_traits;

            let sunGoodTraits = $("<div>").text("Good Traits: " + sunGoodTraitsResponse);
            westernHoroscope.append(sunGoodTraits);

            // mental_traits
            let sunMentalTraitsResponse = response[i].mental_traits;

            let sunMentalTraits = $("<div>").text("Mental Traits: " + sunMentalTraitsResponse);
            westernHoroscope.append(sunMentalTraits);

            // physical_traits
            let sunPhysicalTraitsResponse = response[i].physical_traits;

            let sunPhysicalTraits = $("<div>").text("Physical Traits: " + sunPhysicalTraitsResponse);
            westernHoroscope.append(sunPhysicalTraits);

            // keywords
            let sunKeywordsResponse = response[i].keywords;

            let sunKeywords = $("<div>").text("Keywords: " + sunKeywordsResponse);
            westernHoroscope.append(sunKeywords);

            // cardinality
            let sunCardinalityResponse = response[i].cardinality;

            let sunCardinality = $("<div>").text("Cardinality: " + sunCardinalityResponse);
            westernHoroscope.append(sunCardinality);

            // sun_dates
            let sunSunDatesResponse = response[i].sun_dates;

            let sunSunDates = $("<div>").text("SunDates: " + sunSunDatesResponse);
            westernHoroscope.append(sunSunDates);

            // elements
            let sunElementsResponse = response[i].element;

            let sunElements = $("<div>").text("Elements: " + sunElementsResponse);
            westernHoroscope.append(sunElements);
        }

    });

};

// function for risingSigns
function displayRising() {
    $.ajax({
        url: apis.risingSigns,
        
        method: "GET"
    })
    .then(function(response) {

        for (i = 0; i < response.length; i++) {
            // the whole information on western horoscope
            let westernHoroscope = $(".western-Horoscope");

            // names of rising signs
            let risingNameResponse = response[i].rising_name;

            let risingName = $("<div>").text("Sign Name: " + risingNameResponse);
            westernHoroscope.append(risingName);


        }
    });

};
// // displayRising()  


// function for moonSigns
function displayMoon() {
    $.ajax({
        url: apis.moonSigns,
        
        method: "GET"
    })
    .then(function(response) {

        for (i = 0; i < response.length; i++) {
            // the whole information on western horoscope
            let westernHoroscope = $(".western-Horoscope");

            // names of moon signs
            let moonNameResponse = response[i].rising_name;

            let moonName = $("<div>").text("Sign Name: " + moonNameResponse);
            westernHoroscope.append(moonName);


        }
    });
};
// displayMoon()  
