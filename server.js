const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); //set env
var path = require('path');
const port = process.env.PORT || 5000 ;
const app = express();
app.use(bodyParser.json());

/* Functions for when using built version of React scripts. 
   if you want to test production execute <npm run build> then
   execute <node server.js>*/
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Jacob', lastName: 'Rajah'},
        {id: 2, firstName: 'Bob', lastName: 'Markle'},
        {id: 3, firstName: 'Clark', lastName: 'Kent'}
    ];
    res.send(customers);

});

app.post('/user', (req, res) => {
    const userInfo = req.body;
    console.log(userInfo);
    res.send('Data logged')
})


app.listen(port, () => console.log(`server started on port ${port}`))