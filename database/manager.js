var mysql = require('mysql');
var db = {};
exports.authtenticate = function() {
    this.db = mysql.createConnection({
        host: 'localhost',
        user: 'sitecore',
        password: 'siteadmin',
        database: 'sitecore'
    });
    return this.db;
};

exports.connect = function() {
    this.db.connect(function(err) {
        if (err) {
            console.log('Error connecting to database');
            return;
        }
        console.log('Connection established');
    });
};


db.end(function(err) {
    /*
     * The connection is terminated gracefully.
     * Ensures all previously enqueued queries are still
     * processed, before sending a COM_QUIT packet to the MySQL server
     */
});