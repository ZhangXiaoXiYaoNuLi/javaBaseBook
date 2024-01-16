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

import img539 from '@/assets/images/img539.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Bold>在什么情况下使用枚举类？</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>当类的对象只有有限个，而且是确定的，那么就适用于使用枚举类。（如星期、月份、季节等）
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>当需要定义一组常量时，强烈建议使用枚举类。
            </ParagraphWrapper>
            <SmallTitle>自定义枚举类</SmallTitle>
            <ParagraphWrapper>
                <Dot></Dot>在 jdk1.5 之前，枚举类的实现，是通过编写一个“类”来实现的，而之后，则可以使用 enum 关键字定义了。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>当枚举类中，只有一个对象，那么其实这个对象就是单例模式的。（<Blue>可以作为单例模式的其中一种实现方式</Blue>）
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>枚举类的属性:
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）枚举类对象的属性不应允许被改动, 所以<Blue>应该使用 private final 修饰</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）枚举类的使用 private final 修饰的属性应该在构造器中为其赋值。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （3）若枚举类显式的定义了带参数的构造器, 则在列出枚举值时也必须对应的传入参数。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Bold>自定义枚举类的做法：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）先 private final 想要的单个枚举的属性。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）编写私有化类的构造器，保证不能在类的外部创建其对象。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （3）在类的内部创建枚举类的实例。声明为：public static final。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （4）对象如果有实例变量，应该声明为private final，并在构造器中初始化。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img539]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实有点像 js 里面的创建映射对象。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module