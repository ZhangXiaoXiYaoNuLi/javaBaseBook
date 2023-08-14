import React, {useEffect, useState, useRef} from "react";

const SmallTitle = (props) => {

    return (<>
        <div
            style={{
                padding: '12px',
                fontSize: '16px',
                fontWeight: 'bold',
            }}
        >
            {props.children}
        </div>
    </>)
}

export default SmallTitle