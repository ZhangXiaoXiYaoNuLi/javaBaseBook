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
import Red from '@/components/RedFontWrapper'

import img58 from '@/assets/images/img58.png'
import img59 from '@/assets/images/img59.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                if-else 的三种格式：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img58, img59]}
            ></ImagesGroup>
            <ParagraphWrapper>
                三种是：单独一个 if 、 if 和 else 、 if 和 else-if
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>1、条件表达式必须是布尔表达式（关系表达式或逻辑表达式）、布尔变量。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、语句块只有一条执行语句时，一对大括号可以省略，但建议保留。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、if-else语句结构，根据需要可以嵌套使用。
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、当if-else结构是“多选一”时，最后的else是可选的，根据需要可以省略（但最好不要，省的多记这个知识点）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                5、当多个条件是“互斥”关系时，条件判断语句及执行语句间顺序无所谓，当多个条件是“包含”关系时，“小上大下 / 子上父下”。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module