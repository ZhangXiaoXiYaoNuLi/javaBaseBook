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

import img88 from '@/assets/images/img88.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                如下图所示：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img88]}
            ></ImagesGroup>
            <ParagraphWrapper>
                其实很好理解，一维的数组上存着内存地址值，二维的数组上因为默认初始化值，所以是 0，因为是 int 类型的二维数组。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module