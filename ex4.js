const request = require("request");
request({
    method: "GET",
    uri: "https://www.my-mooc.com/en/moocs/list/1"
}, (error, response, body) => parse(JSON.parse(body).html));

const htmlparser = require("htmlparser2");

var dict = {};
var title;
var link;

const parser = new htmlparser.Parser({  
    onattribute: (name, value) => {
        if (name === "title") {
            // console.log("Got title: " + value);
            title = value;
        }
        else if (name === "href"){
            // console.log("Got link: " + value);
            link = value;
        }
    }
}, { decodeEntities: true });

function parse(html) {
    parser.write(html);
    parser.end();

    for (key in dict){
        console.log(key);
        console.log(dict[key]);
    }
}

function fillDictionaryWithContent(dict){
    var itemCounter = 0;

    if (title != null){
        if (dict.length = 0){
            dict.title = link;
        }
        else {
            for (storedTitle in dict){
                console.log("title checker" + itemCounter);
                if (storedTitle !== title && dict.length <= itemCounter){
                    dict.title = link;
                }
                itemCounter++
            }    
        }
    }
}

