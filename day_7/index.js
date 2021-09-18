const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.status(200).json({"query": req.query});  
})

// using routing parameter 


app.get('/college/:rollno',(req,res)=>{
    res.status(200).send(`You have accessed by roll no : ${req.params.rollno}`);
})


// using regex 

app.get(/.*ga/,(req,res)=>{
    res.status(200).send(req.url);
})

app.listen(2000,()=>{
    console.log("Logged to port 2000");
})