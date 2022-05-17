const columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
];

// arr = ['make', 'model', 'price'];
// arr = {
//     1: 'make', 
//     2: 'model',
//     3: 'price'
// }

// columnDefs = [['make'],['model'],['price']]

const rowData = [
    {  make: 'Toyota', model: 'Celica', price: 35000 },
    {  make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    {  make: 'BMW', model: 'M50', price: 60000 },
    {  make: 'Aston Martin', model: 'DBX', price: 190000 },
];

for (let i = 0; i < columnDefs.length; i++) {
    //console.log(columnDefs[i]);
    const divElement = document.createElement('div');
    const header = document.createElement('h1');
    header.className = 'columnName';
    header.textContent = columnDefs[i].field;
    divElement.className = 'column' + columnDefs[i].field;
    document.querySelector('.headWrapper').appendChild(divElement);
    document.querySelector('.column' + columnDefs[i].field).appendChild(header);
    for (let j = 0; j < rowData.length; j++) {
        // console.log('qwe');
        const divElementData = document.createElement('div');
        divElementData.textContent = rowData[j][columnDefs[i].field];
        document.querySelector('.column' + columnDefs[i].field).appendChild(divElementData);
    }
}

const secondWrapper = document.createElement('div')
secondWrapper.className = 'newTable';
document.querySelector('body').appendChild(secondWrapper)

for (let y = 0; y < columnDefs.length; y++) {
    const secondTableColumn = document.createElement('div');
    const header = document.createElement('h1');
    header.className = 'newTableColumnName';
    header.textContent = columnDefs[y].field;
    secondTableColumn.className = 'newTableColumn' + columnDefs[y].field;
    document.querySelector('.newTable').appendChild(secondTableColumn);
    document.querySelector('.newTableColumn' + columnDefs[y].field).appendChild(header);
    for (let u = 0; u < rowData.length; u+=2) {
        const newTableCell = document.createElement('div');
        newTableCell.textContent = rowData[u][columnDefs[y].field];
        document.querySelector('.newTableColumn' + columnDefs[y].field).appendChild(newTableCell);
    }
}