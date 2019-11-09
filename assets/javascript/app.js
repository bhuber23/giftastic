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
//Add new gifs with submit button
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    var newGif = $("#new-gif").val().trim();
    console.log(newGif);
    games.push(newGif);
    var button = $("<button>").text(newGif);
    button.attr("data-game", newGif);
    button.addClass("game-button");
    $("#buttons").append(button);

    $("#new-gif").val("");

   
});


//On click function for calling gifs
$(document.body).on("click", ".game-button", function() {
    var game = $(this).attr("data-game");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
    game + "&api_key=326tZTOjHx2w5i7revWDUnIyufYTGjY7&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r") {
                var gifDiv = $("<div>")
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gameImage = $("<img class='gif'>");


                gameImage.attr("src", results[i].images.fixed_height_still.url);
                gameImage.attr("data-state", "still");
                gameImage.attr("data-still", results[i].images.fixed_height_still.url);
                gameImage.attr("data-animate", results[i].images.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(gameImage);

                $("#gif-group").prepend(gifDiv);
            }
        }
    });
});





//Function for pausing/starting gifs when they're clicked
$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});