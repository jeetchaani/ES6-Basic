
function myCal(val1,val2){
      const add = val1+val2;
      const sub = val1-val2;
      const mul = val1*val2;
      const div = val1/val2;
      return [ add, sub, mul, div ];
}

const [ add, sub, mul, div ] = myCal(8,5);

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }
  
  function myVehicle({ model, registration: { state } }) {
    return 'My ' + model + ' is registered in ' + state + '.';
  }

  console.log(myVehicle(vehicleOne));