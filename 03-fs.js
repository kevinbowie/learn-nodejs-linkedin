const fs = require('fs');
const data = require('./data.json');

console.log(data.name);

fs.readFile('./data.json', 'utf-8', (err, data) => {
    var data = JSON.parse(data);
    console.log('name from readFile ' + data.name);
});

// fs.readdir('c:/', (err, data) => {
//     console.log(data);
// });

var dataToWrite = {
    name: 'Bowie'
};

// below will make nodemon keep restarting due to changes
fs.writeFile('data-from-write.json', JSON.stringify(dataToWrite), (err) => {
    console.log('write finished', err);
});