const guitars = [
    { serialNumber: "SN001", builder: "Fender", model: "Stratocaster", type: "Electric", backWood: "Alder", topWood: "Maple", price: "1000" },
    { serialNumber: "SN002", builder: "Gibson", model: "Les Paul", type: "Electric", backWood: "Mahogany", topWood: "Maple", price: "2000" },
    { serialNumber: "SN003", builder: "Martin", model: "D-28", type: "Acoustic", backWood: "Rosewood", topWood: "Spruce", price: "3000" },
    { serialNumber: "SN004", builder: "Taylor", model: "314ce", type: "Acoustic", backWood: "Sapele", topWood: "Sitka Spruce", price: "1500" },
    { serialNumber: "SN005", builder: "Yamaha", model: "FG800", type: "Acoustic", backWood: "Nato", topWood: "Spruce", price: "500" }
];

async function searchGuitars() {
    const builder = document.getElementById('builder').value;
    const model = document.getElementById('model').value;
    const type = document.getElementById('type').value;
    const backWood = document.getElementById('back-wood').value;
    const topWood = document.getElementById('top-wood').value;

    const response = await fetch(`https://guitar-inventory-management-latest-5qed.onrender.com/inventory/search?builder=${builder}&model=${model}&type=${type}&backWood=${backWood}&topWood=${topWood}`);
    const filteredGuitars = await response.json();

    const resultsBody = document.getElementById('search-results').getElementsByTagName('tbody')[0];
    resultsBody.innerHTML = ''; 

    filteredGuitars.forEach(guitar => {
        const row = resultsBody.insertRow();
        Object.values(guitar).forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    });
}