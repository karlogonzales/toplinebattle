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

let seguinG = seguinA = seguinPt = 0;
let bennG = bennA = bennPt = 0;
let radulovG = radulovA = radulovPt = 0;

let scheifeleG = scheifeleA = scheifelePt = 0;
let wheelerG = wheelerA = wheelerPt = 0;
let laineG = laineA = lainePt = 0;


axios.get(seguin)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        karloTotalPoints += goals + assists;
        seguinG = goals;
        seguinA = assists;
        seguinPt = seguinG+seguinA;

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
        bennG = goals;
        bennA = assists;
        bennPt = bennG+bennA;
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
        radulovG = goals;
        radulovA = assists;
        radulovPt = radulovG+radulovA;
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
        scheifeleG = goals;
        scheifeleA = assists;
        scheifelePt = scheifeleG+scheifeleA;
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
        wheelerG = goals;
        wheelerA = assists;
        wheelerPt = wheelerG+wheelerA;
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
        laineG = goals;
        laineA = assists;
        lainePt = laineG+laineA;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {   title: 'Top Line Battle',
                            karloTotalPoints: karloTotalPoints,
                            andyTotalPoints: andyTotalPoints,

                            seguinG: seguinG,
                            seguinA: seguinA,
                            seguinPt: seguinPt,
                            bennG: bennG,
                            bennA: bennA,
                            bennPt: bennPt,
                            radulovG: radulovG,
                            radulovA: radulovA,
                            radulovPt: radulovPt,

                            scheifeleG: scheifeleG,
                            scheifeleA: scheifeleA,
                            scheifelePt: scheifelePt,
                            wheelerG: wheelerG,
                            wheelerA: wheelerA,
                            wheelerPt: wheelerPt,
                            laineG: laineG,
                            laineA: laineA,
                            lainePt: lainePt
    });
});


module.exports = router;
