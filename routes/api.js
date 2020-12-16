const db = require("../models")

module.exports = function (app) {

    app.get("/", function(req, res){
        db.Song.FindAll().then(
            function(data) {
                res.render("index", {songs: data})
            }
        )
    })

    app.post("/new-song", function (req, res) {
        db.Song.create({
            artist: req.body.artist, 
            title: req.body.title, 
            genre: req.body.genre, 
            year: parseInt(req.body.year),
        })
        .then(function (dbSong){
            res.json(dbSong);
        })
    });

    app.delete("/song/:id", function(req, res) {
        db.Song
    })
}