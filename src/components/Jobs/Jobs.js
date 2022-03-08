import React from 'react'

// components
import Timeline from '../Timeline/Timeline';

const Jobs = (props) => {


  let jobs = [
    { title: "Frontend Developer", subtitle:"My first job as a Developer", date:"January 2022 - Today" },
    { title: 'Start'}
]



  return (
    <div className={props.className}>
      <p className='text-5xl font-bold'>Jobs</p>

      <Timeline 
        data={jobs}
      />


    </div>
  )
}



export default Jobs