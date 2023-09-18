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

import img336 from '@/assets/images/img336.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                那么成员内部类中的方法，分别是怎么访问外部类成员，内部类成员，以及方法实参的呢？
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img336]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    内部类中的 this 指向的是内部类的实例对象，要调用外部类中的成员，要使用“外部类.this.xxx”的语法。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然了，除了成员属性的访问，内外部类中的成员方法的调用，也是类似的语法结构。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module