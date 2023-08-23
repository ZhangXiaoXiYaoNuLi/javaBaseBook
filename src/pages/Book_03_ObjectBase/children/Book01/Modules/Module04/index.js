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

import img104 from '@/assets/images/img104.png'
import img105 from '@/assets/images/img105.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                一个简单的类的创建：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img104]}
            ></ImagesGroup>
            <ParagraphWrapper>
                然后我们用这个类来创建一个实例化对象，并调用对象方法：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img105]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里有几个知识点：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、<Red>如果创建了一个类的多个对象，对于类中定义的属性，每个对象都拥有各自的一套副本，且互不干扰</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Red>类的非静态属性，有自己的默认初始化值</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                类中非静态属性的访问机制：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、在<Red>一个类中</Red>的访问机制：<Red>类中的方法可以直接访问类中的成员变量</Red>。（例外：static方法访问非static，编译不通过。）
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、在<Red>不同类中</Red>的访问机制：<Red>先创建要访问类的对象，再用对象访问类中定义的成员</Red>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module