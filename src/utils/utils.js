//import mysql
const { restoreDefaultPrompts } = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password123!!",
  database: "company_db",
});

const sendQuery = (query) => {
  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const generateDepartmentList = async () => {
  const allDepartments = await sendQuery(`SELECT * FROM department`);

  return allDepartments.map((department) => {
    return { name: department.name, value: department.id };
  });
};

const generateRolesList = async () => {
  const allRoles = await sendQuery(`SELECT * FROM roles`);

  return allRoles.map((roles) => {
    return {
      name: roles.title,
      value: roles.id,
    };
  });
};

const generateManagersList = async () => {
  const allManagers = await sendQuery(
    `SELECT id, CONCAT (firstName, " ", lastName) AS name FROM employee`
  );

  return allManagers.map((manager) => {
    return {
      name: manager.name,
      value: manager.id,
    };
  });
};

const generateEmployeeList = async () => {
  const allEmployees = await sendQuery(`SELECT * FROM employee`);
  return allEmployees.map((employee) => {
    return {
      name: employee.firstName,
      value: employee.id,
    };
  });
};
module.exports = {
  sendQuery,
  generateDepartmentList,
  generateRolesList,
  generateManagersList,
};
