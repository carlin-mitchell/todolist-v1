const port = 3000;

// NPM modules--------------------------------------------
const express = require("express");
const bodyParser = require ("body-parser");
const ejs = require('ejs');

// local modules------------------------------------------
const date = require(__dirname + '/local_modules/date.js');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

const workListItems = [];
const homeListItems = [];

// Home route---------------------------------------------
app.get("/", (req, res) => {
    let dateToday = date.getDate();

    res.render("list", {listTitle: dateToday, userAddedItems: homeListItems});
});

app.post("/", (req, res) => {
    let userInput = req.body.newItem;
    if(req.body.list === "Work"){
        workListItems.push(userInput);
        res.redirect("/work");
    } else {
        homeListItems.push(userInput);
        res.redirect('/');
    }
});

// Work route---------------------------------------------
app.get('/work', (req,res) => {
    res.render("list", {listTitle:"Work List", userAddedItems: workListItems});
});
app.post('/work', (req, res) => {
    let userInput = req.body.newItem;
    workListItems.push(userInput);
    
    res.redirect('/work');
});

// About route -------------------------------------------
app.get("/about", (req, res) => {
    res.render('about.ejs');
});


//
app.listen(port, () =>{
    console.log('Server started on port ' + port);
});



