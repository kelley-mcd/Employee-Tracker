DROP DATABASE IF EXISTS EMPLOYEE_db;
CREATE DATABASE EMPLOYEE_db;

USE EMPLOYEE_db;

CREATE TABLE deaprtment (
  id INT NOT NULL PRIMARY KEY,
  naame VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    manager VARCHAR(30) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,

  role_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL
)
