// truthy: 1, 'The Entirely Merciful', ' ', true {}, [1,2,3,], []
// falsy: 0, '', false, null, undefine 
// check truthy:
let myNumber = 1;
if(myNumber){
    myNumber = myNumber * 1000000000000000;
}else{
    myNumber = 0;
}

