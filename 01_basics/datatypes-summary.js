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


