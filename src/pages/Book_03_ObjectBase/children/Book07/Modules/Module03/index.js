import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper,
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

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                接口的多实现和多继承
            </SmallTitle>

            <ParagraphWrapper>
                <Blue>一个类可以实现多个接口，接口也可以继承其它接口。</Blue><Red>一定程度上“打破”了 java 不能多继承的局限性</Red>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module