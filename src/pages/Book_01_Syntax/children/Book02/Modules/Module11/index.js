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

import img24 from '@/assets/images/img24.png'

import img25 from '@/assets/images/img25.png'

// 两个关于String的练习题
const Module11 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <ParagraphWrapper>
            一些示例：
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img24]}
        ></ImagesGroup>
        <ParagraphWrapper>
            可以看到这里的结果是：107hello
        </ParagraphWrapper>
        <ParagraphWrapper>
            因为这里先开始是 char 类型和 int 类型运算，char 类型的 a 转为 int 就是数值 97，然后加上 10，得到的结果 107 再和字符串“hello”相拼接。
        </ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>
                这里有两个字母的 int 类型转换值，最好是记一下，小写的 a 是 97,大写的 A 是 65 。
            </RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            下面尝试下调换相加顺序：
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img25]}
        ></ImagesGroup>
    </div>
}

export default Module11