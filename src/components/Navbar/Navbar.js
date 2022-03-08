import "./Navbar.css"
import React, { useState } from 'react'
import { animated, useTransition } from 'react-spring'

const Navbar = ( props ) => {

    const [show, setShow] = useState(false)

    window.onscroll = () => {
        if (window.pageYOffset > ((window.screen.height / 2) + 150))
            setShow(true)
        else
            setShow(false)
    }

    const transitions = useTransition(show, {
        from: { y: -100 },
        enter: { y: 0 },
        leave: { y: -100 }
    })

    return (
        <>
            <div className=' hidden md:flex w-full h-20'>
                <div className='flex flex-1 justify-center items-center text-2xl space-x-10 font-[900]  tracking-tight'>
                    <p className=' font-primary '>chi sono</p>
                    <p className=' font-primary '>skill</p>
                    <p onClick={props.toggleProjects} className=' font-primary '>progetti</p>
                    <p className=' font-primary '>get in touch</p>
                </div>
            </div>

            {transitions((styles, item) => item &&
                <animated.div style={styles} className=' w-full flex fixed backdrop-blur z-[99] top-0 h-20 right-0 left-0'>
                    <div className='flex flex-1 justify-center items-center text-2xl space-x-10 font-[900] text-white tracking-tight'>
                        <p className=' font-primary '>chi sono</p>
                        <p className=' font-primary '>skill</p>
                        <p className=' font-primary '>progetti</p>
                        <p className=' font-primary '>get in touch</p>
                    </div>
                </animated.div>
            )}

        </>
    )
}

export default Navbar

