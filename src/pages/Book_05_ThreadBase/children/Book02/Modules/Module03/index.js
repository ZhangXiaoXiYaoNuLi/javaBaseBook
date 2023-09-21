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

import img409 from '@/assets/images/img409.png'
import img415 from '@/assets/images/img415.png'
import img416 from '@/assets/images/img416.png'
import img417 from '@/assets/images/img417.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Blue>
                    Java 中，使用的是 “<Red>同步机制</Red>” 来解决线程安全问题。做法有两种：“<Red>同步代码块</Red>” 和 “<Red>同步方法</Red>”。分别面向两种多线程实现方式（<Red>继承 Thread</Red> 和 <Red>实现 Runnable</Red>），所以一共有<Red>四种情况</Red>。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>同步代码块处理实现 Runnable 的线程安全问题</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                同步代码块的解决方式，提到一个关键字“<Red>Synchronized</Red>”，它的使用代码结构如下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img409]}
            ></ImagesGroup>

            <ParagraphWrapper>
                什么叫“需要被同步的代码”？
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue><Red>操作共享数据的代码</Red> 即为 需要被同步的代码。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                Synchronized 实现同步的原理：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img415]}
            ></ImagesGroup>

            <ParagraphWrapper>
                也就是给几个想要异步同时执行的某一段代码，创造一个只每次只允许执行一个的代码同步执行区域，然后每次有一个同步代码块中的代码进入这个区域执行，就会阻塞其它想要执行的线程。直到正在执行的这段代码执行完毕，才会放开阻塞。
            </ParagraphWrapper>

            <ParagraphWrapper>
                另外，我们要通知 Synchronized ，其中正在执行的代码块是否已经执行完了，也就是 Synchronized 语法结构中的 参数位置 所需要填入的，名字叫“<Red>同步监视器</Red>”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>同步监视器</Blue>，俗成“<Red>锁</Red>”。很好理解，就像上厕所，你在一个厕所里解决问题，为什么别人进不去？因为你把门锁上了嘛，就像是这样解决了线程安全问题。<Blue>任何一个类的对象，都可以充当“同步监视器”，什么 Object 啊，String 类啊都是可以的</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                然后我们到代码中尝试一下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img416]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们来到 main 方法尝试运行下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img417]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以观察到，之前“重票”的问题，已经解决了，也就是保证了线程安全问题。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们再来说说这个“<Blue>同步监视器</Blue>”，它其实是有隐藏的要求的，要求就是：“<Red>多个线程要保持线程安全，要用同一个 同步监视器</Red>”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    而这里，正好我们是<Red>使用 “ 实现 Runnable 接口” 的方式</Red>来进行多线程运行的，所以类里面<Red>作为“锁” new 的那个 Object 对象</Red>，在 main 方法中，只是在 new Window 的时候创建了一次，也就是 “<Red>同一个锁</Red>”。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>同步代码块处理继承 Thread 的线程安全问题</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>同步方法处理实现 Runnable 的线程安全问题</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>同步方法处理继承 Thread 的线程安全问题</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>

        </div>
    </>)
}

export default Module