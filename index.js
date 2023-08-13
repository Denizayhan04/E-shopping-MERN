const express = require('express');
const app = express();
const {getdb,connectToDb} = require('./db');
const cors = require('cors');
const { Db } = require('mongodb');
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
app.get("/api/basket", async (req,res)=>{
  try {
     const products = await db.collection('basket').find().toArray(); 
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
app.get("/api/basket" ,async (req, res) => {
  try {
    const products = await db.collection('basket').find().toArray(); 
    res.status(200).json(products)
 } catch (error) {
   console.log(error)
 }
})
app.delete("/api/basket/:id", async (req,res)=>{
  const dataid = Number(req.params.id);
  try {
     const basketdatabase = await db.collection("basket")
     basketdatabase.deleteOne({"productid" : dataid}).then(e=>res.status(200).json(e))
  } catch (error) {
    console.log(error)
  }

})
app.post("/api/basket" ,async (req, res) => {
  try {
    const data = req.body;
    db.collection('basket').insertOne(data)
    .then((e) => res.status(201).json(data))
    .catch((err) =>console.log(err))
  } catch (error) {
    console.log(error)
  }
})
/* app.delete('/api/basket/:id ',(req,res)=>{
  req.params.id = dataid
  db.collection('basket').deleteOne({productid:2}).then((e) => res.status(200).json(e))
  res.json({asd:"31"})

}) */

