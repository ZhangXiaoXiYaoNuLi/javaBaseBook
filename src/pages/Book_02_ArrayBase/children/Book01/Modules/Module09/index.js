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

import img87 from '@/assets/images/img87.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                还是比较简单好理解的，不赘述了。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img87]}
            ></ImagesGroup>
            <ParagraphWrapper>
                像你想访问一个二维数组的元素，它位于一维的第二个，二维的第三个，那么就<Red>{`arr[2][3]`}</Red>来访问。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module