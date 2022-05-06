import React, { useState, useRef } from 'react'
import "./Home.css"

import { animated, useTransition } from 'react-spring'

// utils
import { scrollTo } from '../utils/scrollTo'

// ui components
import Logotype from '../components/Logotype/Logotype'
import Navbar from '../components/Navbar/Navbar'
import Wave from 'react-wavify'
import Socials from '../components/Socials/Socials'

// content components
import Bio from '../components/Bio/Bio'
import Skills from '../components/Skills/Skills'
import Jobs from '../components/Jobs/Jobs'
import Projects from './Projects'
import Footer from '../components/Footer/Footer'


const Home = () => {

    const aboutRef = useRef()
    const skillsRef = useRef()

    const [viewProjects, setViewProjects] = useState(false);
    const toggleProjects = () => setViewProjects(!viewProjects)

    let projects = useTransition(viewProjects, {
        exitBeforeEnter: true,
        from: { opacity: 0, scale: 0.5 },
        enter: { opacity: 1, scale: 1},
        leave: { opacity: 0, scale: 3},
    })

    let navbar = useTransition(viewProjects, {
        exitBeforeEnter: true,
        from: { y: -100, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: -100, opacity: 0 },
    })

    let logotype = useTransition(viewProjects, {
        exitBeforeEnter: true,
        from: { y: 600, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: 600, opacity: 0 },
    })

    let socials = useTransition(viewProjects, {
        exitBeforeEnter: true,
        from: { x: 100, opacity: 0 },
        enter: { x: 0, opacity: 1 },
        leave: { x: 100, opacity: 0 },
    })

    const scrollToAbout = () => aboutRef.current.scrollIntoView()
    const scrollToSkill = () => skillsRef.current.scrollIntoView()
    

    return (
        <div>
            <div className='min-h-screen flex relative bg'>
                <div className={'h-screen relative overflow-hidden flex flex-1 justify-center items-center'} >

                    {navbar((styles, viewProjects) => !viewProjects &&
                        <animated.div className='absolute top-0 right-0 left-0' style={styles}>
                            <Navbar 
                                scrollToAbout={scrollToAbout}  
                                scrollToSkill={scrollToSkill}
                                toggleProjects={toggleProjects} 
                            />
                        </animated.div>
                    )}
                    
                    {socials((styles, viewProjects) => !viewProjects &&
                        <animated.div className='absolute right-10 top-6' style={styles}>
                            <Socials />
                        </animated.div>
                    )}

                    {logotype((styles, viewProjects) => !viewProjects &&
                        <animated.div style={styles}>
                            <Logotype />
                        </animated.div>
                    )}


                    { projects(( styles, viewProjects) => viewProjects &&
                        <animated.div className='flex flex-1 flex-row' style={styles}>
                            <Projects toggleProjects={toggleProjects} />
                        </animated.div>
                    )}


                </div>

                {/* Waves at bottom part of the first Slide */}
                <div className='hidden md:block absolute -bottom-16 left-0 right-0'>
                    <Wave
                        fill='#273036'
                        paused={false}
                        options={{
                            height: 30,
                            amplitude: 40,
                            speed: 0.3,
                            points: 3
                        }}
                    />
                </div>
            </div>


            <div className='min-h-screen z-50 text-2xl text-white bg-[#273036]'>
                <div className='pb-10 max-w-3xl px-5 md:px-0 pt-40 min-h-screen mx-auto'>
                    <Bio ref={aboutRef} className='' />
                    {/* <Skills ref={skillsRef} className='mt-40' /> */}
                    <Jobs className='mt-40' />
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    )
}

export default Home