import React from 'react'

import ProjectStack from 'components/ProjectStack'

export default function ProjectList(props) {
  return (
    <section className='py-5 d-lg-flex justify-content-center align-items-center project-section' id='project'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-11 col-12'>
            <h2 className='mb-4 mobile-mt-2'>Selected Projects</h2>
            <div className='project-list'>
              {props.data.map((item, index) => {
                let tectStack = item.listTech.split('|')
                return (
                  <a href={item.projectUrl} key={index}>
                    <div className='project-box'>
                      <img className='project-img' src={item.imageUrl} alt={item.title} />
                      <div className='px-5 py-5'>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                      <ProjectStack data={tectStack} />
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
