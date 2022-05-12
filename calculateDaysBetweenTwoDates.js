const date1 = new Date('May 27, 2021')
const date2 = new Date('June 5, 2023')

console.log(date2 - date1);
// const getDaysBetween = (date1, date2) => {
//     const oneDay = 1000 * 60 * 60 * 24

//     const time2 = date2.getTime();
//     console.log(time2);
//     const time1 = date1.getTime();
//     console.log(time1);

//     let timeDiff = time2 - time1
//     console.log(timeDiff);

//     timeDiff = Math.round(Math.abs(timeDiff / oneDay)) 

//     console.log(timeDiff);

//     return timeDiff
// }


// now refactor the code above
const getDaysBetween = (date1, date2) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)))

console.log(getDaysBetween(date1, date2));