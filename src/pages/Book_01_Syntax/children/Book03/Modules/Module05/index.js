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

import img52 from '@/assets/images/img52.png'
import img53 from '@/assets/images/img53.png'
import img54 from '@/assets/images/img54.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                定义：位运算是直接对<RedFontWrapper>整数的二进制</RedFontWrapper>进行的运算
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img52]}
            ></ImagesGroup>
            <ParagraphWrapper>
                使用频率比较低，能看懂的程度就行。
            </ParagraphWrapper>
            <ParagraphWrapper>
                注意这里也有一个“&”符号，那么怎么判断它是“逻辑与”还是“与运算”呢？就看它两边计算的对象，是布尔类型的，还是整数类型的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                这里举例一个左移运算是怎么操作的：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img53]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这个表达式是所以2位的意思，具体的操作上，就是二进制的这堆0101..，往左边移动两位，所以头两位被截取丢掉了，而且末尾两位会空出来，空出来的两位会用 0 来补位。
            </ParagraphWrapper>
            <ParagraphWrapper>
                操作之后的二进制再转成整数类型，就是数字的 84 。
            </ParagraphWrapper>
            <ParagraphWrapper>
                在这里可以发现一个规律，如果头部截取的数字，没有丢失数值，也就是头部丢失的bit没有1的情况下，左移 n 位，就是原数字的“乘 2 的 n 次方”的结果。
            </ParagraphWrapper>
            <ParagraphWrapper>
                类似的，右移运算就是做除法。当然这也是在不失真的情况下。（<RedFontWrapper>但是和左移有个区别，就是补位的bit，最高位的补位会保持原来的 1 或 0 ，因为最高位是正负位，而左移是末尾全部补0</RedFontWrapper>）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                而“无符号右移”的意思，就是最高位不管原来是 1 还是 0 ，都是用 0 来补位。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img54]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module