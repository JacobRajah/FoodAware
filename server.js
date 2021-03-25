const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); //set env
var path = require('path');
const port = process.env.PORT || 5000 ;
const app = express();
app.use(bodyParser.json());
const userAuth = require('./server/userAuth');
const e = require('express');
var currUser = "unset";

/* Functions for when using built version of React scripts. 
   if you want to test production execute <npm run build> then
   execute <node server.js>*/
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });

app.get('/user', (req, res) => {
    console.log(currUser)
    res.send(currUser);
});

app.get('/signout', (req, res) => {
    currUser = "unset";
    console.log("Sign Out");
    res.send("success");
})

app.post('/register', (req, res) => {
    const userInfo = req.body;
    userAuth.newUser(userInfo);
    currUser = userInfo; //Store current
    res.send('validated')
});

app.post('/SSO', (req, res) => {
    const userInfo = req.body;
    userAuth.signIn(userInfo).then(response => 
        {
            if (response == null) {
                res.send('invalid');
            }
            else {
                currUser = response //Store current
                res.send('validated')
            }
        })
})


app.listen(port, () => console.log(`server started on port ${port}`))