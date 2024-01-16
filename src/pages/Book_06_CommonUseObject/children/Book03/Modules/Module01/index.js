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

            <ParagraphWrapper>
                <Dot></Dot>在Java中经常会涉及到对象数组的排序问题，那么就涉及到对象之间的比较问题。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={'#333'}></Dot><Bold>Java实现对象排序的方式有两种：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                （1）<Blue>自然排序：java.lang.Comparable</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                （2）<Blue>定制排序：java.util.Comparator</Blue>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module