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

import img577 from '@/assets/images/img577.png'
import img578 from '@/assets/images/img578.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Bold>set 接口的无序不可重复，该怎么理解？</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>为什么 LinkedHashSet 可以按照添加元素的顺序进行遍历，但还是数据无序的呢？</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们来简单体会一下它的简单使用：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img577]}
            ></ImagesGroup>

            <ParagraphWrapper>
                如上图，首先新建一个 HashSet 实例 a，然后往里面添加各种类型的元素。
            </ParagraphWrapper>

            <ParagraphWrapper>
                接着，我们来关注一下这个“无序性”。所以我们写个遍历器去尝试遍历它：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img578]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>可以看到，迭代器遍历输出的顺序，和添加的顺序并不一样。当然，我们可以尝试一下多跑几次，看看顺序是不是随机的？答案是并不会，始终保持第一次的输出顺序。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>所以说，“无序性”不等于“随机性”！</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>那么，该怎么理解“无序性”呢？</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                有不有序，其实并不看输出的顺序是否和添加的顺序相同。像 list 那样，类似一个弹匣，一个一个元素按序紧挨在一起的“存储结构”，才叫有序，而“输出顺序和添加顺序相同”，只是“有序”的一种“现象”而不是本质。
            </ParagraphWrapper>

            <ParagraphWrapper>
                而无序呢，我们就来看 HashSet，其实 HashSet 的底层也是数组 Array 实现的。然后在 jdk7 的时候，new 一个 HashSet，实际就是创建了一个长度 16 的 数组。
            </ParagraphWrapper>
            <ParagraphWrapper>
                但是，当我们添加第一个元素的时候，并不会添加在这个数组的第1位，也许是第10位，然后第二个元素又添加在第 1 位。<Blue>添加的时候是“随机无序”（严格来说也不是随机的，而是哈希规则算出来的）的，所谓的“无序性”是表现在这里</Blue>（虽然添加完之后，数组中的元素顺序会固定下来）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>其实元素要放在数组中的哪个位置，是由一个 HashCode 方法的计算得出的，有默认的，我们也可以自己进行重写。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                到了这里，“<Blue>不可重复性</Blue>”就很好理解了。
            </ParagraphWrapper>
            <ParagraphWrapper>
                由于相同的元素的 HashCode 算法得到的结果一样，但是又不能把两个元素放在数组的同一个地方。故“不可重复性”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>而 set 集合判断两个元素是否“重复”的做法，是看两个元素的 HashCode 计算结果是否相同，且 equals 比较是否相同（不是使用 ==）。</Blue>
            </ParagraphWrapper>

            {/* 对于存放在Set容器中的对象，对应的类一定要重写equals()和hashCode(Object obj)方法，以实现对象相等规则。即：“相等的对象必须具有相等的散列码”。 */}
            <ParagraphWrapper>
                <Red>{"对于存放在Set容器中的对象，对应的类一定要重写equals()和hashCode(Object obj)方法，以实现对象相等规则。即：“相等的对象必须具有相等的散列码”。"}</Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module