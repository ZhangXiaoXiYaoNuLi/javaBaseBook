import React, {useEffect, useState, useRef} from "react";

import { Card } from "antd";

const CardWrapper = (props) => {

    return (<>
        <div>
            <Card
                {
                    ...props
                }
                size={"small"}
            >
                {props.children}
            </Card>
        </div>
    </>)
}

export default CardWrapper