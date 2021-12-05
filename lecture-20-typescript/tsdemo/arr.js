// let nums : Array<number> = [];
// nums.push("anuj");
// let nums : Array<any> = [];
// nums.push(10);
// nums.push("hello");
// let a: any;
// function upper(name: string) : string{
//     return name.toUpperCase();
// }
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.allowed = function () {
            if (this.age >= 18) {
                console.log("You are allowed to party");
            }
            else {
                console.log("You are not allowed to party");
            }
        };
        this.name = name;
        this.age = age;
    }
    return Human;
}());
var sugato = new Human("Sugato", 19);
sugato.allowed();
