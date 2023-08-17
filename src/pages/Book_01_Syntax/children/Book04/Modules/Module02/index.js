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

import img61 from '@/assets/images/img61.png'
import img62 from '@/assets/images/img62.png'
import img63 from '@/assets/images/img63.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                如何从键盘获取不同类型的变量，使用Scanner类。
            </ParagraphWrapper>
            <ParagraphWrapper>
                下面我们来看代码，第一步是导包：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img61]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里先不详解导包是啥，就了解下这个类在另外的一个包中，现在需要导入进来使用，具体相关知识之后再说。
            </ParagraphWrapper>
            <ParagraphWrapper>
                然后创建 Scanner 的实例对象：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img62]}
            ></ImagesGroup>
            <ParagraphWrapper>
                实例化的时候，传入的“System.in”，其实就是键盘输入的意思。
            </ParagraphWrapper>
            <ParagraphWrapper>
                调用实例的方法“nextInt”（当然Scanner有很多的实例方法，这个方法是用来读取 int 类型的输入的）：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img63]}
            ></ImagesGroup>
            <ParagraphWrapper>
                然后可以尝试运行，最终的效果就是运行后，控制台处于等待状态，然后可以在控制台输入内容，我<Red>尝试输入一个字母“a”，然后按下回车，是会报错的，并没有发送数据类型转换</Red>。然后我再重新运行，重新输入数字“1”，按下回车，控制台会输出“1”。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ParagraphWrapper>
                如果想使用其它类型的输入，比如 字符串 ，可以使用实例的其它方法，字符串获取就是“next”方法。
            </ParagraphWrapper>
            <ParagraphWrapper>
                布尔值的接收，其实也是在控制台输入 true 或者 false，使用 nextBoolean 方法。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module