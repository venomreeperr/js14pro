const coding=["js","ruby","java","python","cpp"]

coding.forEach(function (val){
    console.log(val);
    
}) 
//>js,ruby,java,python,cpp

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)

 
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})


