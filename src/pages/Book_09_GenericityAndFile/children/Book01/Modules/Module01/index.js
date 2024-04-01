import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper as P,
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

import img626 from '@/assets/images/img626.png'
import img627 from '@/assets/images/img627.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                为什么要有泛型？
            </SmallTitle>
            <P>
                <Dot></Dot>泛型：标签
            </P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot>举例：
            </P>
            <P>1、中药店，每个抽屉外面贴着标签。</P>
            <P>2、超市购物架上很多瓶子，每个瓶子装的是什么，有标签。</P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot>泛型的设计背景：
            </P>
            <P>{`集合容器类在设计阶段/声明阶段不能确定这个容器到底实际存的是什么类型的对象，所以在JDK1.5之前只能把元素类型设计为Object，JDK1.5之后使用泛型来解决。因为这个时候除了元素的类型不确定，其他的部分是确定的，例如关于这个元素如何保存，如何管理等是确定的，因此此时把元素的类型设计成一个参数，这个类型参数叫做泛型。Collection<E>，List<E>，ArrayList<E> 这个<E>就是类型参数，即泛型。`}</P>
            <P>
                <Blue>
                    在代码中也可以看到，泛型定义，总是跟在类型定义的后面。
                </Blue>
            </P>
            <ComLine></ComLine>
            <SmallTitle>
                泛型的概念
            </SmallTitle>
            <P>
                <Dot color="#1677ff"></Dot><Blue>所谓泛型，就是允许在定义类、接口时通过一个标识表示类中某个属性的类型或者是某个方法的返回值及参数类型。这个类型参数将在使用时（例如，继承或实现这个接口，用这个类型声明变量、创建对象时）确定（即传入实际的类型参数，也称为类型实参）。</Blue>
            </P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot><span>{`从JDK1.5以后，Java引入了“参数化类型（Parameterized type）”的概念，允许我们在创建集合时再指定集合元素的类型，正如：List<String>，这表明该List只能保存字符串类型的对象。`}</span>
            </P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot><span>{`JDK1.5改写了集合框架中的全部接口和类，为这些接口、类增加了泛型支持，从而可以在声明集合变量、创建集合对象时传入类型实参。`}</span>
            </P>

            <ImagesGroup
                srcArr={[img626, img627]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module