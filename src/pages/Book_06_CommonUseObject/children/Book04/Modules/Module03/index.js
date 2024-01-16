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

import img537 from '@/assets/images/img537.png'

import {COLOR_BLUE} from '@/utils/content.js'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >

            <SmallTitle>BigInteger类</SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>Integer类作为int的包装类，能存储的最大整型值为 2 的 31 次方减一，Long类也是有限的，最大为 2 的 61 次方减一。如果要表示再大的整数，不管是基本数据类型还是他们的包装类都无能为力，更不用说进行运算了。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={COLOR_BLUE}></Dot><Blue>ava.math 包</Blue>的<Blue> BigInteger</Blue> 可以<Blue>表示不可变的任意精度的整数</Blue>。BigInteger 提供所有 Java 的基本整数操作符的对应物，并提供 java.lang.Math 的所有相关方法。另外，BigInteger 还提供以下运算：模算术、GCD 计算、质数测试、素数生成、位操作以及一些其他操作。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={COLOR_BLUE}></Dot><Blue>{`构造器： BigInteger(String val) ，根据字符串构建BigInteger对象`}</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>常用方法：</Bold>
            </ParagraphWrapper>
            
            <ComSpace></ComSpace>

            <ImagesGroup
                srcArr={[img537]}
            ></ImagesGroup>

            {/* 
            
                 常用方法
                     public BigInteger abs()：返回此 BigInteger 的绝对值的 BigInteger。
                     BigInteger add(BigInteger val) ：返回其值为 (this + val) 的 BigInteger
                     BigInteger subtract(BigInteger val) ：返回其值为 (this - val) 的 BigInteger
                     BigInteger multiply(BigInteger val) ：返回其值为 (this * val) 的 BigInteger
                     BigInteger divide(BigInteger val) ：返回其值为 (this / val) 的 BigInteger。整数
                    相除只保留整数部分。
                     BigInteger remainder(BigInteger val) ：返回其值为 (this % val) 的 BigInteger。
                     BigInteger[] divideAndRemainder(BigInteger val)：返回包含 (this / val) 后跟
                    (this % val) 的两个 BigInteger 的数组。
                     BigInteger pow(int exponent) ：返回其值为 (thisexponent) 的 BigInteger。

            */}

        </div>
    </>)
}

export default Module