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

import img246 from '@/assets/images/img246.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                Object类是所有Java类的根父类
                 如果在类的声明中未使用extends关键字指明其父类，则默认父类
                为java.lang.Object类
            */}
            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>Object类是所有Java类的根父类。</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>如果在类的声明中未使用extends关键字指明其父类，则默认父类为java.lang.Object类。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="rgb(22, 119, 255)"></Dot><Blue>我们知道 Object 类是所有类的根父类之后，那么可以想像它里面肯定定义了一些非常非常通用的方法。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                大致的主要方法如下
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img246]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module