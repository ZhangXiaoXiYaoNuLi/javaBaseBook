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

import img20 from '@/assets/images/img20.png'

import img21 from '@/assets/images/img21.png'

import img22 from '@/assets/images/img22.png'

// 变量运算规则的两个特殊情况
const Module09 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <ImagesGroup
            srcArr={[img20]}
        ></ImagesGroup>
        <ParagraphWrapper>
            这里我们定义了一个 long 类型的变量，但是注意到后面的数字，我们没有加上字母“L”,但是却没有报错，这个是因为我们数字写在那里的时候，就被认为是int类型（默认类型）的了，自动转化赋值给 long 类型，没毛病。
        </ParagraphWrapper>
        <ParagraphWrapper>
            但是注意，这里如果是一个超过int范围的数字，但是后面还是没有加上字母“L”，那就会编译不通过了。此时必须显示地加上“L”。
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img21]}
        ></ImagesGroup>
        <ParagraphWrapper>
            当然，这里可以联系到 float 类型，如果定义一个小数，像 “12.34” ，如果后面没有加上 “F”， 那么是会直接报错的，不像 long 类型。因为 浮点数 默认是 double 类型，所以 double 不能自动转 float ，所以报错了。
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img22]}
        ></ImagesGroup>
        <ParagraphWrapper>
            这里是直接报错了，因为定义的 byte 类型的值 a ，在第二步加 1 的时候，这个 1 被默认认为是 int 类型，所以 + 1 就是和 int 类型相加，结果就是 int 类型的，不能用 byte 类型接收。
        </ParagraphWrapper>

        <ParagraphWrapper>
            <RedFontWrapper>
                （整型类型，默认是 int 类型。2、小数类型，默认是 double 类型）。
            </RedFontWrapper>
        </ParagraphWrapper>
    </div>
}

export default Module09