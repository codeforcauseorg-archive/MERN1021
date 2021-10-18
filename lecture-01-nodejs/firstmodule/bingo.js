const readlineSync = require('readline-sync');

let username = readlineSync.question('May I have your name? ');

console.log("Your username is", username);