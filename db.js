const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/home';

mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('server connected');
})

module.export = db;