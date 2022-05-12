// function multiply() {
//     const args = [...arguments];
//     const result = args.reduce((total, item) => {
//         return item?item * total : item + total
//     }, 1 )
//     return result
// }


const multiply = (...args) => {
    // console.log(arguments);
    // arrow function does not have access to keyword arguments, so the solution is to use rest operator
    const result = args.reduce((total, item) => {
        return item?item * total : item + total
    }, 1 )
    return result
}
var output = multiply(2,0,4,2)

console.log(output); //16