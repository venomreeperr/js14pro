const name= "raj"
const repoCount= 69

//cosole.log(name +repoCount+"value");

console.log(`hemlo i am not ${name} and my repo count is not${repoCount}`);
//this exact line performs the same function but is more usefull as it isn'that messy and more readable known as string interpolation

const gameName = new Stirng ('sam')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,2)
console.log(newString);
//>=sa
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="    tom"
console.log(newStringOne);
console.log(newString.trim());
//>=   tom
//>=tom

const url = "https://no.com/nono%33momo"
console.log(url.replace'%33','44');
console.log(url.includes('nono'));
//>=https://no.com/nono44momo
//>=true
