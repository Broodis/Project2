var express = require('express');
var mysql = require ('mysql');
var app = express();

var connection = mysql.createPool ({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'keepInTouch'
});

connection.connect(function(error) {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', function(req, res) {
    connection.getConnection(function(error, tempCont) {
        if(!!error) {
            tempCont.release();
            console.log('Error');
        }
    });

    app.get('/', function(req, res) {
        connection.query('SELECT * FROM Users', function(error, rows, fields) {
            if(!!error) {
                console.log('Query Error')
            } else {
                console.log('Success\n');
                console.log(rows[0].Name);
            }
        });
    })
})

app.listen(1337);