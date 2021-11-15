const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = 5000;

mongoose.connect("mongodb+srv://vasu:vasu@cluster0.ddkgg.mongodb.net/MERN1021");

app.use(express.json());

const Student = mongoose.model("Student", {
  name: String,
  email: String,
  phoneNo: String,
  subjects: Array,
});

app.post("/", function (req, res) {
  let data = req.body;

  const student = new Student(data);

  student.save().then(function () {
    res.send("Saved");
  });
});

app.patch("/:id", function (req, res) {
  let data = req.body;
  let id = req.params.id;

  Student.findByIdAndUpdate(id, data, function () {
    res.send("updated " + id);
  });
});

app.delete("/:id", function (req, res) {
  let id = req.params.id;

  Student.findByIdAndDelete(id, function () {
    res.send("deleted " + id);
  });
});

app.get("/", function (req, res) {
  Student.find().then(function (students) {
    res.send(students);
  });
});

app.get("/:id", function (req, res) {
  let id = req.params.id;
  Student.findById(id).then( function (students) {
    res.send(students);
  });
});

app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening to port ${PORT}`);
  }
});
