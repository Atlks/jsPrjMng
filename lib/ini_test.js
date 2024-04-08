


var ini_test = require('ini');
var fs = require('fs');
var config = {
    section1: {
        key1: 'value1',
        key2: 'value2'
    },
    section2: {
        key3: 'value3',
        key4: 'value4'
    }
};
fs.writeFileSync('dt.ini', ini_test.stringify(config));