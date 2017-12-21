const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio")

const myMoocBaseUrl = "https://www.my-mooc.com";

const stringData = fs.readFileSync("MyMooc.json");
const jsonData = JSON.parse(stringData);

let requestUrlList = [];

for (classLinks in jsonData){
    request(myMoocBaseUrl+jsonData[classLinks], (error, response, html) => {
        let $ = cheerio.load(html);
        requestUrlList.push($(".global-btn-inverse").attr("href"));
    })
}



console.log(requestUrlList);