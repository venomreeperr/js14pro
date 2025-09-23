// immediately invoked function expressions
(function chai(){
    console.log(`DB CONNECTED`);
    
})();

//>()() the first bracket is for ddefinition and the second one is for the execution
//global scope polution can always disturb the flow so we use iife to rule out this issue
//>must use ; to end iife

( (name)=>{
    console.log(`DB CONNECTED ${name}`);
    
})('raj');
//>DB CONNECTED raj

