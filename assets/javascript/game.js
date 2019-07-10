//current list of nature topics
var topics = ["clouds", "sunrise", "stars", "dessert", "snow", "moon", "rainbow", "lava", "sand", "waves"]

//giphy url with topic and api key
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=8i9AR4tQiej44GFTMuBNw6Na6HHeFYHA&limit=10";

//calls url to retrieve gifs
$.ajax({
    url: queryURL,
    method: "GET"
})

//function to create buttons for each topic
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("nature");
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#buttons-view").append(btn);
    }
}

//running function to create buttons
renderButtons();