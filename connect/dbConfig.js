var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cp-all"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = db