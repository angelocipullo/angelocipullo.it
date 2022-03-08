import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {

    let github = 'https://github.com/angelocipullo'
    let linkedin ='https://linkedin.com/in/angelocipullo'
    let ig = 'http://instagram.com/angelocipullo_'

    const goTo = (dest) => () => {
        window.open(dest, '_blank').focus();
    } 

    return (
        <div className='space-x-4 text-4xl'>
            <FontAwesomeIcon className='cursor-pointer' onClick={goTo(github)} icon={faGithub} />
            <FontAwesomeIcon className='cursor-pointer transition hover:text-blue-700' onClick={goTo(linkedin)} icon={faLinkedin} />
            <FontAwesomeIcon className='cursor-pointer transition hover:text-purple-700' onClick={goTo(ig)} icon={faInstagram} />
        </div>
    )
}

export default Socials