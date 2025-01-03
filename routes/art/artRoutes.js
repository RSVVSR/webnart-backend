const express = require('express');
const router = express.Router();

const { generatePresignedUrl } = require('../../services/art/genrateS3Url');

//GET ROUTE
router.route('/').get((req, res) => {
    res.status(200).send("Art Api Endpoints");
});
router.route('/generatePresignedUrl').get(generatePresignedUrl);
//POST ROUTE

//PUT ROUTE

//DELETE ROUTE

module.exports = router;