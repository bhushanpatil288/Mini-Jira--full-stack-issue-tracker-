const express = require("express");

const router = express.Router();

router.route("/").get((req, res)=>{
  res.send("its working");
})


module.exports = router;