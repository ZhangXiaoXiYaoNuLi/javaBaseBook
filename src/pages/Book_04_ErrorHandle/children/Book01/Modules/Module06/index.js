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
                <Dot></Dot>前面使用的异常都是<Red>RuntimeException</Red><Blue>类或是它的子类</Blue>，这些类的异常的特点是：<Blue>即使没有使用try和catch捕获，Java自己也能捕获，并且编译通过</Blue>（但运行时会发生异常使得程序运行终止 ）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>所以今后在开发中，一般是不会去捕获运行时异常的，不然以后每个表相关的操作，都来个捕获空指针异常，代码会很奇葩。</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>如果抛出的异常是<Blue>IOException等类型的</Blue><Red>非运行时异常，则必须捕获，否则编译错误</Red>。也就是说，我们<Red>必须处理编译时异常，将异常进行捕捉，转化为运行时异常</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    这个也不算什么要记住的知识点，因为，编译都不给你过，那还开发个屁啊。你不想处理编译时异常都不行的。
                </Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module