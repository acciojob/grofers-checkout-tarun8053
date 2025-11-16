const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price cells
    const prices = document.querySelectorAll(".price");
    
    let total = 0;

    prices.forEach(p => {
        total += Number(p.textContent);
    });

    // Create new row
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");

    // Span entire width of table
    newCell.colSpan = 2; 
    newCell.textContent = `Total Price = Rs ${total}`;
    newCell.style.fontWeight = "bold";

    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
