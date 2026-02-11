const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

const issueRouter = require("./routes/issue.routes.js");

app.use("/api/v1/issues", issueRouter);


module.exports = app