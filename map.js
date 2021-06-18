// Higher order functions:
// -> Either accepts a fn as an argument
// -> Or returns a function

let arr = [1,2,3,4,5,6];

// map returns an arr,it is an higherorder func that accepts function as an argument
let narr = arr.map(function(el){ // el -> element at each idx

   return el*2;

})

console.log(narr);