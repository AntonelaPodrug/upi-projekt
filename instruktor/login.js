const mysql = require ("mysql2");
const express = require ("express");
const path = require('path');
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: true });

const app= express();
const port = 3300; // Change this to a different port number

app.use(express.static(path.join(__dirname), { extensions: ['html', 'css', 'js'] }));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "instruktor"
});

connection.connect(function(error){
    if(error) throw error
    else console.log("uspješno spojeno!")
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/login.html");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  app.post("/", encoder, function (req, res) {
    var username= req.body.username;
    var password=req.body.password;
    connection.query("select * from korisnik where korisnicko_ime = ? and lozinka = ?", [username,password],function(error, results, fields){
        if (results && results.length > 0) {
            res.redirect("/profil");
            console.log("oce")
            
        } else {
            res.redirect("/");
            console.log("nece")
        }
        res.end();
    })
})

app.get("/profil", function(req, res){
    res.sendFile(__dirname + "/profil.html");
})