import React from 'react'
import config from '../../utils/config';

// components
import Timeline from '../Timeline/Timeline';

const Jobs = (props) => {

    return (
        <div className={props.className}>
            <div className='mb-8'>
                <p className='text-5xl font-bold '>Jobs</p>
                <p className='font-light'>The business that i worked with.</p>
            </div>

            <Timeline
                data={config.jobs}
            />
        </div>
    )
}



export default Jobs