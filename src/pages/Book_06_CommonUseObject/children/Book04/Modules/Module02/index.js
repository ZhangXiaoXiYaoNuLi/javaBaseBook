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

        {/* 
        
            9.6 Math类
                java.lang.Math提供了一系列静态方法用于科学计算。其方法的参数和返回
                值类型一般为double型。
                abs 绝对值
                acos,asin,atan,cos,sin,tan 三角函数
                sqrt 平方根
                pow(double a,doble b) a的b次幂
                log 自然对数
                exp e为底指数
                max(double a,double b)
                min(double a,double b)
                random() 返回0.0到1.0的随机数
                long round(double a) double型数据a转换为long型（四舍五入）
                toDegrees(double angrad) 弧度—>角度
                toRadians(double angdeg) 角度—>弧度

        */}

        <SmallTitle>
            Math类
        </SmallTitle>
        
        <ParagraphWrapper>
            <Bold>java.lang.Math 提供了一系列<Red>静态方法</Red>用于科学计算。其方法的参数和返回值类型<Blue>一般为double型</Blue>。</Bold>
        </ParagraphWrapper>

        <ComSpace></ComSpace>

        {
            [
                'abs 绝对值',
                'acos, asin, atan, cos, sin, tan 三角函数',
                'sqrt 平方根',
                'pow(double a,doble b) ，a 的 b 次幂',
                'log 自然对数',
                'exp e为底指数',
                'max(double a,double b) 比较得到大的值',
                'min(double a,double b) 比较得到小的值',
                'random() 返回 0.0 到 1.0 的随机数',
                'long round(double a) double型数据a转换为long型（四舍五入）',
                'toDegrees(double angrad) 弧度 转化为 角度',
                'toRadians(double angdeg) 角度 转化为 弧度',
            ].map(item => {
                return <>
                    <ParagraphWrapper>
                        <Dot></Dot>{item}
                    </ParagraphWrapper>
                    <ComSpace></ComSpace>
                </>
            })
        }

        <ComSpace></ComSpace>

        <ParagraphWrapper>
            不用死记，用到了查查就行。
        </ParagraphWrapper>

        </div>
    </>)
}

export default Module