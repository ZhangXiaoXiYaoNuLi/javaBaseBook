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
            <SmallTitle>
                {'重写 hashCode() 方法的基本原则'}
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot><span>{"在程序运行时，同一个对象多次调用 hashCode() 方法应该返回相同的值。"}</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><span>{"当两个对象的 equals() 方法比较返回 true 时，这两个对象的 hashCode() 方法的返回值也应相等。"}</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><span>{"对象中用作 equals() 方法比较的 Field （字段），都应该用来计算 hashCode 值。"}</span>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <SmallTitle>
                {"重写 equals() 方法的基本原则"}
            </SmallTitle>
            <ParagraphWrapper>
                <span>{"以自定义的Customer类为例，何时需要重写equals()？"}</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><span>{"当一个类有自己特有的“逻辑相等”概念,当改写equals()的时候，总是要改写hashCode()，根据一个类的equals方法（改写后），两个截然不同的实例有可能在逻辑上是相等的，但是，根据Object.hashCode()方法，它们仅仅是两个对象。"}</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><span>{"因此，"}违反了“<Red>相等的对象必须具有相等的散列码</Red>”。</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><span>{"结论：复写equals方法的时候一般都需要同时复写hashCode方法。"}<Blue>{"通常参与计算hashCode的对象的属性也应该参与到equals()中进行计算。"}</Blue></span>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module