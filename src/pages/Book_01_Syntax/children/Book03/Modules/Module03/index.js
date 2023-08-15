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
import RedFontWrapper from '@/components/RedFontWrapper'

import img50 from '@/assets/images/img50.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>比较运算符一览：</SmallTitle>
            <ImagesGroup
                srcArr={[img50]}
            ></ImagesGroup>
            <ParagraphWrapper>比较运算符的结果都是boolean型，也就是要么是true，要么是false。</ParagraphWrapper>
            <ParagraphWrapper>
                <RedFontWrapper>比较运算符“==”不能误写成“=” 。</RedFontWrapper>
            </ParagraphWrapper>
            <ParagraphWrapper>
                这里 instanceof 先略过，后面讲面向对象的时候再细讲。是用来比较原型链的。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module