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

import img580 from '@/assets/images/img580.png'
import img581 from '@/assets/images/img581.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Bold></Bold>LinkedHashSet简介：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>LinkedHashSet 是 HashSet 的子类。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>LinkedHashSet 根据元素的 hashCode 值来决定元素的存储位置，但它同时使用双向链表维护元素的次序，这使得元素看起来是以<Red>插入顺序保存</Red>的（<Red>本质还是无序且不重复的</Red>）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Red>LinkedHashSet插入性能略低于 HashSet</Red>，但在迭代访问 Set 里的全部元素时有很好的性能（<Blue>特性是遍历查找快，插入删除慢</Blue>）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>LinkedHashSet 不允许集合元素重复。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img580]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的是 LinkedHashSet 的底层结构，其实可以理解为在 HashSet 的数据结构上，多了一层链表，用于记录位置信息，也就是 next （下一个）和 prev （上一个），就是第二个链着第一个第三个，而第三个链着第二个和第四个，以此类推。
            </ParagraphWrapper>
            <ParagraphWrapper>
                于是使遍历起来可以按照顺序得到先后添加的元素。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img581]}
            ></ImagesGroup>

            <ParagraphWrapper>
                从上面的 demo 中可以看到，遍历保持原有顺序，另外要注意的是<Blue>如果不是用 Set 类型接收实例（多态）的话，是没有 add 方法的，因为LinkedHashSet 接口中没有方法</Blue>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module