// links of all the apis
const apis = {
    // returns sunSigns
    sunSigns: "https://zodiacal.herokuapp.com/api",
    // retuns rising physical and mental traits 
    risingSigns: "https://zodiacal.herokuapp.com/rising",
    // returns name and its emotional traits
    moonSigns: "https://zodiacal.herokuapp.com/moon",

}

// function for sunSigns
function displaySun(i) {
    $.ajax({
        url: apis.sunSigns,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
        //for (i = 0; i < response.length; i++) {
          
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

            // render on DOM
            let sunRow = $("<div class='row horoscope-row'>");
            // name of horoscope
            let sunName = $("<div class='sunName '>").text(sunNameResponse);
            let sunElement = $("<div class='sunshine'>").append(sunName);

            // good_traits
            let sunGoodTraits = $("<div class='sunGoodTraits'>").html("Good Traits : " + "<br>" + sunGoodTraitsResponse);
            let sunElement1 = $("<div class='sunshine1'>").append(sunGoodTraits);

            // bad_traits
            let sunBadTraits = $("<div class='sunBadTraits'>").html("Bad Traits: " + "<br>" + sunBadTraitsResponse);
            let sunElement2 = $("<div class=' sunshine2'>").append(sunBadTraits);

            // mental_traits
            let sunMentalTraits = $("<div class='sunMentalTraits'>").html("Mental Traits: " + "<br>" + sunMentalTraitsResponse);
            let sunElement3 = $("<div class='sunshine3'>").append(sunMentalTraits);

            // physical_traits
            let sunPhysicalTraits = $("<div class='sunPhysicalTraits'>").html("Physical Traits: " + "<br>" + sunPhysicalTraitsResponse);
            let sunElement4 = $("<div class='sunshine4'>").append(sunPhysicalTraits);

            // keywords
            let sunKeywords = $("<div class='sunKeyword'>").html("Keywords: " + "<br>" + sunKeywordsResponse);
            let sunElement5 = $("<div class='sunshine5'>").append(sunKeywords);
 
            // cardinality
            let sunCardinality = $("<div class='sunCardinality'>").html("Cardinality: " + "<br>" + sunCardinalityResponse);
            let sunElement6 = $("<div class='sunshine6'>").append(sunCardinality);

            // sun_dates
            let sunSunDates = $("<div class='sunSunDates'>").html("SunDates: " + "<br>" + sunSunDatesResponse  + "<br>");
            let sunElement7 = $("<div class='sunshine7'>").append(sunSunDates);

            // elements
            let sunElements = $("<div class='sunElements'>").html("Elements: " + "<br>" + sunElementsResponse);
            let sunElement8 = $("<div class='sunshine8'>").append(sunElements);
                     
            // name of famous people
            let sunFame = $("<div class='sunFame'>").html("Famouse People: " + "<br>"+ sunFameResponse);
            let sunElement9 = $("<div class='sunshine9'>").append(sunFame);
            
            $(sunRow).append(sunElement,sunElement1,sunElement2,sunElement3,sunElement4,sunElement5,sunElement6,sunElement7,sunElement8,sunElement9);
            $(".horoscope-info").append(sunRow); 
        //}
    });
}

// function for moonSigns
function displayMoon(i) {
    $.ajax({
        url: apis.moonSigns,
        
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
        //for (i = 0; i < response.length; i++) {
            let moonNameResponse = response[i].moon_name;
            let moonContentsResponse = response[i].moon_contents;
            // information on horoscope
            let moonRow = $("<div class='row horoscope-row'>");

            let moonName = $("<div class='moony'>").text("Moon Name: " + moonNameResponse);
            let moonElement = $("<div>").append(moonName);

            let moonContents = $("<div class='moonyMore'>").text("Moon Description: " + moonContentsResponse);
            let moonElement1 = $("<div>").append(moonContents);
            
            $(moonRow).append(moonElement,moonElement1);
            $(".horoscope-info").append(moonRow);
        //}
    });
}

$(".horoscopeBtn").on("click", function(){
    $(".horoscope-info").empty();
    $(".tarot-info").empty();
    event.preventDefault();
    event.stopPropagation();
    // 
    let selectedDate = $("#MMDD").val();
    if (selectedDate != ""){
        calculatingHoroscope(selectedDate);
    }
    else
    {
        $("#errorDate").show();
    }
});

