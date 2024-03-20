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

import img568 from '@/assets/images/img568.png'
import img569 from '@/assets/images/img569.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* <ParagraphWrapper>
                <Dot></Dot>本质上 ArrayList 是一个“数组”，只是会自动变长而已。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>ArrayList的JDK1.8之前与之后的实现区别？
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）JDK1.7：ArrayList像饿汉式，直接创建一个初始容量为10的数组。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）JDK1.8：ArrayList像懒汉式，一开始创建一个长度为0的数组，当添加第一个元素时再创建一个始容量为10的数组，后续容量不足的时候，就会自动扩容1.5倍，当然如果一次 add 很多元素，超过了 1.5倍。则以实际为准。
            </ParagraphWrapper> */}

            {/* <SmallTitle>
                略~
            </SmallTitle> */}


            <ParagraphWrapper>
                ArrayList 底层实现还是数组 Array，数组只要一创建，长度就固定了，所以 ArrayList ，其实就是一个会自动扩容的动态数组。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先我们要知道，这个<Bold> ArrayList 在 jdk7 和 jdk8 中略有不同</Bold>：
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）<Blue>JDK1.7：ArrayList像饿汉式，直接创建一个初始容量为10的数组</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）<Blue>JDK1.8：ArrayList像懒汉式，一开始创建一个长度为0的数组，当添加第一个元素时再创建一个始容量为10的数组，后续容量不足的时候，就会自动扩容1.5倍，当然如果一次 add 很多元素，超过了 1.5倍。则以实际为准</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                首先，我们来看看它的空参构造器，如果是 <Blue>jdk 7</Blue> 的话，我们可以看到空参构造器，<Blue>一开始就是创建一个 容量为 10 的存对象数组</Blue>。而 <Blue>jdk 8</Blue> 的话，<Blue>一开始则是创建容量为 0 的空数组</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                其实这里类似之前讲过的 StringBuffer，也是一开始创建数组（长度 16）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来看看使用 <Blue>add 方法 添加元素的时候，发生了什么</Blue>。其实每次调用 add 方法的时候，并<Blue>不会直接添加</Blue>数据在后面，而是会<Blue>先验证一下容量</Blue>。<Blue>如果添加了元素，会超过容量，那么就会触发自动扩容</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img568]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>扩容之后呢，就会拷贝原数组到新的扩容后的数组，然后把要新增的数据加在新的数组后面</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img569]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>建议在开发中，使用 ArrayList 的带参构造器，然后给一个初始长度。</Red>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module