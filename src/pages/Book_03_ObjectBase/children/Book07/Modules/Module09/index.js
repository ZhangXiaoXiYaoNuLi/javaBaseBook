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

import img337 from '@/assets/images/img337.png'
import img338 from '@/assets/images/img338.png'
import img339 from '@/assets/images/img339.png'
import img340 from '@/assets/images/img340.png'
import img341 from '@/assets/images/img341.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Blue>开发中用的很少，下面我们来看看代码示例</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们直接<Blue>来一个开发中会用到的</Blue>代码栗子：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们定义一个接口 Comparable，里面有一个抽象方法 compareTo （没有啥实际意义哈），传入一个对象，返回 int 类型的 0。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img337]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后，我们定义一个 InnerClassTest 类，类中添加一个方法，返回实现这个接口的实例。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img338]}
            ></ImagesGroup>

            <ParagraphWrapper>
                又或者使用第二种方式：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img339]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们定义一个测试类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img340]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后我们来到 main 方法中，测试使用局部内部类的方法，获取实例传入方法作为参数：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img341]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module