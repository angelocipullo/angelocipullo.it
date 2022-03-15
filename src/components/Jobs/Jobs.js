import React from 'react'
import config from '../../utils/config';

// components
import Timeline from '../Timeline/Timeline';

const Jobs = (props) => {

    return (
        <div className={props.className}>
            <p className='text-5xl font-bold'>Jobs</p>

            <Timeline
                data={config.jobs}
            />


        </div>
    )
}



export default Jobs