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
import Blue from '@/components/BlueFontWrapper'

import Dot from '@/components/Dot'

import img119 from '@/assets/images/img119.png'
import img120 from '@/assets/images/img120.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                其实就是工具类的封装，并不难，然后在要使用的时候，可以方便地用匿名内部类调用工具类的方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面我自己写一个带有冒泡排序的工具类：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img119]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Blue>另外的，在这里可以发现，我们在工具类方法中，没有对参数源数组进行浅拷贝之类的，是直接拿来排序，又直接 return 出去的。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                这里说明了一些值传递的情况，具体后面会教，现在可以只记住这个现象。
            </ParagraphWrapper>
            <ParagraphWrapper>
                然后我们在 main 方法中试用一下：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img120]}
            ></ImagesGroup>
            <ParagraphWrapper>
                排序成功！
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module