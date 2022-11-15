const fs = require("fs") 
const pdfparser = require("pdf-parse")
const pdffile  = fs.readFileSync("../pdf/My pdf document.pdf")

pdfparser(pdffile, {
    max:1

}).then(data => {
    // console.log(data.info)
    console.log(data.text);
}).catch(err => {
    console.log(err)
})

