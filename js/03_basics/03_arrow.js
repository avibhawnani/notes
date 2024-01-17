const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);      // refering to the current context : user obj
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);      // refering to global object: {}  but in browser : {windows object}

function fun(){
    // console.log(this);  //global object with multiple info
    const username = "shree ram";
    // console.log(this.username); // undefined
}

// fun()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      // undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);  // {}
}
// chai()

const addTwo = (num1, num2) => {
        return num1 + num2                      // explicit return
}

const addTwoo = (num1,num2) => num1+num2        //need not to write return keyword

const addTwooo = (num1,num2) => (num1+num2)     //need not to write return keyword / implicit return

console.log(addTwoo(2,3));

const addThree = (n1,n2,n3) => ({username:"ravi"})      // to return an obj

console.log(addThree(1,2,3));