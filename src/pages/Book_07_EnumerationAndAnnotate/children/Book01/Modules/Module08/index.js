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

import img556 from '@/assets/images/img556.png'
import img557 from '@/assets/images/img557.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                元注解的意义就是：<Blue>修饰其它注解的注解</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                Java提供了四种元注解，分别是: @Retention、@Target、 @Documented 和 @Inherited。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot>@Retention: 用于指定被它注解的注解保留的时间，有三个取值:
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                1、RelentionPolicy.SOURCE表示注解仅在源代码中保留，编译后不会保留。
            </ParagraphWrapper>

            <ParagraphWrapper>
                2、RetentionPolicy.CLASS表示注解在编译时被保留，但在运行时不会被加载到 JVM 中。
            </ParagraphWrapper>

            <ParagraphWrapper>
                3、<Blue>RetentionPolicy.RUNTIME表示注解在运行时被保留，并且可以通过 反射机制 读取</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img556]}
            ></ImagesGroup>

            <ParagraphWrapper>
                先后顺序如下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img557]}
            ></ImagesGroup>

            <ComLine></ComLine>

            {/* 
                2.@Target: 用于指定被它注解的注解可以应用的地方。常用取值有
                    1.ElementType.TYPE (类、接门、枚举)
                    2.ElementType.FIELD (字段)
                    3.ElementType.METHOD (方法)
                    4.ElementType.PARAMETER (参数)等

                3.@Documented: 用于指定被它注解的注解是否会包含在JavaDoc文档中

                4.@lnherited: 用于指定被它注解的注解是否可以被子类继承。如果一个被@nherited注解的注解应用在一个类上，并且这个类的子
                类没有应用任何注解，则子类会继承父类的注解。
            */}

            <ParagraphWrapper>
                <Dot></Dot>@Target: 用于指定被它注解的注解可以应用的地方。常用取值有
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                1、ElementType.TYPE （类、接门、枚举）
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、ElementType.FIELD （字段）
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、ElementType.METHOD （方法）
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、ElementType.PARAMETER （参数）等
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot>@Documented: 用于指定被它注解的注解是否会包含在JavaDoc文档中。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot>@lnherited: 用于指定被它注解的注解是否可以被子类继承。如果一个被@nherited注解的注解应用在一个类上，并且这个类的子类没有应用任何注解，则子类会继承父类的注解。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module