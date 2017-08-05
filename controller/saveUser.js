/**
 * Created by Mr.Y on 2017/3/27.
 */
var saveDate = require("../Utils/getConnect");
function saveUser(data, res){
  if(data){
    var pwd = parseInt(data.password, 10),
        userName = data.username;
    var updateSql = "INSERT INTO users(name,password) values ('"+ userName +"','"+ pwd +"')";
    saveDate(updateSql, res, '/homepage');
  }
}

module.exports = saveUser;