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

import img536 from '@/assets/images/img536.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                System类
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>System类代表系统，系统级的很多属性和控制方法都放置在该类的内部。该类位于java.lang 包。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>由于该类的构造器是private的，所以无法创建该类的对象，也就是无法实例化该类。其内部的成员变量和成员方法都是static的，所以也可以很方便的进行调用。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>System类的成员变量：
            </ParagraphWrapper>
                
            <ParagraphWrapper>
                {`System类内部包含in、out和err三个成员变量，分别代表标准输入流(键盘输入)，标准输出流(显示器)和标准错误输出流(显示器)。`}
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>System类的成员方法：
            </ParagraphWrapper>

            <ParagraphWrapper>
                （1）<Blue>{`native long currentTimeMillis()：`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`该方法的作用是返回当前的计算机时间，时间的表达格式为当前计算机时间和GMT时间(格林威治时间)1970年1月1号0时0分0秒所差的毫秒数。`}
            </ParagraphWrapper>

            <ParagraphWrapper>
                （2）<Blue>{`void exit(int status)：`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                该方法的作用是退出程序。其中 status 的值为0代表正常退出，非零代表异常退出。<Blue>使用该方法可以在图形界面编程中实现程序的退出功能等</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            {/* 
            
                 void gc()：
                    该方法的作用是请求系统进行垃圾回收。至于系统是否立刻回收，则
                    取决于系统中垃圾回收算法的实现以及系统执行时的情况。
                     String getProperty(String key)：
                    该方法的作用是获得系统中属性名为key的属性对应的值。系统中常见
                    的属性名以及属性的作用如下表所示：

            */}

            <ParagraphWrapper>
                <Dot color={COLOR_BLUE}></Dot><Blue>{`void gc()：`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                该方法的作用是请求系统进行垃圾回收。至于系统是否立刻回收，则取决于系统中垃圾回收算法的实现以及系统执行时的情况。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={COLOR_BLUE}></Dot><Blue>{`String getProperty(String key)：`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                该方法的作用是获得系统中属性名为key的属性对应的值。比如，方法参数是 “java.version”，获得的就是当前运行环境的 java 版本。
            </ParagraphWrapper>

            <ParagraphWrapper>
                常见的获取环境属性的key值，和相对于的意义如下表：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img536]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module