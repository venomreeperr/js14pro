// primitive
//7 types: string,boolean,number,null,undefined.symbol,bigint
const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);
//false

const bigNumber = 55555555555n
// represents bigInt


//reference type(non primitive)
//array,objects,functions

const heros=["cat","dog"]
//array
let myObj={
    name:"raj",
    age:35,
}

function myFunction = function()
{
    console.log("lol");
}
//console.log(tupeof function);
//>= object
//infact all non primitive data types typeof output is objectt

//###########################

// stack(primitive),heap(non primitive)
let myName="rajj"
let anotherName = "myName"
anotherName = "rish"
console.log(myName);
console.log(anotherName);
//>=rajj
//>=rish
//primitive

let userOne={
    email:"aaa@gmail.com"
    upi:"123123"
}

let userTwo=userOne

userTwo.email="qqq@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
//>=qqq@gmail.com
//>=qqq@gmail.com
//thus we can say that the original value changes 






