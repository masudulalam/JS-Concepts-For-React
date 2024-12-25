// truthy: 1, 'The Entirely Merciful', ' ', true {}, [1,2,3,], []
// falsy: 0, '', false, null, undefine 
// check truthy:
let myNumber = 1;
if(myNumber){
    myNumber = myNumber * 1000000000000000;
}else{
    myNumber = 0;
}


const myMoney = 800;
let food;
if(myMoney > 100) {
    food = 'Biriyani';
}else{
    food = 'Cha-Biscuit';
}
// ternary
let food1 = myMoney > 100 ? 'Biriyani' : 'Cha-Biscuit';
console.log(food1);
