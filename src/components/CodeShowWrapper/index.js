import React from "react";

import {Input} from 'antd'

const { TextArea } = Input

const CodeShowWrapper = (props) => {

    return (<>
        <TextArea
            disabled
            value={props.codeStrArr.join('\n')}
            autoSize
        ></TextArea>
    </>)
}

export default CodeShowWrapper