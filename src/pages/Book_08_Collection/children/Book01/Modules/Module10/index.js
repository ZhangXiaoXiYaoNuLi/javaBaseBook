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
            {/* 常用方法，增删改查、长度、遍历 */}
            <ParagraphWrapper>
                一般来说，类比 js ，操作数组的常用方法，无非就是 <Blue>增 删 改 查 长度 遍历</Blue> 。
            </ParagraphWrapper>

            <ParagraphWrapper>
                对应的方法就是： <Blue>add、remove、set、indexOf、size</Blue>。至于遍历，可以用从 collection 接口中来的<Blue>迭代器 Iterator 遍历、增强 for 循环、普通循环</Blue>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module