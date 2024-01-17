const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);
const total = myNums.reduce((accumulator,curVal)=>accumulator+curVal,0)
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// let cartPrice = shoppingCart.map((item)=>(item.price)).reduce((acc,cv)=>acc+cv,0)
let cartPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(cartPrice);