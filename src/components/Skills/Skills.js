import React, { useRef, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useSpring, animated } from 'react-spring'
import "./Skills.css"
import data from '../../utils/config'

const Skills = React.forwardRef ((props, ref ) => {

    const [ visible, setVisible ] = useState(false)

    let cardRef = useRef(null)

    // window.onscroll =  () => {
    //     setVisible( cardRef.current.offsetTop < window.scrollY )
    //     console.log(cardRef.current.offsetTop, window.scrollY )
    // }

    const fullfill = useSpring({
        from: { width: '0%' },
        to: { width: '100%' }
    })


    const handleRender = (skill, i) => {
        return (
            <div key={"skill-" + i} >
                <p className='mb-2'>{skill.label}</p>
                <div className='h-8 mb-4 bg-gray-200 shadow-inner '>
                    <animated.div className='relative rounded bg-[#273036] h-full' style={{width: skill.value+'%' }}>
                        <div className='value'>{skill.value}%</div>   
                    </animated.div>
                </div>
            </div>
        )
    }

    return (

        <div className={props.className} ref={cardRef}>
            <p className='text-5xl font-bold'>Skills</p>

            <div ref={ref}  className='mt-4 bg-white text-black rounded p-5'>
                {
                    data.skills.map(handleRender)
                }
            </div>
        </div>

    )
})

export default Skills