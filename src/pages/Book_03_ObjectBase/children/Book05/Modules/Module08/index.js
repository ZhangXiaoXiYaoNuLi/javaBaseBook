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

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >

            {/* 
                针对八种基本数据类型定义相应的引用类型—包装类（封装类）
                 有了类的特点，就可以调用类中的方法，Java才是真正的面向对象
            */}
            <ParagraphWrapper>
                上面是包装类？
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>包装类就是，针对八种基本数据类型定义相应的引用类型—包装类（封装类）</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>目的是让基础类型拥有类的特点，就可以调研类中的方法。充分体现了 java 的面向对象特性。</Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module