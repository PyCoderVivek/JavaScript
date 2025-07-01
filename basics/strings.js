let variable = "Vivek"
console.log(variable);

// some methods in strings 

console.log(`This is a UpperCase of variable ==> ${variable.toUpperCase()}`)
console.log(`This is a length of the variable ==> ${variable.length}`)
console.log(`This is a endsWith k  ==> ${variable.endsWith("k")}`)
console.log(`This is a includes V in variable ==> ${variable.includes("V")}`)
console.log(typeof `${variable.split("")}`) 

// when You use template literal then it will convert into string

// to know every methods of string 

console.log(Object.getOwnPropertyNames(String.prototype));
