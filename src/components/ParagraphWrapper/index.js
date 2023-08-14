import React, {useEffect, useState, useRef} from "react";

const ParagraphWrapper = (props) => {
    return (
        <div>
            <span style={{display: 'inline-block', width: '30px'}}></span>
            <span>
                {props.children}
            </span>
        </div>
    );
}

export default ParagraphWrapper