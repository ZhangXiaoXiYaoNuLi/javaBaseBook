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

import img23 from '@/assets/images/img23.png'

// String类型变量的使用
const Module10 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <ParagraphWrapper>String不是基本数据类型，属于引用数据类型</ParagraphWrapper>
        <ParagraphWrapper>使用方式却和基础类型一样，<RedFontWrapper>定义的格式是：String str = “abcd”</RedFontWrapper>;</ParagraphWrapper>
        <ParagraphWrapper>可以注意到，这里使用的是“<RedFontWrapper>双引号</RedFontWrapper>”,</ParagraphWrapper>
        <SmallTitle>测试示例：</SmallTitle>
        <ImagesGroup
            srcArr={[img23]}
        ></ImagesGroup>
        <ParagraphWrapper>
            从上面的示例中，我们可以发现几个点：
            <ParagraphWrapper>
                1、String 与其它类型相加的时候，都是其它类型先转为字符串，然后进行“拼接”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、布尔值在进行字符串相加的时候，会转为英文的“false”或者“true”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、注意相加的顺序，如果是“数值 + 数值 + 字符串”，那么就会先计算前面两个数值的数学相加，然后得到的结果再和后面的字符串进行拼接。
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、在String和其它类型相加的时候，其实这个“+”加号，并不是数学上的加号，而是“连接符号”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                5、String 和其它 8 中基础类型相加，得到的结果都是 字符串。
            </ParagraphWrapper>
        </ParagraphWrapper>
    </div>
}

export default Module10