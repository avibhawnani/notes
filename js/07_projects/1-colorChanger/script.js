console.log("hey avi");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons);

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener("click",(e)=>{
        if(e.target.id === "grey"){
            body.style.backgroundColor = "#212121"
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = "yellow"
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = "red"
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = "blue"
        }
    })
})