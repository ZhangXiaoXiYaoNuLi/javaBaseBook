import React from 'react'

const RedFontWrapper = (props) => {

    return (<span
        style={{
            color: '#1677ff',
            fontWeight: 'bold',
        }}
    >
        {props.children}
    </span>)
}

export default RedFontWrapper