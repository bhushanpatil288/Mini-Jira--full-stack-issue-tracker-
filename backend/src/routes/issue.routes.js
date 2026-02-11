const express = require("express");

const { insertIssue } = require("../controllers/issue.controllers.js");
const router = express.Router();

router.route("/add").post(insertIssue);


module.exports = router;