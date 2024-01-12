let myFunc = function(name, weather, ...extraArgs) {
	console.log(`Hello ${name}.`);
	console.log(`It is ${weather} weather today!`);
	for (let index = 0; index < extraArgs.length; index++) {
		console.log(extraArgs[index]);
	}
};

myFunc('Niky', 'sunny', 'One', 'Two', 'Three');

let greetingFunc = function(nameFunc) {
	return `Hello ${nameFunc()}.`;
};

console.log(
	greetingFunc(function() {
		return 'Niki';
	})
);

// let myArray = new Array();
// myArray[0] = 100;
// myArray[1] = "Niky";
// myArray[2] = true;
// same as
let myArray = [ 100, 'Niky', true ];

// for (let index = 0; index < myArray.length; index++) {
//   console.log(myArray[index]);
// }
// same as

myArray.forEach((value, index) => console.log(`Index [${index}] -> ${value} `));

//the spread operator
let newArea = [ ...myArray, 200, 'new spred', 'z' ];

newArea.forEach((value, index) => console.log(`NewArea Index [${index}] = ${value}`));

//sample array reducing
let products = [
	{ name: 'Hat', price: 24.5, stock: 10 },
	{ name: 'Kayak', price: 289.99, stock: 1 },
	{ name: 'Soccer Ball', price: 10, stock: 0 },
	{ name: 'Running Shoes', price: 116.5, stock: 20 }
];

let totalValue = products
	.filter((item) => item.stock > 0)
  .reduce((accomulator, item) => accomulator + item.price * item.stock, 0);
  
console.log('Total value: $' + totalValue.toFixed(2));
