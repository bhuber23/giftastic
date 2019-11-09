//Define array with the default buttons
var games = [
    "Pokemon",
    "Mario",
    "Super Smash Brothers",
    "Legend of Zelda",
    "Mario Kart"
];

console.log(games);

//Create the buttons for each object in the array
for (var i=0; i < games.length; i++){
    var button = $("<button>").text(games[i]);
    button.attr("data-game", games[i]);
    button.addClass("game-button");
    $("#buttons").append(button);
}



//On click function for adding new gifs



//Add giphy API



//Function for pausing/starting gifs when they're clicked