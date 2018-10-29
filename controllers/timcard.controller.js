const Timcard = require('../models/timcard.model');

exports.timcard_create = function(req, res){
    let timcard = new Timcard({
        cardtype: req.body.cardtype,
        playername: req.body.playername
    });
    timcard.save(function(err){
        if(err)return next(err);
        res.send('Tim Card successfully created!');
    });
};

exports.timcard_read = function(req, res){
    Timcard.findById(req.params.id, function(err, timcard){
        if(err) return next(err);
        res.send(timcard);
    });
};

exports.timcard_update = function(req, res){
  Timcard.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, timcard){
      if(err) return next(err);
      res.send('Tim card updated!')
  })
};

exports.timcard_delete = function(req, res){
  Timcard.findByIdAndRemove(req.params.id, function(err){
      if(err) return next(err);
      res.send('Tim card deleted!')
  })
};