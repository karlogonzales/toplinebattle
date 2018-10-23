var express = require('express');
var router = express.Router();
const axios = require("axios");

const mackinnon = "http://api.eliteprospects.com/beta/players/99204?apikey=6c55096112cbbae549d608238c861ddf";
const rantanen = "http://api.eliteprospects.com/beta/players/91186?apikey=6c55096112cbbae549d608238c861ddf";
const landeskog = "http://api.eliteprospects.com/beta/players/10393?apikey=6c55096112cbbae549d608238c861ddf";

const scheifele = "http://api.eliteprospects.com/beta/players/75379?apikey=6c55096112cbbae549d608238c861ddf";
const wheeler = "http://api.eliteprospects.com/beta/players/9215?apikey=6c55096112cbbae549d608238c861ddf";
const connor = "http://api.eliteprospects.com/beta/players/177671?apikey=6c55096112cbbae549d608238c861ddf";

const bergeron = "http://api.eliteprospects.com/beta/players/9079?apikey=6c55096112cbbae549d608238c861ddf";
const marchand = "http://api.eliteprospects.com/beta/players/10439?apikey=6c55096112cbbae549d608238c861ddf";
const pastrnak = "http://api.eliteprospects.com/beta/players/130383?apikey=6c55096112cbbae549d608238c861ddf";


let karloTotalPoints = 0;
let andyTotalPoints = 0;
let sebTotalPoints = 0;

let mackinnonG = mackinnonA = mackinnonPt = 0;
let rantanenG = rantanenA = rantanenPt = 0;
let landeskogG = landeskogA = landeskogPt = 0;

let scheifeleG = scheifeleA = scheifelePt = 0;
let wheelerG = wheelerA = wheelerPt = 0;
let connorG = connorA = connorPt = 0;

let bergeronG = bergeronA = bergeronPt = 0;
let marchandG = wheelerA = wheelerPt = 0;
let pastrnakG = connorA = connorPt = 0;


axios.get(mackinnon)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        andyTotalPoints += goals + assists;
        mackinnonG = goals;
        mackinnonA = assists;
        mackinnonPt = mackinnonG+mackinnonA;

        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(rantanen)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        andyTotalPoints += goals + assists;
        rantanenG = goals;
        rantanenA = assists;
        rantanenPt = rantanenG+rantanenA;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(landeskog)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        andyTotalPoints += goals + assists;
        landeskogG = goals;
        landeskogA = assists;
        landeskogPt = landeskogG+landeskogA;
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
        karloTotalPoints += goals + assists;
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
        karloTotalPoints += goals + assists;
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

axios.get(connor)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        karloTotalPoints += goals + assists;
        connorG = goals;
        connorA = assists;
        connorPt = connorG+connorA;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });
axios.get(bergeron)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        bergeronG = goals;
        bergeronA = assists;
        bergeronPt = bergeronG+bergeronA;
        sebTotalPoints += goals + assists;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(marchand)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        sebTotalPoints += goals + assists;
        marchandG = goals;
        marchandA = assists;
        marchandPt = marchandG+marchandA;
        console.log(
            `Goals: ${goals} \nAssists: ${assists}\nTotal Points: ${goals + assists}`
        );
    })
    .catch(error => {
        console.log(error);
    });

axios.get(pastrnak)
    .then(response => {
        var goals = parseInt(response.data.data.latestPlayerStats.G);
        var assists = parseInt(response.data.data.latestPlayerStats.A);
        sebTotalPoints += goals + assists;
        pastrnakG = goals;
        pastrnakA = assists;
        pastrnakPt = pastrnakG+pastrnakA;
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
                            sebTotalPoints: sebTotalPoints,

                            mackinnonG: mackinnonG,
                            mackinnonA: mackinnonA,
                            mackinnonPt: mackinnonPt,
                            rantanenG: rantanenG,
                            rantanenA: rantanenA,
                            rantanenPt: rantanenPt,
                            landeskogG: landeskogG,
                            landeskogA: landeskogA,
                            landeskogPt: landeskogPt,

                            scheifeleG: scheifeleG,
                            scheifeleA: scheifeleA,
                            scheifelePt: scheifelePt,
                            wheelerG: wheelerG,
                            wheelerA: wheelerA,
                            wheelerPt: wheelerPt,
                            connorG: connorG,
                            connorA: connorA,
                            connorPt: connorPt,

                            bergeronG: bergeronG,
                            bergeronA: bergeronA,
                            bergeronPt: bergeronPt,
                            marchandG: marchandG,
                            marchandA: marchandA,
                            marchandPt: marchandPt,
                            pastrnakG: pastrnakG,
                            pastrnakA: pastrnakA,
                            pastrnakPt: pastrnakPt
    });
});


module.exports = router;
