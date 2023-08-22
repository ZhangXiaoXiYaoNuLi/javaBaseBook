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

import img85 from '@/assets/images/img85.png'
import img86 from '@/assets/images/img86.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                Java 语言里提供了支持多维数组的语法。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>如果说可以把一维数组当成几何中的线性图形，那么二维数组就相当于是一个表格，像Excel中的表格一样。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                对于二维数组的理解，<Red>我们可以看成是一维数组array1又作为另一个一维数组array2的元素而存在</Red>。其实，<Red>从数组底层的运行机制来看，其实没有多维数组</Red>
            </ParagraphWrapper>
            
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                下面来看看二维数组的初始化。
            </ParagraphWrapper>
            <ParagraphWrapper>
                动态初始化：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img85]}
            ></ImagesGroup>
            <ParagraphWrapper>
                静态初始化：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img86]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module