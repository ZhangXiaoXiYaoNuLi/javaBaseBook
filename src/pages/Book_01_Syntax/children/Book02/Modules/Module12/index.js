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

import img27 from '@/assets/images/img27.png'

import img28 from '@/assets/images/img28.png'

// String使用的强化说明
const Module12 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <ParagraphWrapper>
            继续看一些练习：
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img27]}
        ></ImagesGroup>
        <ParagraphWrapper>
            第一条就是考String的定义格式，这里没有什么所谓的类型转换，所以是错误的定义格式。第二条就是考那个 float 类型的 “f” ，会不会跟着打印出来，其实是不会的，那个只是个标志，打印结果是字符串的“3.5”。
        </ParagraphWrapper>
        <ParagraphWrapper>
            判断以下语句是否能编译通过：
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img28]}
        ></ImagesGroup>
        <ParagraphWrapper>
            第一个判断不行，是因为减去 2 的时候，这个 2 是 int类型，相减的话要保持类型一致
        </ParagraphWrapper>
        <ParagraphWrapper>
            第二个判断不行，是因为 b 已经定义为 byte 类型，但是在下面的相加中，结果已经转为了 int 类型。就不能用它 b 自己去接收了，除非强转。或是用另一个合适类型的变量接收。
        </ParagraphWrapper>
        <ParagraphWrapper>
            最后一个判断不行，是因为 short 和 byte 相加，类型会转为 int 类型，所以要用范围大于等于 int 的类型变量接收。这里用 short 类型接收，是错的。
        </ParagraphWrapper>
    </div>
}

export default Module12