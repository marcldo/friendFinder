// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const path = require('path');

const app = require(path.join(__dirname, '../../server.js'));
const friends = require(path.join(__dirname, '../data/friends.js'));

app.get('/api/friends', (req, res) => {
    return res.json(friends);
});

app.post('/api/friends', (req, res) => {

});

