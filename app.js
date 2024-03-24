//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");



const homeStartingContent = "Ciesz się możliwością nagrywania i odsłuchiwania swojego głosu a ponadto wykonywania zdjęć. Nasza prosta w obsłudze aplikacja umożliwia użytkownikom łatwe nagrywanie dźwięków i późniejsze ich odsłuchiwanie. Dodatkowo jedną z funkcji jest wykonywanie zdjęć które następnie możesz z łatwością zmienić w zdjęcie czarno-białe. ";
const recordContent = "Aby rozpocząć nagrywanie kliknij przycisk 'Rozpocznij nagrywanie' a po skończeniu przycisk 'Zakończ nagrywanie'.  ";
const changeContent = "Tutaj możesz zrobić swoje zdjęcie"
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

app.get("/", function(req, res){
  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
    });
});

app.get("/record", function(req, res){
  res.render("record", {recordContent: recordContent});
});

app.get("/change", function(req, res){
  res.render("change", {changeContent: changeContent});
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
