var express = require('express');
var router = express.Router();
const axios = require("axios");
const seguin = "http://api.eliteprospects.com/beta/players/23807?apikey=6c55096112cbbae549d608238c861ddf";
const benn = "http://api.eliteprospects.com/beta/players/15399?apikey=6c55096112cbbae549d608238c861ddf";
const radulov = "http://api.eliteprospects.com/beta/players/8794?apikey=6c55096112cbbae549d608238c861ddf";
const scheifele = "http://api.eliteprospects.com/beta/players/75379?apikey=6c55096112cbbae549d608238c861ddf";
const wheeler = "http://api.eliteprospects.com/beta/players/9215?apikey=6c55096112cbbae549d608238c861ddf";
const laine = "http://api.eliteprospects.com/beta/players/221667?apikey=6c55096112cbbae549d608238c861ddf";
let karloTotalPoints = 0;
let andyTotalPoints = 0;

axios.get(seguin)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        karloTotalPoints += goals + assists;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(benn)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        karloTotalPoints += goals + assists;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(radulov)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        karloTotalPoints += goals + assists;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(scheifele)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        andyTotalPoints += goals + assists;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(wheeler)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        andyTotalPoints += goals + assists;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(laine)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        andyTotalPoints += goals + assists;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {karloTotalPoints: karloTotalPoints,andyTotalPoints: andyTotalPoints,title: 'Top Line Battle'});
});


module.exports = router;
