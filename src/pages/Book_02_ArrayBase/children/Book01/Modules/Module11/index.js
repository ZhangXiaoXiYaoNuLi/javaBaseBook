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

import img89 from '@/assets/images/img89.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ImagesGroup
                srcArr={[img89]}
            ></ImagesGroup>
            <ParagraphWrapper>
                如图所示，比较简单。
            </ParagraphWrapper>
            <ParagraphWrapper>
                首先在一维中，和之前讲的是一样的，只是一维数组中存的，是指向第二维的数组的内存地址。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module