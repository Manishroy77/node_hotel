const mongoose = require('mongoose');
//const mongoUrl = 'mongodb://localhost:27017/house';
const mongoUrl = 'mongodb+srv://roy:admin@hallo.g3iiw.mongodb.net/house'

mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('server connected');
})

module.export = db;
//hallo wellcome

//comment add for testing purposes
