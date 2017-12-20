const request = require('request');
const cheerio = require('cheerio');
const fs = require("fs");

const url = `https://www.my-mooc.com/en/moocs`;
console.log("1");

const moocs = [];

request(url, function(error, response, html) {
    console.log("2");

    fs.writeFile("response.html", html);
 
    // if (!error) {
    //     console.log("3");

    //     const $ = cheerio.load(html);

    //     // console.log($);

    //     $("div").filter(function() {
    //         const data = $(this);

    //         // console.log(data.text());

    //         console.log(data.children());
    //     });
    // }
});