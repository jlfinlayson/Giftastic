var topics = ["clouds", "sunrise", "stars", "dessert", "snow", "moon", "rainbow", "lava", "sand", "waves"]

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nature + "&api_key=8i9AR4tQiej44GFTMuBNw6Na6HHeFYHA&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
})

