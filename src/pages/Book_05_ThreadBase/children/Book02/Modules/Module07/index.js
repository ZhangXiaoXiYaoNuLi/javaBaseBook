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
                什么是线程通信问题？
            </ParagraphWrapper>

            <ParagraphWrapper>
                打个比方，使用两个线程，交替打印 1 到 100 的数字，那么我们就需要在一个线程打印一个数字之后，告诉第二个线程，我已经打印完毕了，轮到你了，线程二才可以执行。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这个就是线程的通信。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>线程的通信，其实就是几个方法的使用</Blue>，难度是比线程的同步要低的。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                下面我们来尝试实现一下上面说的例子：
            </ParagraphWrapper>

            
        </div>
    </>)
}

export default Module