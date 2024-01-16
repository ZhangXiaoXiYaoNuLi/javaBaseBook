import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper,
    ComSpace,
    ImagesGroup,
    CodeShowWrapper,
    CardWrapper,
    SmallTitle,
    Red,
    Blue,
    ComLine,
    Dot,
    Green,
    Bold,
} from '@/components/index.js'

import img539 from '@/assets/images/img539.png'
import img541 from '@/assets/images/img541.png'
import img542 from '@/assets/images/img542.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                使用 enum 定义枚举类
            </SmallTitle>

            {/* 
                使用说明
                    使用 enum 定义的枚举类默认继承了 java.lang.Enum类，因此不能再
                    继承其他类
                    枚举类的构造器只能使用 private 权限修饰符
                    枚举类的所有实例必须在枚举类中显式列出(, 分隔 ; 结尾)。列出的
                    实例系统会自动添加 public static final 修饰
                    必须在枚举类的第一行声明枚举类对象
                    JDK 1.5 中可以在 switch 表达式中使用Enum定义的枚举类的对象
                    作为表达式, case 子句可以直接使用枚举值的名字, 无需添加枚举
                    类作为限定
            */}

            <ParagraphWrapper>
                <Dot></Dot>使用说明:
            </ParagraphWrapper>

            <ParagraphWrapper>
                （1）使用 enum 定义的枚举类默认继承了 java.lang.Enum类，因此不能再继承其他类。
            </ParagraphWrapper>

            <ParagraphWrapper>
                （2）枚举类的构造器只能使用 private 权限修饰符。
            </ParagraphWrapper>

            <ParagraphWrapper>
                （3）枚举类的所有实例必须在枚举类中显式列出（ <Red>, 分隔 ; 结尾</Red> ）。列出的实例系统会<Blue>自动添加 public static final</Blue> 修饰
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img541]}
            ></ImagesGroup>

            <ParagraphWrapper>
                （4）<Red>必须在枚举类的第一行声明枚举类对象</Red>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                下面上代码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img542]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module