import React , {useEffect, useState} from 'react'
import "../style.scss"
import { deletebasket , getBasket } from './scripts/script'
import BasketContainer from './BasketContainer'
export default function MyBasket({products}) {
  const [basketItems,setBasketItems] = useState([])
  
  useEffect(()=>{
     getBasket(setBasketItems)
  },[])  
  const basketHandler = (x)=>{
    deletebasket(x)
  }
  var totalmoney = 0
  var moneyarray = []
  var itemArray = products.filter(f=>basketItems.includes(f.id))
  itemArray.forEach((e)=>{moneyarray.push(e.price)})
  moneyarray.map((x)=>{totalmoney += x})

  return (
    <BasketContainer totalmoney={totalmoney} basketHandler={basketHandler} itemArray={itemArray}/> 
    )
  }
 