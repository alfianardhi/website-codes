import React from 'react'
import ImageProject from 'assets/images/project-image05.png'
// TODO: split tech stack, load bug img
export default function ProjectList(props) {
  return (
    <section class='py-5 d-lg-flex justify-content-center align-items-center project-section' id='project'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-11 text-center mx-auto col-12'>
            <div class='col-lg-8 mx-auto'>
              <h2>Things I have developed for various project</h2>
            </div>
            <div class='project-list'>
              {props.data.map((item, index) => {
                return (
                  <a href='/'>
                    <div class='project-box'>
                      <div class='project-img' style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                      <div class='px-5 py-5'>
                        <h5>Denklik Website</h5>
                        <p>Loren ipsu whats so if you want to dosomething enefneyes pleas goo goehr</p>
                      </div>
                      <div class='project-stack px-5 py-5'>
                        <span>vue</span>
                        <span>laravel</span>
                        <span>mysql</span>
                      </div>
                    </div>
                  </a>
                )
              })}
              <a href='/'>
                <div class='project-box'>
                  <div class='project-img' style={{ backgroundImage: `url(${ImageProject})` }}></div>
                  <div class='px-5 py-5'>
                    <h5>Denklik Website</h5>
                    <p>Loren ipsu whats so if you want to dosomething enefneyes pleas goo goehr</p>
                  </div>
                  <div class='project-stack px-5 py-5'>
                    <span>vue</span>
                    <span>laravel</span>
                    <span>mysql</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
