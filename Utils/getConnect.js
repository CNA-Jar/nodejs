/**
 * Created by Mr.Y on 2017/3/27.
 */
var mySql = require("mysql");

var client = mySql.createConnection({
  user: 'root',
  password:'123456'
});

var DATABASE = "blog";
client.connect();

client.query("use " + DATABASE);

function optDateBase(sql, res, routesName, renderName){
  client.query(sql,function(err, result, cb){
    if(err){
      console.log(err);
    }else if(result){
      if (routesName){
        res.redirect(routesName);
      } else {
        console.log(result);
        res.statusCode = 200;
        // res.send(result);
        return res.json({data:result});
        // res.render(renderName, { users : result});
      }
    }
    client.end();
  })
}

module.exports = optDateBase;