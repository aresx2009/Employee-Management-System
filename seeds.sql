USE employee_db;

INSERT INTO department (name)
VALUES ("Purchasing", "Accounting", "IT");

INSERT INTO role (title, salary, department_id)
VALUES ("Purchasing Director", 120000.00),
("Purchasing manager", 80000.00),
("Purchasing assitant", 40000.00),

("CFO", 120000.00),
("Accounting Manager", 75000.00),
("Staff Accountant", 50000.00),

("CTO", 140000.00),
("IT Manager", 900000.00),
("Engineer", 60000.00)



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Peter", "Smith",1,1 );