const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const prices = document.querySelectorAll(".price, .prices");

    let total = 0;

    prices.forEach(p => {
        total += Number(p.textContent.trim());
    });

    const table = document.querySelector("table");

    // If #ans already exists, remove the old row
    const oldAns = document.getElementById("ans");
    if (oldAns) {
        oldAns.parentElement.remove();
    }

    // Create new row
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");

    // Test expects id="ans"
    newCell.id = "ans";
    newCell.colSpan = 2;
    newCell.textContent = total;

    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


