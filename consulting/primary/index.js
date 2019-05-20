console.log('running...');

AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:439edd35-4953-47af-b2e9-f348fcf3fb3d',
});

var docClient = new AWS.DynamoDB.DocumentClient();

function makeTable(rows) {
    let table = document.createElement('table');
    for (let i = 0; i < rows.length; i++) {
        let html_row = document.createElement('tr');
        let row = rows[i];
        for (attr_name in row) {
            let attr = row[attr_name];
            let row_cell = document.createElement('td');
            row_cell.innerText = attr;
            html_row.appendChild(row_cell)
        }
        table.appendChild(html_row);
    }

    document.body.appendChild(table);
}

function formatData(items) {
    let formatted = [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        date = item['date']
        url = item['url']

        if (item['Fundraising'] && item['Fundraising'].length > 0) {
            for (let j = 0; j < item['Fundraising'].length; j++) {
                let fundraising_item = item['Fundraising'][j];
                fundraising_item.data = date;
                fundraising_item.url = url;
                fundraising_item.event = 'Fundraising';
                formatted.push(fundraising_item);
            }
        }

        if (item['Venture Deals'] && item['Venture Deals'].length > 0) {
            for (let j = 0; j < item['Venture Deals'].length; j++) {
                let vd_item = item['Venture Deals'][j];
                vd_item.data = date;
                vd_item.url = url;
                vd_item.event = 'Venture Deals';
                formatted.push(vd_item);
            }
        }

    }
    return formatted;
}


const downloadCSV = (args) => {

    let filename = args.filename || 'export.csv';
    let columns = args.columns || null;

    let csv = Papa.unparse({
        data: args.data,
        fields: columns
    })
    if (csv == null) return;

    var blob = new Blob([csv]);
    if (window.navigator.msSaveOrOpenBlob) // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
        window.navigator.msSaveBlob(blob, args.filename);
    else {
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob, {
            type: "text/plain"
        });
        a.download = filename;
        document.body.appendChild(a);
        a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
        document.body.removeChild(a);
    }

}

function scanData() {
    console.log('scanning...');
    var params = {
        TableName: 'primary_data',
        Limit: 100
    };

    docClient.scan(params, onScan);
    var results = [];

    function onScan(err, data) {
        if (err) {
            console.log(JSON.stringify(err, undefined, 2));
        } else {
            data.Items.forEach(function(item) {
                results.push(item);
            });

            // Continue scanning if we have more items (per scan 1MB limitation)
            if (typeof data.LastEvaluatedKey != "undefined") {
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            } else {
                let formattedData = formatData(results);
                makeTable(formattedData);
                document.getElementById('loadingDiv').style.display = 'none';
                let csvString = Papa.unparse(formattedData);
                document.getElementById('downloadCSV').onclick = function() {
                    var blob = new Blob([csvString]);
                    if (window.navigator.msSaveOrOpenBlob) // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
                        window.navigator.msSaveBlob(blob, "filename.csv");
                    else {
                        var a = window.document.createElement("a");
                        a.href = window.URL.createObjectURL(blob, {
                            type: "text/plain"
                        });
                        a.download = "data.csv";
                        document.body.appendChild(a);
                        a.click(); // IE: "Access is denied"; see: https://connect.microsoft.com/IE/feedback/details/797361/ie-10-treats-blob-url-as-cross-origin-and-denies-access
                        document.body.removeChild(a);
                    }
                }

            }
        }
    }
}

scanData();