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

import img590 from '@/assets/images/img590.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>TreeSet的自然排序要求元素所属的类实现Comparable接口，如果元素所属的类没有实现Comparable接口，或不希望按照升序(默认情况)的方式排列元素或<Blue>希望按照其它属性大小进行排序，则考虑使用定制排序。定制排序，通过 Comparator 接口来实现。需要重写compare(T o1,T o2)方法</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>利用int compare(T o1,T o2)方法，比较o1和o2的大小：如果方法返回正整数，则表示o1大于o2；如果返回0，表示相等；返回负整数，表示o1小于o2</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>要实现定制排序，需要将实现 Comparator 接口的实例作为形参传递给TreeSet的构造器。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>此时，<Red>仍然只能向TreeSet中添加类型相同的对象</Red>。否则发生ClassCastException异常。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>使用定制排序<Red>判断两个元素相等的标准是：通过Comparator比较两个元素返回了0</Red>。(当然，基于 set 不能添加重复元素的原因，相同元素后一个不会添加成功)
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                代码示例：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img590]}
            ></ImagesGroup>

            <ParagraphWrapper>
                从代码示例中可以看到，<Blue>其实就是 new 一个 comparator 实例，且重写实例中的 compare 方法，然后，将该实例作为参数，传入 new TreeSet 的构造器参数中。最终实现排序</Blue>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module