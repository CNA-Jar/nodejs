/**
 * Created by Mr.Y on 2017/3/27.
 */
var saveUser  = require('../controller/saveUser');
var getUser = require('../controller/getUsers');
var saveFiles = require('../controller/saveFiles');

module.exports = function(app){
  app.get('/',function(req,res){
    res.render('index', { title: 'Angular' });
  });
  app.post('/saveUsers',function(req,res){
    req.setEncoding('utf-8');
    req.on("data",function(data){
      console.log(data);
    })
    var data = req.body;
    saveUser(data, res);
  });
  app.get('/homepage', function(req, res){
    console.log('coming?');
    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.render('home', { username: 'customer111'});
    getUser(res);
  });
  app.post('/saveFiles', function(req,res){
    var data = req.body;
    saveFiles(data, res);
  })
};