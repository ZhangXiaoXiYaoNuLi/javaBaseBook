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

import img461 from '@/assets/images/img461.png'
import img462 from '@/assets/images/img462.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                使用 Callable 创建线程
            </SmallTitle>

            <ParagraphWrapper>
                <Bold>实际上，在真正的企业级开发中，基本上是在使用“线程池”的方式。</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                不过 实现 Callable 接口的方式，也是常见方式之一，所以如果面试的时候，问你“创建线程有几种方式”，现在你可以答了，<Bold>有四种：实现 Runnable 接口、基础 Thread 类型、实现 Callable 接口、使用线程池。</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                从 “实现 Runnable 接口，就要实现 run 方法”，可以想像到 “ <Bold>实现 Callable 接口</Bold> ”，当然就是“ <Bold>要实现 call 方法</Bold> ”。没错，就是要实现 call 方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                特别之处就是：<Bold>比起 Runable 的 run 方法，Callable 接口的 call 方法可以有返回值，那就成了个分线程，做一个事，做完之后还可以返回一个接口，给另外一个线程用</Bold>。这样，功能当然就更强大了，而且<Bold>call 方法还可以抛出异常，而 run 方法只能在里面 try-catch，外界是看不到的</Bold>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                call 方法还支持泛型的返回值，当然，泛型现在没有讲，可以稍微演示下。
            </ParagraphWrapper>

            <ParagraphWrapper>
                另外，实现 Callable 的方式，还需要借助 FutureTask 类（获取结果、查询进度等）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面上代码，来个基础的使用demo：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们创建一个 ThreadNew 类实现 Callable 类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img461]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看出，这里实现 call 方法，可以抛出异常。以及用泛型指定返回值类型。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来到 main 方法中：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img462]}
            ></ImagesGroup>

            <ParagraphWrapper>
                变得好绕啊，得先 new 一个 ThreadNew 实例，然后用这个实例构造 FutureTask 类，然后再拿这个 FutureTask 实例，构造 Thread 实例，最后用 Thread 实例调用 start 方法，才真正执行线程。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>这里提一嘴，为啥 FutureTask 的实例，可以作为 Thread 类的构造器参数？显然 FutureTask 也是实现了 Runnable 接口的。</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                且执行之后的结果，<Bold>需要使用 FutureTask 实例，使用 get 方法，进行结果获取</Bold>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                当然如果你对 call 方法的返回值，不感兴趣，其实是可以不用 get 方法获取的，此时并不影响执行。因为实际 call 方法内的代码，其实是在调用 start 方法的时候就执行了。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这个 get 方法，就是获取 实现 Callable 接口的 call 方法的返回值的。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>相较于使用 Runnable， Callable功能更强大些：</Bold>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>{`相比run()方法，可以有返回值`}
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>方法可以抛出异常
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>支持泛型的返回值
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>需要借助FutureTask类，比如获取返回结果
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>
                    Future接口
                </Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>可以对具体Runnable、Callable任务的执行结果进行取消、查询是否完成、获取结果等。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>FutureTask 是 Future 接口的唯一的实现类
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>FutureTask 同时实现了 Runnable, Future 接口。它既可以作为 Runnable 被线程执行，又可以作为 Future 得到 Callable 的返回值
            </ParagraphWrapper>
            <ComSpace></ComSpace>
        </div>
    </>)
}

export default Module