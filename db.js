const mongoose = require('mongoose');
require('dotenv').config();
//const mongoUrl = process.env.mongoLocalUrl;
const mongoUrl = process.env.mongodbUrl;

mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('server connected');
})

module.export = db;
//hallo wellcome

//comment add for testing purposes
