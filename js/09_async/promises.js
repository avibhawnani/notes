// Earlier Bluebird library was used to perform promises


const promise1 = new Promise(function(resolve,reject){
    // do any async task
    // db calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
});

promise1.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 Task Complete");
        resolve();
    },2000)
}).then(function(){
    console.log("Promise 2 consumed");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"avibhawnani",email:"example@gmail.com"});
    },2000)
}).then((user)=>{
    console.log(user);
});

const promise4 = new Promise(function(resolve,reject){
    let error = false;
    setTimeout(()=>{
        if(!error){
            resolve({username:"Example",password:123});
        }
        else{
            reject("Error: Something went wrong")
        }
    },1000);
});

promise4
    .then((user)=>{
        console.log(user);
        return user.username;
    })
    .then((username)=>{
        console.log(username);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("The promise is either resolved or rejected");
    });


// ASYNC AWAIT

const promise5 = new Promise(function(resolve,reject){
    let error = true;
    setTimeout(()=>{
        if(!error){
            resolve({username:"Example5",password:555});
        }
        else{
            reject("Error: Promise5 went wrong")
        }
    },1000);
});

async function consumePromise5(){
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5();

// fetch

// async function getAllUsers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E",error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log("Error",error);
    })

// https://developer.mozilla.org/en-US/docs/Web/API/fetch#syntax000