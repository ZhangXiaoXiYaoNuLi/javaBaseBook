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

import img57 from '@/assets/images/img57.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                流程控制语句是用来控制程序中各语句执行顺序的语句，可以把语句组合成能完成一定功能的小逻辑模块。
            </ParagraphWrapper>
            <ParagraphWrapper>
                其流程控制方式采用结构化程序设计中规定的三种基本流程结构，即：
                <ParagraphWrapper>
                    （1）顺序结构：程序从上到下逐行地执行，中间没有任何判断和跳转。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    （2）<Red>分支结构</Red>：根据条件，选择性地执行某段代码。有<Red>if…else</Red>和<Red>switch-case</Red>两种分支语句。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    （3）<Red>循环结构</Red>：根据循环条件，重复性的执行某段代码。有<Red>while</Red>、<Red>do…while</Red>、<Red>for</Red>三种循环语句。注：<Red>JDK1.5提供了foreach循环</Red>，方便的遍历集合、数组元素。
                </ParagraphWrapper>
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>顺序结构没有什么特殊的，这里提一嘴，后面不赘述：</ParagraphWrapper>
            <ImagesGroup
                srcArr={[img57]}
            ></ImagesGroup>
            <ParagraphWrapper>
                上面错误部分的代码，是因为先使用再定义，这一点和 js 是不同的，java 并不会自动把参数定义提前到代码块顶部，所以必须先定义，再使用。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module