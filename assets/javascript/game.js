var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;



var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
			'assets/images/purple-crystal.png', 
			'assets/images/orange-crystal.png', 
			'assets/images/blue-crystal.png', 
            'assets/images/pink-crystal.png'
        ];

        randomResult = Math.floor(Math.random() * 101 ) + 19;

        $("#result").html('Number of crystals to collect: ' + randomResult);

        for(var i = 0; i < 4; i++){

            var random = Math.floor(Math.random() * 11) + 1;
    
            var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "data-random": random
                });

                crystal.css({
                    "background-image":"url('" + images[i] + "')",
                    "background-size":"cover"
    
                });
    
    
            $(".crystals").append(crystal);
    
        }

        $("#previous").html("Total Score: " + previous);

}

resetAndStart();

$(document).on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total score: " + previous);
    
    if(previous > randomResult){

		losses++;

		$("#losses").html("You lost: " + losses);

		previous = 0;

		resetAndStart();

    } 

    else if(previous === randomResult){

		wins++;

		$("#wins").html("You win: " + wins);

		previous = 0;

		resetAndStart();

	}

});
