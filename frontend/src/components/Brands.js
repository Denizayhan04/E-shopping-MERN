import React from 'react'

export default function Brands(props) {
  return (
    <div className='brandlist'>
    <h2>BRANDS</h2>
    <div className='brands'>
    {props.brands.map((e)=>(
      <a href=""><img src={e.imgurl} /></a>
      ))}

    
    </div>
  </div>  )
}
