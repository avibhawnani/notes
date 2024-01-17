let mv_heroes = ["a1","a2","a3","a4"];

let dc_heroes = ["b1","b2","b3"];

// mv_heroes.push(dc_heroes)
// console.log(mv_heroes);


console.log(mv_heroes.concat(dc_heroes)); // concatenates and returns a new arr

const new_arr = [...mv_heroes,...dc_heroes] //new way to concat -> ... spread oprator
console.log(new_arr);

let array = [1,2,3,[5,6,7],8,[9,10,[11,22]]];
console.log(array.flat(2));  // 2|| Infinity

console.log(Array.isArray("Avi Bhawnani"))
console.log(Array.from("Avi Bhawnani"))

console.log(Array.from({name:"Avi Bhawnani",age:23}))   // not applicable for objects

let s1=100;
let s2= 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));