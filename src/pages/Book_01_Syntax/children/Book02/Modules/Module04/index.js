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

// char型变量的使用说明
const Module04 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>
            关于 char ，字符类型：
        </SmallTitle>
        <ParagraphWrapper>
            1、<RedFontWrapper>char 型数据</RedFontWrapper>用来表示通常意义上“字符”（<RedFontWrapper>2字节</RedFontWrapper>），2 字节也就是 2 个 byte ，即 16 个 bit，可以表示约，2 的 16 次方个字符。
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、<RedFontWrapper>Java中的所有字符都使用Unicode编码</RedFontWrapper>，故一个字符可以存储<RedFontWrapper>一个</RedFontWrapper>字母，<RedFontWrapper>一个</RedFontWrapper>汉字，或其他书面语的<RedFontWrapper>一个</RedFontWrapper>字符。
            <RedFontWrapper>（要注意的是 char类型 是 一个字符，多个字符的那个叫字符串，是类，是 String，不是基础类型 char）</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            3、字符型变量的三种表现形式：
            <ParagraphWrapper>（1）字符常量是用<RedFontWrapper>单引号！单引号！单引号！</RedFontWrapper>(‘ ’)括起来的单个字符。例如：char c1 = 'a'; char c2 = '中'; char c3 = '9';</ParagraphWrapper>
            <ParagraphWrapper>（2）Java中还允许使用转义字符‘\’来将其后的字符转变为特殊字符型常量。例如：char c3 = ‘\n’; // '\n'表示换行符</ParagraphWrapper>
            <ParagraphWrapper>（3）直接使用 Unicode 值来表示字符型常量：‘\uXXXX’。其中，XXXX代表一个十六进制整数。如：\u000a 表示 \n。</ParagraphWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>4、<RedFontWrapper>char类型是可以进行运算的。因为它都对应有Unicode码。</RedFontWrapper></ParagraphWrapper>
        <ParagraphWrapper>5、char类型两个关键字<RedFontWrapper>一定要记得：“单引号”、“一个字符”</RedFontWrapper>。</ParagraphWrapper>
    </div>
}

export default Module04