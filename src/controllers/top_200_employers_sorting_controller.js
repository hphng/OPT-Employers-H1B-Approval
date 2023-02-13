const request = require('request');
const {parse} = require('csv-parse');
const fs = require('fs');


const data = [];

var total = 0;
fs.createReadStream('./data/top_200_employers_OPT_2019/data_Top200_EmployersSTEM_OPT_Students2019.csv')
    .pipe(parse(({delimiter: ",", from_line: 2})))
    .on("data", (row) => {
        if(row[0].search("University") == -1)
            data.push(row[0]);
    })
    .on("end", () => {
        console.log("finished!");
        console.log(data);
    })
    .on("error", (error) => {
        console.log(error.message);
    })


module.exports = {data};
