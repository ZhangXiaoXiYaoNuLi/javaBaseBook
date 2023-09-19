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

import img364 from '@/assets/images/img364.png'
import img365 from '@/assets/images/img365.png'
import img366 from '@/assets/images/img366.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                可以看到这里的关键字是“<Blue>throw</Blue>”，<Blue>这里可没有“<Red>s</Red>”结尾</Blue>。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img364]}
            ></ImagesGroup>

            <ParagraphWrapper>
                就是有的时候，在语法上是合法的，但是结合现实意义后的代码是错的，比如用一个 int 类型记录数量，虽然赋值 -1 是符合语法的，但是情境下是错的。我们就可以尝试手动抛出异常。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面上代码，这里定义了一个记录数量 count 的类，且对于属性 count 有个 set 方法，如果检测到想 set 不合法的数值，那么就手动抛出异常。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img365]}
            ></ImagesGroup>
            
            <ParagraphWrapper>
                这里编译是通过的，所以我们抛出一个 “运行时异常”，然后 RuntimeException 构造器的第一个参数，就是要输出的 message。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来到 main 方法中，尝试实例化一个 count 对象，然后 set 非法值给 count：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img366]}
            ></ImagesGroup>

        </div>
    </>)
}

export default Module