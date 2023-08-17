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

import img69 from '@/assets/images/img69.png'

import img70 from '@/assets/images/img70.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                关于 do while 循环：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img69]}
            ></ImagesGroup>
            <ParagraphWrapper>
                do while 最大的特点就是：<Red>至少会执行一次（第一次执行无视条件的嘛）</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                顺便提一嘴循环嵌套：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img70]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module