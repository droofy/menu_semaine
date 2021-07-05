



function test(){
    console.debug("launch");

// Using XMLHttpRequest().
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            var table_container = document.getElementById('table-container');
            csv_string_to_table(xmlhttp.responseText, table_container);
        }
    }
};
xmlhttp.open("GET", "plats.csv", true);
xmlhttp.send();

// Or using fetch() 
fetch('plats.csv')
.then(function(response){
    return response.text();
})
.then(function(data){
    var table_container = document.getElementById('table-container');
    csv_string_to_table(data, table_container);
});


}









function csv_string_to_table(csv_string, element_to_insert_table) {
    var rows = csv_string.trim().split(/\r?\n|\r/); // Regex to split/separate the CSV rows
    var table = '';
    var table_rows = '';
    var table_header = '';

    rows.forEach(function(row, row_index) {
        
        var table_columns = '';
        var col = "";
        var columns = row.split(','); // split/separate the columns in a row
        console.debug(columns)

        array.forEach(col => columns)
        {
            console.debug(col);
        };

        columns.forEach(function(column, column_index) {
            
            //   table_columns += (row_index) ;
            //   console.debug(row.column)

        });
        if (row_index == 0) {
            // table_header += '<tr>' + table_columns + '</tr>';
            // console.debug(table_header,table_columns)

        } else {
            // table_rows += '<tr>' + table_columns + '</tr>';
            //  console.debug(table_rows,table_columns)
        }
    });


}


















function readTextFile(file)
{
 
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
              
                console.debug(allText);
                    for(var i = 0; i < allText.length; i++) {
                        console.debug(i);
                    
                        var opt = options[i];
                        select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
                
                    }
                    

            }
        }
    }
    rawFile.send(null);
}






function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(';');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(';');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+";"+data[j]);
            }
            console.debug(data[j]);
            lines.push(tarr);
        }
    }
    console.debug(lines[1]);
    // alert(lines);
}




