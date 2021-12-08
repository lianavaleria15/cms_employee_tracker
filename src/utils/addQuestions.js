//questions prompted to add a department
const addDepartment = {
  type: "input",
  name: "newDepartment",
  message: "What is the name of the department?",
};

//questions prompted to add a role
const addRole = [
  {
    type: "input",
    name: "newRole",
    message: "What is the name of the role?",
  },
  {
    type: "input",
    name: "roleSalary",
    message: "What is the salary of the role?",
  },
  {
    type: "input",
    name: "departmentType",
    message: "Which department does the role belong to?",
  },
];

//questions prompted to add an employee
const addEmployee = [
  {
    type: "input",
    name: "newEmployeeFirstName",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "newEmployeeLastName",
    message: "What is the employee's last name?",
  },
  {
    type: "input",
    name: "newEmployeeRole",
    message: "What is the employee's role?",
  },
  {
    type: "input",
    name: "newEmployeeManager",
    message: "What is the employee's manager?",
  },
];

//export sets of questions
module.exports = { addDepartment, addRole, addEmployee };
