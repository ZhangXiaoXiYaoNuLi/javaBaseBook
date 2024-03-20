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

import img571 from '@/assets/images/img571.png'
import img572 from '@/assets/images/img572.png'
import img573 from '@/assets/images/img573.png'
import img574 from '@/assets/images/img574.png'
import img575 from '@/assets/images/img575.png'
import img576 from '@/assets/images/img576.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                    List subList(int fromIndex, int toIndex):返回从fromIndex到toIndex
                    位置的子集合
            */}

            <ParagraphWrapper>
                List除了从Collection集合继承的方法外，List 集合里添加了一些根据索引来操作集合元素的方法。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>{`void add(int index, Object ele)`}</Bold>：在index位置插入ele元素。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img571]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>{`boolean addAll(int index, Collection eles)`}</Bold>：从index位置开始将eles中的所有元素添加进来。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img572]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>{`Object get(int index)`}</Bold>：获取指定index位置的元素。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img573]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>{`int indexOf(Object obj)`}</Bold>：返回obj在集合中首次出现的位置。（这个应该类似于 js 的 indexOf 方法，通常还用来判空）
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img574]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，和 js 的 indexOf 方法一样，在没有找到的情况下 返回 -1。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>{`int lastIndexOf(Object obj)`}</Bold>：返回obj在当前集合中末次出现的位置。（类似 indexOf 的，如果找不到元素的话，会返回 -1 ）
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>{`Object remove(int index)`}</Bold>：移除指定index位置的元素，并返回此元素。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>{`Object set(int index, Object ele)`}</Bold>：设置指定index位置的元素为ele。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img575]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>{`List subList(int fromIndex, int toIndex)`}</Bold>：返回从fromIndex到toIndex。（类似js的splice 方法，包头不包尾）
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img576]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module