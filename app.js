const express = require("express");
const bodyParser = require ("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

const port = 3000;

// Home route-----------------------------------------------------
let homeListItems = [];
app.get("/", (req, res) => {
    

    // Generate a string of todays date and pass it to the template
    let today = new Date();
    
    dateDisplayOptions = {
    weekday: 'long', 
    // year: 'numeric', 
    month: 'long', 
    day: 'numeric'}

    let dateToday = today.toLocaleDateString("en-US", dateDisplayOptions);
    
    // send the rendered template to the requestor
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


// Work routes--------------------------------------------
let workListItems = [];
app.get('/work', (req,res) => {
    
    res.render("list", {listTitle:"Work List", userAddedItems: workListItems});

app.post('/work', (req, res) => {
    let userInput = req.body.newItem;
    workListItems.push(userInput);
    
    res.redirect('/work');
});
});







app.listen(port, () =>{
    console.log('Server started on port ' + port);
});




// Old date code ------------------------------------------
    // var today = new Date();
    // const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var weekdayInt = today.getDay();
    // // var weekdayInt = 5;
    // var weekdayName = dayNames[weekdayInt];