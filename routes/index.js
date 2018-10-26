var express = require('express');
var router = express.Router();
const axios = require("axios");
const apiKey = '?apikey=6c55096112cbbae549d608238c861ddf';
const url ="http://api.eliteprospects.com/beta/players/";


//Andy's Line

const team1 = [99204,91186,10393];
const team1Data = [];


//Karlo's Line
const team2 = [75379,9215,177671];
const team2Data = [];


//Phil's Line
const team3 = [9079,10439,130383];
const team3Data = [];

//Seb's Line
const team4 = [45473,152111,44567];
const team4Data = [];

let generateUrl = (playerId) => {
    return url + playerId + apiKey
}

let getTeamData =(teamArray, team) => {
    teamArray.forEach(function (player) {
        axios.get(generateUrl(player))
            .then(response => {
                team.push(response.data.data)
            })
            .catch(error => {
                console.log(error);
            });
    })

};

let getTotalPoints = (teamArray) =>{
    let total=0;
    teamArray.forEach(function (player) {
        total += player.latestPlayerStats.TP
    })

    return total
}
/* GET home page. */
router.get('/', function (req, res, next) {
    getTeamData(team1, team1Data);
    getTeamData(team2, team2Data);
    getTeamData(team3, team3Data);
    getTeamData(team4, team4Data);
    res.render('index', {
        title: 'Top Line Battle',
        team1Data: team1Data,
        team2Data: team2Data,
        team3Data: team3Data,
        team4Data: team4Data,
        team1TotalPoints: getTotalPoints(team1Data),
        team2TotalPoints: getTotalPoints(team2Data),
        team3TotalPoints: getTotalPoints(team3Data),
        team4TotalPoints: getTotalPoints(team4Data),
    });
});


module.exports = router;
