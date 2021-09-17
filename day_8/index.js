const express = require('express');

const app = express();


app.get('/:name/api/:age',(req,res)=>{
    console.log(req.query);
    console.log(req.params.name);
});

app.get('/ab?cd',(req,res)=>{
    console.log(req.url);
})

app.get('/ab+cd',(req,res)=>{
    console.log(req.url);
})

app.get(/.*fly$/,(req,res)=>{
    res.status = 200;
    res.json(req.url)
    console.log(req.url);
})

app.get('/notes',(req,res,next)=>{
    console.log("First");
    next();
},(req,res)=>{
    console.log("Second");
})

app.post('/',(req,res)=>{
    app.json({text: req.body})
})

app.listen(4000,()=>{
    console.log("Server running");
})