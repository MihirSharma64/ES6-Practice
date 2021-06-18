// filter --> kisi condition ke basis pe elems ko filter krne ke liye , 
// true return hota h to wo elem include hoga

let words = ["abc","defg","hijkl","mnopqr","ewrqwedsa","edwwq","wewqeqweq"];


let narr = words.filter(function(el){
   return el.length>6;
})
console.log(narr);


// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array