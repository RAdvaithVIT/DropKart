var checkedAttr = [];


function createTable(dataArray) {
    
    var table = document.getElementById('dynamicTable');
    
    
    table.innerHTML = '';

    
    if (dataArray.length > 0) {
        var headerRow = document.createElement('tr');
        Object.keys(dataArray[0]).forEach(key => {
            var th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        });

        
        var totalHeader = document.createElement('th');
        totalHeader.textContent = "Total Price";
        headerRow.appendChild(totalHeader);

        table.appendChild(headerRow);
    }

    
    let totalPrice = 0;

    
    dataArray.forEach(item => {
        var row = document.createElement('tr');
        Object.values(item).forEach(value => {
            var cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        
        
        if (item.Price) {
            totalPrice += parseFloat(item.Price);
        }

        
        var priceCell = document.createElement('td');
        priceCell.textContent = item.Price || '-';  // Add '-' if no price field
        row.appendChild(priceCell);

        table.appendChild(row);
    });

    
    var totalRow = document.createElement('tr');
    var totalCell = document.createElement('td');
    totalCell.setAttribute('colspan', Object.keys(dataArray[0]).length); 
    totalCell.textContent = "Total Price:";
    totalRow.appendChild(totalCell);

    var totalPriceCell = document.createElement('td');
    totalPriceCell.textContent = totalPrice.toFixed(2);  
    totalRow.appendChild(totalPriceCell);

    table.appendChild(totalRow);
}


$('.form-check :checkbox').change(function() {
    
    checkedAttr = $('.form-check :checked').map(function() {
        return $(this).val();
    }).get();

    var checkedAttr_f = checkedAttr.map(function(val) {
        return JSON.parse(val); 
    });

    console.log(checkedAttr_f);
    
    
    createTable(checkedAttr_f);

    var myJsonString = JSON.stringify(checkedAttr_f);
    console.log(myJsonString);
    return myJsonString;
});
