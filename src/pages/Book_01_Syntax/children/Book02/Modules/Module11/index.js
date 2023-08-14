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

import img26 from '@/assets/images/img26.png'

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

        <ParagraphWrapper>
            接着再看下一个实例：
        </ParagraphWrapper>
        <ParagraphWrapper>如果想在控制台输出两个 * 号，中间夹一个 tab 间距,该怎么输出</ParagraphWrapper>
        <ImagesGroup
            srcArr={[img26]}
        ></ImagesGroup>
        <ParagraphWrapper>
            1、可以看出，转义符号可以作为一个 char 类型字符，而字符串是由多个 char 连接而成的，所以字符串当然也可以是单个“转义符”，比如“\t”了。
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、可以看到第二种，第四种写法输入是错的，是因为先相加的两个都是 char 类型，相加自动转为 int 相加，然后再和字符串拼接的。
        </ParagraphWrapper>
    </div>
}

export default Module11