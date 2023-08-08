import React from 'react'
import ProductTheme from './ProductTheme'

export default function ForYours(props) {
  return (
    <div className='foryours'>
          {props.products.filter(product=>props.foryours.includes(product.id)).map((e)=>(
            
            <ProductTheme data={e} />
          ))}
         {/*  <ProductTheme />
          <ProductTheme />
          <ProductTheme /> */}
    </div>
  )
}
