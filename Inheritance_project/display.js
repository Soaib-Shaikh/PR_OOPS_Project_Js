function loadEmployees() {
  const tableBody = document.getElementById("employeeTableBody");
  tableBody.innerHTML = "";

  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  employees.forEach((emp, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.id}</td>
      <td>${emp.name}</td>
      <td>${emp.department}</td>
      <td>₹${emp.salary}</td>
      <td>${emp.attendance}%</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${index})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function deleteEmployee(index) {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  if (confirm("Are you sure you want to delete this employee?")) {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    loadEmployees();
  }
}

window.onload = loadEmployees;
