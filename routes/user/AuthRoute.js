const express = require('express');
const router = express.Router();

const { login, logout, signUp } = require('../../controllers/users/authController');
const authToken = require('../../middlewares/auth/authToken');
router.route('/login').post(login);
router.route('/signUp').post(signUp);
router.route('/logOut').get(authToken, logout);


module.exports = router;