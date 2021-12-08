//create start question
const startQuestion = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "startQuestion",

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
    ],
  },
];

module.exports = { startQuestion };