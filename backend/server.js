const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
        res.status(200).send('Login successful!');
    } else {
        res.status(401).send('Login failed. Please check your credentials.');
    }
});

app.listen(3001, () => {
    console.log('Backend is running on port 3001');
});
