const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Jacob', lastName: 'Rajah'},
        {id: 2, firstName: 'Bob', lastName: 'Markle'},
        {id: 3, firstName: 'Clark', lastName: 'Kent'}
    ];
    res.send(customers);

});

const port = process.env.port | 5000 ;

app.listen(port, () => console.log(`server started on port ${port}`))