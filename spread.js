
const myCar = {
   name:"Thar",
   company:"Mahindra"
};

const myCarData = {
    model:"2023",
    price:"22222"
};

const updatedData = {...myCar, ...myCarData};
console.log(updatedData);

const myArray = [4,6,8,1,2,0,9];
const [ four, six, ...rest ] = myArray;
console.log(four);
console.log(rest);