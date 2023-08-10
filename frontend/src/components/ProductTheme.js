import React from 'react'
import Staricon from "../icons/Star"
import {Link} from "react-router-dom"
const {sendbasket} = require('./scripts/script');
export default function ProductTheme(props) {
  var starArray = [];
  for (let i = 0; i < props.products.star; i++) {
    starArray.push(i)
  }

  
  return (
    <div className='producttheme'>
{/*          <a href={props.products.name}><img src={props.products.imgurl}/></a> */}
        <Link to={props.products.name}><img src={props.products.imgurl}/></Link>
        <div className='description'>
             <h3>{props.products.name}</h3>   
            <div>{props.products.price}$</div>    
            <div>
              {starArray.map(()=>(
                <Staricon />

              ))}
            </div>

            <h5>{props.products.brand}</h5>     
            <input onClick={()=>sendbasket(props.products.id)} type='button' value="BUY" />       
        </div>
    </div>  
  )
}
