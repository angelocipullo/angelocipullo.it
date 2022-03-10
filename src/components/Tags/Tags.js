import React from 'react'
import { useSpring, animated } from 'react-spring'

const Tags = (props) => {

    const scroll = useSpring({
        from: { x: 400 },
        to: { x: -500 },
        loop: true,
        config: {duration: 20000}
    })

    const renderTags = (tag, key) => {
        return (
            <div key={key} className='bg-gray-200 inline-block rounded-full mr-2 lg:px-2 lg:py-1 2xl:px-4 2xl:py-2 justify-center items-center'>
                {tag}
            </div>
        )
    }

    return (
        <div className='-mx-8 2xl:my-2 lg:my-1 flex overflow-hidden leading-tight font-primary text-sm'>
            <animated.div style={scroll}>
                {props.data.map(renderTags)}
            </animated.div>
        </div>
    )
}

export default Tags