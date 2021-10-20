let axios = require('axios');

async function hello(){
    let data = await axios.get('https://api.github.com/users/vasudevsinghal');
    console.log("after respose");
    return data;
}

let a = hello();
a.then(function(res){
    console.log(res.data);
}).catch(function(err){
    console.log(err);
})
console.log("hii");

// let data = await axios.get('https://api.github.com/users/vasudevsinghal');
// console.log(data);