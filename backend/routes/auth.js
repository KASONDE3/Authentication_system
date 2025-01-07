const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [username, email, hashedPassword], (err, result) => {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ message: 'User registered successfully!' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Login 
router.post('/login', (req, res) =>{
    const { email, password } = req.body;
    const query = 'select * from users where email = ?';
    db.query(query, [email], async (err, results)=>{
        if (err) return res.status(500).json({error: 'server error'});
        if (results.length === 0) return res.status(400).json({error:'Invalid credentials'});

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({error: 'Invalid credentials'});

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expireIn: '1h'});
        res.json({ token, user:{id: user, username: user.username, email: user.email} });
    });
});

module.exports = router;