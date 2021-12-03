const express = require("express");
const bodyParser = require ("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

const port = 3000;

app.get("/", (req, res) => {
    var today = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekdayInt = today.getDay();
    // var weekdayInt = 5;
    var weekdayName = dayNames[weekdayInt];
    
    
        var day = weekdayName;
     
    res.render("list", {kindOfDay: day});
});

app.listen(port, () =>{
    console.log('Server started on port ' + port);
});

