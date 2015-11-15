var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'sitecore',
    password: 'siteadmin',
    database: 'sitecore'
});

db.connect(function(err) {
    if (err) {
        console.log('Error connecting to database');
        return;
    }
    console.log('Connection established');
});

// select all employees
db.query('SELECT * FROM employees', function(err, rows) {
    if (err) throw err;

    console.log('Employee data loaded from db.\n');
    console.log(rows);
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i].name);
    }
});

// insert a new employee
var employee = {
    name: 'James',
    location: 'United States'
};
db.query('INSERT INTO employees SET ?', employee, function(err, res) {
    if (err) throw err;
    employee.id = res.insertId;
    console.log('Last insert ID: ', res.insertId);
    console.log('New Employee\n', employee);
});

db.end(function(err) {
    /*
     * The connection is terminated gracefully.
     * Ensures all previously enqueued queries are still
     * processed, before sending a COM_QUIT packet to the MySQL server
     */
});