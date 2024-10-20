const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const PORT = process.env.port;

const members = require('./models/person');



app.get('/',(req,res)=>{
    res.send('Another world');
})

app.post('/log',async(req,res)=>{
    try{
        const data = req.body;

        const newPerson = new members(data);
         const response =   await newPerson.save()
         console.log('data saved');
         res.status(200).json(response);
        
    }catch(err){
        console.log(Error);
        res.status(500).json({Error: 'internal server error'});
    }
})
app.get('/log',async(req,res)=>{
   const data=  await members.find()
   console.log('data fatched');
   res.status(200).json(data);
})




app.listen(PORT,()=>{
    console.log('server ready');
})