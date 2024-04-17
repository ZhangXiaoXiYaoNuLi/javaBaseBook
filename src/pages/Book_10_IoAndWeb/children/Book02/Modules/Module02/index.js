import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper as P,
    ComSpace,
    ImagesGroup,
    CodeShowWrapper,
    CardWrapper,
    SmallTitle,
    Red,
    Blue,
    ComLine,
    Dot,
    Green,
    Bold,
} from '@/components/index.js'

import img690 from '@/assets/images/img690.png'
import img691 from '@/assets/images/img691.png'
import img692 from '@/assets/images/img692.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>对象的序列化-字符串</SmallTitle>
            <P>直接上代码：</P>
            <ImagesGroup
                srcArr={[img690]}
            ></ImagesGroup>
            <P>然后我们可以看到多了这个文件：</P>
            <ImagesGroup
                srcArr={[img691]}
            ></ImagesGroup>
            <P>里面一坨的乱码。接下来，我们尝试<Bold>进行反序列化</Bold>，读取这个文件中的内容，还原到 java 程序中。</P>
            <ImagesGroup
                srcArr={[img692]}
            ></ImagesGroup>
            <P>可以注意到这里，需要多 catch 一个 ClassNotFound 异常。还有读取后类型的强转。</P>
        </div>
    </>)
}

export default Module