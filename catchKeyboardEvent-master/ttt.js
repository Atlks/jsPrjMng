const gkm = require('gkm');

gkm.events.on('key.*', data => {


    console.log(data)
    const button = data[0];

    if (button === 'Escape') {
        console.log('Escaped');
        process.exit();
    }
});