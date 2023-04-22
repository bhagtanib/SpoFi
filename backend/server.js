const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'test.coqyfpnpwexp.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'admin2023',
    database: 'SQLTest'
})
connection.connect((err) => {
    if (err) {
        console.log(err.stack)
        return
    }
    console.log('connect to the database')
})


app.post('/api/users', async (req, res) => {
    try {
      const { email, password } = req.body;
        const [rows] = await connection.promise().query(
        'SELECT * FROM users WHERE email_id = ? AND password = ?',
        [email, password]
      );
      if (!rows.length) {
        return res.status(401).json({ message: 'Wait a minute!!!!! who are you ?' });
      }
  
      return res.status(200).json({ message: 'User authenticated successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
 });
app.get('/church', async (req,res) => { 
  try {
    const [rows] = await connection.promise().query('SELECT * FROM Church');
    res.status(200).send(rows);
    console.log("rows sent")
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' });

  }
})
app.get('/', (req, res) => { res.send(['Hello', 'World']) }); // dummy


const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Connected"));
