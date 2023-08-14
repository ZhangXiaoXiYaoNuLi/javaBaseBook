import React from 'react'

const RedFontWrapper = (props) => {

    return (<span
        style={{
            color: 'red',
            fontWeight: 'bold',
        }}
    >
        {props.children}
    </span>)
}

export default RedFontWrapper