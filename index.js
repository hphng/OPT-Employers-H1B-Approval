const request = require('request');
const {parse} = require('csv-parse');
const fs = require('fs');

//const url = "https://www.uscis.gov/tools/reports-and-studies/h-1b-employer-data-hub/export?topic_id=" + company_name + "&state=All&fy=1&naics=All&items_per_page=10";

const {download_data} = require('./src/controllers/companies_controller')


function abc(data)
{
    return new Promise(() => {
        var total = 0;
        const company_name = "amazon";
        fs.createReadStream('./data/H1B_employers_approval_2022/'+ company_name + '.csv')
            .pipe(parse(({delimiter: ",", from_line: 2})))
            .on("data", (row) => {
                //console.log("njdlsd");
                data.push(row);
                total += Number(row[2]);
                console.log(row[2]);
            })
            .on("end", () => {
                //console.log(data);
                console.log(total);
                console.log("finished!");
            })
            .on("error", (error) => {
                console.log(error.message);
            })
    })
}

async function a()
{
    try{
        data= [];
        await abc(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

a();