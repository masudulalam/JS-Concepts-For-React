// JSON

const student = {
    firstName: "Abdur",
    lastName: "Rahman",
    age: 20,
    grades: [90, 85, 92],
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    averageGrade: function() {
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  };
  
  
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

// const studentObject = JSON.parse(studentJSON);
// console.log(studentObject);



// Fetch
// fetch('url')
// .then(res => res.JSON())
// .then(data => console.log(data))

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
// console.log(keys);
// console.log(values);


// array.forEach()
const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num));

// array.map()
// numbers.map(num => console.log(num * 2));


// add or remove from an array
const dailyProducts = [
    {name: 'Rice', price: 50, color: 'brown', production: 'natural', brand:'Muslim Crops'},
    {name: 'Wheat', price: 40, color: 'brown', production: 'natural', brand:'Muslim Crops'},
    {name: 'Musuri Dal', price: 90, color: 'red', production: 'natural', brand:'Muslim Crops'},
    {name: 'Milk', price: 50, color:'', production: 'natural', brand:'Muslim Protein'},
    {name: 'Egg', price: 10, color: 'white', production: 'natural', brand:'Muslim Protein'},
    {name: 'Musturd oil', price: 150, color: 'white', production: 'natural', brand:'Muslim Oil'},
]

const newProduct = {name: 'Broccoli', price: 40, color: 'green', production: 'natural', brand:'Muslim Vegetables'};
// copy dailyProducts array and then add new product
const newProducts = [...dailyProducts, newProduct];
console.log(newProducts);
