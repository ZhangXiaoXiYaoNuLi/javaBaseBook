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

import img529 from '@/assets/images/img529.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <span>Java 8 吸收了 Joda-Time 的精华，以一个新的开始为 Java 创建优秀的 API。</span>
                <span>新的 <Blue>java.time</Blue> 中包含了所有关于<Red>本地日期（LocalDate）、本地时间</Red></span>
                <span><Red>（LocalTime）、本地日期时间（LocalDateTime）、时区（ZonedDateTime）</Red></span>
                <span><Red>和持续时间（Duration）</Red>的类。历史悠久的 Date 类新增了 toInstant() 方法，</span>
                <span>用于把 Date 转换成新的表示形式。这些新增的本地化时间日期 API 大大简</span>
                <span>化了日期时间和本地化的管理</span>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <ImagesGroup
                    srcArr={[img529]}
                ></ImagesGroup>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>说明：</Bold>大多数开发者只会用到基础包和format包，也可能会用到temporal包。因此，尽管有68个新的公开类型，大多数开发者，大概将只会用到其中的三分之一。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module