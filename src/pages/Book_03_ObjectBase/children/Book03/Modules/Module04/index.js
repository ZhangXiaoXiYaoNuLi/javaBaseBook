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
import ComLine from '@/components/ComLine'

import Dot from '@/components/Dot'

import img158 from '@/assets/images/img158.png'
import img159 from '@/assets/images/img159.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Blue>
                    截止到目前，我们讲到了很多位置都可以对类的属性赋值。现总结这几个位置，并指明赋值的先后顺序。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                赋值的位置：
            </ParagraphWrapper>
            <Red>
                <ParagraphWrapper>1、默认初始化</ParagraphWrapper>
                <ParagraphWrapper>2、显式初始化</ParagraphWrapper>
                <ParagraphWrapper>3、构造器中初始化</ParagraphWrapper>
                <ParagraphWrapper>4、通过“对象.属性“或“对象.方法”的方式赋值（即直接“.”赋值，或者是getter、setter）</ParagraphWrapper>
            </Red>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Red>
                赋值的先后顺序：1 - 2 - 3 - 4
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                接下来，我们来写个 demo 来看一下这些赋值，具体是在代码的哪一部分：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先我们要知道，默认初始化值一定是最快的，不然后面的三种的任意一种单独存在的时候，就会被默认初始化值覆盖，然而并没有。<Blue>显然默认初始化是最快的</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                接着我们来考虑显示初始化 和 构造器初始化， 谁跟快：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img158]}
            ></ImagesGroup>

            <ParagraphWrapper>
                像上面这样定义一个类，然后我们使用有参构造器实例化一个对象，最后输出的 age 值，肯定是实例化的时候的值，而不是显示初始化的 1。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img159]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，输出的是 2，而不是 1，所以 构造器初始化，比 显示初始化更慢。
            </ParagraphWrapper>

            <ParagraphWrapper>
                类似的，可以验证 通过“对象.属性“或“对象.方法”的方式赋值 比 构造器初始化 还慢。所以正确顺序是 1 - 2 - 3 - 4 。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module