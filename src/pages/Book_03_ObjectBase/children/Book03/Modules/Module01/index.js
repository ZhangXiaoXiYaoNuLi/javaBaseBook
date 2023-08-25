import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import ParagraphWrapper from '@/components/ParagraphWrapper'
import ComSpace from '@/components/ComSpace'
import ImagesGroup from '@/components/ImagesGroup'
// 代码展示组件，输入值为转化后的字符串数组
import CodeShowWrapper from '@/components/CodeShowWrapper'
// 卡片组件
import CardWrapper from '@/components/CardWrapper'
// 小标题
import SmallTitle from '@/components/SmallTitle'
// 红字wrapper
// import RedFontWrapper from '@/components/RedFontWrapper'
import Red from '@/components/RedFontWrapper'
import Blue from '@/components/BlueFontWrapper'
import ComLine from '@/components/ComLine'

import Dot from '@/components/Dot'

import img141 from '@/assets/images/img141.png'
import img142 from '@/assets/images/img142.png'
import img143 from '@/assets/images/img143.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>为什么需要封装？封装的作用和含义？
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、我要用洗衣机，只需要按一下开关和洗涤模式就可以了。有必要了解洗衣机内部的结构吗？有必要碰电动机吗？
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、我要开车，…
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>我们程序设计追求“高内聚，低耦合”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、高内聚 ：类的内部数据操作细节自己完成，不允许外部干涉；
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、低耦合 ：仅对外暴露少量的方法用于使用。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>隐藏对象内部的复杂性，只对外公开简单的接口。便于外界调用，从而提高系统的可扩展性、可维护性。通俗的说，<Red>把该隐藏的隐藏起来，该暴露的暴露出来。这就是封装性的设计思想</Red>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img141]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>{`Java中通过将数据声明为私有的(private)，再提供公共的（public）方法:getXxx()和setXxx()实现对该属性的操作。`}</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img142]}
            ></ImagesGroup>

            <ParagraphWrapper>
                下面是一个代码例子，通过对 动物的腿 legs 的设置，表现了封装性：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img143]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码示例，只是封装性的“一部分”的表现，并不是封装性的全部。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module