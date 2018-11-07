let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = Schema({
name: {
    type: String,
    requeried: true
},
lastname: {
    type: String,
    requeried: true
},
adress:{
    type: String,
    requeried: true
},
email:{
    type: String,
    requeried: true
},
phone:{
    type: String,
    requeried: true
}
},
{
    versionKey: false
});

module.exports = moongoose.model('User', UserSchema);
