var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var page = "https://www.my-mooc.com/en/mooc/ap-physics-1-ricex-advphy1x/"

request(page, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('div[class=preview-mooc]').each(function(i, element){
        var div = $(this);
        console.log(div.html());
      });
    }
  });
  
// request(khanHome, function(error, response, htmlBody){
//     var $ = cheerio.load(htmlBody);
//     console.log(htmlBody);
//     var cR = $('div[class=domainTitle_1osp02c-o_O-domainTitleDense_lkkpk3]');
//      console.log(cR.text());
//     cheerioResponse('div[class=container_1qxgefl-o_O-containerDense_18b9ep8]').each(function(i,element){
//         var a = cheerioResponse(this).parent();
//         console.log(counter++);
//         console.log(a.html());
//     })
    
    
//      cheerioResponse('span[class=domain-name body-1-text]').each(function(i, element){
//         var courseraCat = cheerioResponse(this);
//         var courseraCatTitle = courseraCat.text();
//         console.log(courseraCatTitle);
//         var aTag = cheerioResponse(this).prev();
//         console.log(aTag);
//      })
// })

// request(url, function(err, resp, body){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(body);
//     }
// })

var destination = fs.createWriteStream('./downloads/webpage.txt');
request(page)
.pipe(destination)
.on('finish',function(){console.log('done');})
.on('error',function(err){console.log(err);});

// app.listen(port);
// console.log('server is listening on ' + port);
console.log('finished');
