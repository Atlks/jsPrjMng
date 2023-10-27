

require("./qryAgtBal")

token={}
token.agtid=12345
global['visa']=token
var token= global['visa']
var desCode=token.desCode
var agentid=token.agtid
var md5Code=token.md5Code


console.log(qryAgtBal())
