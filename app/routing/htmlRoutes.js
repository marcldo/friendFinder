// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// const express = require('express');
const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 8080;

const app = require(path.join(__dirname, '../../server.js'));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// app.listen(PORT, () => {
//     console.log(`Listening on PORT: ${PORT}`);
// });