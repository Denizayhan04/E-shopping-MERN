import React from 'react'
import Header from './Header'
import "../style.scss"
import Star from '../icons/Star';
const {sendbasket} = require('./scripts/script');

export default function ProductsPage(props) {
  var starArray = [];
  for (let i = 0; i < props.data.star; i++) {
    starArray.push(i)
  }

  
  return (
    <div className='App productsPage'>
    <Header />
    <div className='productspecialcontainer'>
        <span>{props.data.category}</span>
        <div>
            <img src={props.data.imgurl} />
            <div>
                <h3>{props.data.brand}</h3>
                <h2>{props.data.name}</h2>
                <span>{starArray.map(()=>(
                  <Star />
                ))}{props.data.star}</span> 
                <h4>{props.data.price}$</h4>
                <div className='details'>
                  <h3>DETAILS</h3>Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin
                  <input onClick={()=>sendbasket(props.data.id)} type="button" value="BUY" />
                  </div>
            </div>
        </div>

    </div>

    </div>
  )
}
