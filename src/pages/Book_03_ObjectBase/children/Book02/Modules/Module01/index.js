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
import Blue from '@/components/BlueFontWrapper'

import Dot from '@/components/Dot'

import img111 from '@/assets/images/img111.png'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                其实挺简单的，就是栈空间存数组的指针，然后数组存在于堆空间中，然后数组本身的元素，存的又是一个个实例化对象的指针（地址值）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                这里提一嘴，<Blue>引用类型只能保存两种值：<Red>null</Red>或<Red>地址值</Red>（含变量的类型）</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img111]}
            ></ImagesGroup>
            <ParagraphWrapper>
                第一行代码执行后，是在栈空间中创建了一个地址值，指向一个5个空元素的数组，此时数组内元素全是null。
            </ParagraphWrapper>
            <ParagraphWrapper>
                然后第二行之后，数组的第一个元素才保存了一个 student 对象的地址值。
            </ParagraphWrapper>
            <ParagraphWrapper>
                此时去访问数组的第二个元素，会得到一个null，而如果试图访问第二个元素的属性，则会直接编译报错。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module