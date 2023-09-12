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

import img284 from '@/assets/images/img284.png'
import img285 from '@/assets/images/img285.png'
import img286 from '@/assets/images/img286.png'
import img287 from '@/assets/images/img287.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                在Java中声明类、变量和方法时，可使用关键字final来修饰,表示“最终的”。
                final标记的类不能被继承。提高安全性，提高程序的可读性。
                String类、System类、StringBuffer类
                final标记的方法不能被子类重写。
                比如：Object类中的getClass()。
                final标记的变量(成员变量或局部变量)即称为常量。名称大写，且只
                能被赋值一次。
                final标记的成员变量必须在声明时或在每个构造器中或代码块中显式赋
                值，然后才能使用。
                final double MY_PI = 3.14;
            */}

            <ParagraphWrapper>
                <Blue>final关键字修饰的对象是：<Red>类、变量、方法</Red>。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>
            
            <ParagraphWrapper>
                <Dot></Dot><Blue><Red>final标记的类不能被继承（又被称为“太监类”）</Red>。提高安全性，提高程序的可读性。</Blue>（如：String类、System类、StringBuffer类）
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img285]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Red>final标记的方法不能被子类重写。</Red>{`（比如：Object类中的getClass()。）`}
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img286]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue><Red>{`final标记的变量(成员变量或局部变量)即称为常量`}</Red>。名称大写（约定俗成），且只能被赋值一次。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img287]}
            ></ImagesGroup>

            <ComLine></ComLine>
            
            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>final标记的成员变量必须在声明时或在每个构造器中或代码块中显式赋值，然后才能使用。</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img284]}
            ></ImagesGroup>

            <ParagraphWrapper>
                试了下，如果不显式初始化，直接就是编译错误了，所以也不用刻意去记，编译器帮你记住了。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module