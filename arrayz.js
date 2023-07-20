const myArray = [
    {
        name:"Ford",
        year:2022,
        condition:"new"
    },
    {
        name:"Maruti",
        
        condition:"new"
    },
    {
        name:"Mahendra",
        year:2002,
        condition:"old"
    },
];

const myList = myArray.map((item,index) => {
    return `Item is - ${item.name} and year is ${item.year} and condition is ${item.condition} and index is - ${index}`;
});

console.log(myList);


//filter

const myFilter = myArray.filter((item) =>{
    return item.condition==="new";
});

console.log(myFilter);


const myFind = myArray.find((currItem,currIndex) => currItem.year=="2002");
console.log(myFind);