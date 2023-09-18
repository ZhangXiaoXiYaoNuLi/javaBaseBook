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
                内部类的概述：
            </SmallTitle>
            <ParagraphWrapper>
                当一个事物的内部，还有一个部分需要一个完整的结构进行描述，<Blue>而这个内部的完整的结构又只为外部事物提供服务</Blue>，那么整个内部的完整结构最好使用内部类。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>在Java中，允许一个类的定义位于另一个类的内部，前者称为<Blue>内部类</Blue>，后者称为<Blue>外部类</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>内部类<Blue>一般用在定义它的类或语句块之内</Blue>，<Blue>在外部引用它时必须给出完整的名称</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>Inner class的名字<Blue>不能与包含它的外部类类名相同</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                内部类的分类：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot><>类似类中的变量，有两种，取决于存在的地方，一个是“<Blue>类中方法外</Blue>”，一个是“<Blue>方法中</Blue>”，类似的，<Blue>内部类也存在于这两个位置，也是由此作为区分的</Blue>。</>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>成员内部类</Blue>（<Blue>static成员内部类和非static成员内部类</Blue>）（<Blue>类中方法外</Blue>）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>局部内部类</Blue>（<Blue>不谈修饰符</Blue>）、<Blue>匿名内部类</Blue>。（<Blue>方法内、代码块内、构造器内</Blue>）
            </ParagraphWrapper>

            <ComLine></ComLine>

        </div>
    </>)
}

export default Module