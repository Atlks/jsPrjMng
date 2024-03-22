

// execFile(, [prm])


    (async () => {


        const {exec,execFile} = require('child_process')

        prm="C:\\AutoIt3\\SciTE\\typestring_send.au3  "
        const result = await new Promise(resolve => execFile(
            "C:\\AutoIt3\\AutoIt3.exe", [prm], (error, stdout, stderr) => {
                resolve(stdout + stderr);
            }));

        console.log(result)

    })();







