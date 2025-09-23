let a=100
if (true){
let a=10
const b=20
var c =30
console.log("inner:",a);
}
console.log(a);
//>10
//>100 because both the a have different meaning
//>{} everything within a curly braces is considered as a scope

function one(){
    const username="raj"

    function two(){
        const website ="gg.com"
        console.log(username);
        
    }
    console.log(website);
    two()
    
}
one()
//>raj

if (true) {
    const username = "rag"
    if (username==="rag") {
        const website ="hp.com"
        console.log(username+website);
        }
}
//> rag hp.com


addone(5)
function addone(num){
    return num +1
}
//>6
addTwo(5)
const addTwo =function(num){
    return num+2
}
//>can not access
