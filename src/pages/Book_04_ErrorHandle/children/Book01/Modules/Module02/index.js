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

import img343 from '@/assets/images/img343.png'
import img344 from '@/assets/images/img344.png'
import img345 from '@/assets/images/img345.png'
import img346 from '@/assets/images/img346.png'
import img347 from '@/assets/images/img347.png'
import img348 from '@/assets/images/img348.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                异常结构体系
            </SmallTitle>

            <ImagesGroup
                srcArr={[img343]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    常见异常：
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img344]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面是一些常见异常的实例：
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>常见异常一：<Blue>ArrayIndexOutOfBoundsException</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img345]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Bold>示例中，访问了不存在的数组角标。</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>常见异常二：<Blue>NullPointerException</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img346]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Bold>示例中，访问了不存在的实例成员。</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>常见异常三：<Blue>ArithmeticException</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img347]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Bold>示例中，将 0 作为除数。</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>常见异常四：<Blue>ClassCastException</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img348]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Bold>示例中，是JVM在检测到两个类型间转换不兼容时引发的运行时异常。</Bold>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module