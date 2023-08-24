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

import img112 from '@/assets/images/img112.png'
import img113 from '@/assets/images/img113.png'
import img114 from '@/assets/images/img114.png'
import img115 from '@/assets/images/img115.png'
import img116 from '@/assets/images/img116.png'
import img117 from '@/assets/images/img117.png'
import img118 from '@/assets/images/img118.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                首先，我们定义一个手机类 Phone：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img112]}
            ></ImagesGroup>
            <ParagraphWrapper>
                然后我们使用匿名对象的形式调研它的方法：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img113]}
            ></ImagesGroup>
            <ParagraphWrapper>
                可以看出控制台输出了 test。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                然后我们要知道的是，<Blue>每 new 一个匿名对象都是独立的</Blue>。你 new 一个匿名对象，然后给它的类属性赋值，是不会影响到下一次 new 的匿名对象的。除非是静态属性的使用。
            </ParagraphWrapper>

            <ParagraphWrapper>
                我们修改下 Phone 类，将属性 price 改为是静态的。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img114]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后在 main 方法中，两次使用匿名对象，并尝试输出静态值。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img115]}
            ></ImagesGroup>

            <ParagraphWrapper>
                匿名对象是存在于 堆 空间中的，是有地址值的，只是不像之前的情况，我们并没有用一个标识符，在栈空间中存住它。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后，在开发中一般常用的做法是，传入一个匿名对象作为参数：
            </ParagraphWrapper>
            <ParagraphWrapper>
                首先我们修改一下 Phone 类。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img116]}
            ></ImagesGroup>
            <ParagraphWrapper>
                然后给 Person 类中，添加一个方法，参数传入一个 Phone 实例，调用这个实例的方法，获取 Phone 类中的属性。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img117]}
            ></ImagesGroup>
            <ParagraphWrapper>
                最后在 main 方法中：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img118]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module