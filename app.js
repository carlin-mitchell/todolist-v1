const express = require("express");
const bodyParser = require ("body-parser");
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

const port = 3000;

app.get("/", (req, res) => {
    var today = new Date();
    var weekdayInt = today.getDay();
    
    if (weekdayInt === 6 || weekdayInt === 0) {
        res.send("<h1>It is the weekend! :)</h1>");
    } else {
        res.sendFile(__dirname + "/index.html")
    };
});

app.listen(port, () =>{
    console.log('Server started on port ' + port);
});

