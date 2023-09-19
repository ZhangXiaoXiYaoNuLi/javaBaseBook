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

import img362 from '@/assets/images/img362.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>捕获异常的最后一步是通过finally语句为异常处理提供一个统一的出口，使得在控制流转到程序的其它部分以前，能够对程序的状态作统一的管理。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Red>不论在try代码块中是否发生了异常事件，catch语句是否执行，catch语句是否有异常，catch语句中是否有return，finally块中的语句都会被执行。</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img362]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>finally语句和catch语句是任选的。</Blue>（<Red>可以只存在一个finally，然后一个catch都没有，也可以有一个或多个catch，而没有finally，但是不能即没有catch，又没有finally</Red>）
            </ParagraphWrapper>

            

        </div>
    </>)
}

export default Module