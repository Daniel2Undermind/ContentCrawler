const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const options = {};

const window = (new JSDOM(``, {
    url: "https://www.my-mooc.com/en/moocs",
    contentType: "text/html",
    userAgent: "Mellblomenator/9000",
    includeNodeLocations: true,
    pretendToBeVisual: true
})).window;


const document = window.document;
console.log(window);
