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
// import RedFontWrapper from '@/components/RedFontWrapper'
import Red from '@/components/RedFontWrapper'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                数组的定义：
                <ParagraphWrapper>
                    数组（Array），是多个<Red>相同类型</Red>数据<Red>按一定顺序排列</Red>
                    的集合，并使用一个名字命名，并通过编号的方式
                    对这些数据进行统一管理。
                </ParagraphWrapper>
            </ParagraphWrapper>

            <ParagraphWrapper>
                1、数组本身是<Red>引用数据类型</Red>，而数组中的<Red>元素可以是任何数据类型</Red>，包括基本数据类型和引用数据类型。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、创建数组对象会在内存中开辟一整块连续的空间，而数组名中引用的是这块连续空间的首地址。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、<Red>数组的长度一旦确定，就不能修改</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、我们可以直接通过下标（或索引）的方式调用指定位置的元素，速度很快。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module