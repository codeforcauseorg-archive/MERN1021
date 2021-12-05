class Earth {

    static #instance = null;
    #population = []

    static getInstance = function(){
        if(Earth.#instance === null){
            Earth.#instance = new Earth();
        }

        return Earth.#instance;
    }

    addHuman = function(human){
        this.#population.push(human);
    }

    get population() {
        return this.#population;
    }
}

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
        Earth.getInstance().addHuman(this);
    }
}

let e1 = Earth.getInstance();
let e2 = Earth.getInstance();

let anuj = new Human("Anuj Garg", 27);
let sugato = new Human("Sugato", 20);


console.log(e1.population);
console.log(e2.population);

