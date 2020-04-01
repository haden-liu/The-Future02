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
    $(".horoscope-info").empty();
    $(".tarot-info").empty();
    event.preventDefault();
    event.stopPropagation();
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
            let sunElement = $("<div class='col-sm-2 sunshine'>").append(sunName);
            $(sunRow).append(sunElement);
            $(".horoscope-info").append(sunRow);
            // good_traits
            let sunGoodTraits = $("<div class='sunGoodTraits'>").html("Good Traits : " + "<br>" + sunGoodTraitsResponse);
            let sunElement1 = $("<div class='sunshine1'>").append(sunGoodTraits);
            $(sunRow).append(sunElement1);
            $(".horoscope-info").append(sunRow);
            // bad_traits
            let sunBadTraits = $("<div class='sunBadTraits'>").html("Bad Traits: " + "<br>" + sunBadTraitsResponse);
            let sunElement2 = $("<div class=' sunshine2'>").append(sunBadTraits);
            $(sunRow).append(sunElement2);
            $(".horoscope-info").append(sunRow);

            // mental_traits
            let sunMentalTraits = $("<div class='sunMentalTraits'>").html("Mental Traits: " + "<br>" + sunMentalTraitsResponse);
            let sunElement3 = $("<div class='sunshine3'>").append(sunMentalTraits);
            $(sunRow).append(sunElement3);
            $(".horoscope-info").append(sunRow);  
            // physical_traits
            let sunPhysicalTraits = $("<div class='sunPhysicalTraits'>").html("Physical Traits: " + "<br>" + sunPhysicalTraitsResponse);
            let sunElement4 = $("<div class='sunshine4'>").append(sunPhysicalTraits);
            $(sunRow).append(sunElement4);
            $(".horoscope-info").append(sunRow); 
            //.append(sunPhysicalTraits);
            // keywords
            let sunKeywords = $("<div class='sunKeyword'>").html("Keywords: " + sunKeywordsResponse);
            let sunElement5 = $("<div class='sunshine5'>").append(sunKeywords);
            $(sunRow).append(sunElement5);
            $(".horoscope-info").append(sunRow); 
            //.append(sunKeywords);
            // cardinality
            let sunCardinality = $("<div class='sunCardinality'>").html("Cardinality: " + sunCardinalityResponse);
            let sunElement6 = $("<div class='sunshine6'>").append(sunCardinality);
            $(sunRow).append(sunElement6);
            $(".horoscope-info").append(sunRow); 
            //.append(sunCardinality);
            // sun_dates
            let sunSunDates = $("<div class='sunSunDates'>").html("SunDates: " + sunSunDatesResponse);
            let sunElement7 = $("<div class='sunshine7'>").append(sunSunDates);
            $(sunRow).append(sunElement7);
            $(".horoscope-info").append(sunRow); 
            //.append(sunSunDates);
            // elements
            let sunElements = $("<div class='sunElements'>").html("Elements: " + sunElementsResponse);
            let sunElement8 = $("<div class='sunshine8'>").append(sunElements);
            $(sunRow).append(sunElement8);
            $(".horoscope-info").append(sunRow); 
            //.append(sunElements);                        
            // name of famous people
            let sunFame = $("<div class='sunFame'>").html("Famouse People: " + "<br>" + sunFameResponse);
            let sunElement9 = $("<div class='sunshine9'>").append(sunFame);
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

            let moonName = $("<div class='moony'>").text("Moon Name: " + moonNameResponse);
            let moonElement = $("<div>").append(moonName);
            $(moonRow).append(moonElement);
            $(".horoscope-info").append(moonRow);

            let moonContents = $("<div class='moonyMore'>").text("Moon Description: " + moonContentsResponse);
            let moonElement1 = $("<div>").append(moonContents);
            $(moonRow).append(moonElement1);
            $(".horoscope-info").append(moonRow);


        }
    });
};

