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

import img591 from '@/assets/images/img591.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                以下是 Map 的主要继承树：
            </ParagraphWrapper>
            <ParagraphWrapper>
                其中虚线是实现类（以及其下面的类），实现是接口继承，所以图中有5个实现类（除了SortedMap都是实现类）
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img591]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot></Dot>Map与Collection并列存在。用于保存具有映射关系的数据:key-value。（可以类比 js 理解为 collection 就是 数组，而 map 就是 对象）
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>Map 中的 <Blue>key 和 value 都可以是任何引用类型的数据</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue><Red>Map 中的 key 用 Set来存放，不允许重复</Red>，即同一个 Map 对象所对应的类，须重写hashCode()和equals()方法</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>常用String类作为Map的“键”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>key 和 value 之间存在单向一对一关系，即通过指定的 key 总能找到唯一的、确定的 value。（类似直角坐标系中的函数， y 值可以相同，但 x 值是唯一的）
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>Map接口的常用实现类：<Blue>HashMap（无序）、TreeMap（有序）、LinkedHashMap（遍历快）</Blue> 和 Properties。其中，<Red>HashMap是 Map 接口使用频率最高的实现类</Red>。（<Blue>类似于 ArrayList 于 List 的地位</Blue>）
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>关于Map接口三个常用实现类。</Bold>
            </ParagraphWrapper>
            
            <ParagraphWrapper>
                <Bold>1、HashMap 可以联想到 ArrayList，主要实现类。没有什么额外的需求，通常都用它。（<Blue>HashMap的底层实现原理，是极其<Red>高频</Red>的面试题</Blue>）</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>2、TreeMap 可以联想到 TreeSet ，有添加数据排序的特性（按照键值对中的“键”来排的），所以有序。</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>3、而 LinkedHashMap 则可以类比 LinkedHashSet ，遍历有序（也是类似的记录前一和后一的位置，利于频繁遍历）。</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、顺带提一嘴 Properties 其实就是 key 和 value 都是字符串的 Map。类似于 json，一版用于处理配置文件。
            </ParagraphWrapper>


        </div>
    </>)
}

export default Module