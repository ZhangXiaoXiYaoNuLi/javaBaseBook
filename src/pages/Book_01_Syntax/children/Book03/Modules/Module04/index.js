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

import img51 from '@/assets/images/img51.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                逻辑运算符一览：
            </SmallTitle>
            <ImagesGroup
                srcArr={[img51]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <RedFontWrapper>
                    逻辑运算符，在 java 中，只适用于布尔类型之间。
                </RedFontWrapper>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedFontWrapper>
                    “逻辑与”和“短路与”得出的结果是一样的，区别在于是否在第一个判断元为 false 的情况下，还判断（执行）第二个判断元。逻辑与 “&”,左边为 false，也会判断（执行）右边，而短路与“&&”，在左边为false时，不再进行到右边。
                </RedFontWrapper>
            </ParagraphWrapper>
            <ParagraphWrapper>
                "逻辑或"与“逻辑与”的关系，类似于上面说的“逻辑与”和“短路与”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedFontWrapper>
                    短路与、短路或，与 js 的 && 和 || 是类似的。
                </RedFontWrapper>
            </ParagraphWrapper>
            <ParagraphWrapper>
                然后，“或”和“与”的判断其实很简单，“或”就是有一个true就为true，“与”就是有一个false就是false。
            </ParagraphWrapper>
            <ParagraphWrapper>
                "异或"，就是两边的判断元一个为 true ，一个为 false 的时候，才为 true。如果两边同为 true 或 同为 false ，那么结果是 false 。异或异或，追求的就是“异”。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module