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

import { COLOR_BLUE } from '@/utils/content.js'

import img535 from '@/assets/images/img535.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                定制排序
            </SmallTitle>
            
            <ParagraphWrapper>
                <Bold>java.util.Comparator</Bold>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color={COLOR_BLUE}></Dot><Blue>当元素的类型没有实现 java.lang.Comparable 接口而又不方便修改代码，或者实现了java.lang.Comparable接口的排序规则不适合当前的操作，那么可以考虑使用 Comparator 的对象来排序</Blue>，强行对多个对象进行整体排序的比较。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={COLOR_BLUE}></Dot>{`重写compare(Object o1,Object o2)方法`}，比较o1和o2的大小：<Blue>如果方法返回正整数，则表示o1大于o2；如果返回0，表示相等；返回负整数，表示o1小于o2。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>可以将 Comparator 传递给 sort 方法（如 Collections.sort 或 Arrays.sort），从而允许在排序顺序上实现精确控制。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>还可以使用 Comparator 来控制某些数据结构（如有序 set或有序映射）的顺序，或者为那些没有自然顺序的对象 collection 提供排序。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                上代码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img535]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码，其实就是在“自然排序”的基础上，又添加了一层排序逻辑，当然这不是必须的。其实可以完全脱离“自然排序”，独立地写另外一套排序规则。
            </ParagraphWrapper>

            <ParagraphWrapper>
                而且可以看到，这里的用法是，传给了 Array.sort 方法的第二个参数。这里我们 new 的 Comparator 其实是一个接口，匿名实现类的写法。然后比较的规则呢，可以看到重写方法体内，用的是之前我们写的“自然排序”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以这段代码，可以看成是之前的“排序增强”。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module