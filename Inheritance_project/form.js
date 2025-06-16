// Base class
class Employee {
  constructor(id, name, department, salary, attendance) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
    this.attendance = attendance;
  }

  getDetails() {
    return {
      id: this.id,
      name: this.name,
      department: this.department,
      salary: this.salary,
      attendance: this.attendance
    };
  }
}

// Subclass for future extensibility (example: Manager with bonus)
class Manager extends Employee {
  constructor(id, name, department, salary, attendance, bonus) {
    super(id, name, department, salary, attendance);
    this.bonus = bonus;
  }

  getDetails() {
    const baseDetails = super.getDetails();
    baseDetails.bonus = this.bonus;
    return baseDetails;
  }
}

document.getElementById("employeeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const empId = document.getElementById("empid").value.trim();
  const empName = document.getElementById("empname").value.trim();
  const empDept = document.getElementById("department").value.trim();
  const empSalary = document.getElementById("salary").value.trim();
  const empAttendance = document.getElementById("attendence").value.trim();

  const employee = new Employee(empId, empName, empDept, empSalary, empAttendance);
  const employeeData = employee.getDetails();

  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees.push(employeeData);
  localStorage.setItem("employees", JSON.stringify(employees));

  this.reset();
});
