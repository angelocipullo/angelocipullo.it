import React from 'react'
import "./Links.css"

const Links = () => {

    let links = [
        {

        }
    ]

    return (
        <div className='scroll-container'>
            <div className='slide bg-instagram'>
                <div className='p-4'>
                    <p className='title justify-self-end text-4xl'>Instagram</p>
                    <p></p>
                </div>

            </div>
            <div className='slide bg-red-200'>
                <div className='p-4'>
                    <p className='title justify-self-end text-4xl'>Facebook</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Links