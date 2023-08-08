import React from 'react'
import Staricon from "../icons/Star"
export default function ProductTheme(props) {
  return (
    <div className='producttheme'>
             {console.log(props.data.id)}
        <a href="#"><img src=""/></a>
        <div className='description'>
             <h3>PRODUCT NAME</h3>   
            <div>price</div>    
            <Staricon />
            <h5>PRODUCT NAME</h5>     
            <input type='button' value="BUY" />       
        </div>
    </div>  
  )
}
