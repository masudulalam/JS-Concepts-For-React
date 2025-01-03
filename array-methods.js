const dailyProducts = [
    {name: 'Rice', price: 50, color: 'brown', production: 'natural', brand:'Muslim Crops'},
    {name: 'Wheat', price: 40, color: 'brown', production: 'natural', brand:'Muslim Crops'},
    {name: 'Musuri', price: 90, color: 'red', production: 'natural', brand:'Muslim Crops'},
    {name: 'Milk', price: 50, color:'', production: 'natural', brand:'Muslim Protein'},
    {name: 'Egg', price: 10, color: 'white', production: 'natural', brand:'Muslim Protein'},
    {name: 'Musturd oil', price: 150, color: 'white', production: 'natural', brand:'Muslim Oil'},
]

// array.map()
const nameOfProducts = dailyProducts.map(product => product.name);
const price = dailyProducts.map(product => product.price);
// console.log(nameOfProducts);
// console.log(price);


// array.forEach()
// dailyProducts.forEach(product => console.log(product));
// dailyProducts.forEach(product => console.log(product.name));
// dailyProducts.forEach(product => console.log(product.brand));


// array.filter()
const cheap = dailyProducts.filter(product => product.price <= 40);
const cheap2 = dailyProducts.filter(product => product.price <= 50);
// console.log(cheap);
// console.log(cheap2);


// array.find()
const cheap3 = dailyProducts.find(product => product.price <= 50);
console.log(cheap3);
