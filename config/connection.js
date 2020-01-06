// Set up MySQL connection.
const mysql = require ("mysql");
// create Mysql connection
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
  });
};

connection.connect();
// export the connection
module.exports = connection;
