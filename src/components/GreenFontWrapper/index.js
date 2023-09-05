import React from 'react'

const GreenFontWrapper = (props) => {

    return (<span
        style={{
            color: '#52c41a',
            fontWeight: 'bold',
        }}
    >
        {props.children}
    </span>)
}

export default GreenFontWrapper