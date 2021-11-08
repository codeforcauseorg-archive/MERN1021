let express = require('express');

let app = express();

app.use(express.json())

let PORT = 8000;

app.use("/vasu", function(req, res, next){
    console.log("In the Middle ware");
    // res.send("Uncauth error");

    next();
})


app.get("/vasu", function(req, res){
    console.log("In the Get request");
    res.send("Sending from Server");
})

app.get("/:id", function(req, res){
    console.log(req.params.id);
    res.send("Sending from Server");
})

app.get("/", function(req, res){
    // console.log(req.query.name);
    res.send("Sending from Server");
})


app.post("/name", function(req, res){
    console.log(req.body);
    console.log(req.query);
    res.send("Get a Post request");
})


app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log(`Listening to port ${PORT}`);
    }
})