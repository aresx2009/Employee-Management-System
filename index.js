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
        choices: ["View All Departments", "View All Roles", "View All Employees",
            "Add Employee", "Add Role", "add Department", "Update Employee Role",]
    }).then(answer => {
        switch (answer.action) {
            case "View All Departments":
                viewAllDepartments();
                break;

            case "View All Roles":
                viewAllRoles();
                break;

            case "View All Employees":
                viewAllEmployees();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Role":
                addRole();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Update Employee Role":
                updateRole();
                break;
        }
    })
}
function viewAllDepartments() {
    connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    });
}
function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    });
}
function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
    });
}
// addEmployee
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What's employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What's employee's last name?"
        },
        {
            type: "input",
            name: "role",
            message: "What's employee's role id?"
        },
        {
            type: "input",
            name: "manager",
            message: "What's employee's manager id?"
        }
    ]).then(answer => {
        var queryAddEmployee = `INSERT INTO employee(first_name, last_name,role_id,manager_id)
       VALUES("${answer.first_name}","${answer.last_name}",${answer.role},${answer.manager})`;
        connection.query(queryAddEmployee, err => {
            if (err) throw err;
            console.log("Employee added!");
            questions();
        })
    })
}
// addRole
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What's employee's title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What's employee's salary?"
        },
        {
            type: "input",
            name: "department_id",
            message: "What's employee's department id"
        }
    ]).then(answer => {
        var queryAddRole = `INSERT INTO role(title, salary,department_id)
       VALUES("${answer.title}","${answer.salary}",${answer.department_id})`;
        connection.query(queryAddRole, err => {
            if (err) throw err;
            console.log("Role added!");
            questions();
        })
    })
}
// addDepartment
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What's the new department?"
        }
    ]).then(answer => {
        var queryAddDepartment = `INSERT INTO departments(department)
       VALUES("${answer.departmentName}")`;
        connection.query(queryAddDepartment, err => {
            if (err) throw err;
            console.log("Department created! Hire someone!");
            questions();
        })
    })
}
// updateRole
function updateRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "role_id",
            message: "Which emplyee you want to update? (enter role ID)"
        },
        {
            type: "input",
            name: "updateRole",
            message: "What's the new role id?"
        }
    ]).then(answer => {
        var queryUpdateRole = `UPDATE employee SET role_id = ${answer.updateRole} WHERE role_id=${answer.role_id}`;
        connection.query(queryUpdateRole, err => {
            if (err) throw err;
            console.log("Role updated!!");
            questions();
        })
    })
}