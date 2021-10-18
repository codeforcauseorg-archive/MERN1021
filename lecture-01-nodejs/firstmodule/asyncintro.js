const axios = require("axios");

let users = ["keenwarrior", "keen", "kee"]

async function fetch(username){
    let response = await axios.get("https://api.github.com/users/"+username);
    return response;
}


for (const username of users) {
    let promiseOfOutput = fetch(username);

    promiseOfOutput.then(function(output){
        console.log(output.data.name, output.data.login);
    })
}


