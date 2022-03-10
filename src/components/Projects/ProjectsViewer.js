import React, { useState, useRef } from 'react'
import { config, useSpring, animated } from 'react-spring';


const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 30,
    (x - rect.left - rect.width / 2) / 30,
    1.2
];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;



const ProjectsViewer = (props) => {

    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const springProps = useSpring({ xys, config: config.default });

    const [photoId, setPhotoId] = useState(0)

    const handlePreviewRender = (img, key) => {
        if (key !== photoId) {
            return (
                <div
                    onClick={() => setPhotoId(key)}
                    className='shadow border-1 hover:scale-110 transition border-black cursor-pointer mr-4 bg-gray-300 rounded h-20 aspect-video'
                    style={{ background: `url(${img})`, backgroundSize: 'cover' }}
                />
            )
        } else {
            return null
        }


    }

    return (
        <>
            <div ref={ref} className='lg:h-[20rem] 2xl:h-[30rem] mx-auto rounded aspect-video max-w-3xl'>
                <animated.div
                    className='shadow'
                    style={{ transform: springProps.xys.to(trans) }}
                    onMouseLeave={() => set([0, 0, 1])}
                    onMouseMove={(e) => {
                        const rect = ref.current.getBoundingClientRect();
                        set(calc(e.clientX, e.clientY, rect));
                    }}
                >
                    <div className='h-5 bg-gray-800 flex space-x-2 pr-2 items-center justify-end rounded-t'>
                        <div className='h-3 w-3 bg-green-500 rounded-full' />
                        <div className='h-3 w-3 bg-yellow-500 rounded-full' />
                        <div className='h-3 w-3 bg-red-500 rounded-full' />
                    </div>
                    <div className='rounded-b h-40 bg-gray-300 '>
                        <img src={props.photos[photoId]} width={'100%'} height={'100%'} />
                    </div>

                </animated.div>
            </div>
            <div className='max-w-3xl flex flex-row mx-auto'>
                {props.photos.map(handlePreviewRender)}
            </div>
        </>
    )
}

ProjectsViewer.defaultProps = {
    photos: ['']
}

export default ProjectsViewer