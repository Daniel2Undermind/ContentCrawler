const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio")

const myMoocBaseUrl = "https://www.my-mooc.com";

let requestUrlList = [];
let list = [];

fs.readFile("MyMooc.json", (err, data) => { 
    if(err) throw err;

    JSON.parse(data, (key, value) => {
        request(myMoocBaseUrl+value, (error, response, html) => {
            let $ = cheerio.load(html);
            list.push($(".global-btn-inverse").attr("href"));
        })
    })
});
