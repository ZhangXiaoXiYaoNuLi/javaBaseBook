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

import img78 from '@/assets/images/img78.png'

import img79 from '@/assets/images/img79.png'

import img80 from '@/assets/images/img80.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Red>
                    可以直接用“ .length ”获取数组的长度：
                </Red>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img78]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Red>
                    使用 for 循环遍历数组：
                </Red>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img79]}
            ></ImagesGroup>

            <ParagraphWrapper>
                顺便插入介绍一个 String 的类方法 charAt：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img80]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Red>{`.charAt(n) 获取一个字符串中的第 n 个字符。`}</Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module