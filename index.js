function prayerTimes(latitude, longitude){
    fetch(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=2&tune=-20,-20,-3,3,4,4,4,16,2,`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(function(response){
        let data = response.data[0].timings;
        let app = document.getElementById('app');
        let table = document.createElement('table');
        let tableTbody = document.createElement('tbody');
        
        let keys = Object.keys(data);
        let nameRow = table.insertRow();
        let timeRow = table.insertRow();

        for (let i = 0; i < keys.length; i++) {
            let nameCell = nameRow.insertCell(i);
            let timeCell = timeRow.insertCell(i);

            nameCell.innerHTML = keys[i];
            timeCell.innerHTML = data[keys[i]];

            nameCell.innerHTML = `<div class="adzan-name">${keys[i]}</div>`;
            timeCell.innerHTML = `<div class="adzan-time">${data[keys[i]]}</div>`;
        }

        tableTbody.appendChild(nameRow);
        tableTbody.appendChild(timeRow);
        table.appendChild(tableTbody);
        app.appendChild(table);
    });
}

// Call the function with desired latitude and longitude
prayerTimes(-6.83285800, 107.95318360); // Example values for Sumedang