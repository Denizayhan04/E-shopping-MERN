import React from 'react'
import Searchicon from "../icons/Searchicon"
import Usericon from "../icons/Usericon"
import Basket from "../icons/Basketicon"
import Dress from "../icons/Dressicon"
import Phone from "../icons/Phoneicon"
import Bedicon from '../icons/Bedicon'
import Babycaricon from '../icons/Babycaricon'
import Makeupicon from '../icons/Makeupicon'
import Sporicon from '../icons/Sporicon'
import Bookicon from '../icons/Bookicon'
export default function Header() {
  return (
    <div className='header'>
        <div className='upheader'>
        <div className='inputdiv'><input placeholder='Search' /><Searchicon /></div>
        
        <div className='user'>
          <a href='#'>
            <Usericon />
            </a>
          <div className='usermenu'>
            <ul>

            <li><a href='#'>Account</a></li>
            <li><a href='#'>Register</a></li>
            <li><a href='#'>Log in</a></li>
            </ul>

          </div>
          </div>
          <div className='basketdiv'><Basket /></div>
        </div>
        
        <div className='downheader'>
        <a href="#" className='listitem'><Dress /><span>Dress</span></a>
        <a href="#" className='listitem'><Phone /><span>Phone</span></a>
        <a href="#" className='listitem'><Bedicon /><span>Home & Live</span></a>
        <a href="#" className='listitem'><Babycaricon /><span>Baby & Mom</span></a>
        <a href="#" className='listitem'><Makeupicon /><span>Cosmetics & Makeup</span></a>
        <a href="#" className='listitem'><Sporicon /><span>Fitness & Healty</span></a>
        <a href="#" className='listitem'><Bookicon /><span>Books & Reading</span></a>
        </div>

    </div>
  )
}
