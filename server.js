const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const person = require('./models/person');



app.get('/',(req,res)=>{
    res.send('wellcmr to my server');
})

app.post('/Person',async(req,res)=>{
    try{
        const data = req.body;

        const newPerson = new person(data);
         const response =   await newPerson.save()
         console.log('data saved');
         res.status(200).json(response);
        
    }catch(err){
        console.log(Error);
        res.status(500).json({Error: 'internal server error'});
    }
})





app.listen(3006,()=>{
    console.log('server ready');
})