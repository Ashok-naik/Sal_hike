document.getElementById('calculateBtn').addEventListener('click', function() {
    let currentSalary = parseFloat(document.getElementById('currentSalary').value);
    let years = parseInt(document.getElementById('serviceYears').value);
    let hikePercentage = parseFloat(document.getElementById('hikePercentage').value);

    if (isNaN(currentSalary) || isNaN(years) || isNaN(hikePercentage) || currentSalary <= 0 || years <= 0 || hikePercentage < 0) {
        alert("⚠️ Please enter valid numbers.");
        return;
    }

    let salaryTableBody = document.querySelector("#salaryTable tbody");
    salaryTableBody.innerHTML = ""; // Clear previous data

    let totalEarnings = 0;

    for (let i = 1; i <= years; i++) {
        let yearlyEarnings = currentSalary * 12;
        totalEarnings += yearlyEarnings;

        let row = document.createElement("tr");
        row.innerHTML = `<td>${new Date().getFullYear() + i - 1}</td>
                         <td>₹${currentSalary.toFixed(2)}</td>
                         <td>₹${yearlyEarnings.toFixed(2)}</td>`;
        salaryTableBody.appendChild(row);

        currentSalary += (currentSalary * hikePercentage) / 100; // Apply hike
    }

    // Add a total earnings row at the bottom
    let totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");
    totalRow.innerHTML = `<td colspan="2"><strong>💰 Total Earnings</strong></td>
                          <td><strong>₹${totalEarnings.toFixed(2)}</strong></td>`;
    salaryTableBody.appendChild(totalRow);
});
