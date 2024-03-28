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

import img593 from '@/assets/images/img593.png'
import img594 from '@/assets/images/img594.png'
import img595 from '@/assets/images/img595.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                这里就不直接去看源码了，先来讲一下大致流程，然后再去源码里进行验证
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>首先，我们以 JDK 7 为例</Bold>：
            </ParagraphWrapper>
            <ParagraphWrapper>
                此时我们以空参构造器的为例，去创建一个 HashMap 对象。此时底层（Jdk7）创建了长度是 16 的一个一维数组。然后在往里面 put 键值对的时候，就是往这个数组中添加 拥有 key 属性和 value 属性的“小对象（entry）”。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img595]}
            ></ImagesGroup>
            <ParagraphWrapper>
                put 键值对的时候，至于是放在这个长度 16 的数组的哪个位置，就要先计算“小对象”中 key 属性的 hash 值。然后根据 hash 值的到该存放的位置。
            </ParagraphWrapper>
            <ParagraphWrapper>
                在得到存放位置信息之后，就分情况，如果该位置没有存放元素，那么就把 entry 直接存放在这里。而如果已经有存放元素了，此位置存在一个或多个元素（链表形式存储着多个），那么就需要拿我们想添加的 entry 中 的 key 值对象，和该位置中已有的元素进行比对（就是 hashCode 和 equals 比对的那一套，如果是 TreeMap 的，则是 compare 的那套）。如果比对的都不相同，那么添加进去这个位置的链表。<Blue>如果比较有相同的，那么就用新的 那个 key-value 的 value ，替换已有 的那个 key 值对应的 value （就像是 js 对象中的某个对象属性的重新赋值）。</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>所以 put 方法其实是具有 “修改对象属性” 的功能的。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                在不断添加属性元素的情况下，就会面临“扩容”的问题，这里我们只关注下扩容的比例，是扩容为原来容量的 <Blue>2 倍</Blue>，并将原有的数据复制过来。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img593]}
            ></ImagesGroup>


            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>Jdk 8 的话和 7 有点区别</Bold>：
            </ParagraphWrapper>
            <ParagraphWrapper>
                有几个小点
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、new hashMap 的时候，底层没有创建一个长度为 16 的 entry（当然在 jdk8 中不叫 entry 了，而叫 node） 数组，首次调用 put 方法的时候，才进行 底层数组的创建。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、在 jdk 7 中，底层数据结构，只有 数组+链表。而在 jdk 8 中，底层结构是 数组+链表+红黑树 。当数组的某一个索引位置上的元素，以链表形式存储的元素个数，当要超过 8 个的时候。且当前数组长度还拆过 64 了。此时此索引位置上的所有数据，改为使用红黑树存储（<Blue>为了遍历快，方便查找</Blue>）。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img594]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module