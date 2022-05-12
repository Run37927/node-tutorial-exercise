const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// write a new file if there isn't one, or overwrite the original file
// writeFileSync(
//     './content/resultSync.txt', 
//     `here is the result: ${first}, ${second}`
//     );

// for appending. flag is a propety, a means append

writeFileSync(
    './content/resultSync.txt',
    `\ntrying something different`,
    { flag: 'a'}
);

console.log('Done with this task');
console.log('Starting the next one');

