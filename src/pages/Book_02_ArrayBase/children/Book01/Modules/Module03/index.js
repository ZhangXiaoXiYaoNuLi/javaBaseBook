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

import img77 from '@/assets/images/img77.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Red>通过数组角标的方式调用数组元素</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img77]}
            ></ImagesGroup>

            <ParagraphWrapper>
                基本上和js的数组类似，不同的地方是，java的数组中，<Red>元素类型必须一致，且一旦数组定义，长度length就不会变了</Red>。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module