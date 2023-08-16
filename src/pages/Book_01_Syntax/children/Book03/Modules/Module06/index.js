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

import img55 from '@/assets/images/img55.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                这里的三元运算符，其实和 js 是一样的，所以不用过分纠结。    
            </ParagraphWrapper>   
            <ImagesGroup
                srcArr={[img55]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <RedFontWrapper>条件表达式的结果必须是布尔值，这个和 js 不一样</RedFontWrapper>，js 中的条件运算结果可以不是布尔值，因为 js 会自动把其它类型转为布尔值。但是 java 这里不行，条件结果必须是布尔类型。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module