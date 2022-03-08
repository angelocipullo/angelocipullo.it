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
            <div key={key} className='bg-gray-200 inline-block rounded-full mr-2 px-4 py-2 justify-center items-center'>
                {tag}
            </div>
        )
    }

    return (
        <div className='-mx-8 my-2 flex overflow-hidden leading-tight font-primary text-sm'>
            <animated.div style={scroll}>
                {props.data.map(renderTags)}
            </animated.div>
        </div>
    )
}

export default Tags