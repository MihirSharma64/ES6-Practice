// this is a keyword that particularly refers to an object
// the value of this would change according to the context in which it is being referred to

console.log(this); // => window .. jab global scope mei hote hai to this ki value window object ke equal hoti hai, joki global execution context mei create hota h

// we need this for fn call only for now, later for other purposes also

// the value of this for a fn is dependent on how fn is called and not on where it is called

function fn(){ // Heap pe bana hoga,fn pe uska reference hoga
   console.log(this);
   console.log(`Hi my name is ${this.person}`);
}

// normal call
fn();
// in normal call the value of this is passed as window objct only

let obj = {
   person : "Mihir",
   func : fn 
}


// function call with obj:
obj.func(); // this equal to obj pass hoyega ab, kyunki obj ke through call kri h
// In this case my this is equal to the obj through which fn is called


let ret = obj.func; // ret fn ki defition pe point krega
ret(); // normal call kiya hai
// In this case this is again passed as window object, see img.
