// Primitive 

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3
const isLoggedIn = true;
const temp = null;
let a;

const id = Symbol("123");
const a_id = Symbol("123");
// console.log(id === a_id); false

const bigNumber  = 14566498994512669988n;


// Reference (Non Primitive)

// Arrays, Objects, Functions

// const arr = [1,2,3,4] typeof -> object
// const obj = {    typeof -> object
//     id:1,
//     name:"Rai"
// }

// const fn = function(){} typeof -> function object

// *****************************************************************

// Stack (Primitive) -> copy, Heap(Non-Primitive) -> ref


// let v1 = "heelo";
// let v2 = v1;

// v2 = "bye";

// console.log(v1) heelo - here copy of the same var is passed
// console.log(v2); bye


let ob = {
    name:"Ravi",
    age:25
}

let anotherOb = ob;

anotherOb.name = "Ram";

// console.log(ob.name); Ram
// console.log(anotherOb.name); Ram  - here reference is passed