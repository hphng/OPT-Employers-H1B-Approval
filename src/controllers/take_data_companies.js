const fs = require('fs');
const {parse} = require('csv-parse');

function total_first_approval_promise(company_name)
{
    return new Promise(() => {
        let writer = fs.createWriteStream('./data/opt_sheet.csv');
        var total = 0;
        fs.createReadStream('./data/H1B_employers_approval_2022/'+ company_name + '.csv')
            .pipe(parse(({delimiter: ",", from_line: 2})))
            .on("data", (row) => {
                //console.log("njdlsd");
                data.push(row);
                total += Number(row[2]);
                //console.log(row[2]);
            })
            .on("end", () => {
                //console.log(data);
                writer.write(company_name + ',' + total);
                console.log(company_name + ',' + total);
                //console.log("finished calculate from " + company_name);
            })
            .on("error", (error) => {
                console.log(error.message);
            })
    })
}
 
async function total_first_approval(company_name)
{
    try{
        data= [];
        await total_first_approval_promise(company_name);
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports = {total_first_approval};