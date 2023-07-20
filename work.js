//arrow function

const myFunction = (name,brand) =>{
     return `Name is ${name} and Brand is ${brand}`;
}

console.log(myFunction("MyCar","Ford"));


const myFunction2 = (name,brand) => `Name is ${name} and Brand is ${brand}`;

console.log(myFunction2("MyCar2","Ford2"));

class Sequare{
    constructor(){
        this.color = "Red";
    }
    changeColor(){

        return this;
    }
}

const obj = new Sequare();
console.log(obj.changeColor());  //Sequare { color: 'Red' }

class Circle{
    constructor(){
    
        this.color = "Green";
    }
    //with arrow functions there is no binding of this
    newColor = () =>{
        return this;
    }
}

const newObj = new Circle();
console.log(newObj.newColor());   //Circle { newColor: [Function: newColor], color: 'Green' }