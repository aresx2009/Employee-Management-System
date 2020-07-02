USE employee_db;

INSERT INTO departments (department)
VALUES ("Purchasing"), ("Accounting"), ("IT");

INSERT INTO role (title, salary, department_id)
VALUES ("Purchasing Director", 120000.00,1),
("Purchasing manager", 80000.00,1),
("Purchasing assitant", 40000.00,1),

("CFO", 120000.00,2),
("Accounting Manager", 75000.00,2),
("Staff Accountant", 50000.00,2),

("CTO", 140000.00,3),
("IT Manager", 900000.00,3),
("Engineer", 60000.00,3);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- Purchasing
VALUES ("Robert", "Baratheon",1,1 ),
("Jaime","Lannister",2,1),
("Tyrion", "Lannister",3,1),
-- Accounting
("Ned", "Stark",4,2),
("Catelyn","Stark",5,2),
("Robb","Stark",6,2),
-- IT
("Tommen","Baratheon",7,3),
("Petyr","Baelish",8,3),
("Samwell","Tarly",9,3);