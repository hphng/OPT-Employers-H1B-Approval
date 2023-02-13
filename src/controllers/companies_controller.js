const request = require('request');
const {parse} = require('csv-parse');
const fs = require('fs');

const {makeURL} = require('./makeURL_controller');


function download_data_promise(company_name)
{
    let URL = makeURL(company_name);
    const file = fs.createWriteStream('./data/H1B_employers_approval_2022/'+ company_name + '.csv');
    return new Promise(() => {
        request(URL)
        .pipe(file)
        .on('finish', () => {
            console.log("downloaded!");
        })
        .on('error', () => {
            console.log("url is incorrect");
        })
    })
}

async function download_data(company_name)
{
    try{
        //const URL = "https://www.uscis.gov/tools/reports-and-studies/h-1b-employer-data-hub/export?topic_id=amazon&state=All&fy=1&naics=All&items_per_page=10";
        await download_data_promise(company_name);
    }
    catch(error)
    {
        console.log(error);
    }
}

download_data('amazon');

module.exports = {download_data};