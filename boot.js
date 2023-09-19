

cmd="npm start"
var prcsmd = require('child_process');
let rzt = prcsmd.execSync(cmd).toString();
 console.log(rzt)


