var fs = require('fs');

const url = 'input.scss';
const test = /\$(.*)\s*:\s*(.*);/g;

function convertSassToJson(sass) {
    let output = {};
    let match = test.exec(sass);
    while(match != null){
        output[match[1]] = match[2];
        match = test.exec(sass);
    }
    return JSON.stringify(output);
}

fs.readFile(url,'utf8', (err, data) => {
    if(err) {
        console.log('error reading sass');
    }
    let json = convertSassToJson(data);
    console.log(json);
});
