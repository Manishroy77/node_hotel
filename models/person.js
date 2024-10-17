const mongoose = require('mongoose');

const personShema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    age : {
        type: Number,
        required:true
    },
    work:{
        type:String,
        enum :['chef','manager','owner']
    },
    mobile:{
        type:Number,
        required:true
    },
    emil:{
        type:String,
        uniq: true
    }
})

const person = mongoose.model('members',personShema);

module.exports = person;