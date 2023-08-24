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


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Red> 方法的注意点：</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>方法被调用一次，就会执行一次
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>没有具体返回值的情况，返回值类型用关键字void表示</Blue>，那么方法体中<Blue>可以不必使用return语句。如果使用，仅用来结束方法</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>定义方法时，方法的结果应该返回给调用者，交由调用者处理。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot color="red"></Dot>方法中只能调用方法或属性，<Red>不可以在方法内部定义方法</Red>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module