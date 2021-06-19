let person = {
	name: 'Mihir',
	id: 64,
	job: 'Student',
	education: {
		degree: 'BTech',
		school: {
			name: 'Doon',
			location: 'Delhi',
		},
	},
};

// traditional
// let id = person.id;

// destructing
// let {education : {degree}} = person;
// console.log(education); // error
// console.log(degree); // works
let{education :{school : {name}}} = person;
console.log(name);