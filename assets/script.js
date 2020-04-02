
// function calulating the correct horoscope

function calculatingHoroscope (date) {
    let selectedDate = moment(date);
    let selectedMonth = selectedDate.month();
    let selectedDay = selectedDate.date();

    if ((selectedMonth == 2 && selectedDay >= 20) || (selectedMonth == 3 && selectedDay <= 21)){
        displayMoon(0);
        displaySun(0);
    }
}   

