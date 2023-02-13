const request = require('request');
const {parse} = require('csv-parse');
const fs = require('fs');

const company_name = "amazon";
const url = "https://www.uscis.gov/tools/reports-and-studies/h-1b-employer-data-hub/export?topic_id=" + company_name + "&state=All&fy=1&naics=All&items_per_page=10";

const file = fs.createWriteStream('./data/H1B_employers_approval_2022/'+ company_name + '.csv');

const data = [];

var total = 0;
request(url)
    .pipe(parse(({delimiter: ",", from_line: 2})))
    .on("data", (row) => {
        //console.log("njdlsd");
        total += Number(row[2]);
        //console.log(row[2]);
    })
    .on("end", () => {
        console.log("finished!");
        console.log(total);
    })
    .on("error", (error) => {
        console.log(error.message);
    })
