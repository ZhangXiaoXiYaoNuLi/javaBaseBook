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
import RedFontWrapper from '@/components/RedFontWrapper'

import img60 from '@/assets/images/img60.png'
import img64 from '@/assets/images/img64.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ImagesGroup
                srcArr={[img60]}
            ></ImagesGroup>
            <ParagraphWrapper>
                下面来个代码示例：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img64]}
            ></ImagesGroup>
            <div style={{color: 'red'}}>
                <SmallTitle>
                    switch语句有关规则:
                </SmallTitle>
                <ParagraphWrapper>
                    1、switch（表达式）中表达式的值必须是下述几种类型之一：byte，short，char，int，枚举 (jdk 5.0)，String (jdk 7.0)；
                </ParagraphWrapper>
                <ParagraphWrapper>
                    2、case子句中的值必须是常量，不能是变量名或不确定的表达式值；
                </ParagraphWrapper>
                <ParagraphWrapper>
                    3、同一个switch语句，所有case子句中的常量值互不相同；
                </ParagraphWrapper>
                <ParagraphWrapper>
                    4、break语句用来在执行完一个case分支后使程序跳出switch语句块；如果没有break，程序会顺序执行到switch结尾；
                </ParagraphWrapper>
                <ParagraphWrapper>
                    5、default子句是可任选的。同时，位置也是灵活的。当没有匹配的case时，执行default；
                </ParagraphWrapper>
            </div>
        </div>
    </>)
}

export default Module