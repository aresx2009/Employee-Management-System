const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected!!");
    questions();
});

function questions() {
    inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Employees By Department", "View All Employees By Manager", "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Roles", "Add Role", "Remove Role"]
    })
}

