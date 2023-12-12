const mysql = require ("mysql2");
const express = require ("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded({ extended: true });

const session = require('express-session');
const app= express();

app.use(session({
    secret: 'aaa', // Change this to a secret key for session management
    resave: false,
    saveUninitialized: true,
}));


const port = 3300; // Change this to a different port number

app.use(express.json());
app.use(express.static('public', { extensions: ['html', 'css', 'js'] }));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "instruktor"
});


// Route for the profile page
app.get("/user-data", function(req, res) {
    const userId = req.session.userId; // Assuming you set userId in your login logic

    connection.query("SELECT * FROM korisnik WHERE korisnik_id = ?", [userId], function(error, results, fields) {
        if (error) {
            console.error('Error fetching user data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        if (results && results.length > 0) {
            const user = results[0];
            res.json({
                ime: user.ime,
                prezime: user.prezime,
                korisnicko_ime: user.korisnicko_ime,
                broj_kandidata: user.broj_kandidata
            });
        } else {
            res.status(404).json({ error: 'User Not Found' });
        }
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// profil.js

document.addEventListener("DOMContentLoaded", function () {
    // Fetch user data from the server
    fetch('/user-data')  // Updated route to match your server setup
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Update the DOM with the fetched data
            document.getElementById('ime').textContent = data.ime;
            document.getElementById('prezime').textContent = data.prezime;
            document.getElementById('korisnicko_ime').textContent = data.korisnicko_ime;
            document.getElementById('broj_kandidata').textContent = data.broj_kandidata;
        })
        .catch(error => console.error('Error fetching user data:', error));
});
