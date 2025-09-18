//object literals
const mySym=Symbol("key1")
const Jsuser = {
    name:"Raj",
    "full name":"raj raj"
    [mySym]:"mykey1"
    age:8,
    location:"delhi",
    email:"qwerty@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["mon","sat"]
    

}
console.log(Jsuser.email);//>prefer
console.log(Jsuser["email"]);//>rare one
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);//>acts as a key for a symbol try to remember this symbol's syntax

Jsuser.email="qazwsx@gmail.com"
Object.freeze(Jsuser)
//>this freezes the data set from any any further changes
Jsuser.email="qqww@gmail.com"
console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("hii");
    
}
Jsuser.greetingTwo=function(){
    console.log(`hii,$(this.name)`);
    
}
console.log(Jsuser.greeting());
//>hii
console.log(Jsuser.greetingTwo());
//>hii raj




