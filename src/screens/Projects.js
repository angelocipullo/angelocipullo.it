import React, { useState } from 'react'
import ProjectsViewer from '../components/Projects/ProjectsViewer'
import ProjectsInfo from '../components/Projects/ProjectsInfo'

import data from '../utils/fakeData'
import ProjectsCommands from '../components/Projects/ProjectsCommands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Projects = ( props ) => {

    const [id, setId] = useState(0)
    let proj = data[id]



    return (
        <>
            <div className='flex-1 max-w-lg'>
                <div className='flex  max-w-md mb-4 rounded p-2 ml-6'>
                    <div onClick={props.toggleProjects} className='hover:scale-110 transition-all cursor-pointer flex items-center space-x-2 bg-white px-4 py-2 rounded-full'>
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                        <p className='font-bold'>indietro</p>
                    </div>
                </div>
            </div>

            <div className='flex-1 flex justify-center items-center'>
                <p className='bg-white text-4xl font-bold rounded-full py-4 shadow px-6'>projects soon avaible.</p>
            </div>
        </>
    )
}

export default Projects