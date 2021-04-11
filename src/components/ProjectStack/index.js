import React from 'react'

export default function ProjectStack(props) {
  return (
    <>
      <div className='project-stack px-5 py-5'>
        {props.data.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </>
  )
}
