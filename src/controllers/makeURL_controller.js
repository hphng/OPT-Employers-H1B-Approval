const querystring = require('querystring');

function makeURL(company_name)
{
    const export_URL = "https://www.uscis.gov/tools/reports-and-studies/h-1b-employer-data-hub/export?";
    const q = querystring.stringify({
        topic_id: company_name,
        state: 'All',
        fy: '1',
        naics: 'All',
        items_per_page: '10',
    })

    const full_URL = export_URL + q;

    return full_URL;
}

module.exports = {makeURL};