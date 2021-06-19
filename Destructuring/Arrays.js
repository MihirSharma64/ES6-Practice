let arr = ["Hello","I","am","Mihir"];

// traditional way
// let greeting = arr[0];
// let name = arr[3];


// destructuring
// let [greeting,pronoun,verb,name] = arr;
// console.log(greeting);


// Skipping values
// let[greeting,pronoun,,name] = arr; // "am" skipped,skip krne ke liye "," use krdo 
// console.log(name);


// Giving default values
// let[greeting="Hi",pronoun,verb,name,other="Not present"] = arr;
// console.log(greeting);
// console.log(other);

// Ques-> how to swap without using 3rd variable and maths
let a = 3;
let b= 6;
[a,b] = [b,a];
