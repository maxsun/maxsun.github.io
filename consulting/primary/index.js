

AWS.config.region = 'us-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-west-2:439edd35-4953-47af-b2e9-f348fcf3fb3d',
});

var docClient = new AWS.DynamoDB.DocumentClient();

function hideById(id) {
    document.getElementById(id).style.display = 'none';
}

function showById(id) {
    document.getElementById(id).style.display = 'block';
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
                fundraising_item.date = date;
                fundraising_item.url = url;
                fundraising_item.event = 'Fundraising';
                fundraising_item.recid = formatted.length;
                formatted.push(fundraising_item);
            }
        }

        if (item['Venture Deals'] && item['Venture Deals'].length > 0) {
            for (let j = 0; j < item['Venture Deals'].length; j++) {
                let vd_item = item['Venture Deals'][j];
                vd_item.date = date;
                vd_item.url = url;
                vd_item.event = 'Venture Deals';
                vd_item.recid = formatted.length;
                formatted.push(vd_item);
            }
        }
    }
    return formatted;
}

function scanData() {
    console.log('scanning...');
    var params = {
        TableName: 'primary_data',
        Limit: 100
    };

    // let num_rows = 0;
    // var dynamodb = new AWS.DynamoDB();
    // dynamodb.describeTable({TableName: params.TableName}, function(err, data) {
    //     if (err) {
    //        console.log(err);
    //     } else {
    //         var table = data['Table'];
    //         num_rows = table['ItemCount'];
    //     }
    // });

    docClient.scan(params, onScan);
    var results = [];

    function onScan(err, data) {
        if (err) {
            console.log(err);
        } else {
            data.Items.forEach(function(item) {
                results.push(item);
            });
            console.log(results.length);

            // Continue scanning if we have more items (per scan 1MB limitation)
            if (typeof data.LastEvaluatedKey != "undefined") {
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            } else {
                console.log('Done Scanning!');
                let formattedData = formatData(results);

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

                console.log(formattedData);
                hideById('loadingIconWrapper');
                $('#grid').w2grid({
                    name: 'grid',
                    header: 'List of Names',
                    show: {
                        toolbar: true,
                        footer: true
                    },
                    columns: [
                        { field: 'company', caption: 'Company', size: '30%', sortable: true, resizable: true },
                        { field: 'amounts', caption: 'Amounts', size: '50px', sortable: true, attr: 'align=center' },
                        { field: 'date', caption: 'Date', size: '30%', sortable: true, resizable: true },
                        { field: 'event', caption: 'Event', size: '40%', resizable: true, sortable: true },
                        { field: 'locations', caption: 'Locations', size: '120px', resizable: true, sortable: true },
                        { field: 'mentioned companies', caption: 'Mentioned Companies', size: '120px', resizable: true },
                        { field: 'series', caption: 'Series', size: '120px', resizable: true, sortable: true },
                        { field: 'text', caption: 'Text', size: '120px', resizable: true },
                        { field: 'url', caption: 'URL', size: '120px', resizable: true },
                
                    ],
                    searches: [
                        { field: 'company', caption: 'Company', type: 'text' },
                        { field: 'date', caption: 'Date', type: 'text' },
                        { field: 'event', caption: 'Event', type: 'text' },
                        { field: 'mentioned companies', caption: 'Mentioned Companies', type: 'text' },
                        { field: 'series', caption: 'Series', type: 'text' },

                    ],
                    sortData: [{ field: 'recid', direction: 'ASC' }],
                    records: formattedData
                });
            }
        }
    }
}

scanData();
