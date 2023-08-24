import React, {useEffect, useState, useRef} from "react";

const Dot = (props) => {

    const [sizeNum, setSizeNum] = useState(null)

    useEffect(() => {
        if (props.size != null && (props.size === 'small' || props.size === 'large')) {
            if (props.size === 'small') {
                setSizeNum('4px')
            } else if (props.size === 'large') {
                setSizeNum('12px')
            }
        } else {
            setSizeNum('8px')
        }
    }, [])

    return (<>
        {
            sizeNum != null && <span>
                <div
                    style={{
                        display: 'inline-block',
                        width: sizeNum,
                        marginRight: '5px'
                    }}
                >
                    <div
                        style={{
                            backgroundColor: props.color ? props.color : '#888',
                            //  尺寸 small default large
                            width: sizeNum,
                            height: sizeNum,
                            borderRadius: Number(sizeNum.split('px')[0]) + 'px',
                        }}
                    ></div>
                </div>
            </span>
        }
    </>)
}

export default Dot