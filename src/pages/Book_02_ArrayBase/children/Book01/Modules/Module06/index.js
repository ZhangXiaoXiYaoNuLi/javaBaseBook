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

import img83 from '@/assets/images/img83.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                下面是内存结构的简要结构：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img83]}
            ></ImagesGroup>
            <ParagraphWrapper>
                实际上，内存的基础结构是 JVM 的规范，这里就不详述具体细分的内存结构了。
            </ParagraphWrapper>
            <ParagraphWrapper>
                内存中主要有两块结构：“<Red>堆（英文heep）</Red>”和“<Red>栈（英文stack）</Red>”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                栈，要瘦一些，如果学过数据结构，可以知道，栈是一个线性一维的有序的结构。（有点像js中的数组）
            </ParagraphWrapper>
            <ParagraphWrapper>
                堆，要胖一些，是一个“面”结构，是无序的。（有点像js中的对象）
            </ParagraphWrapper>
            <ParagraphWrapper>
                还有第三个区块，又叫“<Red>方法区（methods area）</Red>”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                方法区一般用来装啥呢？主要是：“<Red>常量池</Red>”、“<Red>静态域（装静态变量）</Red>”、“<Red>类加载信息</Red>”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                在内存中，栈和堆是用的比较多的，一般<Red>栈</Red>，是用来<Red>装局部变量</Red>的，实际上，我们<Red>在方法中定义的变量就是局部变量</Red>。
                而在<Red>堆</Red>中，存放的是<Red> new 出来的结构</Red>。实际上，就是<Red>对象</Red>和<Red>数组</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                这里只是简单了解一下内存结构，有个大致印象即可。
            </ParagraphWrapper>
            <ParagraphWrapper>
                后面会讲到<Red>定义的String就会放在方法区的常量池里</Red>，而<Red>static静态属性就是存放在静态域</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                而目前我们用到的创建数组，只会用到一个栈和堆。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module