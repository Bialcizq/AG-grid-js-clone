const columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
];

const rowData = [
    {  make: 'Toyota', model: 'Celica', price: 35000 },
    {  make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    {  make: 'BMW', model: 'M50', price: 60000 },
    {  make: 'Aston Martin', model: 'DBX', price: 190000 },
];

for (let i = 0; i > columnDefs.length; i++) {
    console.log(columnDefs[i]);
}

