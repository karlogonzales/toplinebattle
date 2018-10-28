const Timcard = require('../models/timcard.model');

exports.timcard_create = function(req, res){
    let timcard = new Timcard({
        cardtype: req.body.cardtype,
        playername: req.body.playername
    });
    timcard.save(function(err){
        if(err){
            return next(err);
        }
        res.send('Tim Card successfully created!');
    });
};
