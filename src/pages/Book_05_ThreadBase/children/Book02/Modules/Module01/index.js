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

import img405 from '@/assets/images/img405.png'
import img406 from '@/assets/images/img406.png'
import img407 from '@/assets/images/img407.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                要想实现多线程，<Blue>必须在<Red>主线程</Red>中创建新的线程对象</Blue>。Java语言使用Thread类及其子类的对象来表示线程，在它的一个完整的生命周期中通常要经历如下的五种状态：
            </ParagraphWrapper>
           <ImagesGroup
                srcArr={[img405]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                线程的生命周期图：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img406]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                线程状态转换图：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img407]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module