const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vasu:vasu@cluster0.ddkgg.mongodb.net/MERN1021");

const Student = mongoose.model("Student", {
    name: String,
    email: String,
    phoneNo: String,
    subjects: Array,
})

let data = {
    name : "Vasudev",
    email: "vasideb@gmail.com",
    phoneNo: "73297129112",
    subjects: ["Maths", "Science"]
}

const student = new Student(data);

student.save().then(function(){
    console.log("saved");
})
.catch(function(err){
    console.log(err);
})