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
                    and I'm a <B>{age}</B> years old <B>self-taught</B> Front End Developer currently livin' in  <span className='ita-gradient font-bold'>Italy</span>.
                    <br /> <br />
                    Since when I was a kid, moved by the curiosity of how a website is made,
                    I started to study Web Languages by myself.
                    <br /> <br />
                    I started learning the basics, so HTML, CSS and JavaScript, then i moved to PHP with MySql Database; I understood
                    the big differences between Frontend and Backend and then I practised a lot.
                    <br/><br/>
                    Later on my road, I discovered React and React Native, and I fell in love. Nowadays I use them for building all of my 
                    best personal projects and for helping businesses to reach their goals.

                    I 
                </p>
                
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