const express = require('express')
const app = express();
const cors = require("cors");
const morgan = require("morgan")
const transactionsController = require('./controllers/transactionController')

app.use((req, res, next) => {
  // console.log("This code runs for every request");
  next();
});


app.use(express.json());
app.use(morgan("tiny"))
app.use(cors());


app.use("/transactions", transactionsController)
app.get("/",(req,res)=>{
    res.send("Welcome to my Bad Spending Habits")
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});

module.exports = app;

// create model 
// budget model consists of arrays of information

//create controllers
// controller needs get use post delete and put 

//controller to app js
//app js main route , use, and 404

