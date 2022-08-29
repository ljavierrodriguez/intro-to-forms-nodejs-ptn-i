const express = require('express');
const { home, register, users } = require('../controllers/main.controller');
const router = express.Router();

router.get('/', home);
router.post('/register', register);
router.get('/users', users);

module.exports = router;