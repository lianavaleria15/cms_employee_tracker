USE company_db;

-- insert into department
INSERT INTO department (name) 
VALUES ('General Management'),
('Marketing'),
('Operations'),
('Finance'),
('Sales');

-- insert into roles
INSERT INTO roles (title, salary, departmentId)
VALUES ('Chief Executive', 65000.00, 1),
('Advertising Director', 32000.00, 2),
('Marketing Assistant', 23000.00, 2),
('Product Engineer', 43500.00, 3),
('Supply Chain Manager', 67650.00, 3),
('Senior Finance Analyst', 54700.00, 4),
('Finance Analyst', 38000.00, 4),
('Sales Representative', 98000.00, 5),
('Field Sales Senior', 78000.00, 5);

-- insert into employees
INSERT INTO employee (firstName, lastName, roleId, managerId)
VALUES ('James', 'Smith', 1, 1),
('Fiona', 'Jackson', 2, 2),
('Heather', 'Abbot', 3, 2),
('Gill', 'Taylor', 4, null),
('Ben', 'Boxley', 5, 5),
('Alex', 'Marks', 6, 6),
('Gabi', 'Ferez', 7, 6),
('Rob', 'Travis', 8, 1),
('Valery', 'Scott', 9, 1);
