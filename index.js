//class constructor in js

class Car{
      constructor(brand){
            this.brandName = brand;
      }

    presentCar() {
        return `This is my new car and brand is ${this.brandName}`;
      }
}

//call this class
const objCar = new Car("Tata");
console.log(objCar.presentCar());

//Inheritance in this

class Newcar extends Car{
       constructor(brand,year){
        super(brand);
        this.carYear = year;
       }

    showToPublic(){
        return this.presentCar()+ ` and year is - ${this.carYear} and brand is ${this.brandName}`;
    }

}

const newObj = new Newcar("Ford",2022);
console.log(newObj.showToPublic());


