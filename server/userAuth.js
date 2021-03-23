var MongoClient = require('mongodb').MongoClient;
// require('dotenv').config(); //set env

function newUser(usr) {
    const url = process.env.DB;
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("FoodAware");
        dbo.collection("Users").insertOne(usr, function(err, res) {
            if(err) throw err;
            console.log("User logged");
            db.close();
        })
    });
}

async function signIn(usr) {
    const url = process.env.DB;
    var db = await MongoClient.connect(url, { useUnifiedTopology: true })
    var dbo = db.db("FoodAware");
    return await dbo.collection("Users").findOne(usr);
}

usr = {
       fName: 'Jacob',
       lName: 'Rajah',
       email: 'j@aba.ca',
       password: '2e477fa73d6d17b1921c5c56e5e38b63292ec2047a542c704adc61fdd2dd1c0d'
     }

module.exports.newUser = newUser;
module.exports.signIn = signIn;