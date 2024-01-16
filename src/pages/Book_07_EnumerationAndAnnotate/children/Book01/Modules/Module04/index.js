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

import img551 from '@/assets/images/img551.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>和普通 Java 类一样，枚举类可以实现一个或多个接口
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={'#333'}></Dot><Bold>若每个枚举值在调用实现的接口方法呈现相同的行为方式，则只要统一实现该方法即可</Bold>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这种情况，其实就像上面重写 toString 方法一样，就不示例了。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={'#333'}></Dot><Bold>若需要每个枚举值在调用实现的接口方法呈现出不同的行为方式, 则可以让每个枚举值分别来实现该方法</Bold>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                每个枚举值分别实现方法的写法如下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img551]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    其实就是开头的枚举实例部分，添加上一对“大括号”，然后在这个单个枚举中（内部类）中的作用域，分别编写实现方法。
                </Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module