import React from 'react'
import "../style.scss"

export default function MyBasket() {
  return (
    <div className='myBasket'>
        <div className='container'>
          <div className='product'>
            <div>
              <img src='#' />
              <div>
                name
                star
                category
                brand
              </div>
            </div>
            <div>
              <span>price</span>
              <span>remove</span>
            </div>
          </div>
        </div>
    </div>
  )
}
