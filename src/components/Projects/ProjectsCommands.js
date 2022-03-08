import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProjectsCommands = (props) => {


    const prevProject = () => {
        if (props.id >= 1)
            props.setId(props.id - 1)
    }

    const nextProject = () => {
        if (props.id < (props.data.length - 1))
            props.setId(props.id + 1)
    }

    return (
        <div className='flex relative max-w-md mt-4 ml-6 '>

            <div onClick={prevProject} className='flex shadow mr-2 space-x-2 cursor-pointer justify-center flex-1 items-center p-2 rounded bg-white'>
                <FontAwesomeIcon icon={faChevronLeft} />
                <p>{props.prev}</p>
            </div>
            <div onClick={nextProject} className='flex shadow ml-2 space-x-2 cursor-pointer justify-center flex-1 items-center p-2 rounded bg-white'>
                <p>{props.next}</p>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

ProjectsCommands.defaultProps = {
    prev: 'PREV',
    next: 'NEXT'
}

export default ProjectsCommands