// C:\node20\npm.cmd install puppeteer

//cdp better thean webdriver dont need chrome driver install


let sql = "SELECT * from    limit 1";
let dbname = 'a-ddd';









const puppeteer = require('puppeteer');
const {execFile} = require("child_process");

(async () => {
// 启动浏览器
    const browser = await puppeteer.launch({headless: true});
// 创建一个新页面
    const page = await browser.newPage();
// 访问一个网址
    await page.goto('https:// / .php');

    keyxxx = 'xxx'
    await page.type('#txtKey', keyxxx);

    //await page.type('#dbname', 'a-jiqu28');

    await page.select('#dbname', dbname)
    await page.type('#txtContent', sql);


    //点击指定的元素：
    await page.click('#btnCode');
    const text = await page.$eval('#txtResult', el => el.value);
    console.log(text)


    //copy txt to clip
    const {exec, execFile} = require('child_process')
    // Windows
    exec('clip').stdin.end(text)

    console.log("clip() finish")
    setTimeout(function () {

        console.log("paste2024()")

        paste2024()


    }, 1000)


// 关闭浏览器
    await browser.close();
})();


function paste2024() {
    const {exec, execFile} = require('child_process')

    //const robot = require('robotjs');
    // robot.typeString("Hello, World!");

    //send paste ctrl+v
    prm = "C:\\AutoIt3\\SciTE\\typestring_send.au3  "

    // execFile(, [prm])


    execFile(
        "C:\\AutoIt3\\AutoIt3.exe", [prm]);

    // const result = await new Promise(resolve => execFile(
    //     "C:\\AutoIt3\\AutoIt3.exe", [prm], (error, stdout, stderr) => {
    //         resolve(stdout + stderr);
    //     }));
}