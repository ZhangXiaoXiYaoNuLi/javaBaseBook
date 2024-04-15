import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper as P,
    ComSpace,
    ImagesGroup,
    CodeShowWrapper,
    CardWrapper,
    SmallTitle,
    Red,
    Blue,
    ComLine,
    Dot,
    Green,
    Bold,
} from '@/components/index.js'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P><Dot></Dot>编码表的由来</P>
            <P>计算机只能识别二进制数据，早期由来是电信号。为了方便应用计算机，让它可以识别各个国家的文字。就将各个国家的文字用数字来表示，并一一对应，形成一张表。这就是编码表。</P>
            <P>常见的编码表:</P>
            <P>（1）<Bold>ASCII</Bold>：美国标准信息交换码。（用一个字节的 7 位表示）</P>
            <P>（2）<Bold>ISO8859-1</Bold>：拉丁码表。欧洲码表。（用一个字节的8位表示）</P>
            <P>（3）<Bold>GB2312</Bold>：中国的中文编码表。最多两个字节编码所有字符</P>
            <P>（4）<Bold>GBK</Bold>：中国的中文编码表升级，融合了更多的中文文字符号。最多两个字节编码</P>
            <P>（5）<Bold>Unicode</Bold>：国际标准码，融合了目前人类使用的所有字符。为每个字符分配唯一的字符码。所有的文字都用两个字节来表示。</P>
            <P>（6）<Bold>UTF-8</Bold>：变长的编码方式，可用1-4个字节来表示一个字符。</P>
        </div>
    </>)
}

export default Module