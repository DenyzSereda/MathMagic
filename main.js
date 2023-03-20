window.onload = function() {
    var x = 17;

    var table = document.getElementById("multiplication-table");
    for (var i = 1; i <= 100; i++) {
    var row = document.createElement("tr");
    row.id = "r" + i;
        for (var j = 1; j <= 100; j++) {
            var cell = document.createElement("td");
            cell.innerText = i * j;

            //cell.id = j + "x" + i;

            cell.id = j * i;
            if (cell.id % x == 0) {
                cell.classList.add('highlight1');
            }
   
            

            row.appendChild(cell);
        }
    table.appendChild(row);
    }   

    
        
    
      
      
      
      
      





    var mainRow = document.getElementById("main-row");
    for (var k = 1; k <= 100; k++) {
        var cell = document.createElement("td");
            cell.innerText = k;
            cell.id = k;
            mainRow.appendChild(cell);
    }
    var mainCol = document.getElementById("main-col");
    for (var l = 1; l <= 100; l++) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
            cell.innerText = l;
            cell.id = l;
            row.appendChild(cell);
            mainCol.appendChild(row);
    }

    var row = document.createElement("tr");

}

