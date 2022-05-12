const { readFile, writeFile, read } = require('fs');
console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result;

        writeFile('./content/resultAsync.txt', `writing into the new async text file`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log('starting next task');
