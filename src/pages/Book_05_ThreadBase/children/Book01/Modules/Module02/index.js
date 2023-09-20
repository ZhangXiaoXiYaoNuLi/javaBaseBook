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
import img375 from '@/assets/images/img375.png'
import img376 from '@/assets/images/img376.png'
import img377 from '@/assets/images/img377.png'
import img378 from '@/assets/images/img378.png'
import img379 from '@/assets/images/img379.png'
import img380 from '@/assets/images/img380.png'

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
                观察控制台的输出，我们发现输出并不是 先 0 到 99 结束，然后再接着下一个 0 到 99 的，而是<Blue>两个循环的输出，一段嵌着一段的。证明两个线程在同时执行。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然，并不能保证每次运行的结果是一样的，有一丢丢类似 js 中异步的情况。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>在 java 中，线程是可以创建线程的</Blue>，这里我们来看一下上面 main 方法的执行。一开始我们是只有主方法这一个主线程的。然后在 main 方法中，我们 new 了一个线程测试类，实际上 new 这个动作还是在主线程的。直到调用了这个线程测试类实例的 start 方法（<Blue>此时在主线程中，创建了新的线程</Blue>）。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Red>
                    另外这里提一下，为什么我们重写的是 run 方法，调用的时候却使用的是 start 方法呢？如果我们调用的是重写的 run 方法会怎么样？
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    答案是，如果我们调用的是 run 方法，那么方法体中的代码还是会执行，但是并不会“新建一个新线程”同步执行。start 方法，在调用 run 方法的同时，还新建了一个新的线程让 run 方法执行。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                可以在 api 文档中的 Thread 类的方法中，找到官方注释：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img375]}
            ></ImagesGroup>

            <ParagraphWrapper>
                我们也可以点进去看看具体的介绍：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img376]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    按照官方文档的说法，start 方法就是干了两件事，第一件，开启当前线程，第二件，调用当前线程的 run 方法。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Red>
                    如何获取当前线程的名称呢？使用 Thread 的静态方法 currentThread。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们把上面代码中循环体里的输出，改为 Thread.currentThread（） ，然后我们来看看输出。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img377]}
            ></ImagesGroup>

            <ParagraphWrapper>
                在控制台中，我们可以看到，两个线程的名称，在交替输出（不一定是交替的，这里只是恰巧）。说明两个线程在同步运行。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>这里主要是要了解一下<Red>currentThread（）</Red>，这个获取线程名称的方法。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然，这里可以尝试下<Blue>调用 run 方法，而不是 start 方法：</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img378]}
            ></ImagesGroup>

            <ParagraphWrapper>
                看了一圈下来，全部是 主线程 main 的线程名称输出。并没有新建 线程执行。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    所以注意，不能通过直接调用 run 方法来进行新线程执行。
                </Green>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                看文档中对 start 方法的解释，可以看到这句话
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img379]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里我们尝试模拟下这个报错场景。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img380]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>这里我们调用了两次 start 方法，可以看到控制台输出了报错，然后我们可以注意到，这个报错输出不是在执行一开始的时候输出的，这是因为两个线程的开始执行有先后顺序。一个线程先执行了一会，然后另一个start想开启新线程，在两个线程想“一起”执行的时候，就报错了。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>说是两个线程想同步执行会报错，其实有点问题，准确地说，应该是想让同一个线程多次 start 执行，是会报错的。得确保线程执行完成了之后，再重新起线程。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    所以说，不可以通过让线程再去 start 的方式来去起一个新的线程。要起多个线程，就得造多个线程实例对象。
                </Green>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>那么按照上面的代码，真的想要新起一个线程同步执行呢？那就再 new 一个线程测试类，然后调新实例的 start 方法呗。</Blue>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module