// let nums : Array<number> = [];

// nums.push("anuj");

// let nums : Array<any> = [];

// nums.push(10);
// nums.push("hello");

// let a: any;

// function upper(name: string) : string{
//     return name.toUpperCase();
// }

class Human {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    allowed = function(){
        if(this.age >= 18){
            console.log("You are allowed to party");
        } else {
            console.log("You are not allowed to party");
        }
    }
}

// let sugato = new Human("Sugato", 19);

let sugato = {name : "Sugato", age: 19};

(sugato as Human).allowed();