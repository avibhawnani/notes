const score = 100;
// console.log(score);

const balance = new Number(400)
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); //400.00

const othNumber = 23.896;
// console.log(othNumber.toPrecision(3)); //23.9

const oNumber = 123.896;
// console.log(oNumber.toPrecision(3)); //124

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //  10,00,000

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// *********************************************** MATHS ****************************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(3.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(5.5));
// console.log(Math.min(2,3,4,5,1,9));
// console.log(Math.max(23,55,6,7,12,5));

console.log(Math.random());

console.log(Math.floor(Math.random()*10) + 1);

const max = 20;
const min = 10;

console.log(Math.floor(Math.random() * ( max - min + 1 )) + min); // Value -> 10 - 20 range