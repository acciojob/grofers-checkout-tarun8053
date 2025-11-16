const getSum = () => {
    // Select all prices
    const prices = document.querySelectorAll(".price");

    let total = 0;
    prices.forEach(p => {
        total += Number(p.textContent);
    });

    // Get table
    const table = document.querySelector("table");

    // Create new row
    const newRow = document.createElement("tr");

    // Create cell for answer
    const newCell = document.createElement("td");
    newCell.id = "ans";         // IMPORTANT: test expects this ID
    newCell.colSpan = 2;        // covers both columns
    newCell.textContent = total;

    // Append to row + table
    newRow.appendChild(newCell);
    table.appendChild(newRow);
};
