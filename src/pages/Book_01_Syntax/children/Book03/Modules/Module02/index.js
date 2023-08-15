import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
// ParagraphWrapper
import P from '@/components/ParagraphWrapper'
import ComSpace from '@/components/ComSpace'
// ImagesGroup
import I from '@/components/ImagesGroup'
// 代码展示组件，输入值为转化后的字符串数组
import CodeShowWrapper from '@/components/CodeShowWrapper'
// 卡片组件
import CardWrapper from '@/components/CardWrapper'
// 小标题
import SmallTitle from '@/components/SmallTitle'
// 红字wrapper
// RedFontWrapper
import R from '@/components/RedFontWrapper'

import img44 from '@/assets/images/img44.png'
import img45 from '@/assets/images/img45.png'
import img46 from '@/assets/images/img46.png'
import img47 from '@/assets/images/img47.png'
import img48 from '@/assets/images/img48.png'
import img49 from '@/assets/images/img49.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>赋值运算符，其实就是等号（一个等号）。（两个的那个 == ，是比较运算符）</P>
            <I srcArr={[img44]}></I>
            <P>扩展运算符中的这些 += 、-= 等都是js里的老熟人了，是一样的。</P>
            <P>当然了这些扩展运算符，也有和js不一样的地方，那就是对于“类型”，有个比较重要的点是：“<R>这些扩展运算符，不改变数据类型</R>”。</P>
            <P>什么是连续赋值呢？看下面：</P>
            <I srcArr={[img45]}></I>
            <P>下面是几道赋值运算符的小题目：</P>
            <I srcArr={[img46]}></I>
            <P>思考一：第一个的 short 类型是编译报错的，short 接收不了相加之后的 int 型结果。而后面的输出是正常的， += 不改变原类型。</P>
            <P>思考二：结果输出如下图。</P>
            <I srcArr={[img47]}></I>
            <P>首先，编译是能过的，因为 *= 不改变类型（即使后面那个数字是 double 型的）。</P>
            <P>这里的 a *= 0.1 其实可以看成是 a = a * (int)0.1 ，所以结果是 0 。</P>
            <P>思考三：</P>
            <P>所以这里的 n *= m++ ，可以转化成 n = n * m++ ，比较容易理解</P>
            <I srcArr={[img48]}></I>
            <P>思考四：</P>
            <I srcArr={[img49]}></I>
            <P>这里先转成 n = n + ((n++) + (++n)) ，会比较好看，首先是括号里面的内容计算，实际上是 “(10 + 11)”, 得到21，然后是因为此时 n 已经加一了，所以是再加上 11，得到结果 32 。</P>
        </div>
    </>)
}

export default Module