import "./style.scss"
import Header from './components/Header';
import MainMenu from "./components/MainMenu";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [products,setProducts] = useState([]);
  const [brands,setBrands] = useState([]);
  const [foryours,setForYours] = useState([]);


  useEffect(()=>{
    fetch("http://localhost:4000/api/brands")
    .then(response => response.json())
    .then(data=>data[0].brands)
    .then(brands =>setBrands(brands))

    fetch("http://localhost:4000/api/foryours")
    .then(response => response.json())
    .then(data=>data[0].foryours)
    .then(foryours =>setForYours(foryours))
    
    fetch("http://localhost:4000/api/products")
    .then(response => response.json())
    .then(data=>data[0].products)
    .then(products =>setProducts(products))

   /*  axios.get("http://localhost:4000/api/brands")
    .then(res => res.data)
    .then(data=>setProducts(data[0].brands[0]))
    .catch(err=>console.log(err));
    
    axios.get("http://localhost:4000/api/foryours")
    .then(res => res.data)
    .then(data=>setForYours(data[0].foryours))
    .catch(err=>console.log(err));
    
    axios.get("http://localhost:4000/api/products")
    .then(res => res.data)  
    .then(data=>setProducts(data[0].products))
    .catch(err=>console.log(err)); */
  
    return ()=>{console.log("asd")}
    
  },[])

  return (
    <div className="App">
      <Header  />
      <MainMenu products={products} brands={brands} foryours={foryours} />
           
  </div>
  );
}

