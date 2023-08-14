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

// 乱码的情况和字符集的说明
const Module05 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>了解：ASCII 码</SmallTitle>
        <ParagraphWrapper>
            1、在计算机内部，所有数据都使用二进制表示。每一个二进制位（bit）有 0 和 1 两种状态，
            因此 8 个二进制位就可以组合出 256 种状态，这被称为一个字节（byte）。一个字节一
            共可以用来表示 256 种不同的状态，每一个状态对应一个符号，就是 256 个符号，从
            0000000 到 11111111。
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、ASCII码：上个世纪60年代，美国制定了一套字符编码，对英语字符与二进制位之间的
            关系，做了统一规定。这被称为ASCII码。ASCII码一共规定了128个字符的编码，比如
            空格“SPACE”是32（二进制00100000），大写的字母A是65（二进制01000001）。这
            128个符号（包括32个不能打印出来的控制符号），只占用了一个字节的后面7位，最前
            面的1位统一规定为0。
        </ParagraphWrapper>
        <ParagraphWrapper
            >缺点：
            <ParagraphWrapper>
                （1）不能表示所有字符。（2）相同的编码表示的字符不一样：比如，130在法语编码中代表了é，在希伯来语编码中却代表(ג) 了字母Gim
            </ParagraphWrapper>
        </ParagraphWrapper>
        <ComSpace></ComSpace>

        <SmallTitle>了解：Unicode 编码</SmallTitle>
        <ParagraphWrapper>
            乱码：世界上存在着多种编码方式，同一个二进制数字可以被解释成不同的符号。因
            此，要想打开一个文本文件，就必须知道它的编码方式，否则用错误的编码方式解读，
            就会出现乱码。
        </ParagraphWrapper>
        <ParagraphWrapper>
            1、Unicode：一种编码，将世界上所有的符号都纳入其中。每一个符号都给予一个独一
            无二的编码，使用 Unicode 没有乱码的问题。
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、Unicode 的缺点：Unicode 只规定了符号的二进制代码，却没有规定这个二进制代码
            应该如何存储：无法区别 Unicode 和 ASCII：计算机无法区分三个字节表示一个符号
            还是分别表示三个符号。另外，我们知道，英文字母只用一个字节表示就够了，如果
            unicode统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有
            二到三个字节是0，这对于存储空间来说是极大的浪费。
        </ParagraphWrapper>
        <ComSpace></ComSpace>
        
        <SmallTitle>了解：UTF-8</SmallTitle>
        <ParagraphWrapper>
            1、UTF-8 是在互联网上使用最广的一种 Unicode 的实现方式。
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、UTF-8 是一种变长的编码方式。它可以使用 1-6 个字节表示一个符号，根据
            不同的符号而变化字节长度。
        </ParagraphWrapper>
        <ParagraphWrapper>
            3、UTF-8的编码规则：
            <ParagraphWrapper>（1）对于单字节的UTF-8编码，该字节的最高位为0，其余7位用来对字符进行编码（等同于ASCII码）。</ParagraphWrapper>
            <ParagraphWrapper>
                （2）对于多字节的UTF-8编码，如果编码包含 n 个字节，那么第一个字节的前 n 位为1，第一
                个字节的第 n+1 位为0，该字节的剩余各位用来对字符进行编码。在第一个字节之后的
                所有的字节，都是最高两位为"10"，其余6位用来对字符进行编码。
            </ParagraphWrapper>
        </ParagraphWrapper>
    </div>
}

export default Module05