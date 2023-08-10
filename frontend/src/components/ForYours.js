import React from 'react'
import ProductTheme from './ProductTheme'

export default function ForYours(props) {
  return (
    <div className='foryours'>
      <h3>FORYOURS</h3>
      <div>

            {props.products.filter(f=>props.foryours.includes(f.id)).map(index=>
            (<ProductTheme products={index} />)
            
            )}
              
            </div>
           


    </div>
  )
}
