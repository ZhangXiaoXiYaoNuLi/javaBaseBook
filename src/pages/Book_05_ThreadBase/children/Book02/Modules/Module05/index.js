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

import img434 from '@/assets/images/img434.png'
import img435 from '@/assets/images/img435.png'
import img436 from '@/assets/images/img436.png'
import img437 from '@/assets/images/img437.png'
import img438 from '@/assets/images/img438.png'
import img439 from '@/assets/images/img439.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                线程的死锁问题
                    死锁
                    不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃
                    自己需要的同步资源，就形成了线程的死锁
                    出现死锁后，不会出现异常，不会出现提示，只是所有的线程都处于
                    阻塞状态，无法继续
                    解决方法
                    专门的算法、原则
                    尽量减少同步资源的定义
                    尽量避免嵌套同步
            */}

            <SmallTitle>线程的死锁问题</SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot><Bold>线程的死锁问题</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、<Blue>不同的线程分别占用对方需要的同步资源不放弃</Blue>，都在等待对方放弃自己需要的同步资源，就形成了线程的死锁。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Blue>出现死锁后，不会出现异常，不会出现提示</Blue>，只是所有的线程都处于阻塞状态，无法继续。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>解决办法</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                1、专门的算法、原则。
            </ParagraphWrapper>

            <ParagraphWrapper>
                2、尽量减少同步资源的定义。
            </ParagraphWrapper>

            <ParagraphWrapper>
                3、尽量避免嵌套同步。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面上代码，看看死锁的实际代码体现：
            </ParagraphWrapper>

            <ParagraphWrapper>
                全部的代码都在 main 方法中，首先我们先 new 两个 StringBuffer 类：
            </ParagraphWrapper>

            <ParagraphWrapper>
                这个类目前没有专门学习过，不过你可以理解我是一个“字符串池”，可以往里面添加删除字符、字符串等，就是一个“可操作的字符串”。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img434]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们起第一个线程：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img435]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先，我们来看语法，这里使用的其实是 “继承Thread类” 的线程启动方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    我们要知道，接口和抽象类，其实是可以直接 new 的（快捷写法），只是后面要跟上大括号，且大括号里面，要实现全部的抽象方法。得到的就是实现了（接口\抽象类的）抽象方法的实例。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们起第二个线程：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img436]}
            ></ImagesGroup>

            <ParagraphWrapper>
                也来看看语法，这里其实就是使用 “实现 Runable 接口” 的线程启动方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来看代码逻辑， s1 和 s2 在两个线程中，互相嵌套为线程锁。
            </ParagraphWrapper>

            <ParagraphWrapper>
                我们可以执行下看看结果：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img437]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，这里的输出，其实是按执行顺序的：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img438]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里其实是因为运行速度快的原因，不容易出现死锁问题，但是我们在这里加个阻塞试试（在第一个线程中）：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img439]}
            ></ImagesGroup>

            <ParagraphWrapper>
                就会出现死锁，第一个线程在执行完头两句之后，就会先阻塞着，然后就会执行到第二个线程的头两句，此时第二个线程头两句执行完之后，就想往后执行，但是因为线程锁 s1，就需要等第一个线程执行完才能执行，然后第一个线程中的 sleep 一百毫秒结束，想继续执行后面的语句，但是因为线程锁 s2，需要等到第二个线程执行完才能执行，所以就互相卡住了。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>
                    其实在实际开发的过程中，不会出现这样像上面例子这样显而易见的死锁。不要以为自己就不会写死锁，像后面学到的一些常用类、集合方法，你可能都不知道这是同步方法，然后还很隐蔽地在A中调了B，B中又调了A，那么就一定会出现死锁问题。而且出现了问题非常地难debugger，以为没有异常，也没有提示。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然，有的时候甚至是，有死锁，但是大概率不出现症状，就像上面的例子，在我们没有加上 sleep 的时候，也很难复现死锁的现象，但是它是存在的。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module