const nam = "Ram";
let count = 50

// console.log(name+" "+count); old type

console.log(`Hello world , My name is ${nam} and count is ${count}`);

const gameName = new String("Valorant-hitMan-Gta"); //string declaration

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const x = "Hello World World"
console.log(x.lastIndexOf('World'));

const newString = gameName.substring(0,5);
console.log(newString);

const aString = gameName.slice(-8,13);
console.log(aString);

const bString = "   ldlsds   ";
console.log(bString.trim());

const url = "https://avibhawnani%20portfolio.com"

console.log(url.replace("%20","-")); // https://avibhawnani-portfolio.com

console.log(url.includes("avibhawnani")); //true

console.log(gameName.split('-'));  //returns []