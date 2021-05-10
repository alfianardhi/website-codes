import React from 'react'
import Button from 'components/Button'
import BrandIcon from 'components/IconText'

// TODO: mobile navigate, prjct section be centerd in mbile, next&sanity
export default function Header() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light'>
      <div className='container'>
        <BrandIcon />

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='w-full'></div>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <Button type='link' href='/about' className='nav-link'>
                <span data-hover='About'>Home</span>
              </Button>
            </li>
            <li className='nav-item'>
              <Button type='link' href='/project' className='nav-link'>
                <span data-hover='Projects'>Projects</span>
              </Button>
            </li>
            <li className='nav-item'>
              <Button type='link' href='/resume' className='nav-link'>
                <span data-hover='Resume'>About</span>
              </Button>
            </li>
            <li className='nav-item'>
              <Button type='link' href='/contact' className='nav-link'>
                <span data-hover='Contact'>Contact</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
