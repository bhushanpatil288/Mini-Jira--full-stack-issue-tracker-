const issueModel = require("../models/issue.model");
const { ApiError } = require("../utils/ApiError")
const asyncHandler = require("../utils/asyncHandler");

const getIssues = asyncHandler(async(req,res)=>{
  const issues = await issueModel.find();
  res.status(200).json({
    status: 1,
    data: issues
  });
})

const insertIssue = asyncHandler(async(req, res)=>{
  const { title, description, status, priority, assignedTo } = req.body;
  if(!title|| !description || !status || !priority){

    throw new ApiError(400, "Fill all the mandatory fields");
  }
  const issue = await issueModel.create({
    title,
    description,
    status,
    priority,
    assignedTo
  });

  res.status(201).json({
    status: 1,
    message: "Issue added successfully",
    data: issue
  });
})

module.exports = { getIssues, insertIssue }