let axios = require('axios');

let user = axios.get('https://api.github.com/users/vasudevsinghal');

console.log(user)

function accept(res){
    console.log(user);
    // console.log(res.data);
}
function reject(err){
    console.log(user);
    // console.log(err);
}


user.then(accept).catch(reject);