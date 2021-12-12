//import fs to generate lsit departments
const { generateDepartmentList, generateRolesList } = require("./utils");

//create start question
const startQuestion = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "actionChoice",

    //create each action question
    choices: [
      //view choices
      {
        value: "viewDepartments",
        name: "View all departments",
      },
      {
        value: "viewRoles",
        name: "View all roles",
      },
      {
        value: "viewEmployees",
        name: "View all employees",
      },

      //add choices
      {
        value: "addDepartment",
        name: "Add a new department",
      },
      {
        value: "addRole",
        name: "Add a new role",
      },
      {
        value: "addEmployee",
        name: "Add a new employee",
      },

      //update choices
      {
        value: "updateEmployeeRole",
        name: "Update an employee role",
      },

      //exit app
      {
        value: "exitApp",
        name: "Exit application",
      },
    ],
  },
];

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
    type: "list",
    name: "departmentType",
    message: "Which department does the role belong to?",
    choices: generateDepartmentList,
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
    type: "list",
    name: "newEmployeeRole",
    choices: generateRolesList,
  },
  {
    type: "input",
    name: "newEmployeeManager",
    message: "What is the employee's manager?",
  },
];

//questions prompted to update an employee role
const updateEmployeeRole = [
  {
    type: "input",
    name: "updateRole",
    message: "Which employee's role do you want to update",
  },
  {
    type: "input",
    name: "newRole",
    message: "What is the name of the new role?",
  },
];

//export questions
module.exports = {
  startQuestion,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
