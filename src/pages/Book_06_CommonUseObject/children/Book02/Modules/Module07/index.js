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

import img531 from '@/assets/images/img531.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                瞬时：Instant
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>Instant：时间线上的一个瞬时点。 这可能被用来记录应用程序中的事件时间戳。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><span>{`在处理时间和日期的时候，我们通常会想到年,月,日,时,分,秒。然而，这只是时间的一个模型，是面向人类的。第二种通用模型是面向机器的，或者说是连续的。在此模型中，时间线中的一个点表示为一个很大的数，这有利于计算机处理。在UNIX中，这个数从1970年开始，以秒为的单位；同样的，在Java中，也是从1970年开始，但以毫秒为单位。`}</span>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    <Dot color="rgb(22, 119, 255)"></Dot><span>{`java.time包通过值类型Instant提供机器视图，不提供处理人类意义上的时间单位。Instant表示时间线上的一点，而不需要任何上下文信息，例如，时区。概念上讲，它只是简单的表示自1970年1月1日0时0分0秒（UTC）开始的秒数。因为java.time包是基于纳秒计算的，所以Instant的精度可以达到纳秒级。`}</span>
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><span>{`(1 ns = 10-9 s) 1秒 = 1000毫秒 =10^6微秒=10^9纳秒`}</span>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img531]}
            ></ImagesGroup>

        </div>
    </>)
}

export default Module