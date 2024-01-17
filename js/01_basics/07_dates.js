const date = new Date()
console.log(date); //2024-01-11T14:16:54.645Z

console.log(date.toString());   //  Thu Jan 11 2024 19:52:08 GMT+0530 (India Standard Time)
console.log(date.toDateString());   // Thu Jan 11 2024
console.log(date.toISOString());    // 2024-01-11T14:22:08.396Z
console.log(date.toJSON());         // 2024-01-11T14:22:08.396Z
console.log(date.toLocaleString()); // 11/1/2024, 7:52:08 pm
console.log(date.toLocaleDateString()); // 11/1/2024
console.log(typeof date);   //object

let createdDate = new Date(2025,2,10);
console.log(createdDate.toDateString());

console.log(new Date("2024-02-10").toDateString());

console.log(createdDate.getTime());
console.log(createdDate.getDate());
console.log(Date.now());

console.log(Math.floor(Date.now()/1000)); //in secs

console.log(new Date().toLocaleString('default',{
    weekday:"long"
}));