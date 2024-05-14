import React from 'react'
import navTitle from "../images/Title.png"
import "../Styles/Navbar.scss"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-title'  >
            <img src={navTitle}  alt='Navbar Title ' href="/#"  />
            
        </div>
        
        <div className='navs' >
          <ul>
          <li> <a href='/' >Home </a> </li>
            <li> <a href='#about' >About </a> </li>
            <li> <a href='#features' >Features </a> </li>
            <li> <a href='#pricing' >Pricing </a> </li>
            <li> <a href='#company' >Company </a> </li>
           
          </ul>
        </div>

        <div   className='nav-button' >
          <button className='nv-button'  >
            <a href='#contact'> Contact </a>
          </button>
        </div>
        
    </div>
  )
}

export default Navbar