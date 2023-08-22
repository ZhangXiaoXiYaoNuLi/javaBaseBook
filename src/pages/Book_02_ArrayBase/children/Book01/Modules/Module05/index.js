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

import img81 from '@/assets/images/img81.png'

import img82 from '@/assets/images/img82.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                数组元素的初始化值：
            </ParagraphWrapper>
            <ImagesGroup srcArr={[img81]}></ImagesGroup>

            <ImagesGroup srcArr={[img82]}></ImagesGroup>
            <ParagraphWrapper>
                整数类型的初始化值，都是 0 。
            </ParagraphWrapper>

            <ParagraphWrapper>
                要注意的是 <Red>char 类型的初始化值 0 ，这个 0 即不是整数的 0, 也不是字符类型的 0，而是阿斯克码的 0,代表的是 '/0',也就是字符串的结束符号 。（像阿斯克码的 65，代表这大写的 A）</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module