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

import img371 from '@/assets/images/img371.png'
import img372 from '@/assets/images/img372.png'
import img373 from '@/assets/images/img373.png'
import img374 from '@/assets/images/img374.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                使用“继承 Thread 类”，是创建线程的其中一种方法，直接上代码看看：
            </ParagraphWrapper>

            <ParagraphWrapper>
                第一步：创建一个 <Blue>继承 Thread 类</Blue>的子类，然后<Blue>重写 run 方法</Blue>，重写方法体中的代码，就是线程运行是，我们想执行的代码。如下
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>run 方法中的代码，又叫做“线程体”。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img371]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后，我们使用这个类的实例对象，去调用 start 方法，就可以让这个线程执行起来了。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img372]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里可以稍微讲一下，在 main 方法中（main方法执行也是一条线程），new 了一个 ThreadTest 类实例，new 这个实例对象的动作，还是在 main 线程的。直到实例调用了 start 方法。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                然后，我们改一下 ThreadTest 类中的 run 方法体，让其执行得更旧，以及在 main 方法中，线程实例 调 start 之后，添加一些遍历输出，测试一下执行情况：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们在 run 方法中，添加一个 0 到 99 的输出：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img373]}
            ></ImagesGroup>

            <ParagraphWrapper>
                接着，我们来到main方法中，在 实例 start 方法调用后面，也添加一个 0 到 99 的输出。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img374]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>观察控制台的输出，我们发现输出并不是 先 0 到 99 结束，然后再接着下一个 0 到 99 的，而是两边的输出，一段嵌着一段的。证明两个线程在同时执行。</Blue>
            </ParagraphWrapper>
            
        </div>
    </>)
}

export default Module