import React from 'react'

import Button from 'components/Button'

import ImageHero from 'assets/images/img-hero.svg'

export default function Hero(props) {
  return (
    <section className='about full-screen d-lg-flex justify-content-center align-items-center' id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-md-12 col-12 d-flex align-items-center'>
            <div className='about-text'>
              <small className='small-text'>
                Welcome to <span className='mobile-block'>my portfolio website!</span>
              </small>
              <h1 className='animated animated-text'>
                <span className='mr-2'>Hey folks, I'm</span>
                <div className='animated-info'>
                  <span className='animated-item'>Marvel Sann</span>
                  <span className='animated-item'>Web Designer</span>
                  <span className='animated-item'>UI Specialist</span>
                </div>
              </h1>

              <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>

              <div className='custom-btn-group mt-4'>
                <Button type='link' href='#' className='btn mr-lg-2 custom-btn'>
                  <i className='uil uil-file-alt'></i> Download Resume
                </Button>
                <Button type='link' href='#contact' className='btn custom-btn custom-btn-bg custom-btn-link'>
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          <div className='col-lg-5 col-md-12 col-12'>
            <div className='about-image svg'>
              <img src={ImageHero} className='img-fluid' alt='developer' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
