$(function () {
    
    $(".song-form").on("submit", function(event) {
        event.preventDefault();
        var newSong = {
            artist: $("#artist").val().trim(),
            title: $("#title").val().trim(),
            genre: $("#genre").val().trim(), 
            year: $("#year").val().trim(),
        };
        console.log(newSong);

        $.ajax("/new-song", {
            type: "POST",
            data: newCar
        }).then(
            function() {
                console.log("New Song added");
                Alert("New Song Added")
            }
        )
    });

    $(".delete").on("click", function () {
        var id = $(this).attr("id");

        $ajax("/song/" + id, {
            type: "Delete"
        }).then(
            function() {
                console.log("Deleted Car", id)
            }
        );
    });
});