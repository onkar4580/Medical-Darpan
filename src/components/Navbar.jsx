import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-class'>
      <div className='div-box'></div>
        <h2 className='header'>Medical Darpan</h2>
        <ul className='ul-class'>
            <li className='li-class'>Home</li>
            <li className='li-class'>Products</li>
            <li className='li-class'>Distributers</li>
            <li className='li-class'>Manufaturers</li>
            <li className='li-class'>About us</li>
            <li className='li-class'>Blog</li>

        </ul>
        <ul className='ul2-class'>
          <li className='li2-class'>Login</li>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>

        </ul>
    </div>
  )
}

export default Navbar