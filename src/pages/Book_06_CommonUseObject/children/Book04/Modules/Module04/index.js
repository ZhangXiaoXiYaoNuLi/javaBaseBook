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

import {COLOR_BLUE} from '@/utils/content.js'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >

            {/* 
            
                 一般的Float类和Double类可以用来做科学计算或工程计算，但在商业计算中，
                要求数字精度比较高，故用到java.math.BigDecimal类。
                 BigDecimal类支持不可变的、任意精度的有符号十进制定点数。
                 构造器
                 public BigDecimal(double val)
                 public BigDecimal(String val)
                 常用方法
                 public BigDecimal add(BigDecimal augend)
                 public BigDecimal subtract(BigDecimal subtrahend)
                 public BigDecimal multiply(BigDecimal multiplicand)
                 public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)

            */}

            <SmallTitle>
                BigDecimal类
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>一般的 Float 类和 Double 类可以用来做科学计算或工程计算，但在商业计算中， 要求数字精度比较高，故用到 java.math.BigDecimal 类。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={COLOR_BLUE}></Dot><Blue>BigDecimal</Blue> 类支持<Blue>不可变的、任意精度的有符号十进制定点数</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>构造器：
            </ParagraphWrapper>
            
            <ParagraphWrapper>
                （1）{`public BigDecimal(double val)`}
            </ParagraphWrapper>

            <ParagraphWrapper>
                （2）{`public BigDecimal(String val)`}
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>常用方法：
            </ParagraphWrapper>

            <ParagraphWrapper>
                （1）<Red>add：</Red> {`public BigDecimal add(BigDecimal augend)`}
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）<Red>subtract：</Red> {`public BigDecimal subtract(BigDecimal subtrahend)`}
            </ParagraphWrapper>
            <ParagraphWrapper>
                （3）<Red>multiply：</Red> {`public BigDecimal multiply(BigDecimal multiplicand)`}
            </ParagraphWrapper>
            <ParagraphWrapper>
                （4）<Red>divide：</Red> {`public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)`}
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module