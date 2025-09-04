///Dates

let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());
//gives diif output acc
console.log(typeof myDate);
//>object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
//>displays new date as mentioned by the user

let myTimeStamp = Date.now()

console.log(myTimeStamp);
//>gives time in millisecnd
console.log(myCreatedDate.getTime());
//>gives time in millisecond btw 1/1/1970 and the given date
console.log(Date.now());
//>=gives the date right now

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
//>= gives random date
//> gives the month of the random date
//>gives the day
newDate.toLocaleString('default',{
    weekday:"long",
})
//>=sort of further customization


