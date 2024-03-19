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

import img567 from '@/assets/images/img567.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                 Java 5.0 提供了 foreach 循环迭代访问 Collection和数组。
                 遍历操作不需获取Collection或数组的长度，无需使用索引访问元素。
                 遍历集合的底层调用Iterator完成操作。
                 foreach还可以用来遍历数组。
            */}

            <ParagraphWrapper>
                <Dot></Dot>Java 5.0 提供了 foreach 循环迭代访问 Collection和数组。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>遍历操作不需获取Collection或数组的长度，无需使用索引访问元素。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>遍历集合的底层调用Iterator完成操作</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>foreach还可以用来遍历数组。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img567]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码中，可以看到，其实是类似 js 中的 for ... in ... 遍历，而其中的 in 关键字，是换成了 冒号 “:”，而且不同的是，获取的不是 key 值，而是直接获取元素本身。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module