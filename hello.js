console.log("hello world.");
var mysql = require("mysql");
console.log("next");
var dbConn = {
  host: "nmsucssoftdev.cdc9wpdzzghs.us-west-2.rds.amazonaws.com",
  user: "csadmin",
  password: "apples12"
};
var connection = mysql.createConnection(dbConn);
var query_str = "SELECT * FROM tldb.Users";
var query_var = "";
var query = connection.query(query_str, query_var, function (err, rows, fields) {
    if (err) {
      console.log("error");
    }
    else {
      console.log(rows);
    };
  });
  console.log("Done.");
