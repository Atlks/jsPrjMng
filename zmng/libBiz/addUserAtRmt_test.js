




(async function () {

    let kf= __dirname+"/../_noup/key.txt"

    var fs = require("fs");
    let rt = fs.readFileSync(kf).toString();
    rt = rt.trim();
    key = rt.split(",")
    token = {}
    token.agtid = key[0]
    token.desCode = key[1]
    token.md5Code = key[2]
    global['visaImEnv'] = token

    global['apiurl2023'] = "https://dtinterface.1saeda.com"

    require("./bizHttp")
    require("./user")
    require("../libx/excel")
    require("../libx/php")
    require("../libx/logger")
    require("./searchPlayer")


    acc_tgid="aa4564561asdf"
    let rzt2 = await addUserAtRmt("879006550","nknmmm")

    console.log(rzt2)


})()



