import React, {useEffect, useState, useRef} from "react";

const ParagraphWrapper = (props) => {
    return (
        <div>
            <span style={{display: 'inline-block', width: '30px'}}></span>
            <span style={{
                fontWeight: props.bold != null ? 'bold' : null,
                color: props.bold != null ? '#333' : null,
            }}>
                {props.children}
            </span>
        </div>
    );
}

export default ParagraphWrapper