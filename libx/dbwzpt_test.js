require("./dbwzpt")
require("./logger")
require("./dbV2")
const fs = require("fs");
//  pdo_insertV4({"id": 8}, "coll99")



pdo_insertV5({"id": 8}, "uid123/coll99","../db2/")
//


// require("./logger")
// const fs = require("fs");
console.log(pdo_queryV2({}, "coll99"))


//update
let rows = pdo_queryV2({"id": 7}, "coll99")
let obj = rows[0];
obj.updt = "ok2";
//pdo_saveV2(obj, "coll99")