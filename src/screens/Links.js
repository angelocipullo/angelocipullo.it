import React from 'react'
import "./Links.css"
import config from '../utils/config'

const Links = () => {

    const openURL = (url) => () => {
        window.location.href = url;
    }

    const handleLinksRender = (link, key) => {

        return (
            <div key={'link-' + key} className={'slide ' + link.bgClass} >
                <div className='flex-1 p-4'>
                    flex1
                </div>
                <div className='p-4'>
                    <p className='title justify-self-end text-4xl mb-4'>{link.label}</p>
                    <p
                        onClick={openURL(link.url)}
                        className=' bg-white bg-opacity-50 font-primary rounded p-3 text-center text-2xl shadow font-semibold'
                    >
                        VAI
                        <i className="text-2xl ml-1 uil uil-arrow-up-right" />
                    </p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='z-50 fixed top-0 right-0 left-0 p-4'>
                <div className='bg-white p-4 rounded bg-opacity-70 flex backdrop-blur'>
                    <div className='h-16 w-16 tracking-tight flex items-center justify-center rounded-full bg-gray-400'>
                        {''}
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <p className='text-3xl font-primary tracking-tight font-extrabold'>angelo cipullo</p>
                    </div>
                </div>
            </div>
            <div className='scroll-container'>
                {config.links.map(handleLinksRender)}
            </div>
        </>
    )
}

export default Links