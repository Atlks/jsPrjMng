


global['Random']=Random

function Random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function  copy2clip(text)
{
    //copy txt to clip
    const {exec, execFile} = require('child_process')




    const iconv = require('iconv-lite');
    // Windows
    exec('clip').stdin.end(iconv.encode(text, 'gbk'));
}

function paste2024() {
    const {exec, execFile} = require('child_process')
    const {readFileSync} = require('fs')


    //const robot = require('robotjs');
    // robot.typeString("Hello, World!");
    txt = readFileSync("pastecfg.json")
    jso = JSON.parse(txt.toString())

    prm = jso['scrpt']

    // execFile(, [prm])
    console.log( JSON.stringify(jso))


    execFile(
        jso['cmd'], [prm], (error, stdout, stderr) => {
            console.log('error')
            console.log(error)
            console.log('stdout')
            console.log(stdout)
            console.log('stderr')
            console.log(stderr)
        });


    // const result = await new Promise(resolve => execFile(
    //     "C:\\AutoIt3\\AutoIt3.exe", [prm], (error, stdout, stderr) => {
    //         resolve(stdout + stderr);
    //     }));
}
