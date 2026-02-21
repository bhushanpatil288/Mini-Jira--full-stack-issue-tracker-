const express = require("express");

const { getIssues, insertIssue } = require("../controllers/issue.controllers.js");
const router = express.Router();

router.route("/").get(getIssues);
router.route("/").post(insertIssue);

module.exports = router;