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

import img256 from '@/assets/images/img256.png'
import img257 from '@/assets/images/img257.png'
import img258 from '@/assets/images/img258.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot><Blue>{`toString()方法在Object类中定义，其返回值是String类型，返回类名和它的引用地址。`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>{`在进行String与其它类型数据的连接操作时，自动调用toString()方法。`}</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img256]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot></Dot><Blue>{`可以根据需要在用户自定义类型中重写toString()方法如String 类重写了toString()方法，返回字符串的值。`}</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img257]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot></Dot><Blue>{`基本类型数据转换为String类型时，调用了对应包装类的toString()方法。`}</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img258]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module