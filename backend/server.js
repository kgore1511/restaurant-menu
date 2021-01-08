const express = require('express')
const path = require('path');
const port=process.env.PORT||5000;
//const serverless=require('serverless-http')
const app = express()
 var mysql=require('mysql')
 var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "gore12345",
  database: "dimple",
  insecureAuth : true
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//const router=express.Router();

app.get('/api/', function (req, res) {
console.log("got called");
con.connect(function(error) {
  if(con){
  con.query("select * from restaurantMenu", function (err, result) {
    if (err) res.send(err);
    console.log(result)
    res.send(result)
  
  });
}
});
})
 //app.use('/.netlify/funons/api',router)
//module.exports.handler=serverless(app);
app.listen(port)