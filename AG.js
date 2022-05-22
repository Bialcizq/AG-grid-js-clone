const sortByMake = document.querySelector('.sortByMake');
const sortByModel = document.querySelector('.sortByModel');
const sortByPrice = document.querySelector('.sortByPrice');
const createOrder = document.querySelector('.createOrderButton');

const newTableData = [];

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
    {  make: 'Toyota', model: 'Celica', price: 35000 },
    {  make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    {  make: 'BMW', model: 'M50', price: 60000 },
    {  make: 'Aston Martin', model: 'DBX', price: 190000 },
];

for (let o = 0; o < rowData.length; o+=2) {
    newTableData.push(rowData[o]);
}

function createTable() {
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
}

// const secondWrapper = document.createElement('div')
// secondWrapper.className = 'newTable';
// document.querySelector('body').appendChild(secondWrapper)

// for (let y = 0; y < columnDefs.length; y++) {
//     const secondTableColumn = document.createElement('div');
//     const header = document.createElement('h1');
//     header.className = 'newTableColumnName';
//     header.textContent = columnDefs[y].field;
//     secondTableColumn.className = 'newTableColumn' + columnDefs[y].field;
//     document.querySelector('.newTable').appendChild(secondTableColumn);
//     document.querySelector('.newTableColumn' + columnDefs[y].field).appendChild(header);
//     for (let u = 0; u < newTableData.length; u++) {
//         const newTableCell = document.createElement('div');
//         newTableCell.textContent = newTableData[u][columnDefs[y].field];
//         document.querySelector('.newTableColumn' + columnDefs[y].field).appendChild(newTableCell);
//     }
// }

createTable();

sortByMake.addEventListener('click', ()=> {
    rowData.sort((a, b)=> {
        if (a.make < b.make) {
            return -1
        }

        if (a.make > b.make) {
            return 1
        }
    });
    const emptyWrapper = document.querySelector('.headWrapper');
    emptyWrapper.innerHTML='';

    createTable();
});

sortByModel.addEventListener('click', ()=> {
    rowData.sort((a, b)=> {
        if (a.model < b.model) {
            return -1
        }

        if (a.model > b.model) {
            return 1
        }
    });
    const emptyWrapper = document.querySelector('.headWrapper');
    emptyWrapper.innerHTML='';

    createTable();
})

sortByPrice.addEventListener('click', ()=> {
    rowData.sort((a, b)=> {
        if (a.price < b.price) {
            return -1
        }

        if (a.price > b.price) {
            return 1
        }
    });
    const emptyWrapper = document.querySelector('.headWrapper');
    emptyWrapper.innerHTML='';

    createTable();
})

const amountData = [];

createOrder.addEventListener('click', ()=> {
    columnDefs.push({field: 'amount'});
    
    const emptyWrapper = document.querySelector('.headWrapper');
    emptyWrapper.innerHTML='';

    for (let  i = 0; i < rowData.length; i++) {
        const amountElement = document.createElement('div');
        const amountElementInput = document.createElement('input');
        rowData[i].amount = amountElement;
        amountElement.className = 'inputContainer';
    }

    createTable();
})