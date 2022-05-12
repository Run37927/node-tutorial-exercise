// const sum = (number) => {
//     const items = [...(number + '')]
//     console.log(items);

//     const result = items.reduce((total,item) => {
//         return total + Number(item)
//     }, 0)

//     return result % 2 === 0?'EVEN' : 'ODD'
// }


// now factor the code above
const sum = (number) => [...(number.toString())].reduce((total, item) => total + Number(item), 0) % 2 === 0?'EVEN' : 'ODD'
console.log(sum(56));
