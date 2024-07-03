import React from 'react'

export default function Header() {
  return (
    <nav>
        <div className='logo'>rmta</div>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
        <div className='search'>
            <i className='fa fa-search'></i>
            <i className='fa fa-shopping-basker'></i>
        </div>
    </nav>
  )
}

