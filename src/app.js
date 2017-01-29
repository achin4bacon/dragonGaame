var input;

//   $("#ok").on("click", function() {
//         //alert("Jerry, hello");  
//         input = $("#entryBox").val();
//         console.log("User input = " + input);
//         $("#entryBox").val("");
//     });

//begin old javascript

var hasBeenToWest;
var hasKey = false;
var hasStaff = false;
var hasBeenToWest = false;
var msg = "Dovakiin. So happy you're here. Welcome to Hyrule castle. One of Queen Daenerys's dragons has gotten loose and is wreaking havoc in the castle. We need your help to subdue the dragon. There are two doors in this room. Would you like to enter the door to the north or the door to the west? (Enter 'north' or 'west')"
//jquery
$("#questQuestions").html(msg);
$("#ok").on("click", function () {
    //alert("Jerry, hello");  
    input = $("#entryBox").val();
    $("#entryBox").val("");
    //input = prompt(msg);
    if (inputLC(input) === "west") {
        westWing();
    }
    else if (inputLC(input) === "north") {
        northWing();
    }
});

//get shield, display text, input field, two buttons. 
function westWing() {
    hasBeenToWest = true;
    alert("What luck! You've arrived at the armory. You find a sword and a shield and pick them up. Go back to the entrance.");
    alert("The only other door is to the north. Go to the north door.");
    msg = " You enter the north door and...It's a dragon! Using your sword and shield, you are able to defeat the dragon! Giving a piteous moan, he lowers himself submissively onto the ground and allows the dragon keepers to shackle him back up. Now that he's gone, you notice an exit to the North of the room and another door leading to the east side of the castle. Would you like to exit or continue your adventure? enter 'exit' or 'continue'";

    $("#questQuestions").html(msg);
    $("#ok").on("click", function () {
        //alert("Jerry, hello");  
        input = $("#entryBox").val();
        //input = prompt(msg);
        if (inputLC(input) === "exit") {
            alert("You made it outside the castle safe and sound. Congratulations! The end.");
        }
        else if (inputLC(input) === "continue") {
            northEastWing();
        }
        $("#entryBox").val("");
    });
    //     // input=prompt(msg);
    //     if (inputLC(input) ==='exit') {
    //         alert("You made it outside the castle safe and sound. Congratulations! The end.")
    //     }
    //     else if (inputLC(input) ==='continue') {
    //         northEastWing();
    //     }

    // }

    //functions outside of loop. 
    function northWing() {
        hasBeenToWest === false;
        msg = "Ermergerd!! It's a dragon! You need a sword and a shield to subdue the dragon. Would you like to head back to the entrance or stay and fight? Enter 'entrance' or 'fight'";
        $("#questQuestions").html(msg);
        // input = prompt(msg);
        if (inputLC(input) === "entrance") {
            alert("You're back in the entrance. The only other room is to the west.")
            alert("Let's see what's in the west room.")
            westWing();
        }
        else {
            alert("The dragon killed you. Next time, make sure you get your items before you try to fight him. Refresh the browser to try again.")
        }
    }
}

function northEastWing() {
    msg = "You've entered the Northeast Wing of Hyrule castle. There are three doors here. Would you like to go north, south, or east? (enter 'north', 'south', or 'east')";
    $("#questQuestions").html(msg);
    $("#ok").on("click", function () {
        //alert("Jerry, hello");  
        input = $("#entryBox").val();
        $("#entryBox").val("");
        //input = prompt(msg);
        if (inputLC(input) === 'north') {
            northNorthEast();
        }
        else if (inputLC(input) === 'east') {
            northEastOne();
        }
        else if (inputLC(input) === 'south') {
            southEast();
        }
    });
    // input = prompt(msg);

}



function northNorthEast() {

    msg = "Wow, COOL! You have found the Staff of the Dragonborn! This is sure to come in handy. Let's head back to the Northeast Wing. Type 'continue' to continue.";
    input = prompt(msg);
    hasStaff = true;
    {
        northEastWing();
    }
}


function northEastOne() {
    if (hasKey === false) {
        alert("Uh oh! Looks like this door is locked. The key must be around here somewhere! See if you can find it.")
        northEastWing();
    }
    else if (hasKey === true) {
        msg = "You unlocked the door! Inside is another dragon. But...wait...it's just a little baby dragon! Aww, he's cute! Do you want to keep him as a pet? Enter 'yes' to keep him or 'no' to alert the guards of his presence.";
        input = prompt(msg);
        if (inputLC(input) === 'yes') {
            alert("You keep the baby dragon and decide to name him Norbert. Exit this room to the east.")
            northEastEast();
        }
        else {
            alert("You tell the closest guard about the baby dragon, and he takes him away. You exit the room to the east.")
            northEastEast();
        }
    }
}


function northEastEast() {
    alert("Princess Zelda is waiting for you. 'Oh good!' she exclaims, 'you were able to subdue my cousin's dragons! Dany is so irresponsible sometimes! Please, take this gem as my token of gratitude.' You receive a mysterious beautiful gem. 'Please come back to visit whenever you'd like--I'm sure those unruly dragons will cause more trouble eventually!' You assure Zelda that you will be back and exit out of a door located to the east.");
    alert("You made it! Congratulations, and thanks for playing the game!")
}


function southEast() {
    alert("You've found another dragon! Trogdor roars and shakes a big, beefy arm in your general direction! He's much bigger than the first dragon--the sword and shield alone shall not suffice!");
    msg = "Would you like to try to fight Trogdor? Answer 'yes' or 'no'";
    input = prompt(msg);
    if (inputLC(input) === 'yes' && hasStaff === false) {
        alert("I thought we'd already been over this! You shouldn't fight dragons without being properly equipped. Trogdor burninates you and you die. Resume your journey at the Northeast Wing.");
        hasKey = true;
        northEastWing();
    }
    else if (inputLC(input) === 'no' && hasStaff === false) {
        alert("You hastily make your way back to the door you entered through and return to the Northeast Wing.");
        hasKey = true;
        northEastWing();
    }
    else if (inputLC(input) === 'yes' && hasStaff === true) {
        alert("You aim the Staff of the Dragonborn at Trogdor. 'You will not burninate me today!' you shout valiantly. The staff trembles with immense power, and from it erupts a silvery spray which surrounds Trogdor and renders him helpless. The dragon keepers come to take him away, and, as they leave, you find a key! The only door here leads back into the Northeast Wing. Exit now.");
        hasKey = true;
        northEastWing();
    }
}

function inputLC(input) {
    return input.toLowerCase();
}

            ////                    if (inputLC(input) === 'north') 
