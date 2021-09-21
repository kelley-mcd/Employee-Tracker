const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '3291',
        database: 'EMPLOYEE_db'
    },
    console.table('connected to EMPLOYEE_db database.')
);

app.post('api/new-employee', ({ body }, res) => {
    const sql = `insert into employee database
        VALUES (?)`;
    const params = [body.employee];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

app.get('/api/employee', req, res) => {
    const sql = `select an employee from the list`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.table(`server running on port ${PORT}`);
})


