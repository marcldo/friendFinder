// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const express = require('express');
const path = require('path');



//import friend data
const friends = require(path.join(__dirname, '../data/friends.js'));


module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });

    app.post('/api/friends', (req, res) => {
        let newFriend = req.body;

        friends.forEach(matchFriend);

        function matchFriend(friend, index) {
            // console.log(item.scores);
            // console.log(newFriend.scores);
            let difference = null;

            newFriend.scores.forEach((newFriendScore, index) => {
                difference += Math.abs(parseInt(newFriendScore) - friend.scores[index]);
            });
            console.log(difference);
        }

    });
}
