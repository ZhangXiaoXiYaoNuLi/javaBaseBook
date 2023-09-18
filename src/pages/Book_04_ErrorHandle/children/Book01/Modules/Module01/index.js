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

import img342 from '@/assets/images/img342.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >

            <ParagraphWrapper>
                在使用计算机语言进行项目开发的过程中，即使程序员把代码写得<Blue>尽善尽美</Blue>，在系统的运行过程中仍然会遇到一些问题，因为很多问题不是靠代码能够避免的，比如：<Red>客户输入数据的格式，读取文件是否存在，网络是否始终保持通畅等等</Red>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            {/* 
                 异常：在Java语言中，将程序执行中发生的不正常情况称为“异常”
。
                (开发过程中的语法错误和逻辑错误不是异常)
                 Java程序在执行过程中所发生的异常事件可分为两类：
                Error：Java虚拟机无法解决的严重问题。如：JVM系统内部错误、资源
                耗尽等严重情况。比如：StackOverflowError和OOM。一般不编写针对性
                的代码进行处理。
                Exception: 其它因编程错误或偶然的外在因素导致的一般性问题，可以使
                用针对性的代码进行处理。例如：
                空指针访问
                试图读取不存在的文件
                网络连接中断
                数组角标越界
                 对于这些错误，一般有两种解决方法：一是遇到错误就终止程序
                的运行。另一种方法是由程序员在编写程序时，就考虑到错误的
                检测、错误消息的提示，以及错误的处理。
                 捕获错误最理想的是在编译期间，但有的错误只有在运行时才会发生。
                比如：除数为0，数组下标越界等
                 分类：编译时异常和运行时异常
            */}

            <ParagraphWrapper>
                <Dot></Dot>异常：在Java语言中，将<Blue>程序执行中发生的不正常情况称为“异常”</Blue><Red>{`(开发过程中的语法错误和逻辑错误不是异常)`}</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>Java程序在执行过程中所发生的异常事件可分为两类：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、<Blue>Error</Blue>：Java虚拟机无法解决的严重问题。如：JVM系统内部错误、资源耗尽等严重情况。比如：<Red>StackOverflowError</Red>和<Red>OOM</Red>。一般不编写针对性的代码进行处理。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Blue>Exception</Blue>: 其它因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码进行处理。例如：<Red>空指针访问、试图读取不存在的文件、网络连接中断、数组角标越界</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>对于这些错误，一般有两种解决方法：一是遇到错误就终止程序的运行。另一种方法是<Blue>由程序员在编写程序时，就考虑到错误的检测、错误消息的提示，以及错误的处理（Exception处理）</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>捕获错误最理想的是在编译期间，但<Blue>有的错误只有在运行时才会发生</Blue>。比如：<Red>除数为0</Red>，<Red>数组下标越界</Red>等
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Blue>分类：<Red>编译时异常</Red>和<Red>运行时异常</Red>.</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img342]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>Error,就是会让程序跑不下去的情况，是<Red>必须“改原代码”才能处理的</Red>（而<Red>不能“不改代码，只加代码”解决的</Red>），通过"异常捕获 + 异常处理"已经无法处理的。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>这一章主要就是针对 Exception 来讲的。</Red>
            </ParagraphWrapper>

            

        </div>
    </>)
}

export default Module