const app = require("./app");
require("dotenv").config({path: "./.env"});
const connectDB = require("./db/index.js");


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 7070, ()=>{
    console.log("Listening on port: ", process.env.PORT || 7070);
  })
})
.catch(()=>{
  console.log("Mongodb connection error", err);
})
