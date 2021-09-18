const express = require('express');
const path = require('path');
const app = express(); 
const cookieParser = require('cookie-parser');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");
app.use(express.static('public'));
app.use(cookieParser({
    secret: "abcd1234"
}))

app.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,"public/newFile.txt"));
    res.sendFile(path.join(__dirname,"public/img.jpg"));
})

app.get('/render',(req,res)=>{
    res.render('index',{title : "Nikhil" , favBooks: ['Geeta','Biography of Elon Musk','Biography of Steve jobs']});
})
app.get('/download',(req,res)=>{
    // res.download(path.join(__dirname,"public/newFile.txt"),"download.txt");
    res.download(path.join(__dirname,"public/img.jpg"),"image.jpg");
})

app.get('/setcookie',(req,res)=>{
    res.status(201)
        .cookie("name","Ram")
        .cookie("age","22")
        .redirect("/render")
})


app.listen(3000,()=>{
    console.log("Connected to port %d",3000);
})