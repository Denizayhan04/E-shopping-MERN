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


/* app.post("/api/basket/", async (req,res,next)=>{
  const data = req.body;
  try {
    db.collection('basket').findOne({_id:ObjectId("64d37c2572ec2a4a61369f71")}).insertOne(data)
    .then(result=>res.json({success:true}))
    .catch(err=>console.log(err))


  } catch (error) {
    console.log(error)
  }
}) */
