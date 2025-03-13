import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaCartShopping } from "react-icons/fa6";
import logo2 from '../Assets/logo2.jpg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  let [menu,setmenu]=useState('shop')
  
  return (
    <div className='navbar'>
      <div className='navlogo'>
      <img src={logo2} alt="" />
    <p>GlamCart</p>
      </div>
     
        <ul className='navmenu'>
            <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="Men"?<hr />:<></>}</li>
            <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="Women"?<hr />:<></>}</li>
            <li onClick={()=>{setmenu("Kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr />:<></>}</li>

        </ul>
        <div className='nav-login'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><FaCartShopping size={40}/></Link>
            <div className='nav-cart-count'>0</div>
        </div>
      </div>
    
  )
}

export default Navbar
