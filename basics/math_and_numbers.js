let num = 3.14159;

console.log(num.toFixed(2));  // "3.14" to fixed number of decimal (returns string)

let num2 = 123456;
console.log(num2.toExponential(2));  // "1.23e+5" Converts number to exponential notation

let num3 = 1234567.89;
console.log(num3.toLocaleString());          // "1,234,567.89" (in en-US)
console.log(num3.toLocaleString("en-IN"));   // "1.234.567,89" (in india)

let num4 = 3.14159;
console.log(num4.toPrecision(3));  // "3.14"

let num5 = 255;
console.log(num5.toString());     // "255"
console.log(num5.toString(16));   // "ff" (hex)
console.log(num5.toString(2));    // "11111111" (binary)

                        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

let randomNum = Math.random()
console.log(randomNum); // its give no. btwn 0-1

let newRandomNum = Math.floor(Math.random()*10+ 1)
console.log(newRandomNum)


const min  = 12
const max  = 92



let newVar = Math.floor(Math.random() * (max - min + 1)) + min
console.log(newVar);



