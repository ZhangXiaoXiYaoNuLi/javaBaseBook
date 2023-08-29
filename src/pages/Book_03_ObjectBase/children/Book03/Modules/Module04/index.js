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
                <Blue>
                    截止到目前，我们讲到了很多位置都可以对类的属性赋值。现总结这几个位置，并指明赋值的先后顺序。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                赋值的位置：
            </ParagraphWrapper>
            <Red>
                <ParagraphWrapper>1、默认初始化</ParagraphWrapper>
                <ParagraphWrapper>2、显式初始化</ParagraphWrapper>
                <ParagraphWrapper>3、构造器中初始化</ParagraphWrapper>
                <ParagraphWrapper>4、通过“对象.属性“或“对象.方法”的方式赋值</ParagraphWrapper>
            </Red>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Red>
                赋值的先后顺序：1 - 2 - 3 - 4
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                接下来，我们来写个 demo 来看一下这些赋值，具体是在代码的哪一部分：
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module