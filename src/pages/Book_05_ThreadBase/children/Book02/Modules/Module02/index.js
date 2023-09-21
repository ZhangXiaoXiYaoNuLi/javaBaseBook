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

import img408 from '@/assets/images/img408.png'
import img410 from '@/assets/images/img410.png'
import img411 from '@/assets/images/img411.png'
import img412 from '@/assets/images/img412.png'
import img413 from '@/assets/images/img413.png'
import img414 from '@/assets/images/img414.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ImagesGroup
                srcArr={[img408]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot></Dot><Bold>问题的原因：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                当多条语句在操作同一个线程共享数据时，一个线程对多条语句只执行了一部分，还没有执行完，另一个线程参与进来执行。导致<Red>共享数据</Red>的错误。<Blue>“共享数据”就是问题的根本条件</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>共享数据的定义为：多个线程共同操作的变量（或者叫数据）。</Blue>
            </ParagraphWrapper>
            
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>解决办法：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>对多条操作共享数据的语句，只能让一个线程都执行完，在执行过程中，其他线程不可以参与执行</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                这里，我们先用代码模拟一下线程安全错误出现的情况：
            </ParagraphWrapper>

            <ParagraphWrapper>
                模拟一个买票的场景，然后我们分别使用 继承 Thread 和 实现 Runnable 的方式实现：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>继承 Thread 的方式，模拟出现线程安全问题：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们定义一个 Window 类，也就是“买票窗口”类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img410]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们来到 main 方法中，new 三个 窗口实例，然后调用 start 方法，然后我们去观察控制台的输出：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img411]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们执行 main 方法。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img412]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以发现，这里我们控制台输出中，“卖出了 重复的 票”，这就是线程安全问题。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>实现 Runnable 接口 的方式，模拟出现线程安全问题：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                定义一个窗口类，实现 Runnable 接口，并在 Run 方法体中，实现 “买票” 功能：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img413]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后去 main 方法中，创建三个线程实例，并调用 start 方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img414]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，同样地，是出现了“卖重票”的问题。也就是线程安全问题。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module