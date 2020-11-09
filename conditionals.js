var clickNum = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCounter").submit(countClick);
    $("#ageValidator").submit(checkAge);
    $("#salesTax").submit(calcSalesTax);
    $("#catFood").submit(recommendFood);
    $("#randomCard").submit(drawCard);

	function countClick(event) {
	    event.preventDefault();
		// Increment a variable that tracks the
		// number of button clicks
        clickNum++;
		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clickNum);
		// When the count gets to 10, reset it to 0
        if(clickNum === 10) {
            clickNum = 0;
        }


	}


    function checkAge(event) {
	    event.preventDefault();
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var birthYear = parseInt($("#birthYear").val());
        var age = 2020 - birthYear;
        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18) {
            $("#birthYearOutput").text("Child");
        } else {
        // If they are 18 or over, print "Adult" instead
        $("#birthYearOutput").text("Adult");
    }
    }

    function calcSalesTax(event) {
	    event.preventDefault();
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchaseAmt = $("#purchaseAmount").val();
        // Get the state from the text box with ID "state"
        var state = $("#state").val();
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        if(state.toUpperCase() === "WI") {
            $("#salesTaxOutput").text("$" + purchaseAmt * 0.05);
        } else if(state.toUpperCase() === "IL") {
            $("#salesTaxOutput").text("$" + purchaseAmt * 0.08);
        } else if(state.toUpperCase() === "MN") {
            $("#salesTaxOutput").text("$" + purchaseAmt * 0.075);
        } else if(state.toUpperCase() === "MI") {
            $("#salesTaxOutput").text("$" + purchaseAmt * 0.055);
        }
        // If the user enters a state not listed above,
        // print "Error" instead
        else {
            $("#salesTaxOutput").text("Error");
        }

    }

    function recommendFood(event) {
	    event.preventDefault();
        // Get the cat's age from the text box with
        // ID of "catAge"
        var cat = $("#catAge").val();
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        if(cat < 2) {
            $("#catAgeOutput").text("kitten chow");
        } else if(cat <= 10) {
                $("#catAgeOutput").text("adult chow");
        } else {
            $("#catAgeOutput").text("senior chow");
        }
        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {
	    event.preventDefault();
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description = "";

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if(faceValue === 11) {
            description += "Jack";
        } else if(faceValue === 12) {
            description += "Queen";
        } else if(faceValue === 13) {
            description += "King"
        } else if(faceValue === 1) {
            description += "Ace";
        } else {
            description += faceValue;
        }
        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if(suit === 1) {
            description += " of Clubs";
        } else if(suit === 2) {
            description += " of Spades";
        } else if(suit === 3) {
            description += " of Hearts";
        } else {
            description += " of Clubs";
        }
        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(description);

    }

});