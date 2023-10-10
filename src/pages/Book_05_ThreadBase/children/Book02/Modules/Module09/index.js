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

import img463 from '@/assets/images/img463.png'
import img464 from '@/assets/images/img464.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Bold>
                    在真实开发中，基本上使用的都是线程池的方式。
                </Bold>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                线程池有个很好理解的类比，就是“公共交通工具”，打个比方，你要去一个地方需要交通工具，于是花了巨大的代价，自己造了一辆车，然后到达目的地之后，把车销毁掉了，这样就很浪费。
            </ParagraphWrapper>

            <ParagraphWrapper>
                而线程池就像是“已有”的公共交通工具，在需要的时候，去搭个车去到目的地就好。不用创建车子，也不用销毁车子。使用完了，就让它待命就好。
            </ParagraphWrapper>

            <ParagraphWrapper>
                类似的还有以后学到的数据库连接的“连接池”，实际上，连接数据库是一个花销很大的操作，所以会创建连接池，放置一些已经创建好的连接，且不会销毁，要用的时候捡起一条连接来用就行。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot><Bold>背景</Bold>：经常创建和销毁、使用量特别大的资源，比如并发情况下的线程，对性能影响很大。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>思路</Bold>：提前创建好多个线程，放入线程池中，使用时直接获取，使用完放回池中。可以避免频繁创建销毁、实现重复利用。类似生活中的公共交通工具。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>好处</Bold>：
            </ParagraphWrapper>

            <ParagraphWrapper>
                1、提高响应速度（减少了创建新线程的时间）
            </ParagraphWrapper>

            <ParagraphWrapper>
                2、降低资源消耗（重复利用线程池中线程，不需要每次都创建）
            </ParagraphWrapper>

            <ParagraphWrapper>
                3、便于线程管理（各种数据管理api）：corePoolSize：核心池的大小、maximumPoolSize：最大线程数、keepAliveTime：线程没有任务时最多保持多长时间后会终止...
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>线程池相关API</SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>JDK 5.0起提供了线程池相关API：<Blue>ExecutorService</Blue> 和 <Blue>Executors</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>ExecutorService</Blue>：真正的线程池<Blue>接口</Blue>。常见子类ThreadPoolExecutor
            </ParagraphWrapper>
            <ParagraphWrapper>
                {`1、void execute(Runnable command) ：执行任务/命令，没有返回值，一般用来执行 Runnable`}
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`2、 <T> Future<T> submit(Callable<T> task)：执行任务，有返回值，一般又来执行 Callable `}
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`3、void shutdown() ：关闭连接池`}
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>Executors</Blue>：<Blue>工具类</Blue>、<Blue>线程池的工厂类</Blue>，用于创建并返回不同类型的线程池
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`1、Executors.newCachedThreadPool()：创建一个可根据需要创建新线程的线程池`}
            </ParagraphWrapper>
            <ParagraphWrapper>
                {`2、Executors.newFixedThreadPool(n); 创建一个可重用固定线程数的线程池`}
            </ParagraphWrapper>
            <ParagraphWrapper>
                {`3、Executors.newSingleThreadExecutor() ：创建一个只有一个线程的线程池`}
            </ParagraphWrapper>
            <ParagraphWrapper>
                {`4、Executors.newScheduledThreadPool(n)：创建一个线程池，它可安排在给定延迟后运行命令或者定期地执行`}
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面我们来看看代码上怎么实现：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们要知道，线程池是用来“控制线程的执行”的，所以不包括编写实际线程运行的内容。（确实很像公共交通工具啊，送你到目的地，你要干什么不管）
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以，我们先创建一个实现 Runnable 接口的线程类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img463]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们到 main 方法中，创建线程池，并使用线程池，“承载” 刚刚我们创建的线程类的运行：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img464]}
            ></ImagesGroup>

            <ParagraphWrapper>
                控制台输出，可以看出，线程已经执行，输出了100内的偶数。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>
                    第三第四种创建线程的方法，现在不要求非常熟练，因为开发中，大多是使用第四种，而且到时都是具体问题具体分析，且会使用框架帮助实现的。所以这里暂时不用太深入
                </Blue>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module