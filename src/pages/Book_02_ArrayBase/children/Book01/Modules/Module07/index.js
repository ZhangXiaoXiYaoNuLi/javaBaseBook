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

import img84 from '@/assets/images/img84.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                下面我先来看看几种初始化数组的方式：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>{`int[] arr = new int[]{1, 2, 3};`}</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>{`String arr1 = new String[4];`}</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                然后给第二个定义的字符串数组依次赋值：<Red>{`arr[1] = "刘德华"; arr[2] = "张学友";`}</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                然后我们把数组 b 又等于一个新 new 的数组：<Red>{` arr1 = new String[3] `}</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                然后我们来看看上面的代码，在内存中是怎么运行的。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img84]}
            ></ImagesGroup>
            <ParagraphWrapper>
                比较简单，就不细讲了，忘记了自己回去翻视频。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module