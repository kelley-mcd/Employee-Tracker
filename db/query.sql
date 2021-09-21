SELECT department.department_id AS id, employe.id
FROM role
LEFT JOIN role_id
ON role.employee_id = department.id
ORDER BY department.department_id;
