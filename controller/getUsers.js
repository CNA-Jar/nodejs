var getUser = require('../Utils/getConnect');

function getUsers(res){
  const sql = 'select * from users';
  getUser(sql, res,'', 'home');
}

module.exports = getUsers;