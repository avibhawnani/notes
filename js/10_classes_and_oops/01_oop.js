const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this
}
// new - 1. creates a new empty object , 
//       2. constructor fn is called 
//       3. this is injected 
//       4. a new obj is received 

const user1 = new User("Shree Ram",100,true);
const user2 = new User("Ram",50,false);
console.log(user1.constructor);
console.log(user1 instanceof User); //true
// console.log(user2);