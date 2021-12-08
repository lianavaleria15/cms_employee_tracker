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

//export update question
module.exports = { updateEmployeeRole };
