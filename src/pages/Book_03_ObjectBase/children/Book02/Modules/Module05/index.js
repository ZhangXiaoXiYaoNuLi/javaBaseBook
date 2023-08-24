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

import img123 from '@/assets/images/img123.png'

import img124 from '@/assets/images/img124.png'

import img125 from '@/assets/images/img125.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                JavaSE 5.0 中提供了Varargs(variable number of arguments)机制，允许直接定义能和多个实参相匹配的形参。从而，可以用一种更简单的方式，来传递个数可变的实参。
            </ParagraphWrapper>
            <Blue>
                <ParagraphWrapper>
                    //JDK 5.0以前：采用数组形参来定义方法，传入<Red>多个同一类型变量</Red>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    public static void test(int a ,String[] books);
                </ParagraphWrapper>
                <ParagraphWrapper>
                    //JDK5.0：采用可变个数形参来定义方法（<Red>使用英文省略号 ...</Red>），传入<Red>多个同一类型变量</Red>
                </ParagraphWrapper>
                <ParagraphWrapper>
                    public static void test(int a ,String…books);
                </ParagraphWrapper>
            </Blue>

            <ImagesGroup
                srcArr={[img123]}
            ></ImagesGroup>
            
            <ParagraphWrapper>
                <Red>可变形参的个数是 0 到 多个，注意了，这里包括 0 个，也就是不传参</Red>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <SmallTitle>说明：</SmallTitle>
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、声明格式：<Red>方法名(参数的类型名 ...参数名)</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、可变参数：方法参数部分指定类型的参数个数是可变多个：<Red>0个，1个或多个</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、<Blue>可变个数形参的方法与同名的方法之间，彼此构成重载，如下图</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img124]}
            ></ImagesGroup>
            <ImagesGroup
                srcArr={[img125]}
            ></ImagesGroup>
            <ParagraphWrapper>
                4、可变参数方法的使用与方法参数部分使用数组是一致的，就是说<Blue>方法体内实际取数的时候，还是和java5.0之前一样，用数组形式取数</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                5、格式要求：<Red>方法的参数部分有可变形参，需要放在形参声明的最后</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                6、格式要求：<Red>在一个方法的形参位置，最多只能声明一个可变个数形参</Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module