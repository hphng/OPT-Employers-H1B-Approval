const request = require('request');
const {parse} = require('csv-parse');
const fs = require('fs');

function opt()
{
    const file = fs.createWriteStream('./data/OPT_sheet.csv');
    request()
}