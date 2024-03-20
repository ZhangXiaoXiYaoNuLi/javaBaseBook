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

import img570 from '@/assets/images/img570.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Blue>LinkedList 底层是使用链表结构的</Blue>（其实 java 中最基础的数据结构，和 js 是一样的，一种就是数组，一种就是 key-value 映射的对象，至于后面的什么 树结构 ， 网结构，都是这俩基础结构变化来的）。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img570]}
            ></ImagesGroup>

            <ParagraphWrapper>
                链表结构就如上图所示，按照 js 的视角，可以理解为是对象里面存着一个个小对象，然后小对象中有三个属性，指定前一、后一的指针，以及自身的值。因为这种结构，所以让“对象”也变得有序起来了，从而实现了list接口。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>看到上面的链表结构，我们就可以想像一下，ArrayList 和 LinkedList 都是如何找到其中的某个元素的，以及效率区别等：</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold><Blue>ArrayList</Blue> 在找元素的时候，可以直接按照 下表索引值，直接来到元素所在的位置。所以<Blue>查找效率高</Blue>。</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Bold>但是，<Blue>ArrayList</Blue> 在插入和删除的时候，都需要“将后面的元素后移或前移”一遍，所以<Blue>插入删除效率低</Blue>。</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Bold>而链表结构的 <Blue>LinkedList</Blue>，在查找元素的时候，只能根据关系链，一个一个地往下找，直到找到为止，所以<Blue>查找效率慢</Blue>。</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Bold>但是，<Blue>LinkedList</Blue> 在插入和删除的时候，只需要将“链条”中间的某个位置“断开”，然后新增或删除后，重新连上就行，所以<Blue>插入删除效率高</Blue>。</Bold>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module