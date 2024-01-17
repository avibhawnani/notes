//  How does js execute code + call stack

//  JAVASCRIPT  EXECUTION  CONTEXT

//  {}  -> GLOBAL EXECUTION  CONTEXT : this

//  FUNCTIONAL  EXECUTION  CONTEXT

//  EVAL  EXECUTION  CONTEXT  : In MONGOOSE

// These contexts runs in two phase
//      1. Memory Creation Phase /  Creation Phase
//      2. Execution Phase


// ************** Lets Vizualize ******************

// code
let val1 = 10;
let val2 = 5;

function addNum(v1,v2){
    let total = v1 + v2;
    return total;
}

let result1 = addNum(val1,val2);
let result2 = addNum(10,2);

//  Step 1 : Global Exec -> this

//  Step 2 : Memory Phase 
//              val1 -> undefined
//              val2 -> undefined
//              addNum -> function definition
//              result1 -> undefined
//              result2 -> undefined

//  Step 3 : Execution Phase
//              val1 <- 10
//              val2 <- 5
//              control comes to line 27 and another environment is created with { new variable env + exec thread} 

//  Inside new environment :
//          Memory Creation - 
//                  val1 <- 10
//                  val2 <- 5
//                  total <- 15     : this result is returned to global exec ctxt and the env is deleted
