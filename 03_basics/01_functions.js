function sayMYname(){
    console.log("r");
    console.log("a");
    console.log("j");
}
sayMYname()
//this is a function and the last line calls the function thus the output will be raj all in diff lines


function addTwoNumbers(number1,number2){
    console.log(number1+number2);
    
}
addTwoNumbers(3,4)
//gives3+4=7

function login(username){
    if(!username){
        console.log("plz enter a username");
        }
        //makes sure that no undefined value gets passed
    return `&{username}just logged in`
}
console.log(login("raj"));
//>raj just logged in

//use the "return" to end the loop or to iterate 

function calculateCartPrice(num1,num2, ...val1)
{
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));
//>what is gonna happen here is that first two values are gonna be appointed to num1,2 and all the rest ones are gonna be appointed in val1 

const user={
    username:"raj",
    price:"22"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username}and price is ${anyObject.price}`);
    
}
handleObject(user)

