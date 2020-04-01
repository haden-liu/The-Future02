// links of all the apis
const apis = {
    // returns sunSigns
    sunSigns: "https://zodiacal.herokuapp.com/api",
    // retuns rising physical and mental traits 
    risingSigns: "https://zodiacal.herokuapp.com/rising",
    // returns name and its emotional traits
    moonSigns: "https://zodiacal.herokuapp.com/moon",

}

$(".horoscopeBtn").on("click", function(){
    event.preventDefault();
    displaySun();
    displayMoon();
});

// function for sunSigns
function displaySun() {
    $.ajax({
        url: apis.sunSigns,
        method: "GET"
    })
    .then(function(response) {
        
        for (i = 0; i < response.length; i++) {
          
            // declaration of variables
            let sunNameResponse = response[i].name;
            let sunFameResponse = response[i].famous_people;
            let sunBadTraitsResponse = response[i].bad_traits;
            let sunGoodTraitsResponse = response[i].good_traits;
            let sunPhysicalTraitsResponse = response[i].physical_traits;
            let sunKeywordsResponse = response[i].keywords;
            let sunSunDatesResponse = response[i].sun_dates;
            let sunElementsResponse = response[i].element;
            let sunMentalTraitsResponse = response[i].mental_traits;
            let sunCardinalityResponse = response[i].cardinality;

            //console.log(sunNameResponse)
            // render on DOM
            let sunRow = $("<div class='row horoscope-row'>");

            let sunName = $("<div class='sunName '>").text(sunNameResponse);
            let sunElement = $("<div class='col-sm-2'>").append(sunName);
            $(sunRow).append(sunElement);
            $(".horoscope-info").append(sunRow);
            // good_traits
            let sunGoodTraits = $("<div class='sunGoodTraits'>").text("Good Traits: " + sunGoodTraitsResponse);
            let sunElement1 = $("<div class='col-sm-2'>").append(sunGoodTraits);
            $(sunRow).append(sunElement1);
            $(".horoscope-info").append(sunRow);
            // bad_traits
            let sunBadTraits = $("<div class='sunBadTraits'>").text("Bad Traits: " + sunBadTraitsResponse);
            let sunElement2 = $("<div class='col-sm-2'>").append(sunBadTraits);
            $(sunRow).append(sunElement2);
            $(".horoscope-info").append(sunRow);

            // mental_traits
            let sunMentalTraits = $("<div class='sunMentalTraits'>").text("Mental Traits: " + sunMentalTraitsResponse);
            let sunElement3 = $("<div class='col-sm-2'>").append(sunMentalTraits);
            $(sunRow).append(sunElement3);
            $(".horoscope-info").append(sunRow);  
            // physical_traits
            let sunPhysicalTraits = $("<div class='sunPhysicalTraits'>").text("Physical Traits: " + sunPhysicalTraitsResponse);
            let sunElement4 = $("<div class='col-sm-2'>").append(sunPhysicalTraits);
            $(sunRow).append(sunElement4);
            $(".horoscope-info").append(sunRow); 
            //.append(sunPhysicalTraits);
            // keywords
            let sunKeywords = $("<div class='sunKeyword'>").text("Keywords: " + sunKeywordsResponse);
            let sunElement5 = $("<div class='col-sm-2'>").append(sunKeywords);
            $(sunRow).append(sunElement5);
            $(".horoscope-info").append(sunRow); 
            //.append(sunKeywords);
            // cardinality
            let sunCardinality = $("<div class='sunCardinality'>").text("Cardinality: " + sunCardinalityResponse);
            let sunElement6 = $("<div class='col-sm-2'>").append(sunCardinality);
            $(sunRow).append(sunElement6);
            $(".horoscope-info").append(sunRow); 
            //.append(sunCardinality);
            // sun_dates
            let sunSunDates = $("<div class='sunSunDates'>").text("SunDates: " + sunSunDatesResponse);
            let sunElement7 = $("<div class='col-sm-2'>").append(sunSunDates);
            $(sunRow).append(sunElement7);
            $(".horoscope-info").append(sunRow); 
            //.append(sunSunDates);
            // elements
            let sunElements = $("<div class='sunElements'>").text("Elements: " + sunElementsResponse);
            let sunElement8 = $("<div class='col-sm-2'>").append(sunElements);
            $(sunRow).append(sunElement8);
            $(".horoscope-info").append(sunRow); 
            //.append(sunElements);                        
            // name of famous people
            let sunFame = $("<div class='sunFame'>").text("Famouse People: " + sunFameResponse);
            let sunElement9 = $("<div class='col-sm-2'>").append(sunFame);
            $(sunRow).append(sunElement9);
            $(".horoscope-info").append(sunRow); 
        }
    });
};

// function for moonSigns
function displayMoon() {
    $.ajax({
        url: apis.moonSigns,
        
        method: "GET"
    })
    .then(function(response) {

        for (i = 0; i < response.length; i++) {
            let moonNameResponse = response[i].moon_name;
            let moonContentsResponse = response[i].moon_contents;
            // information on horoscope
            let moonRow = $("<div class='row horoscope-row'>");

            let moonName = $("<div class='col-sm-2'>").text("Moon Name: " + moonNameResponse);
            let moonElement = $("<div class='col-sm-2'>").append(moonName);
            $(moonRow).append(moonElement);
            $(".horoscope-info").append(moonRow);

            let moonContents = $("<div class='col-sm-2'>").text("Moon Description: " + moonContentsResponse);
            let moonElement1 = $("<div class='col-sm-2'>").append(moonContents);
            $(moonRow).append(moonElement1);
            $(".horoscope-info").append(moonRow);


        }
    });
};

