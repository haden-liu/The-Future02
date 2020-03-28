function displayTarot() {

    // var numberOfCards = "";
    // var queryURL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=" + numberOfCards;
    var queryURL = "https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3";

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
}

displayTarot();
        
        //samples structure of json format
        
        //"cards"[0]: {

        //"name": "The Last Judgment",
        //"value": "20",
        //"meaning_up": "Change of position, renewal, outcome. Another account specifies total loss though lawsuit.",
        //"meaning_rev": "Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
        //"desc": "I have said that this symbol is essentially invariable in all Tarot sets, or at least the variations do not alter its character. The great angel is here encompassed by clouds, but he blows his bannered trumpet, and the cross as usual is displayed on the banner. The dead are rising from their tombs--a woman on the right, a man on the left hand, and between them their child, whose back is turned. But in this card there are more than three who are restored, and it has been thought worth while to make this variation as illustrating the insufficiency of current explanations. It should be noted that all the figures are as one in the wonder, adoration and ecstacy expressed by their attitudes. It is the card which registers the accomplishment of the great work of transformation in answer to the summons of the Supernal--which summons is heard and answered from within.\nHerein is the intimation of a significance which cannot well be carried further in the present place. What is that within us which does sound a trumpet and all that is lower in our nature rises in response--almost in a moment, almost in the twinkling of an eye? Let the card continue to depict, for those who can see no further, the Last judgment and the resurrection in the natural body; but let those who have inward eyes look and discover therewith. They will understand that it has been called truly in the past a card of eternal life, and for this reason it may be compared with that which passes under the name of Temperance."
        //},

        //"cards"[1]:{
        
        //"name": "Queen of Swords",
        //"value": "queen",
       //"meaning_up": "Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.",
        //"meaning_rev": "Malice, bigotry, artifice, prudery, bale, deceit.",
        //"desc": "Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair the left hand is extended, the arm raised her countenance is severe but chastened; it suggests familiarity with sorrow. It does not represent mercy, and, her sword notwithstanding, she is scarcely a symbol of power."
        //},


        //"cards"[2]{
        // "name": "The Devil",
        //"value": "15",
        //"value_int": 15,
        //"meaning_up": "Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.",
        //"meaning_rev": "Evil fatality, weakness, pettiness, blindness.",
        //"desc": "The design is an accommodation, mean or harmony, between several motives mentioned in the first part. The Horned Goat of Mendes, with wings like those of a bat, is standing on an altar. At the pit of the stomach there is the sign of Mercury. The right hand is upraised and extended, being the reverse of that benediction which is given by the Hierophant in the fifth card. In the left hand there is a great flaming torch, inverted towards the earth. A reversed pentagram is on the forehead. There is a ring in front of the altar, from which two chains are carried to the necks of two figures, male and female. These are analogous with those of the fifth card, as if Adam and Eve after the Fall. Hereof is the chain and fatality of the material life.\nThe figures are tailed, to signify the animal nature, but there is human intelligence in the faces, and he who is exalted above them is not to be their master for ever. Even now, he is also a bondsman, sustained by the evil that is in him and blind to the liberty of service. With more than his usual derision for the arts which he pretended to respect and interpret as a master therein, Éliphas Lévi affirms that the Baphometic figure is occult science and magic. Another commentator says that in the Divine world it signifies predestination, but there is no correspondence in that world with the things which below are of the brute. What it does signify is the Dweller on the Threshold without the Mystical Garden when those are driven forth therefrom who have eaten the forbidden fruit."
        //},




