let myStr = "Vivek" //str
let myNum = 123 // number
let newNum ; // undefined
let newSymbol = Symbol(123) // symbool
let mySymbol = Symbol(123) // if the value two variables are same but its in Symbol then it will unique in memory 
let bigNum = 12345678900987398n // BigInt

// all of the above are primitive D.T (call by value ; ie. In memory the copy of the value is used for the operations)

// Below all are the Non Primitive D.T

let array = [123,34,56]
let myObj = {
    "name" : "Vivek",
    "id" : 1 
} 

// objects are just like dictionaries


let myfunc = function(){
    console.log(myfunc)
}

// there is another way to define functions 
