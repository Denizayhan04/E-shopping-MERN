import React  from 'react'
import Removeicon from '../icons/Remove'

export default function BasketContainer({basketHandler, itemArray, totalmoney}) {
  return (
    <div className='myBasket'>
      <h2>TOTAL PRİCE : {totalmoney}$</h2>
        <div className='container'>
          {itemArray.map(e=>(
            <div key={e.id} className='product'>
            <div>
              <img src={e.imgurl} />
              <div>
                <span>{e.name}</span>
                <span>{e.brand}</span>
            
              </div>
            </div>
            <div>
              <div>
                <span>{e.price}$</span>
                <span onClick={()=>{basketHandler(e.id);window.location.reload()}}><Removeicon /></span>
              </div>
            </div>
            </div>
          ))}
           
        </div>
    </div>  )
}
