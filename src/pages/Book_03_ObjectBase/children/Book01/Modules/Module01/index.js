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

import img101 from '@/assets/images/img101.png'
import img102 from '@/assets/images/img102.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                {`面向过程(POP) 与 面向对象(OOP)`}
            </SmallTitle>
            <ParagraphWrapper>
                1、二者都是一种思想，面向对象是相对于面向过程而言的。面向过程，<Red>强调的
                是功能行为，以函数为最小单位，考虑怎么做</Red>。面向对象，将功能封装进对
                象，<Red>强调具备了功能的对象，以类/对象为最小单位，考虑谁来做</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、面向对象更加强调运用人类在日常的思维逻辑中采用的思想方法与原则，如抽象、分类、继承、聚合、多态等。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、面向对象的三大特征：<Red>封装</Red> （Encapsulation）、<Red>继承</Red> （Inheritance）、<Red>多态</Red> （Polymorphism）。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                下面用一个例子举例：
            </ParagraphWrapper>
            <ParagraphWrapper>
                在做同一件事，比如“把大象装进冰箱”这件事，面向过程和面向对象是怎么做到的？
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img101]}
                width={140}
            ></ImagesGroup>
            <ImagesGroup
                srcArr={[img102]}
            ></ImagesGroup>

            <SmallTitle>
                面向对象概述：
            </SmallTitle>

            <ParagraphWrapper>
                程序员从面向过程的执行者转化成了面向对象的指挥者。
            </ParagraphWrapper>
            <ParagraphWrapper>
                面向对象分析方法分析问题的思路和步骤：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、根据问题需要，选择问题所针对的现实世界中的实体。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、从实体中寻找解决问题相关的属性和功能，这些属性和功能就形成了概念世界中的类。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、把抽象的实体用计算机语言进行描述，形成计算机世界中类的定义。即借助某种程序语言，把类构造成计算机能够识别和处理的数据结构。
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、将类实例化成计算机世界中的对象。对象是计算机世界中解决问题的最终工具。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module