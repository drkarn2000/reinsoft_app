const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../reinsoft.tech - SEO Issues in Website - 12-March-2026.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
