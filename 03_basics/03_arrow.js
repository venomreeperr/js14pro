const user={
    username:"raj",
    price:10,
    
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
//> the keyword being used (this) defines the reference of the context
    }
}
user.welcomeMessage()
//>raj ,welcome to website

console.log(this);
//> would give an empty context as we are in a node environment and there is no global context
const addTwo=(num1+num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));
//>7 via using arrow function

