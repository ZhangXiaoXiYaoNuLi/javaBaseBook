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

import img558 from '@/assets/images/img558.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                集合框架概述
            </SmallTitle>
            <ImagesGroup
                srcArr={[img558]}
            ></ImagesGroup>

            {/* 
                Java 集合可分为 Collection 和 Map 两种体系
                Collection接口：单列数据，定义了存取一组对象的方法的集合
                List：元素有序、可重复的集合
                Set：元素无序、不可重复的集合
                 Map接口：双列数据，保存具有映射关系“key-value对”的集合
            */}
        </div>
    </>)
}

export default Module