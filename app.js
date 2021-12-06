const express = require("express");
const bodyParser = require ("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

const port = 3000;

app.get("/", (req, res) => {
    // Generate a string of todays date and pass it to the template
    var today = new Date();
    
    dateDisplayOptions = {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'}

    var dateToday = today.toLocaleDateString("en-US", dateDisplayOptions);
    
    // send the rendered template to the requestor
    res.render("list", {fullDate: dateToday});
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