import React, { useEffect , useState } from 'react'
import App from './App';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import ProductsPage from './components/ProductsPage';
import MyBasket from './components/MyBasket';
export default function Rout() {
  const [products,setProducts] = useState([]);
  
  useEffect(()=>{    
  fetch("http://localhost:4000/api/products")
  .then(response => response.json())
  .then(data=>data[0].products)
  .then(products =>setProducts(products))},[])
  return (
<BrowserRouter>
<Routes>
   <Route path='/' element={<App products={products} />}/>
   <Route path='/basket' element={<MyBasket products={products} />}/>
   {products.map((e)=>{
    let names = e.name.split(' ').join("%20")
     return(
       <Route path={names} element={<ProductsPage data={e} />} />
     )
    }


     )}

</Routes>
</BrowserRouter>
  )
}
