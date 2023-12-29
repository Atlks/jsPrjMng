var NeDB = require('nedb')

var db = new NeDB({
    filename: './user.db',
    autoload: true,
})


db.insert({
    name: 'Alice44',
    age: 20,
    rank: 1,
}, function(err, doc) {
    console.log('inserted:', doc)
})

