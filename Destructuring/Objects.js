let person = {
   name : "Mihir",
   country : "India",
   job : "Student"
}

// traditional
// let name = person.name;
// let country = person['country'];


// destructuring
// let {name,country,job} = person; // name same hona respective keys ke
// console.log(country);


// undefined case
// let {name,country,job,car} = person;
// console.log(car);

// default val
   // let {name,country,job,car="Maruti"} = person; //agar uss name ki key nhi milegi to default hi 
   // console.log(car);

// Alias -> agar keys wale same name na rakhne ho to 

// let {name:a,country:b,job:c} = person; // ab vars banenge hi a,b,c name se..country,job,name nhi
// console.log(name); //error
// console.log(a); //works
