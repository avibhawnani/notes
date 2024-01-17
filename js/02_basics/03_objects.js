//  singleton
// Object.create()


// object literals

const myS = Symbol("key1")
const user = {
    name:"Ravi",
    [myS]:"my symbol",
    age:23,
    email:"avi@gmail.com",
    location:"Kanpur",
    isLoggedIn:true,
    lastLoginDays:["Mon","Tue"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(typeof user[myS]);

user.email = "ram@gmail.com";

// Object.freeze(user)
user.email = "ram123@gmail.com";

// console.log(user);

user.greeting = function(){
    console.log("hi user");
}
user.greeting();

user.fun = function(){
    console.log(`this is a ${this.name}'s fun function`);
}
user.fun();