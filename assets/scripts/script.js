
// function calulating the correct horoscope
function calculatingHoroscope (date) {
    let selectedDate = moment(date);
    let selectedMonth = selectedDate.month()+1;
    let selectedDay = selectedDate.date();
    console.log(selectedMonth)
    console.log(selectedDay)
    console.log(selectedDate)
    // Aries
    if ((selectedMonth === 3 && selectedDay >= 21) || (selectedMonth === 4 && selectedDay <= 19)){
        displayMoon(0);
        displaySun(0);
    }
    // Taurus
    if ((selectedMonth === 4 && selectedDay >= 20) || (selectedMonth === 5 && selectedDay <= 21)){
        displayMoon(3);
        displaySun(1);
    }
    // Gemini 
    if ((selectedMonth === 5 && selectedDay >= 21) || (selectedMonth === 6 && selectedDay <= 20)){
        displayMoon(3);
        displaySun(2);
    }
    // Cancer
    if ((selectedMonth === 6 && selectedDay >= 21) || (selectedMonth === 7 && selectedDay <= 22)){
        displayMoon(1);
        displaySun(3);
    }
    // Leo 
    if ((selectedMonth === 7 && selectedDay >= 23) || (selectedMonth === 8 && selectedDay <= 22)){
        displayMoon(4);
        displaySun(4);
    }
    // Virgo
    if ((selectedMonth === 8 && selectedDay >= 23) || (selectedMonth === 9 && selectedDay <= 22)){
        displayMoon(5);
        displaySun(5);
    }
    // Libra
    if ((selectedMonth === 9 && selectedDay >= 23) || (selectedMonth === 10 && selectedDay <= 22)){
        displayMoon(6);
        displaySun(6);
    }
    // Scorpio
    if ((selectedMonth === 10 && selectedDay >= 23) || (selectedMonth === 11 && selectedDay <= 21)){
        displayMoon(7);
        displaySun(7);
    }
    // Sagittarus
    if ((selectedMonth === 11 && selectedDay >= 22) || (selectedMonth === 12 && selectedDay <= 21)){
        displayMoon(8);
        displaySun(8);
    }
    // Capricorn
    if ((selectedMonth === 12 && selectedDay >= 22) || (selectedMonth === 1 && selectedDay <= 19)){
        displayMoon(9);
        displaySun(9);
    }
    // Aquarius
    if ((selectedMonth === 1 && selectedDay >= 20) || (selectedMonth === 2 && selectedDay <= 18)){
        displayMoon(10);
        displaySun(10);
    }
    // Piscis
    if ((selectedMonth === 2 && selectedDay >= 19) || (selectedMonth === 3 && selectedDay <= 20)){
        displayMoon(11);
        displaySun(11);
    }
}

// moment.js current time function
const intervalTime = setInterval (function(){ 
    let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    $("#time-date").text(currentTime,)
}, 1000);