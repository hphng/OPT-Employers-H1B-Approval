const request = require('request');
const {parse} = require('csv-parse');
const fs = require('fs');
//const {download_data} = require('./companies_controller')
const {total_first_approval} = require('./take_data_companies');

const data = [];

var total = 0;

async function tt(readable)
{
    for await (const chunk of readable)
    {
        //console.log(chunk);
    }
}


const readable = fs.createReadStream('./data/top_200_employers_OPT_2019/data_Top200_EmployersSTEM_OPT_Students2019.csv')
    .pipe(parse(({delimiter: ",", from_line: 2})))
    .on("data", (row) => {
        if(row[0].search("University") == -1)
        {
            let company_name = row[0];
            
            if(company_name.search('Inc') != -1)
            {
                company_name = company_name.slice(0, -5);
            }
            total_first_approval(company_name);   
        }
        //download_data("Formac");


    })
    .on("end", () => {
        console.log("finished!");
        console.log(data);
    })
    .on("error", (error) => {
        console.log(error.message);
    })

tt(readable);

module.exports = {data};
