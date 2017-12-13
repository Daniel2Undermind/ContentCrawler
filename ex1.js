var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var courseraHome = "https://www.coursera.org/"
var courseraCategories = "browse?languages=en";

request(courseraHome+courseraCategories, function(error, response, htmlBody){
    var cheerioResponse = cheerio.load(htmlBody); 
     cheerioResponse('span.domain-name body-1-text').each(function(i, element){
        var courseraCat = cheerioResponse(this);
        var courseraCatTitle = courseraCat.text();
        console.log(courseraCatTitle);
    //     var aTag = cheerioResponse(this).prev();
    //     console.log(aTag);
     })
})

// request(url, function(err, resp, body){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(body);
//     }
// })

// var destination = fs.createWriteStream('./downloads/coursera.txt');
// request(courseraHome+courseraCategories)
// .pipe(destination)
// .on('finish',function(){console.log('done');})
// .on('error',function(err){console.log(err);});

app.listen(port);
console.log('server is listening on ' + port);

