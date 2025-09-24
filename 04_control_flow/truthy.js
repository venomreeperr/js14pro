const userEmail=[]
if(userEmail){
    console.log("got email");
    
}else{
    console.log("no email");
    
}
//>got email
const userEmail=""
if(userEmail){
    console.log("got email");
    
}else{
    console.log("no email");
    
}
//>no email

//>what we saw above is some conflict which can be solved by the definition of the falsy and truthy values these are the values whose value is predefined 

// falsy values

//false,0,-0,"",null,undefined,NaN,BigInt On


//truthy values
//"0","false"," ",[],{},function(){}

if(userEmail.length===0){
    console.log("array is empty");
    
}
//>array is empty

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
}


//nullish coalescing operator(??):null undefined
let val1;
val1=5??10
//>whatever is the first value it gets assigned 


//terniary operator
//condition?true:false

const iceTea=100
iceTea<=80?console.log("less than 80");:console.log("more than 80")



