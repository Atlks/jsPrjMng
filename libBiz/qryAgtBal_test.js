

require("./qryAgtBal")



var fs = require("fs");
let rt = fs.readFileSync("c:/key.txt").toString();
rt=rt.trim();
key=rt.split(",")
token={}
token.agtid=key[0]
token.desCode=key[1]
token.md5Code=key[2]
global['visa']=token
global['visaImEnv']=token

var token= global['visa']
var desCode=token.desCode
var agentid=token.agtid
var md5Code=token.md5Code
global['apiurl2023'] = "https://dtinterface.1saeda.com"

console.log(qryAgtBal())
