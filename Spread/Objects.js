// JS mei Arrays,Objects and functions heap memory mei bante h
// Stack mei jo inke names hote hai wo address store krte hai

let state = {
	name: 'John',
	address: {
		city: 'New Delhi',
		country: {
			countryName: 'India',
			countryCode: 'IN',
		},
	},
};

// let copy = state;
// copy.name = "Mihir"; // state mei bhi change hogya hoga kyunki copy and state dono heap memory pe point kr rhe the, to changes dono mei reflect honge,iskoreference copy kehte hai
// console.log(state);
// console.log(copy);

// -----------------------------------------------------------------

// Shallow Copy :
//let copy = {...state}; Isse heap mei new object ke liye memory banegi ,values saari state ke equal,and uska reference copy mei jayega
// copy.name = "Mihir";
// console.log(copy);
// console.log(state);
// copy.address.city = 'Delhi'; // ab phirse dono mei change hogya hoga
// console.log(copy);
// console.log(state);
// Aisa isliye huya kyunki object ke andar bhi object hai , to wo bhi memory mei bani hogi..humne bas shallow copy kri hai, upar ki layer ki copy bani hogi heap mei, andar ke jo objects hai unka reference same hoga dono hi mei...Refer to img..

// Shallow copy for an object that is spread, the uppermost levelis created at a new memory space
// the properties of the uppermost level remins same
// the lower levels are not affected by this,they keep pointing to their original references

// ---------------------------------------------------------------------

let doublecopy = {
	...state,
	address: {
		...state.address,
	},
};

// doublecopy.address.city = "Delhi";
// console.log(doublecopy);
// console.log(state); // Reflect nhi hoga change state mei, kyunki address obj bhi ab new bana hai,see img2
// doublecopy.address.country.countryName="USA";
// console.log(state);
// console.log(doublecopy); // Ab dono mei change hoga kyunki country obj wala same reference hai dono ka

// let deepCopy = {
// 	...state,
// 	address: {
// 		...state.address,
// 		country: {
// 			...state.address.country,
// 		},
// 	},
// };

// console.log(deepCopy);
// console.log(state);

// ----------------------------------------------

// Ab agar 50 levels honge to yehi thodi krte rahenge, to uske liye method:
// JSON.stringify object ko string mei convert krdeta hai aur JSON.parse string ko object mei convert krdeta hai
// let objstring = JSON.stringify(state);
// console.log(objstring);
// console.log(JSON.parse(objstring));

// To make deep copy without thinking about levels:
let dcopy = JSON.parse(JSON.stringify(state)); 
dcopy.address.country.countryName = "USA";
console.log(state);
console.log(dcopy);


