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

import img65 from '@/assets/images/img65.png'
import img66 from '@/assets/images/img66.png'
import img67 from '@/assets/images/img67.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                循环结构：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img65]}
            ></ImagesGroup>
            <ParagraphWrapper>
                关于 for 循环：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img66, img67]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module