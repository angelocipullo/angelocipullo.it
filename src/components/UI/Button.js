import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Button.css"

const Button = (props) => {

    const handleOnClick = () => {
        props.onClick()
    }

    return (
        <div
            style={{ marginTop: props.marginTop }}
            onClick={handleOnClick}
            className='py-2 cursor-pointer text-white space-x-2 px-3 bg-red-500 flex justify-center items-center rounded'
        >
            <FontAwesomeIcon icon={props.icon} />
            <p className='font-primary font-bold '>{props.label}</p>
        </div>
    )
}

Button.defaultProps = {
    marginTop: 0,
    label: 'defaultLabel',
    onClick: () => null
}

export default Button