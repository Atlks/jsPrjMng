

var loki = require('lokijs')

var db = new loki('loki.json')

var children = db.addCollection('children')


children.insert({name:'Sleipnir', legs: 8})

children.insert({name:'Jormungandr', legs: 0})

children.insert({name:'Hel', legs: 2})



console.log(999)