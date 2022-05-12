// function example(a, b) {
//     return function(c, d) {
//         return function(e,f) {
//             return a*c*e + b*d*f

//         }
//     }
// }


// using arrow function
const example = (a,b) => (c,d) => (e,f) => a*c*e + b*d*f

var result = example(1,2)(3,4)(5,6)

console.log(result);
