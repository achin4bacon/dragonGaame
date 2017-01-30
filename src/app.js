var input;

var hasBeenToWest;
var hasKey = false;
var hasStaff = false;
var hasBeenToWest = false;

var isEntrance = false;
var isWest = false;
var isNorth = false;
var isNorthEast = false;
var isNorthEastOne = false;
var isSouthEast = false;
var isNorthEastEast = false;
var isNorthNorthEast = false;

entranceMsg();

$("#ok").on("click", process);
$('#entryBox').on("keyup", function (evt) {
    if (evt.keyCode === 13) {
        process();
    }
});


function process() {
    if (isEntrance === true) {
        entrance();
    }
    else if (isWest === true) {
        westWing();
    }
    else if (isNorth === true) {
        northWing();
    }
    else if (isNorthEast === true) {
        northEast();
    }
    else if (isnorthNorthEast === true) {
        northNorthEast();
    }
    else if (isnorthEastOne === true) {
        northEastOne();
    }
    // else if (isnorthEastEast === true)
    // {
    //     northEastEast();
    // }
    else if (isSouthEast === true) {
        southEast();
    }
}



function entranceMsg() {
    msg = "Dovakiin. So happy you're here. Welcome to Hyrule castle. One of Queen Daenerys's dragons has gotten loose and is wreaking havoc in the castle. We need your help to subdue the dragon. There are two doors in this room. Would you like to enter the door to the north or the door to the west? (Enter 'north' or 'west' and click OK)";

    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isEntrance = true;
}


function entrance() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === "west") {
        westWingMsg();
    }
    else if (inputLC(input) === "north") {
        northWingMsg();
    }
}

function westWingMsg() {
    hasBeenToWest = true;
    alert("What luck! You've arrived at the armory. You find a sword and a shield and pick them up. Go back to the entrance.");
    alert("The only other door is to the north. Go to the north door.");
    msg = " You enter the north door and...It's a dragon! Using your sword and shield, you are able to defeat the dragon! Giving a piteous moan, he lowers himself submissively onto the ground and allows the dragon keepers to shackle him back up. Now that he's gone, you notice an exit to the North of the room and another door leading to the east side of the castle. Would you like to exit or continue your adventure? enter 'exit' or 'continue'";

    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isWest = true;
}

function westWing() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === "exit") {
        alert("You made it outside the castle safe and sound. Congratulations! The end.");
    }
    else if (inputLC(input) === "continue") {
        northEastWingMsg();
    }
}

function northWingMsg() {
    hasBeenToWest === false;
    msg = "Ermergerd!! It's a dragon! You need a sword and a shield to subdue the dragon. Would you like to head back to the entrance or stay and fight? Enter 'entrance' or 'fight'";
    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isNorth = true;
}

function northWing() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === "entrance") {
        alert("You're back in the entrance. The only other room is to the west.")
        alert("Let's see what's in the west room.")
        westWingMsg();
    }
    else {
        alert("The dragon killed you. Next time, make sure you get your items before you try to fight him. Refresh the browser to try again.")
    }
}

function northEastWingMsg() {
    msg = "You've entered the Northeast Wing of Hyrule castle. There are three doors here. Would you like to go north, south, or east? (enter 'north', 'south', or 'east')";
    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isNorthEast = true;
}

function northEastWing() {
    input = $("#entryBox").val();
    $("#entryBox").val("");
    if (inputLC(input) === 'north') {
        northNorthEastMsg();
    }
    else if (inputLC(input) === 'east') {
        northEastOneMsg();
    }
    else if (inputLC(input) === 'south') {
        southEastMsg();
    }
};
// input = prompt(msg);



function northNorthEastMsg() {
    msg = "Wow, COOL! You have found the Staff of the Dragonborn! This is sure to come in handy. Let's head back to the Northeast Wing. Type 'continue' to continue.";
    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isNorthNorthEast = true;
}

function northNorthEast() {
    hasStaff = true;
    {
        northEastWingMsg();
    }
}

function northEastOneMsg() {
    if (hasKey === false) {
        alert("Uh oh! Looks like this door is locked. The key must be around here somewhere! See if you can find it.")
        northEastWing();

    }
    else if (hasKey === true) {
        msg = "You unlocked the door! Inside is another dragon. But...wait...it's just a little baby dragon! Aww, he's cute! Do you want to keep him as a pet? Enter 'yes' to keep him or 'no' to alert the guards of his presence.";
        $("#questQuestions").html(msg);
        setFlagsToFalse();
        isNorthEastOne = true;
    }
}

function northEastOne() {

    input = prompt(msg);
    if (inputLC(input) === 'yes') {
        alert("You keep the baby dragon and decide to name him Norbert. Exit this room to the east.")
        northEastEastMsg();
    }
    else {
        alert("You tell the closest guard about the baby dragon, and he takes him away. You exit the room to the east.")
        northEastEastMsg();
    }
}



function northEastEastMsg() {
    msg = "Princess Zelda is waiting for you. 'Oh good!' she exclaims, 'you were able to subdue my cousin's dragons! Dany is so irresponsible sometimes! Please, take this gem as my token of gratitude.' You receive a mysterious beautiful gem. 'Please come back to visit whenever you'd like--I'm sure those unruly dragons will cause more trouble eventually!' You assure Zelda that you will be back and exit out of a door located to the east.";
    $("#questQuestions").html(msg);
    alert("You made it! Congratulations, and thanks for playing the game!")
}

function southEastMsg() {
    alert("You've found another dragon! Trogdor roars and shakes a big, beefy arm in your general direction! He's much bigger than the first dragon--the sword and shield alone shall not suffice!");
    msg = "Would you like to try to fight Trogdor? Answer 'yes' or 'no'";
    $("#questQuestions").html(msg);
    setFlagsToFalse();
    isSouthEast = true;
}

function southEast() {
    if (inputLC(input) === 'yes' && hasStaff === false) {
        alert("I thought we'd already been over this! You shouldn't fight dragons without being properly equipped. Trogdor burninates you and you die. Resume your journey at the Northeast Wing.");
        hasKey = true;
        northEastWingMsg();
    }
    else if (inputLC(input) === 'no' && hasStaff === false) {
        alert("You hastily make your way back to the door you entered through and return to the Northeast Wing.");
        hasKey = false;
        northEastWingMsg();
    }
    else if (inputLC(input) === 'yes' && hasStaff === true) {
        alert("You aim the Staff of the Dragonborn at Trogdor. 'You will not burninate me today!' you shout valiantly. The staff trembles with immense power, and from it erupts a silvery spray which surrounds Trogdor and renders him helpless. The dragon keepers come to take him away, and, as they leave, you find a key! The only door here leads back into the Northeast Wing. Exit now.");
        hasKey = true;
        northEastWingMsg();
    }
}

function inputLC(input) {
    return input.toLowerCase();
}
function setFlagsToFalse() {
    var isEntrance = false;
    var isWest = false;
    var isNorth = false;
    var isNorthEast = false;
    var isNorthEastOne = false;
    var isSouthEast = false;

}

            ////                    if (inputLC(input) === 'north') 
