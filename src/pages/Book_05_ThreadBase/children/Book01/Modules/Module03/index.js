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

import img381 from '@/assets/images/img381.png'
import img382 from '@/assets/images/img382.png'
import img383 from '@/assets/images/img383.png'
import img384 from '@/assets/images/img384.png'
import img385 from '@/assets/images/img385.png'
import img386 from '@/assets/images/img386.png'
import img387 from '@/assets/images/img387.png'
import img388 from '@/assets/images/img388.png'
import img389 from '@/assets/images/img389.png'
import img390 from '@/assets/images/img390.png'
import img391 from '@/assets/images/img391.png'
import img392 from '@/assets/images/img392.png'
import img393 from '@/assets/images/img393.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot><Bold>{`void start()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`启动线程，并执行对象的run()方法。`}
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`run()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`线程在被调度时执行的操作。`}
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`String getName()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`返回线程的名称。`}
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`void setName(String name)`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`设置该线程名称`}
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`static Thread currentThread()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                返回当前线程（<Blue>注意，这里返回的是线程（又或者说是线程实例）（既然是实例，是可以用返回的这个值调用其它方法的），而不是线程名称，我们之前的 demo 中是输出了线程名称，是因为 Thread类 重写了 toString 方法</Blue>）。在Thread子类中就是this，通常用于主线程和Runnable实现类
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`static void yield()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`线程让步，暂停当前正在执行的线程，把执行机会让给优先级相同或更高的线程，若队列中没有同优先级的线程，忽略此方法`}
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`join()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`当某个程序执行流中调用其他线程的 join() 方法时，调用线程将被阻塞，直到 join() 方法加入的 join 线程执行完为止。低优先级的线程也可以获得执行。`}
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`static void sleep(long millis)：(指定时间:毫秒)`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                令当前活动线程在指定时间段内放弃对CPU控制,使其他线程有机会被执行,时间到后重排队。可能会导致抛出 InterruptedException 异常。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`stop()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                强制线程生命期结束，不推荐使用。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`boolean isAlive()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                返回boolean，判断线程是否还活着。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <SmallTitle>下面上测试代码：</SmallTitle>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>先来个基础的创建线程，线程执行的简单demo</Bold>：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img381]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里创建了一个 HelloThread 类继承了 Thread 类，然后重写了 run 方法。注意到 我们在 for 循环体中，使用了 “ Thread.currentThread().getName() ” 这句。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                {`Thread.currentThread()`}，是可以获取当前线程实例的，然后我们又用这个实例对象，调用的 getName 方法，获取当前线程的名称。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来到 main 方法中，new 一个 HelloThread 实例，并调用 start 方法，开始线程执行。可以看到控制台按照预想的输出。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img382]}
            ></ImagesGroup>

            <ParagraphWrapper>
                比较好奇为啥，输出的是 Thread-0 ？首先，new HelloThread 实例的时候，用的是 HelloThread 的空参构造器（而这里没有显式空参构造器，所以是自动调的super），也就是用的是 Thread 类的空参构造器。所以我们去 Thread 源码看看（<Red>Ctrl + 鼠标左键，去到 Thread 类中，再 Alt + 7 看类的属性方法结构</Red>，找到空参构造器）：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img383]}
            ></ImagesGroup>

            <ParagraphWrapper>
                找到这里的源码，我们可以发现输出的 “ Thread-0 ”，就是从这里来的。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>然后，我们尝试使用 setName 设置线程名称</Bold>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img384]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，控制台输出了我们手动 set 的名称。<Blue>然后这里要注意的是，我们得在 线程 start 之前去 set 这个名字。（当然了，主线程也是可以命名的）</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img385]}
            ></ImagesGroup>

            <ParagraphWrapper>
                当然，我们也可以直接在 Thread 的其中一个构造其中，直接设置线程名称，如上图构造器。
            </ParagraphWrapper>

            <ParagraphWrapper>
                知道了这个构造器之后，我们可以在 HelloThread 中显是地添加自己的构造器，然后 super( String name ) ，就可以把设置名称，改在实例化 HelloThread 的时候（<Blue>此时记得补上一个空参构造器，不然报错，老知识点了</Blue>）。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>接着，我们来测试一下 yield 方法。</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们给 main 方法中的主线程，也添加一个遍历输出，让多线程同步执行：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    另外要注意到，控制台的输出，并不是“绝对”的间隔的，有的时候主线程或分线程的输出，会连在一起，一连地输出，像58、59、60、61..这样，那此时执行的只有其中的单个线程。
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img386]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，上面的代码，控制台里，两个线程间隔输出。然后我们就可以来试试 yield 方法了。在 HelloThread 类中的 run 方法中添加代码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img387]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里我们添加了一个取余 20 为 0 的时候，调用 yield 方法，这里其实前面省略了“this.”，当然了此时这里也可以改成“Thread.currentThread.”。调用这个方法的，是实例对象。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后执行 main 方法后，我们观察控制台的输出（其实这里效果是不一定出的来的），得找找出效果的地方。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img388]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实就是输出为取余 20 为 0 的时候，就把当前的线程给释放了，看看有没有其它优先级相同或更高的线程执行，如果没有的话，还是会执行回来当前线程的，所以说上面的测试代码不一定出效果。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>再来测试一下 join 方法。</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img389]}
            ></ImagesGroup>

            <ParagraphWrapper>
                把之前关于 yield 方法的测试代码去除，然后，在 main 方法中添加上面这段代码，要注意的是，<Blue>直接使用 h1 去调用 join 方法，是会编译错误的，需要 try-catch 处理异常才行</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们执行一下 main 方法，看看输出。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img390]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到效果，主线程运行到 i 为 20 的时候，插入执行的 h1 的线程执行。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>然后，接着测试一下 sleep 方法。</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                前面的代码不用大改，去到 main 方法中，将代码改成：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img391]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里的 sleep 方法是静态方法，调用者为 Thread 类，然后需要 try-catch 线程异常。不然编译不过。，首先，我们这块代码，是写在 main 的 for 循环中的，所以“结束当前线程”，结束的当然就是 main 线程了。
            </ParagraphWrapper>

            <ParagraphWrapper>
                可以看到控制台的输出，主线程在运行到 i 等于20的时候，就开始等待了 1 秒钟，然后才继续执行。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>stop 方法了解下就好了，反正不推荐使用，无非就是 sleep 的永久版。</Bold>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="black"></Dot><Bold>isAlive 方法，调用者为线程实例，返回布尔值，标识线程是否正在执行。</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后，我们在 main 方法中，在上面 sleep 的代码后面，添加一个 isAlive 输出：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img392]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以发现，在 sleep 执行后，并没有输出什么布尔值，<Blue>说明 sleep 的执行，阻塞了它后面的代码执行。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img393]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们接着往后翻，可以看到在线程重启前，输出了 isAlive 的值，为true，<Blue>说明 sleep 期间，线程是没有死去的。</Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module