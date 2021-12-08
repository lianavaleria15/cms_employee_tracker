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

    //prompt question and get answer (action)
    if (actionChoice === "addDepartment") {
      const { newDepartment } = await inquirer.prompt(addDepartment);
      console.log(newDepartment);
    }

    //break while loop if exit action was selected
    if (actionChoice === "exitApp") {
      inProgress = false;
    }
  }

  //insert if blocks for all actions
};

start();
