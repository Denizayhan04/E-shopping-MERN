const express = require('express');
const app = express();
const {getdb,connectToDb} = require('./db');
const cors = require('cors');
app.use(express.json());
app.use(cors())
let db;
connectToDb((err)=>{
  if(!err){
    app.listen(4000,()=>{
  console.log("app listening")
})
db =getdb();
  }
})

app.get("/api/products", async (req,res)=>{
  try {
     const products = await db.collection('products').find().toArray(); 
     res.status(200).json(products)
  } catch (error) {
    console.log(error)
  }
})
app.get("/api/brands", async (req,res)=>{
  try {
     const products = await db.collection('brands').find().toArray(); 
     res.status(200).json(products)
  } catch (error) {
    console.log(error)
  }
})
app.get("/api/foryours", async (req,res)=>{
  try {
     const products = await db.collection('foryours').find().toArray(); 
     res.status(200).json(products)
  } catch (error) {
    console.log(error)
  }
})
