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

import img561 from '@/assets/images/img561.png'
import img562 from '@/assets/images/img562.png'
import img563 from '@/assets/images/img563.png'

const BlueDot = () => {
    return <Dot color="rgb(22, 119, 255)"></Dot>
}

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                从上面一章可以看到，<Blue>集合的最顶层父接口是 Collection</Blue> ，所以我们可以先来了解 <Blue>Collection 接口中，有什么接口方法</Blue>。这样我们就可以知道它的子类们，<Blue>也就是各种类型的集合的公共方法</Blue>有哪些。
            </ParagraphWrapper>

            <ParagraphWrapper>
                目前来说，我们先来了解 java 8.0 之前的抽象方法，因为后面也会涉及 8.0 版本的新 api 讲解。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>下面是各个常用的api：</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>添加：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`add(Object obj)`}</Bold>：添加单个元素，执行的返回值是布尔值，是否添加成功。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`addAll(Collection coll)`}</Bold>：添加一个集合，类似于 js 中的 concat，执行的返回值是布尔值，是否添加成功。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img561]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>获取有效元素的个数：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`int size()`}</Bold>：获取有效元素的个数，注意这里 size 是一个方法，后面带括号的，不像 js 的 length 是一个属性。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img562]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>清空集合：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`void clear()`}</Bold>：清空集合，这个方法不接受任何参数，也不返回任何值。。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>是否是空集合：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`boolean isEmpty()`}</Bold>：返回布尔值，代表是不是空集合。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>是否包含某个元素：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`boolean contains(Object obj)`}</Bold>：是通过元素的equals方法来判断是否是同一个对象，来判断是否包含某元素。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>{`boolean containsAll(Collection c)`}</Bold>：也是调用元素的equals方法来比较的。拿两个集合的元素挨个比较。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这里可以简单复习一下 equals 的比较判断。
            </ParagraphWrapper>
            <ParagraphWrapper>
                equals 是顶层类 Object 的方法，本身是使用 == 比较，基础类型比较值，对象类型比较地址。除非像 String 对象这样重写 equals 方法，比较的则是 String 的字符串值。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>删除：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`boolean remove(Object obj)`}</Bold>：通过元素的equals方法判断是否是要删除的那个元素。只会删除找到的第一个元素。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`boolean removeAll(Collection coll)`}</Bold>：取当前集合的差集。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>取两个集合的交集：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`boolean retainAll(Collection c)`}</Bold>：把交集的结果存在当前集合中，不影响c。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>集合是否相等：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`boolean equals(Object obj)`}</Bold>：是挨个 equals 比较，而不是直接比较俩集合的地址。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>转成对象数组：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`Object[] toArray()`}</Bold>：集合转数组。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>获取集合对象的哈希值：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`hashCode()`}</Bold>HashCode的存在主要是为了查找的快捷性，HashCode是用来在散列存储结构中确定对象的存储地址的（后半句说的用hashcode来代表对象就是在hash表中的位置）。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BlueDot></BlueDot><Blue>遍历：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`iterator()`}</Bold>：返回迭代器对象，用于集合遍历。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img563]}
            ></ImagesGroup>

        </div>
    </>)
}

export default Module