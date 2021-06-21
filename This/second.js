// function fn(){
   
//    console.log(this); // this == obj hoga kyunki obj ke through call kiya h
//    console.log(`My name is ${this.person}`);
   
//    function abc(){
//       console.log(this); // normal func call hai to this == window (Note that it only matters how fn is called and not where it is called!!!)
//       console.log(`My name is ${this.person}`);
//    }

//    abc();
// }

// let obj = {
//    person : "Mihir",
//    func : fn
// }

// obj.func();


// Ab agar hum chahte hai ki abc mei bhi mihir print ho,matlab abc mei bhi obj ka this jaye to uske liye soln:

// ---------------------------------Solution 1 : Using Bind------------------
// Bind is a function that is defined on other functions
// Syntax -> let ret = fn.bind(argument)
// Bind returns a new function whose definition is similar to the function on which it is called
// and whose this is explicitly set equal to the argument that is passed
// to jo argument hoga uske equal this set krdeta h

// function fn(){
   
//    console.log(this);
//    console.log(`My name is ${this.person}`);
   
//    function abc(){
//       console.log(this); 
//       console.log(`My name is ${this.person}`);
//    }

//    let ret = abc.bind(this); // jo fn ka this hoga wohi ret ka this bhi set hojayega
//    ret(); // ret ke this ki value ab obj ke equal h
//    abc(); // iska this window ke equal hai
//    return ret;
// }

// let obj = {
//    person : "Mihir",
//    func : fn
// }

// let rf = obj.func(); // rf ke andar ret miljayega
// rf(); // yeh normal call hai lekin rf ka this hum obj ke equal set kr chuke hai already

// let ret = obj.func;
// ret();

////////////////////////////////////////// Solution 2 - Using Arrow functions
// syntax of arrow fns :
// let fn = (arguments) => {
// }
// arrow function ka this uske lexocographically superior environment ke this ke equal hota h matlab arrow fn ke jo bhaar this hai usko // apna this banaleta hai

// function fn(){
   
//    console.log(this);
//    console.log(`My name is ${this.person}`);
   
//      let abc = () => { // iske bhaar this ki value fn ka this hai,to abc ka this bhi jo bhi fn ka this hoga uske equal hogi
//       console.log(this); 
//       console.log(`My name is ${this.person}`);
//    }
//    abc();

// }

// let obj = {
//    person : "Mihir",
//    func : fn
// }

// obj.func();

///////////////////////////////////////////////////////////////////
// Bind and arrow fn ke elawa 2 aur bhi tareeke hote hai yeh krne ke liye , call and apply
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// similarly search for apply