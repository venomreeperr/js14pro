//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    } 
//1,2,3,4,5

const greetings ="hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

    //gives all the character in the word

    //maps

const map= new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
console.log(map);
 
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}
