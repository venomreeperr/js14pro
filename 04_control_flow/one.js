//> if else

    
const temperature=41

if (temperature<50) {
    console.log("less than 50");
    
    
}
else{
    console.log("temp is greater than 50");
    
}
console.log("executed");
//>less than 50
//>executed

//  <,>,<=,>=,==,!=,===,!==

const score=200
if (score>100) {
    const power="fly"
    console.log(`user power:${power}`);
    }


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if (userLoggedIn&&debitCard) {
    console.log("allow to make the purchase");
    
    
}
if (loggedInFromEmail||loggedInFromGoogle) {
    console.log("usser logged in");
    
    
}
//>usser logged in
