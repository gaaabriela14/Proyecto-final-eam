let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
name: {
    type: String,
    requeried: true
},
description: {
    type: String,
    requeried: true
},
location:{
    type: String,
    requeried: true
}
},
{
    versionKey: false
});

module.exports = moongoose.model('Place', PlaceSchema);
