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

import img530 from '@/assets/images/img530.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >

            {/*  LocalDate、LocalTime、LocalDateTime 类是其中较重要的几个类，它们的实例
                是不可变的对象，分别表示使用 ISO-8601日历系统的日期、时间、日期和时间。
                它们提供了简单的本地日期或时间，并不包含当前的时间信息，也不包含与时区
                相关的信息。
                LocalDate代表IOS格式（yyyy-MM-dd）的日期,可以存储 生日、纪念日等日期。
                LocalTime表示一个时间，而不是日期。
                LocalDateTime是用来表示日期和时间的，这是一个最常用的类之一。 */}

                <ParagraphWrapper>
                    <Bold>LocalDate、LocalTime、LocalDateTime</Bold> 类是其中较重要的几个类，它们的实例是不可变的对象，分别表示使用 ISO-8601日历系统（公历）的日期、时间、日期和时间。它们提供了简单的本地日期或时间，并不包含当前的时间信息，也不包含与时区相关的信息。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    其实看这仨的英文名称就挺顾名思义的了。
                </ParagraphWrapper>

                <ComSpace></ComSpace>

                <ParagraphWrapper>
                    <Dot></Dot><Blue>LocalDate</Blue> 代表IOS格式（yyyy-MM-dd）的日期,可以存储 生日、纪念日等日期。
                </ParagraphWrapper>

                <ComSpace></ComSpace>

                <ParagraphWrapper>
                    <Dot></Dot><Blue>LocalTime</Blue> 表示一个时间，而不是日期。
                </ParagraphWrapper>

                <ComSpace></ComSpace>

                <ParagraphWrapper>
                    <Dot></Dot><Blue>LocalDateTime</Blue> 是用来表示日期和时间的，<Bold>这是一个最常用的类之一</Bold>。
                </ParagraphWrapper>

                <ComSpace></ComSpace>
                <ComSpace></ComSpace>

                <ParagraphWrapper>
                    下面是一个 api 汇总图，其中<Blue>黄色的是用来实例化的，橙色的就是涉及到 get 时间的一些操作，而白的相当于是 set 的操作，灰色的是涉及某时间类型的增减操作</Blue>。
                </ParagraphWrapper>

                <ImagesGroup
                    srcArr={[img530]}
                ></ImagesGroup>
        </div>
    </>)
}

export default Module