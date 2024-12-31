const express = require('express');
const router = express.Router();

const { getAllUser, getProfileByUsername, getInfoAccordingTokey } = require('../../controllers/users/getFunctions/userGetController');
const { deleteUserByUsername } = require('../../controllers/users/DeleteFunction/userDeleteController');
const { updateUserKeys } = require('../../controllers/users/postFunctions/UserUpdateController');
const authToken = require('../../middlewares/auth/authToken');

router.route('/user').get((req, res) => {
    res.status(200).send("Welcome to Webnart-Endpoints for User");
})

//GET REQUEST
router.route('/user/profile/').get(authToken, getAllUser);
router.route('/user/profile/:username').get(authToken, getProfileByUsername);
router.route('/user/profile/:username').get(authToken, getInfoAccordingTokey);

//POST REQUEST
router.route('/user/profile/:username').post(authToken, updateUserKeys);

//DELETE REQUEST
router.route('/user/profile/:username').delete(authToken, deleteUserByUsername);

module.exports = router;
