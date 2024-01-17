const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let numbers = myNumers.map((i)=>i+10);
// console.log(numbers);

// using forEach
// let arr = []

// myNumers.forEach((item)=>{
//     arr.push(item+10);
// })
// console.log(arr);

let nums = myNumers
            .map((item)=>item*10)
            .map((item)=>item*10)
            .filter((item)=>item > 500)

console.log(nums);