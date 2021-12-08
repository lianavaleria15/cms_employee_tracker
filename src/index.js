//import inquirer
const inquirer = require("inquirer");

//import start question here
const { startQuestion } = require("./utils/startQuestion");

//import add action questions here
const {
  addDepartment,
  addRole,
  addEmployee,
} = require("./utils/startQuestion");

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
  //declare one question with list of actions
  const startAnswer = await inquirer.prompt(startQuestion);

  console.log(startAnswer);

  //prompt question and get answer (action)
  if (startAnswer === "viewDepartments") {
    const newDepartment = await inquirer.prompt(addDepartment);
    console.log(newDepartment);
  }

  //insert if blocks for all actions
};

start();
