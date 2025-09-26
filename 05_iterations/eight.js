const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:4{currval}`);
//     return acc+currval
    
// },0)

// console.log(myTotal);

//////////////> the above method can be used but not practised as this is not the most efficient way to write a code


//>acc0,currval1;acc1,currval2;acc3,currval3;6
//>gives the value of accumalator and the current value as acc and currval


const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);
//>6



