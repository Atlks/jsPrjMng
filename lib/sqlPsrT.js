
sql="select * from tab1 where a=1 and b>2 and c<33";

// import Parser for all databases
const { Parser } = require('node-sql-parser');
const parser = new Parser();
const ast = parser.astify(sql); // mysql sql grammer parsed by default

console.log(ast);