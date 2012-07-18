var http = require('http');
var $ = require('jQuery');

function do_test(lat,long,res){

 var sparql_where =
"?thing omgeo:nearby("+lat+" "+long+" \"25mi\") . "+
"?url <http://data.press.net/ontology/tag/about> ?thing . "+
"?url <http://purl.org/dc/terms/publisher> <http://www.bbc.co.uk/news/> . "+
"?url <http://purl.org/dc/terms/title> ?title . "+
"?url <http://purl.org/dc/terms/description> ?description . "+
"?url <http://purl.org/dc/terms/created> ?created .";

  var url = "http://juicer.responsivenews.co.uk/api/articles.json?binding=url&limit=10&where="+encodeURI(sparql_where);
  console.log("url is "+url);

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data){
           result(data,res);
        }
    });

}


function result(json,res){
   res.send(json);
}

var app = require('express').createServer();

app.get('/', function(req, res){
    lat = req.query["lat"];
    lon = req.query["lon"];

    console.log("lat "+lat+" lon "+lon);
    do_test(lat,lon,res);
});

app.listen(8124);
console.log('Server running at http://127.0.0.1:8124/');

