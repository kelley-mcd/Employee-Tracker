const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
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

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.table(`server running on port ${PORT}`);
})


