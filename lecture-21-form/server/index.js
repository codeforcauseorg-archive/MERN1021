let express = require('express')
let cors = require('cors')
let mongoose = require('mongoose');


mongoose.connect("mongodb+srv://vasu:vasu@cluster0.ddkgg.mongodb.net/MERN1021");

let app = express();

let PORT = 5000;

app.use(express.json())
app.use(cors())

const FormData = mongoose.model("Formdata", {
    name: String,
    email: String,
    address: String,
    phone: String
});

app.post('/submit', function(req, res){
    let formData = new FormData(req.body);

    formData.save().then(function(resp){
        res.send("Submited");
    }).catch(function(err){
        res.sendStatus(501)
    })
})


app.get('/', function(req, res){
    res.send("working");
})


app.listen(PORT, function(){
    console.log("Listenig to PORT"+PORT);
})