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

import img273 from '@/assets/images/img273.png'
import img274 from '@/assets/images/img274.png'
import img275 from '@/assets/images/img275.png'
import img276 from '@/assets/images/img276.png'
import img277 from '@/assets/images/img277.png'

import img283 from '@/assets/images/img283.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                之前讲过类，和类的成员，包括属性、方法、构造器，现在来讲剩下的两个（代码块、内部类）之一个“代码块”。
            </ParagraphWrapper>

            <SmallTitle>
                代码块（又叫初始化块）的作用：
            </SmallTitle>

            <ParagraphWrapper>
                <Blue>对Java类或对象进行初始化</Blue>,所以它也叫初始化块。
            </ParagraphWrapper>

            <ParagraphWrapper>
                代码块，从格式上来看，就是一对大括号。<Blue>如果前面有修饰符的话，就只能加上一个 static。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>所以，根据是否有 static 修饰符修饰，又可以把代码块分为两类：“静态代码块” 和 “非静态代码块” 。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>代码块的大括号中，也可以理解为是一个“方法体”，你在里面写代码，就像是在方法体中写代码一样，如果你在里面写上输出语句。可以发现再 new 对象的时候，输出语句就会执行。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img273, img274]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码，可以看到，在main方法实例化对象的时候，执行了代码块的代码。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img275]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>上面的代码中，我们又尝试新 new 了另一个实例化对象，可以看到控制台就只输出了“非静态代码块”的内容。说明静态代码块只是在类初始化的时候执行的，而非静态代码块，是在实例化对象的时候执行的。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                静态代码块：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>和非静态代码块的<Blue>相同点</Blue>：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>1、可以有输出语句。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>2、可以对类的属性、类的声明进行初始化操作。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>和非静态代码块的<Red>不同点</Red>：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>1、不可以对非静态的属性初始化。即：不可以调用非静态的属性和方法</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>2、若有多个静态的代码块，那么按照从上到下的顺序依次执行</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>3、静态代码块的执行要先于非静态代码块。</Red><Blue>因为 静态代码块 快于 非静态代码块，而非静态代码块 快于 构造器，显然 静态代码块 快于 构造器</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>4、静态代码块随着类的加载而加载，且只执行一次</Red>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                非静态代码块：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>和静态代码块的<Blue>相同点</Blue>：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>1、可以有输出语句。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>2、可以对类的属性、类的声明进行初始化操作。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>和静态代码块的<Red>不同点</Red>：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>1、除了调用非静态的结构外，还可以调用静态的变量或方法。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>2、若有多个非静态的代码块，那么按照从上到下的顺序依次执行。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>3、每次创建对象的时候，都会执行一次。且先于构造器执行。</Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                测试代码：
            </SmallTitle>

            <ParagraphWrapper>
                如下，是静态代码块，非静态代码块，以及内嵌同级代码块之间的执行顺序比较demo：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img276]}
            ></ImagesGroup>

            <ParagraphWrapper>
                如果加上构造器，我们试一下执行顺序：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img277]}
            ></ImagesGroup>

            <ParagraphWrapper>
                明显的，执行顺序是：静态代码块 -- 非静态代码块 -- 构造方法。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ImagesGroup
                srcArr={[img283]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>上面的代码是一种错误语法！</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                不换行才是对的。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module