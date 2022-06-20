import React, { forwardRef } from 'react'
import "./Bio.css"

import { Slide, Fade } from "react-awesome-reveal";
import { useSpring, animated, easings } from 'react-spring'

const Bio = React.forwardRef( (props, ref) => {

    let age = new Date().getFullYear() - 2001

    let shake = useSpring({
        config: { duration: 300, easing: easings.easeInOutCirc, },
        loop: { reverse: true },
        from: { rotateZ: -15 },
        to: { rotateZ: 15 },
    })

    return (
        <div ref={ref} className={props.className}>
            <Slide triggerOnce left className='flex'>
                <div className='text-5xl flex flex-row font-bold'>
                    Hey!
                    <animated.div style={shake}>👋</animated.div>
                </div>
            </Slide>

            <Fade triggerOnce cascade direction={"up"} delay={500}>
                <p className='mt-4 text-2xl lg:text-3xl font-regular'>
                    I'm <B>Angelo</B>,
                    and I'm a <B>{age}</B> years old <B>Front End Developer</B> currently livin' in  <span className='ita-gradient font-bold'>Italy</span>.
                    <br /> <br />
                    I'm developing with ⚛️<B className='text-blue-400'>React</B> and <B className='text-blue-400'>React Native</B> my 
                    best personal projects, and <B>helping businesses</B> to reach their 🎯<B>goals</B>.
                </p>
            </Fade>


        </div>
    )
})

const B = (props) => {
    return (
        <span className={'font-bold ' + props.className}>
            {props.children}
        </span>
    )
}

export default Bio