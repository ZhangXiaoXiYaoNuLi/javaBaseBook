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

import img367 from '@/assets/images/img367.png'
import img368 from '@/assets/images/img368.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>一般地，用户自定义异常类都是<Blue>RuntimeException</Blue>的子类。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>自定义异常类通常<Blue>需要编写几个重载的构造器</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Red>自定义异常需要提供serialVersionUID</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>自定义的异常<Red>只能通过 throw 抛出</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>自定义异常最重要的是异常类的名字，当异常出现时，可以根据名字判断异常类型（<Blue>就是需要顾名思义</Blue>）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Red>必须继承现有的异常类</Red>.
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                首先，我们定义一个自定义异常类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img367]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后尝试抛出：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img368]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module