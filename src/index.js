//import inquirer
const inquirer = require("inquirer");

const cTable = require("console.table");
//import start question here
const {
  startQuestion,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./utils/questions");

//import util fs to access db data
const { sendQuery } = require("./utils/utils");

//import db queries
const { getDepartments, getRoles, getEmployees } = require("./utils/queries");

const displayDepartments = () => {
  //execute mysql query
  //log/table departments
};

const displayRoles = () => {
  //execute mysql query
  //log/table departments
};

//initialize app
const start = async () => {
  //declare variable to track in progress
  let inProgress = true;

  //setup while loop to prompt action choices
  while (inProgress) {
    //declare one question with list of actions
    const { actionChoice } = await inquirer.prompt(startQuestion);

    //insert if blocks for all actions: prompt question and get answers
    if (actionChoice === "viewDepartments") {
      const allDepartments = await sendQuery(getDepartments);
      console.table(allDepartments);
    }

    if (actionChoice === "viewRoles") {
      const allRoles = await sendQuery(getRoles);
      console.table(allRoles);
    }

    if (actionChoice === "viewEmployees") {
      const allEmployees = await sendQuery(getEmployees);
      console.table(allEmployees);
    }

    if (actionChoice === "addDepartment") {
      const { newDepartment } = await inquirer.prompt(addDepartment);

      console.log(newDepartment);
    }

    if (actionChoice === "addRole") {
      const { newRole, roleSalary, departmentType } = await inquirer.prompt(
        addRole
      );
      console.log(newRole, roleSalary, departmentType);
    }

    if (actionChoice === "addEmployee") {
      const {
        newEmployeeFirstName,
        newEmployeeLastName,
        newEmployeeRole,
        newEmployeeManager,
      } = await inquirer.prompt(addEmployee);

      console.log(
        newEmployeeFirstName,
        newEmployeeLastName,
        newEmployeeRole,
        newEmployeeManager
      );
    }

    if (actionChoice === "updateEmployeeRole") {
      const { updateRole, newRole } = await inquirer.prompt(updateEmployeeRole);
      console.log(newRole, updateRole);
    }

    //break while loop if exit action was selected
    if (actionChoice === "exitApp") {
      inProgress = false;
      process.exit(0);
    }
  }
};

start();
