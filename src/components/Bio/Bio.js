import React from 'react'
import "./Bio.css"

import { Slide, Fade } from "react-awesome-reveal";
import { useSpring, animated, easings } from 'react-spring'

const Bio = (props) => {

    let age = new Date().getFullYear() - 2001

    let shake = useSpring({
        config: { duration: 300, easing: easings.easeInOutCirc, },
        loop: { reverse: true },
        from: { rotateZ: -15 },
        to: { rotateZ: 15 },
    })

    return (
        <div className={props.className}>
            <Slide triggerOnce left className='flex'>
                <div className='text-5xl flex flex-row font-bold'>
                    Hey!
                    <animated.div style={shake}>👋</animated.div>
                </div>
            </Slide>

            <Fade triggerOnce cascade direction={"up"} delay={500}>
                <p className='mt-4 text-3xl font-regular'>
                    I'm <B>Angelo</B>,
                    and I'm a <B>{age}</B> years old Developer
                </p>
                <p className='text-3xl'>currently livin' in  <span className='ita-gradient font-bold'>Italy</span></p>
            </Fade>


        </div>
    )
}

const B = (props) => {
    return (
        <span className='font-bold'>
            {props.children}
        </span>
    )
}

export default Bio