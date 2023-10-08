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

import img440 from '@/assets/images/img440.png'
import img441 from '@/assets/images/img441.png'
import img442 from '@/assets/images/img442.png'
import img443 from '@/assets/images/img443.png'
import img445 from '@/assets/images/img445.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                {`Lock（锁）`}
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>从JDK 5.0开始，Java提供了更强大的线程同步机制——通过显式定义同步锁对象来实现同步。同步锁使用Lock对象充当。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>java.util.concurrent.locks.Lock 接口是控制多个线程对共享资源进行访问的工具。</Blue>锁提供了对共享资源的独占访问，每次只能有一个线程对Lock对象加锁，线程开始访问共享资源之前应先获得Lock对象。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>ReentrantLock 类实现了 Lock ，它拥有与 synchronized 相同的并发性和内存语义，在实现线程安全的控制中，比较常用的是ReentrantLock，可以显式加锁、释放锁
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面上代码，需要一个有线程安全问题的代码，还是之前的 卖票 例子：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img440, img441]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面 Window 类，还有 main 方法，老生常谈了，就不细讲咯。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面看看如何使用 Lock 解决线程安全问题：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>Lock 是一个接口，而一般我们使用的是它的实现类 ReentrantLock</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们来 window 类中，实例化一个 ReentrantLock 对象：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img442]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>这里我们可以看到，它的构造函数有两个，一个无参的，一个是有参的，参数为布尔值。如果设置为 true，那么就会让线程保持“先来后到”的顺序，先来的先执行，后来的后执行，而不是互相抢资源而无序执行。（无参的话和传 false 一样，无序执行）</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                接下来，我们来使用这个 lock 实例：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img443]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码中，我们先把“操作共享数据”的代码块，放到“try-finally”中。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img445]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后，我们<Blue>在 try 开头，和 finally 中，添加上 实例 lock 、unlock 方法。（相当于是一个“同步代码块的包裹”）</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>synchronized 与 Lock 的对比:</SmallTitle>
            <ParagraphWrapper>
                <Blue>1. Lock是显式锁（手动开启和关闭锁，<Red>别忘记关闭锁</Red>），synchronized是隐式锁，出了作用域自动释放。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>2. Lock只有代码块锁，synchronized有代码块锁和方法锁。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>3. 使用Lock锁，JVM将花费较少的时间来调度线程，性能更好。并且具有更好的扩展性（提供更多的子类）</Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module