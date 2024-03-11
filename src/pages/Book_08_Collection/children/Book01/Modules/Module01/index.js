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

import img558 from '@/assets/images/img558.png'
import img559 from '@/assets/images/img559.png'
import img560 from '@/assets/images/img560.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                集合框架概述
            </SmallTitle>
            <ImagesGroup
                srcArr={[img558]}
            ></ImagesGroup>

            <ParagraphWrapper>
                Java 集合可分为 <Blue>Collection</Blue> 和 <Blue>Map</Blue> 两种体系
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Red>Collection</Red>接口：单列数据，定义了存取一组对象的方法的集合（这个接口下没有直接的实现类，因为还可以进行细分）（<Blue>类似 js 中的数组</Blue>）
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）<Blue>List</Blue>：元素有序、可重复的集合，类似 js 中的数组。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）<Blue>Set</Blue>：元素无序、不可重复的集合。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Red>Map</Red>接口：双列数据，保存具有映射关系“key-value对”的集合（<Blue>value 可以重复，而 key 不可以重复</Blue>）,（类似 js 中的对象数据结构）（这个接口下有直接的实现类）。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>一般在和后端沟通中，说要他返回 map 就是返回前端的对象，说要返回 list 其实就是要他返回前端的数组形式。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                学完这一章，最基本要达到的水平，是要知道哪种数据，要用哪种集合来存储是比较合适的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    此时我们讲到的存储，还是在内存层面的存储，不涉及到硬盘层面的存储。硬盘存储又叫做持久化存储。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                之前，我们学习到的 Array 数组，也是有序可重复的，有序其实也意味着中间不能有空位。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                Collection 接口继承树
            </SmallTitle>

            <ImagesGroup
                srcArr={[img559]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>上图中，实线是继承关系，虚线是实现关系</Blue>。
            </ParagraphWrapper>

            <SmallTitle>
                map 接口继承树
            </SmallTitle>

            <ImagesGroup
                srcArr={[img560]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>和上面一样，实线是继承关系，虚线是实现关系</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>其中面试会极其高频地问道，HashMap 的底层实现原理</Blue>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module