const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    
    const result = document.querySelector("#results");
    const msg = document.querySelector("#message");

    if(height<0 || height === "" || isNaN(height)){
        result.innerHTML = "Please enter a valid height"
    }
    else if(weight<0 || weight === "" || isNaN(weight)){
        result.innerHTML = "Please enter a valid height"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.6){
            msg.innerHTML = "Under Weight";
        }
        else if(bmi < 24.9){
            msg.innerHTML = "Normal Weight";
        }
        else{
            msg.innerHTML = "Over Weight";
        }
    }
})