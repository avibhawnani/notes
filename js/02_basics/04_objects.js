// const obj = new Object();       //singleton object

const obj = {}

obj.id = 1
obj.email = "user1@gmail.com"
obj.isLoggedIn = true

// console.log(obj);

const obj2 = {
    email:"user2@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Ravi",
            lastName:"Khatri"
        }
    }
}

// console.log(obj2.fullname.userFullName.firstName);

const o1 = {1:"a1",2:"a2"}
const o2 = {3:"b1",4:"b2"}

// const o3 = {o1,o2}          // not possible

// console.log(o3);

// const o3 = Object.assign({},o1,o2);

// console.log(o3);
// console.log(o1);

const o4  = {...o1,...o2};
// console.log(o4);

// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty("id"));

const crsDetails = {
    name:"CourseName",
    price:999,
    instructor:"HC"
}

const {price:p} = crsDetails;       // object destructuring
console.log(p);