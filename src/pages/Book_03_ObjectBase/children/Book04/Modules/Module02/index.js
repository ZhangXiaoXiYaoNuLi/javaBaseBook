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
} from '@/components/index.js'

import img171 from '@/assets/images/img171.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                有的时候，我们会发现，实例化对象中，在使用“.”调用方法的时候，IDEA会给我们联想到我们没有在类中创建的方法，如下图：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img171]}
            ></ImagesGroup>
            <ParagraphWrapper>
                显然，我们在student中只定义了say这个方法，后面的这堆方法，我们都没有定义过，那么他们是从哪来的呢？
            </ParagraphWrapper>
            <ParagraphWrapper>
                上面我们说过，子类会继承直接、间接父类的所有方法和属性，直到追溯完“起源”的那个最终父类的所有属性和方法。显然这些我们没有手动定义过的方法，就是继承来的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>在 java 中,如果我们没有显式地声明一个类的父类，那么它就继承于 java 的 lang 包下的 Object 类</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>除了 Object 类以外，所有的类，都 直接 或 间接 地继承自 Object 类</Red>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module