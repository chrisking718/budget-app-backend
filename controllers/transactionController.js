const express = require('express');
const transactions = express.Router();
const {validateURL} = require("../models/validations")
const transactionsArray = require('../models/transaction')

transactions.use((req, res, next) => {
    console.log("This middleware runs for every transaction route");
    next();
})

transactions.get("/", (req,res)=>{
    res.json(transactionsArray);
})

transactions.post("/", validateURL, (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray.at(-1));
  });


transactions.get("/:index", (req, res) => {
    const {index} = req.params
    if (transactionsArray[index]) {
      res.status(200).json(transactionsArray[index]); 
    } else{
      res.redirect('/*');
    }res.status(404).json({ error: "Not Found" });
    
  });

transactions.delete("/:index", (req, res) => {
    const deletedTrans = transactionsArray.splice(req.params.index, 1);
    res.status(200).json(deletedTrans);
  });
  
transactions.put("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
        transactionsArray[index] = req.body;
      res.status(200).json(transactionsArray[index]);
    }else{
      res.redirect('/*');
    }
  });  

module.exports = transactions