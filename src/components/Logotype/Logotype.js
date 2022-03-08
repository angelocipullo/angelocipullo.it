import React from 'react'

const Logotype = (props) => {


    return (
        <div>
            <h1 className='text-center font-primary font-[900] tracking-tight text-5xl lg:text-7xl'>Angelo Cipullo</h1>
            <p className='text-center text-2xl text-gray-500 mt-2 font-light'>Front End Developer — React Developer</p>
        </div>
    )
}

Logotype.defaultProps = {
    viewProjects: false
}

export default Logotype