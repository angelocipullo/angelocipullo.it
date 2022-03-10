import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Tags from '../Tags/Tags'
import Button from '../UI/Button'

const ProjectsInfo = (props) => {


    const goTo = (dest) => () => {
        window.open(dest, '_blank').focus();
    }

    return (
        <div className='bg-white overflow-hidden relative shadow lg:max-w-sm 2xl:max-w-md lg:p-4 2xl:p-8 rounded ml-6 '>
            <p>Desktop/Mobile</p>
            <p className='font-bold lg:text-2xl 2xl:text-3xl font-primary'>{props.title}</p>
            <Tags data={props.tags} />
            <p>{props.description}</p>
            <Button
                onClick={goTo(props.demoUrl)}
                marginTop={50}
                icon={faEye}
                label="LIVE DEMO"
            />
        </div>
    )
}



ProjectsInfo.defaultProps = {
    title: "Project Title",
    description: 'Lorem Ipsum Description'
}

export default ProjectsInfo