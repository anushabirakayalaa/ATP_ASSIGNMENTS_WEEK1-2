// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
let departmentIt = employees.filter(emp=>emp.department==='IT')
console.log(departmentIt)
//     2. map() to add:
//             netSalary = salary + 10% bonus
let netSalary = employees.map(emp=>
{
    let net=emp.salary+(emp.salary*0.10)
    return {...emp,net}
}
)
console.log(netSalary)
//     3. reduce() to calculate total salary payout
let totalSalary = employees.reduce(
  (acc, emp) => acc + emp.salary,
  0
);

console.log(totalSalary);
//     4. find() employee with salary 30000
let empWith30k= employees.find(emp=>emp.salary===30000)
console.log(empWith30k)
//     5. findIndex() of employee "Neha"
let findNehaPosition = employees.findIndex(emp=>emp.name=="Neha")
console.log(findNehaPosition)










