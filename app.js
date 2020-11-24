const express = require("express");
const app = express();
var faker = require("faker"); 
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

const randomName = faker.name.findName();

//routes
app.get("/", function(req, res){
    res.render("index.ejs", {"name" : randomName});
});

app.get("/hdd", function(req, res){
    res.render("hdd.html");
});

app.get("/ssd", function(req, res){
    res.render("ssd.html");
});

app.get("/sshd", function(req, res){
    res.render("sshd.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});