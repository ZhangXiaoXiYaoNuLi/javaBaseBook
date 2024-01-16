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

import img532 from '@/assets/images/img532.png'

// Java语言高级-DateTimeFormatter 的使用

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                DateTimeFormatter
            </SmallTitle>

            <ParagraphWrapper>
                Java8 引入了新的时间日期API，其中DateTimeFormatter是对日期时间格式化的实用类。它提供了一种简便的方法来格式化日期和时间，同时还可以将日期和时间字符串解析为Java对象。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>特性：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                1、<Blue>线程安全</Blue>：在多线程应用程序中使用DateTimeFormatter时，无需考虑同步问题。
            </ParagraphWrapper>

            <ParagraphWrapper>
                2. <Blue>不可变性</Blue>：DateTimeFormatter对象创建后不可修改，确保了线程安全性。
            </ParagraphWrapper>

            <ParagraphWrapper>
                3.<Blue> 支持各种日期时间格式</Blue>：DateTimeFormatter支持多种日期时间格式，同时还支持自定义格式。
            </ParagraphWrapper>

            <ParagraphWrapper>
                4. <Blue>扩展性</Blue>：可以用DateTimeFormatterBuilder类创建自定义格式。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img532]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    所以 DateTimeFormatter 类，类似于定义 moment 对象 format 方法的 “格式字符串” 的类。然后这个 “格式字符串”， 可以用于使用 format 方法，获取时间字符串，也可以用于 parse 方法的参数，用于将时间字符串，转为时间对象。
                </Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module