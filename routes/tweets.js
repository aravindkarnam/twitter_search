var express = require('express');
var router = express.Router();
var Twitter = require('twitter-node-client').Twitter;
var config={
  consumerKey :	"9zyMdES0GACR7k4YVPrUzfDfD",
  consumerSecret : "sSzg7kAQCGwXXc72e5tA1sXqlzPhbKbP4SXrTeWXxDDwTvPsSg",
  accessToken : "881662574-uFmWjexeUO0FKJ3DlbS9WlTA43A6h2dpBojmF0T0",
  accessTokenSecret : "6kW8UIVNp2duSOz6uA32xsT8Xh7lfnEpIVK4NJuP7JFOC"
}
var twitter = new Twitter(config);

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  twitter.getSearch({'q':req.query.q,'count': 10}, function(data){
    console.log(data);
    res.json(data);
  }, function(data){
    console.log(data);
    res.json(data);
  })

});

module.exports = router;
