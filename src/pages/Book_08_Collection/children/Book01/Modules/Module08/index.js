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
                Vector 就不细看了，基本不会用，老古董了，比不过 ArrayList 和 LinkedList。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                可以顺带一提 <Bold>ArrayList 和 Vector 的区别</Bold>：
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`Vector和ArrayList几乎是完全相同的,唯一的区别在于Vector是同步类(synchronized)，属于强同步类。因此开销就比ArrayList要大，访问要慢。正常情况下,大多数的Java程序员使用ArrayList而不是Vector,因为同步完全可以由程序员自己来控制。Vector每次扩容请求其大小的2倍空间，而ArrayList是1.5倍。Vector还有一个子类Stack。`}
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module