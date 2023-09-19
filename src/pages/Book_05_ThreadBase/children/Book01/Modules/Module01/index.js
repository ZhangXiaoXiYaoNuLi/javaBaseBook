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
                <Red>
                    这里粗略了解下就行，概念性的东西。
                </Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot><Bold>程序（program）</Bold>是为完成特定任务、用某种语言编写的一组指令的集合。即指一段静态的代码，静态对象。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>进程(process)</Bold>是程序的一次执行过程，或是正在运行的一个程序。是一个动态的过程：有它自身的产生、存在和消亡的过程。——生命周期
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>线程(thread)</Bold>，进程可进一步细化为线程，是一个程序内部的一条执行路径。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

        </div>
    </>)
}

export default Module