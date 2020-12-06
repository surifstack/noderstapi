const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/db");
const studentRoute = require("./routers/Students");
app.use(express.json());
app.use(studentRoute);
app.listen(port , () =>{
console.log(`Port = ${port}`);
});