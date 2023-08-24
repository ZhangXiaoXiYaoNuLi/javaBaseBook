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

import img109 from '@/assets/images/img109.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                {`什么是方法(method、函数):`}
                <div style={{paddingLeft: '16px'}}>
                    <ParagraphWrapper>
                        方法是类或对象行为特征的抽象，用来完成某个功能操作。在某些语言中也称为函数或过程。
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        将功能封装为方法的目的是，可以实现代码重用，简化代码
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        <Red>Java里的方法不能独立存在，所有的方法必须定义在类里。</Red>
                    </ParagraphWrapper>
                </div>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img109]}
            ></ImagesGroup>

        </div>
    </>)
}

export default Module