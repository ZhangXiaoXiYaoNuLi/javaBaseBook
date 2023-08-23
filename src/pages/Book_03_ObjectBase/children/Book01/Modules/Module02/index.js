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


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                面向对象的思想概述：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、类（Class）和对象（Object）是面向对象的核心概念。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Red>类是对一类事物的描述，是抽象的、概念上的定义</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、<Red>对象是实际存在的该类事物的每个个体，所以又称为“实例”</Red>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Red>万事万物皆对象</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                面向对象的重点就是类的设计，而类的设计，就在于类的成员的设计，成员包括属性和方法。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module