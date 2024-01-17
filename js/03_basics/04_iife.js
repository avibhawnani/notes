// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();           // ; : to stop context

// (fn_definition)(fn_execution)

// why iife : we have problem due to pollution developed by global scope variables

(()=>console.log("DB CONNECTED TWO"))();    // unnamed IIFE

((nm)=>console.log(`DB CONNECTED THREE ${nm}`))('avi');