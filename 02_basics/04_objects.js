//const redUser = new Object()
//>singelton object
const redUser={}
//>non-singelton object
console.log(redUser);
//>{}
//>{}
redUser.id="123qwe"
redUser.name="sam"
redUser.isLoggedIn=false
console.log(redUser);
//>this lists everything

const regularUser={
    email:"qwer@mail",
    fullname: {
        userfullname:{
            firstname:"rraajj",
            lastname:"raj"
        }
    }
}
console.log(regularUser.fullname);
//>lists everything from the fullname
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);
//> or do this one
const obj4={...obj1,...obj2}
console.log(obj4);
//>both do the same function but the later is better

console.log(Object.keys(redUser));
//>gives the keys of the object in an array
console.log(Object.values(redUser));
//>gives the content of the object in a form of an array

const course={
    coursename:"js in hindi",
    price:"90",
    courseInstructor:"raj"
}

const {courseInstructor}=course
console.log(courseInstructor);
//>destructuring

//{

}
//>thats json format

//[{

}
]
// that too is an object in jason format
 





