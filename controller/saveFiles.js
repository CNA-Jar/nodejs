var fs = require('fs');
var saveDate = require("../Utils/getConnect");

function postFile(data, res) {
  console.log(data);
  if (data) {
    // var path = data.path,
    //     userName = data.username;
    // var updateSql = "INSERT INTO file(path) values ('"+ path +"'";
    // saveDate(updateSql, res, '/saveFiles');
  } else {
    console.log('no File Uploaded...');
  }
}

module.exports = postFile;