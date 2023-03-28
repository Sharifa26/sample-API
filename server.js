/**
REST API using mysql,nodejs,postman
**/

const express = require('express');
const mysql = require('mysql2')
const bodyParser = require('body-parser');

const app = express();

const port = 4000;

//parse  application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//create connection to database

const db = mysql.createConnection({
    host: 'localhost',
    user: 'tinytans',
    password: 'sharifa-123',
    database: 'sample'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});


//Creating REST API

//GET people 
app.get('/people', (req, res) => {
    let sql = 'SELECT * from people';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
});

//GET people by Id
app.get('/people/:id', (req, res) => {
    let sql = `SELECT * from people WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
});

//POST people
app.post('/people', (req, res) => {
    let user = req.body;
    let sql = `INSERT into people SET ?`;

    db.query(sql, user, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('People added successfully');
    })

});

//PUT people
app.put('/people/:id', (req, res) => {
    let sql = `UPDATE people SET name = '${req.body.name}',email ='${req.body.email}' WHERE id =${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('People Updated successfully');
    })
});

//DELETE people
app.delete('/people/:id', (req, res) => {
    let sql = `DELETE from people WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(`People id = ${req.params.id} deleted successfully`);
    })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
