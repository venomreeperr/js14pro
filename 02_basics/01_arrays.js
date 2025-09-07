//array
const myArr=[0,1,2,3,4]
console.log(myArr[3]);

//array methods
myArr.push(6)
console.log(myArr);
//>0,1,2,3,4,5,6

const newArr=myArr.join()
//>gives joined array in the form of a string

const myn1=myArr.slice(1,3)
//>knocks off the range but keeps the last one and dosen't changes the original array
console.log(myn1);

console.log("B",myArr);

const myn2=myArr.splice(1,3)
//>includes both the end point and removes that portion from the original array in sort it modifies the array
console.log(myn2);


