const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.listen(port, () =>{
    console.log('server started on port ' + port);
})

