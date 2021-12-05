class Shape{

    draw = function() {
        console.log("Generic Shape");
    }
}

class Circle extends Shape {
    draw = function() {
        console.log("Circle Shape");
    }
}

class Square extends Shape {
    draw = function() {
        console.log("Square Shape");
    }
}

class Triangle extends Shape {
    draw = function() {
        console.log("Triangle Shape");
    }
}

class ShapeFactory {
    static getShape = function(edges) {
        if(edges <= 3){
            return new Triangle();
        } else if(edges === 4){
            return new Square();
        } else {
            return new Circle();
        }
    }
}

let item1 = ShapeFactory.getShape(3);
item1.draw();