const request = require("request");
const htmlparser = require("htmlparser2");
const fs = require("fs");

let dict = {};

//const theFlowOfKnowledge = fs.createWriteStream("MyMooc.json");

const parser = new htmlparser.Parser({  
    onattribute: (name, value) => {
        if (name === "title") {
            console.log("Got title: " + value);
            dict = {
                ...dict,
                [value]: ""
            }
        }
        else if (name === "href"){
            console.log("Got link: " + value);

            for (title in dict) {
                if (dict[title] === "") {
                    dict[title] = value;
                }
            }

            fs.writeFile("MyMooc.json", JSON.stringify(dict, null, 2));
        }
    }
}, { decodeEntities: true });

function parse(html) {
    parser.write(html);
}

for (let i = 1; i <= 303; i++) {
    request({
        method: "GET",
        uri: "https://www.my-mooc.com/en/moocs/list/" + i
    }, (error, response, body) => parse(JSON.parse(body).html));
}

