const express = require('express');
const router = express.Router();

const { login, logout, signUp } = require('../../controllers/users/authController');
const authToken = require('../../middlewares/auth/authToken');
router.route('/auth/login').post(login);
router.route('/auth/signUp').post(signUp);
router.route('/auth/logOut').get(authToken, logout);


module.exports = router;