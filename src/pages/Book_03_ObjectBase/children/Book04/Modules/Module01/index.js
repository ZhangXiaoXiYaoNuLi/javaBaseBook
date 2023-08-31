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

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>为什么要有继承？</SmallTitle>
            <ParagraphWrapper>
                多个类中存在相同属性和行为时，将这些内容抽取到单独一个类中，那么多个类无需再定义这些属性和行为，只要继承那个类即可。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>{`此处的多个类称为子类(派生类)，单独的这个类称为父类(基类或超类)。可以理解为:“子类 is a 父类”`}</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>{`类继承语法规则：`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>{`class Subclass extends SuperClass{ }`}</Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module