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

import img465 from '@/assets/images/img465.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>String 类：代表字符串。Java 程序中的所有字符串字面值（如 "abc" ）都作为此<Red>类</Red>（<Blue>它是个类，不是基础类型</Blue>）的实例实现。
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>String 是一个<Blue> final 类</Blue>，代表<Blue><Red>不可变</Red>的字符序列</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img465]}
            ></ImagesGroup>

            <ParagraphWrapper>
                在 String 类的源码中，我们可以发现，它是 final 修饰的，所以字符串创建以后不能修改，且不会被继承，没有子类。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>字符串是常量，用<Red>双引号</Red>引起来表示。它们的值在<Red>创建之后不能更改</Red>。</Blue>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>{`String 对象的字符内容是存储在一个字符数组 value[] 中的。`}<Blue>这个 value 数组也是被 final 修饰的，所以底层存值的 value 数组的地址值是固定的，其中的数组元素也是不能被修改的。（<Red>一定程度体现了“不可变性”</Red>）</Blue>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>String 类，实现了 Serializable 接口，也就是说 <Blue>String 是可序列化的</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>String 类，实现了 Comparable 接口，是 “比较” 接口，也就是说 String 是可以比较大小的。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module