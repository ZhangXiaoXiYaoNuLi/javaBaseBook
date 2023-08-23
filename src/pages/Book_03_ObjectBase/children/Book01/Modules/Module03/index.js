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

import img103 from '@/assets/images/img103.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                现实世界的生物体，大到鲸鱼，小到蚂蚁，都是由最基本的细胞构成的。同理，Java代码世界是由诸多个不同功能的类构成的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                现实生物世界中的细胞又是由什么构成的呢？细胞核、细胞质、… 那么，Java中用类class来描述事物也是如此。常见的类的成员有：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、<Red>属 性：对应类中的成员变量</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Red>行 为：对应类中的成员方法</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ParagraphWrapper>
                下面可以先预览一下，一个比较完整结构的类的模样：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img103]}
            ></ImagesGroup>

            <ParagraphWrapper>
                不用太纠结代码，后面都会讲到。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module