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


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                JDK内置的三个基本注解，都是用来在<Blue>在编译时进行格式检查的</Blue>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot><Red>@Override</Red>：限定重写父类方法, 该注解只能用于方法。（在方法重写中，如果子类重写的方法名不小心写错了，且没有加上 Override 注解，那么就只会直接执行父类方法，这种错误很难 debugger，但是如果加上了这个注解，这种情况会编译报错，有一个良好的提示。）
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot><Red>@Deprecated</Red>：用于表示所修饰的元素(类, 方法等)已过时。通常是因为所修饰的结构危险或存在更好的选择（一般过时方法还是可以用的，但是不推荐，而且加上此注解的时候，调用方法会被一条横线华划过）。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot><Red>@SuppressWarnings</Red>：抑制编译器警告。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
        </div>
    </>)
}

export default Module