//import inquirer
const inquirer = require("inquirer");

//import start question here
const { startQuestion } = require("./utils/startQuestion");

//import add action questions here
const { addDepartment, addRole, addEmployee } = require("./utils/addQuestions");

//import update questions here
const { updateEmployeeRole } = require("./utils/updateQuestions");

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

    console.log(actionChoice);

    //insert if blocks for all actions: prompt question and get answers
    if (actionChoice === "viewDepartments") {
      console.log("view departments");
    }

    if (actionChoice === "viewRoles") {
      console.log("view roles");
    }

    if (actionChoice === "viewEmployees") {
      console.log("view employees");
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
