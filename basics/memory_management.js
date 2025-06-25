// there is two type of memory in JS 
// Stack ==> Primitive DataType ; Heap ==> Non Primitive DataType


let myName = "Vivek"
let newName  = myName
newName = "Ashish"


console.log(myName);
console.log(newName);
console.log(myName);

// in Stack the copy of the memory is given so no change in original value of a variable 

let userOne = {
    "name" : "Vivek",
    "id" : 1
}

console.log(userOne);

let userTwo = userOne

userTwo.name = "Ashish"


console.log(userTwo);
console.log(userOne);

// In Non-primitive the original value is changed the Reference is given when the value is called and all happens in Heap 

