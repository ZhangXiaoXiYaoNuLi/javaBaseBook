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

import { Table } from 'antd'

import img579 from '@/assets/images/img579.png'

const Module = (props) => {

    const [sortOrder, setSortOrder] = useState(null)

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                了解 HashSet 存储数据的过程（也就是 add 方法执行过程），才能更好地理解什么是“无序性、不可重复性”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这里我们只是 以 HashSet 为例，TreeSet 的添加数据过程还不一样。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们来看“不可重复性”，可以想像一下如果要自己来实现这样一个容器，会怎么做？
            </ParagraphWrapper>
            <ParagraphWrapper>
                想像一下，其实就是每次添加，都拿新元素，和容器已有的所有元素都比较一下，但是当元素很多的时候，每次添加。都会有很多次比较，显然这样不是很靠谱。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Blue>向HashSet中添加元素的过程：</Blue>
            </ParagraphWrapper>
            <Bold>
                <ParagraphWrapper>
                    <Dot></Dot><span>{`当向 HashSet 集合中存入一个元素时，HashSet 会调用该对象的 hashCode() 方法来得到该对象的 hashCode 值，然后根据 hashCode 值，通过某种散列函数决定该对象在 HashSet 底层数组中的存储位置。（这个散列函数会与底层数组的长度相计算得到在数组中的下标，并且这种散列函数计算还尽可能保证能均匀存储元素，越是散列分布，该散列函数设计的越好）`}</span>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <Dot></Dot><span>{`如果两个元素的hashCode()值相等，会再继续调用equals方法，如果equals方法结果为true，添加失败；如果为false，那么会保存该元素，但是该数组的位置已经有元素了，那么会通过链表的方式继续链接。`}</span>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <Dot></Dot><span>{`如果两个元素的 equals() 方法返回 true，但它们的 hashCode() 返回值不相等，hashSet 将会把它们存储在不同的位置，但依然可以添加成功。`}</span>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <Dot></Dot>所以说，只有这种情况且这种顺序：“先两个元素 hascCode 计算值相同，后 equals 比对结果为 true”，才会添加失败。
                </ParagraphWrapper>
            </Bold>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                下面是 HashSet 的存储结构示意图：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img579]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Bold>HashSet 的底层，其实就是 数组+链表 的结构。</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以我们可以回想一下之前那个问题，如果要添加第1000个元素，是否要和前面的999个元素比对？
            </ParagraphWrapper>
            <ParagraphWrapper>
                按照HashSet添加元素的过程，应该是先计算出这第1000个元素的 hash 值，然后根据 hash 值得到一个位置，然后去这个位置看看有多少元素。
            </ParagraphWrapper>
            <ParagraphWrapper>
                如果在这个位置上，还没有元素，那直接放进去就行，如果有，那就进行 equals 比对（显然，此时只用和一小部分的元素比对就行）。<Blue>效率远大于我们一开始设想的挨个比对的做法</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                通过上面对元素添加过程的了解，现在再来想想“无序性”和“不可重复性”，就很好理解了。首先从位置上，就是从 hash 计算得到的位置，而不是挨个从头放置到尾的，这就是“无序性”。另外，元素是通过 hash 计算，以及 equals 比对后添加的，也就是“不可重复性”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后这里其实还涉及到一个“扩容”的情况，但是目前先不讲，等到讲 HashMap 的时候再说。
            </ParagraphWrapper>

            <ParagraphWrapper>
                其实 new 了一个 HashSet 的时候，底层是 new 了一个 HashMap。所以如果面试的时候有人问 HashSet 底层实现原理是什么呢，那可以回答 HashSet 的底层实现原理是 HashMap，我给你讲讲 HashMap 的底层原理吧。
            </ParagraphWrapper>

            <ParagraphWrapper>
                由于 set 接口中没有定义方法，所以这里也就不用再讲 set 中的方法了，都是 collection 中的那些方法。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module