import React, {useEffect, useState, useRef} from "react";

import { Image } from "antd";

const ImageWrapper = (props) => {

    return (
        <Image
            style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
            }}
            width={props.width ? props.width : 200}
            src={props.src}
        ></Image>
    )
}

export default ImageWrapper