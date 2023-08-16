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

import img56 from '@/assets/images/img56.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ImagesGroup
                srcArr={[img56]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <RedFontWrapper>
                    在上图中的右侧表格，越往下的优先级越低。
                </RedFontWrapper>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedFontWrapper>
                    然后表格的第一列，是代表在同一行中几个运算符的优先级，是从左往右，还是从右往左降级。
                </RedFontWrapper>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module