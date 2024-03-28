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

import img592 from '@/assets/images/img592.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                下面是 Map 的存储结构示意图：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img592]}
            ></ImagesGroup>

            <ParagraphWrapper>
                类似于函数， x 值也就是 key 值，是不可重复的，而 y 值即 value 是可以重复的。可以理解为 key 那边，是用 HashSet 来进行存储的，而 value 那一列，则是用 collection 来存储的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                另外与函数的x轴不同的是，这个key不仅是不重复的，且是无序的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                而实际上，我们在添加 Map 的数据的时候，调用 put 方法的时候，实际上存入的其实是一个一个带有 key 属性 和 value 属性的 小对象（entry）。将这个小对象，存入 HashSet 中。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>说到使用 set 存储全部的 key 值，那么使用那种 set ，也就决定了是哪种 map。比如用 HashSet 存储 key 值，那么这个就是 HashMap。如果使用 LinkedHashSet 存储 key 值，那么就是 LinkedHashMap。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                可以想像一下，因为 map 中的 key 可以是任意对象，完全可以是自己自定义的类实例。所以<Blue>这个时候 key 所在的类，就要我们重写 hashCode 和 equals 属性，当然这是对于 HashSet 存储 key 值的情况，而对于 TreeSet 存储 key 的时候，就是涉及“自然排序”和“定制排序”那套了（就是 Comparable 和 compareTo 的那套）</Blue>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module