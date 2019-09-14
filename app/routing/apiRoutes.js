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
        let match = null;
        let differences = [];

        friends.forEach(matchFriend);

        function matchFriend(friend, index) {

            let scoreDifference = null;

            // compare user data with friends data
            newFriend.scores.forEach((newFriendScore, index) => {
                scoreDifference += Math.abs(parseInt(newFriendScore) - friend.scores[index]);
            });

            // array of all the differences
            differences.push(scoreDifference);

        }
        // find the index of the smallest difference
        let i = differences.indexOf(Math.min(...differences));


        match = friends[i];

        console.log("match is " + match);

        res.send(match);


    });
}
