//current list of artist topics
var topics = ["the 1975", "motley crue", "the clash", "arctic monkeys", "the doors", "james bay", "the strokes", "def leppard", "the struts", "nirvana", "the cure"]

//function to create buttons for each topic
function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("artistElement mx-auto");
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#buttons-view").append(btn);
    }
};

//running function to create buttons
renderButtons();

//creating new buttons
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    var newBTN = $("#gif-input").val().trim();
    topics.push(newBTN);
    renderButtons();
    $("#gif-input").text.empty();
});

$(document).on('click', function () {
    //what happens when you click each button
    $(".artistElement").on("click", function () {
        var artist = $(this).text();

        //giphy url with topic and api key
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artist + "&api_key=8i9AR4tQiej44GFTMuBNw6Na6HHeFYHA&limit=10";
        console.log(queryURL);
        //calls url to retrieve gifs
        $.ajax({
            url: queryURL,
            method: "GET",
        })
            //retrieves gif results and puts them in html
            .then(function (response) {
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");
                    gifDiv.addClass("gif")
                    var rating = results[i].rating;
                    var p = $("<p>").text("rating: " + rating);
                    p.attr("id", "text");
                    var artistImage = $("<img>");
                    artistImage.addClass = ("artistImage")
                    artistImage.attr("id", "artImage");
                    artistImage.attr("src", results[i].images.fixed_height_still.url);
                    artistImage.attr({ 'data-animate': results[i].images.fixed_height.url });
                    artistImage.attr({ 'data-state': "still" });
                    artistImage.attr({ 'data-still': results[i].images.fixed_height_still.url });
                    gifDiv.append(artistImage);
                    gifDiv.append(p);
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            })
    })
})
$(document).on("click", "img", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})
