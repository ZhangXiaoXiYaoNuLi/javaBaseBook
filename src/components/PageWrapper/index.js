import React, { useState } from "react";

const PageWrapper = (props) => {

    return (<>
        <div
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            {/* 头部标题 */}
            {
                props.title && <div
                    style={{
                        fontSize: '20px',
                        fontFamily: 'sans-serif',
                        color: '#555',
                        paddingBottom: '12px',
                    }}
                >
                    {props.title}
                </div>
            }
            {
                props.children
            }
        </div>
    </>)
}

export default PageWrapper