import React from 'react'
import Button from 'components/Button'
import BrandIcon from 'components/IconText'

// TODO: goto section, check bg menu, mobile navigate
export default function Header(props) {
  return (
    <nav className='navbar navbar-expand-sm navbar-light'>
      <div className='container'>
        <BrandIcon />

        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-toggler-icon'></span>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <Button type='link' href='#about' className='nav-link'>
                <span data-hover='About'>About</span>
              </Button>
            </li>
            <li className='nav-item'>
              <Button type='link' href='#project' className='nav-link'>
                <span data-hover='Projects'>Projects</span>
              </Button>
            </li>
            <li className='nav-item'>
              <Button type='link' href='#resume' className='nav-link'>
                <span data-hover='Resume'>Resume</span>
              </Button>
            </li>
            <li className='nav-item'>
              <Button type='link' href='#stacks' className='nav-link'>
                <span data-hover='Stacks'>Stacks</span>
              </Button>
            </li>
            <li className='nav-item'>
              <Button type='link' href='#contact' className='nav-link'>
                <span data-hover='Contact'>Contact</span>
              </Button>
            </li>
          </ul>

          <ul className='navbar-nav ml-lg-auto'>
            <div className='ml-lg-4'>
              <div className='color-mode d-lg-flex justify-content-center align-items-center'></div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
