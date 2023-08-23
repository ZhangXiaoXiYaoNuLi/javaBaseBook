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

import img100 from '@/assets/images/img100.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                在日常开发中，主要会遇到两种异常：<Red>数组角标越界异常</Red>、<Red>空指针异常</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                空指针异常会经常遇到，可以这么说，以后在开发中，遇到的其它异常的次数加起来，都没有遇到这个空指针异常的次数多。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img100]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Red>数组角标越界异常，就是访问到了数组中不存在的角标。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>空指针异常，则是定义了一个数组变量，却没有指向数组实体，但是却访问了实体中的元素。</Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module