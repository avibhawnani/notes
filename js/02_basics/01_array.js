const arr = [0,1,2,3,4]
console.log(arr[0]);

const a2 = new Array(24,55,66,77,8);
console.log(a2);

// Array methods

a2.push(0);
console.log(a2);

a2.pop();
console.log(a2);

a2.unshift(99);
console.log(a2);

a2.shift();
console.log(a2);

console.log(a2.includes(8));
console.log(a2.indexOf(9)); // -1

const newArr = a2.join(); //string
console.log( newArr); 

// slice, splice
const myArr = [0,1,2,3,4,5]
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //it includes the last index as well as changes the initial arr
console.log("C ", myArr);
console.log(myn2);