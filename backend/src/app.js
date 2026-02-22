const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const issueRouter = require("./routes/issue.routes.js");

app.use("/api/v1/issues", issueRouter);

app.use((err, req, res, next)=>{
  res.status(err.statusCode || 500).json({
    status: 0,
    message: err.message || "Internal Server Error",
    errors: err.errors || []
  });
})


module.exports = app