// class abc{
//    // member fns sab objs ke liye same hi rhega, heap mei ek hi baar allocate hogi memory matlab
//    constructor(person){ // JS mei alag se datatype define nhi krte,direct constructor mei initialize
//       this.person = person;
//       this.age = 25;
//    }

//    sayHi(){ //member fn ke aage function keyword use krna zaruri nhi hai
//       console.log("Hello" + this.person);
//       console.log(this);
//    }
// }
// class ke andar this ki value kiske equal hoti h? Jab uss class ka koi obj/instance banate hai new
// krke, to wo class ka jo obj banke aata hai,this ki value uss obj ke equal hoti h
// this ki value for a particular obj is equal to that obj which is created from that class
// let obj = new abc("Mihir");
// let obj2 = new abc("Rohit");

// obj.sayHi(); // hello Mihir

// let fn = obj.sayHi;
// fn(); // this ki value undefined aayegi.Classes ke case mei member fns ko normal call kroge to by default this=window nhi hoti,kyunki //// 'use strict' use kiya hota h unhone


// let btn = document.querySelector("button");
// btn.addEventListener('click',obj.sayHi); // aise krne pe listener iss function ka reference store krleta hai baad mei call krne ke liye
// its same as fn = obj.sayHi -> Iss case mei bhi obj se koi matlab nhi hota normal call pe
// but iss case mei hum normal call nhi kr rhe, button ke through call kr rhe hai, to this = button pass hoga

// Isko solve kaise kre?
// //////////////////////////////////// Solution
// Using Bind

// class abc{
   
//    constructor(person){ 
//       this.person = person;
//       this.age = 25;
//       // this.sayHi2 = this.sayHi.bind(this); // jo class ka this hai abho, matlab obj ,wo bind krdo sayHi pe..
//       this.sayHi = this.sayHi.bind(this); // good practise ke liye wohi name rekhte hai func ka.. original function to wahi rehta hai
//       // bas iss name ka new data member ban jaata hai obj mei jiska this set hota hai aur fn definition same
//       // ab jab bhi sayHi call krenge to yehi wala call hoga, default wala nhi
//    }

//    sayHi(){ 
//       console.log("Hello" + this.person);
//       console.log(this);
//    }
// }

// let obj = new abc("Mihir");

// let btn = document.querySelector("button");
// btn.addEventListener('click',obj.sayHi);
// console.log(obj); // earlier 2 hi data member the

//////////////////////////////////////////////////////////// Solution 2
// Using arrow function
class abc{
   
   constructor(person){ 
      this.person = person;
      this.age = 25;
   }

   sayHi = () =>{ // arrow fn apne bhaar wale ke this ke equal set krdeta hai. Iske bhaar this kya h? -> class ka this,matlab obj
      // So this of sayhi = obj
      console.log("Hello" + this.person);
      console.log(this);
   }
}

let obj = new abc("Mihir");

let btn = document.querySelector("button");
btn.addEventListener('click',obj.sayHi); 