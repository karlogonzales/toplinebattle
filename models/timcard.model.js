const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timcardSchema = new Schema({
    cardtype: {type: String, required: true, max: 100},
    playername: {type: String, required: true, max: 100},
});

//export tim horton card model
module.exports = mongoose.model('timcard', timcardSchema);