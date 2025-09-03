const score=400
console.log(score);
//>=400

const balance = new Number(100)
console.log(balance);
//>=Number:100

console.log(balance.toSring());
//>=100
console.log(balance.toFixed(2));
//>=100.00 supposing that the input was 100.00

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));
//>=123.9

const hundreds=1000000
console.log(hundreds.toLocaleString());
//>=1,000,000

//++++++++++++++++++++math
console.log(Math);
//>object
console.log(Math.abs(-4));
//>4
console.log(Math.round(4.3));
//>4
console.log(Math.random());
//gives random value withinnn 0-1







