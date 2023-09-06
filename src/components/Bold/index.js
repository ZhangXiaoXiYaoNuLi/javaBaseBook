import React from 'react'

const Bold = (props) => {

    return (<span
        style={{
            color: 'black',
            fontWeight: 'bold',
        }}
    >
        {props.children}
    </span>)
}

export default Bold