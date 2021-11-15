let axios = require('axios');

let data = {
    name : "Ayush",
    email: "ayush@gmail.com",
    phoneNo: "9872197291",
    subjects: ["Hindi", "English"]
}

// axios.post("http://localhost:5000/", data)
// .then(function(res){
//     console.log(res.data);
// })

// axios.patch("http://localhost:5000/6192826fa25eb151b9c05d57", data)
// .then(function(res){
//     console.log(res.data);
// })

// axios.delete("http://localhost:5000/6192826fa25eb151b9c05d57")
// .then(function(res){
//     console.log(res.data);
// })


axios.get("http://localhost:5000/61928619cc9959e7a1e83c6d")
.then(function(res){
    console.log(res.data);
})