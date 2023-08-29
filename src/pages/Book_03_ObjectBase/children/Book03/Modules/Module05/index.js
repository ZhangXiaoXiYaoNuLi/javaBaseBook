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


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Blue>JavaBean是一种Java语言写成的可重用组件。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>所谓javaBean，是指符合如下标准的Java类：</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>1、类是公共的，即 public 修饰的</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>2、有一个无参的公共的构造器</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>3、有属性，且有对应的get、set方法</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                用户可以使用JavaBean将功能、处理、值、数据库访问和其他任何可以用Java代码创造的对象进行打包，并且其他的开发者可以通过内部的JSP页面、Servlet、其他JavaBean、applet程序或者应用来使用这些对象。用户可以认为JavaBean提供了一种随时随地的复制和粘贴的功能，而不用关心任何改变。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module