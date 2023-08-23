import React, {useEffect, useState, useRef} from "react";

import ImageWrapper from '../ImageWrapper'

const ImagesGroup = (props) => {

    return (<>
        {
            props.srcArr != null && props.srcArr.length != null && <>
                <div
                    style={{
                        paddingLeft: '32px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        paddingTop: '12px',
                    }}
                >
                    {
                        props.srcArr.map(item => {
                            return (
                                <div
                                    style={{paddingRight: '32px', paddingBottom: '12px'}}
                                >
                                    <ImageWrapper
                                        src={item}
                                        {...props}
                                    ></ImageWrapper>
                                </div>
                            );
                        })
                    }
                </div>
            </>
        }
    </>);
}

export default ImagesGroup