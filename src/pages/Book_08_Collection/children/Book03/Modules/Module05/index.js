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
    Bold as B,
} from '@/components/index.js'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                <Dot></Dot>LinkedHashMap 是 HashMap 的子类。
            </P>
            <P>
                <Dot></Dot>在HashMap存储结构的基础上，使用了一对双向链表来记录添加元素的顺序。
            </P>
            <P>
                <Dot></Dot>与LinkedHashSet类似，LinkedHashMap 可以维护 Map 的迭代顺序：迭代顺序与 Key-Value 对的插入顺序一致
            </P>

            <P>
                <Dot></Dot>本质上 LinkedHashMap 其实就是在 HashMap 存储的单个键值对entry中，添加一个“beforeAdd”属性，用于记录上一个添加的键值对信息，所以可以遍历有序。
            </P>
        </div>
    </>)
}

export default Module