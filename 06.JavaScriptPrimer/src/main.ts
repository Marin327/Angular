// let myData = new Object();
// myData.name = "Niky";
// myData.weather = "sunny";

import { TempConverter } from "./modules/tempConverter";



//oject literal
// let myData = {
//   name: "Niki",
//   weather: "sunny",
//   printMessage: function () {
//     console.log(`Hello ${myData.name}.`);
//     console.log(`Today is ${myData.weather}.`);
//   }
// }

// myData.printMessage()

//definind classes

// class MyClass {
// 	constructor(name, weather) {
// 		this.name = name;
// 		this.weather = weather;
// 	}

// 	printMessage() {
// 		console.log(`Hello ${this.name}.`);
// 		console.log(`Today is ${this.weather}.`);
//   }
// }

// let myData = new MyClass("Niky", "sunny");
// myData.printMessage();

//inheritance

// class MyClass{
//   constructor(name, weather){
//     this.name = name;
//     this._weather = weather
//   }

//   set weather(value){
//     this._weather = value;
//   }
  
//   get weather(){
//     return `Today is ${this._weather}.`
//   }

//   printMessage(){
//     console.log(`Hello ${this.name}.`);
//     console.log(this.weather);
//   }
// }

// class MySubClass extends MyClass{
//   constructor(name, weather, city){
//     super(name,weather);
//     this.city = city;
//   }

//   printMessage(){
//     super.printMessage();
//     console.log(`You are in ${this.city}.`);
//   }
// }

// let obj = new MySubClass("Niky", "sunny", "Bourgas");
// obj.printMessage();

// modules

//import {Name, WeatherLocation} from "./modules/nameAndWeader";
//import { TempConverter } from './modules/tempConverter';

// let name = new Name("Nikolay", "Kostadinov");
// let loc = new WeatherLocation("raining", "London");

// let cTemp = TempConverter.convertFtoC("38");

// console.log(name.nameMessage);
// console.log(loc.weatherMessage);
// console.log(`The temp is ${cTemp}C`);

// tuples and indexing

let cities : {[index: string]: [string,string]} = {};

cities["London"] = ["raining", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC(23)];

for (const key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`)
}